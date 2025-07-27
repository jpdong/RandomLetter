'use client';

import React, { useState, useCallback } from 'react';
import { copyToClipboard, createManualCopyFallback } from '../clipboardManager';

interface CopyButtonProps {
  text: string;
  onCopy?: (success: boolean, method?: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'minimal';
  showIcon?: boolean;
  showText?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  onCopy,
  className = '',
  size = 'md',
  variant = 'primary',
  showIcon = true,
  showText = true,
  disabled = false,
  children
}) => {
  const [copyState, setCopyState] = useState<'idle' | 'copying' | 'success' | 'error'>('idle');
  const [manualFallback, setManualFallback] = useState<{ cleanup: () => void } | null>(null);

  // 处理复制操作
  const handleCopy = useCallback(async () => {
    if (disabled || copyState === 'copying') return;

    setCopyState('copying');

    try {
      const result = await copyToClipboard(text, {
        fallbackToLegacy: true,
        timeout: 3000
      });

      if (result.success) {
        setCopyState('success');
        onCopy?.(true, result.method);
        
        // 2秒后重置状态
        setTimeout(() => {
          setCopyState('idle');
        }, 2000);
      } else {
        setCopyState('error');
        onCopy?.(false, result.method);
        
        // 显示手动复制回退
        if (result.method === 'manual') {
          const fallback = createManualCopyFallback(text);
          setManualFallback(fallback);
        }
        
        // 3秒后重置状态
        setTimeout(() => {
          setCopyState('idle');
        }, 3000);
      }
    } catch (error) {
      setCopyState('error');
      onCopy?.(false);
      
      setTimeout(() => {
        setCopyState('idle');
      }, 3000);
    }
  }, [text, disabled, copyState, onCopy]);

  // 清理手动回退
  const cleanupManualFallback = useCallback(() => {
    if (manualFallback) {
      manualFallback.cleanup();
      setManualFallback(null);
    }
  }, [manualFallback]);

  // 获取尺寸类名
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-3 py-2 text-sm';
    }
  };

  // 获取变体类名
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300';
      case 'success':
        return 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300';
      case 'minimal':
        return 'bg-transparent text-gray-600 hover:bg-gray-100 border border-transparent hover:border-gray-300';
      default:
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300';
    }
  };

  // 获取状态特定的类名
  const getStateClasses = () => {
    switch (copyState) {
      case 'copying':
        return 'opacity-75 cursor-wait';
      case 'success':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'error':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return '';
    }
  };

  // 获取图标
  const getIcon = () => {
    switch (copyState) {
      case 'copying':
        return (
          <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'success':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  // 获取文本
  const getText = () => {
    switch (copyState) {
      case 'copying':
        return 'Copying...';
      case 'success':
        return 'Copied!';
      case 'error':
        return 'Failed';
      default:
        return 'Copy';
    }
  };

  const buttonClasses = [
    'inline-flex items-center gap-1 font-medium rounded-md transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    'active:scale-95',
    getSizeClasses(),
    getVariantClasses(),
    getStateClasses(),
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className
  ].join(' ');

  return (
    <>
      <button
        onClick={handleCopy}
        disabled={disabled || copyState === 'copying'}
        className={buttonClasses}
        title={`Copy "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}" to clipboard`}
        aria-label={`Copy text to clipboard. Status: ${copyState}`}
      >
        {showIcon && getIcon()}
        {showText && (children || getText())}
      </button>

      {/* 手动复制回退清理 */}
      {manualFallback && (
        <div className="fixed inset-0 z-50" onClick={cleanupManualFallback} />
      )}
    </>
  );
};

export default CopyButton;