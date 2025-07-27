'use client';

import React, { useState, useCallback } from 'react';
import GlitchTextVariant from './GlitchTextVariant';

interface GlitchTextVariantListProps {
  variants: string[];
  onCopy?: (text: string, success: boolean) => void;
  className?: string;
}

const GlitchTextVariantList: React.FC<GlitchTextVariantListProps> = ({
  variants,
  onCopy,
  className = ''
}) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // 现代剪贴板复制函数
  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return success;
    } catch (error) {
      console.error('Failed to copy text:', error);
      return false;
    }
  }, []);

  // 处理复制操作
  const handleCopy = useCallback(async (text: string) => {
    try {
      const success = await copyToClipboard(text);
      
      if (success) {
        setCopiedText(text);
        onCopy?.(text, true);
        
        // 2秒后清除复制状态
        setTimeout(() => {
          setCopiedText(null);
        }, 2000);
      } else {
        onCopy?.(text, false);
      }
    } catch (error) {
      console.error('Copy failed:', error);
      onCopy?.(text, false);
    }
  }, [onCopy, copyToClipboard]);

  // 复制所有变体
  const handleCopyAll = useCallback(async () => {
    const allText = variants.join('\n\n');
    await handleCopy(allText);
  }, [variants, handleCopy]);

  // 随机选择一个变体
  const handleCopyRandom = useCallback(async () => {
    if (variants.length > 0) {
      const randomVariant = variants[Math.floor(Math.random() * variants.length)];
      await handleCopy(randomVariant);
    }
  }, [variants, handleCopy]);

  if (variants.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className={className}>
      {/* 标题和操作按钮 */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          color: '#1f2937',
          margin: 0
        }}>
          Generated Variants ({variants.length})
        </h3>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handleCopyRandom}
            style={{
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              background: '#f3e8ff',
              color: '#7c3aed',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e9d5ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f3e8ff';
            }}
            title="Copy a random variant"
          >
            🎲 Random
          </button>
          
          <button
            onClick={handleCopyAll}
            style={{
              padding: '0.5rem 0.75rem',
              fontSize: '0.875rem',
              background: '#f3f4f6',
              color: '#374151',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e5e7eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
            }}
            title="Copy all variants"
          >
            📋 Copy All
          </button>
        </div>
      </div>

      {/* 变体列表 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {variants.map((variant, index) => (
          <GlitchTextVariant
            key={`${variant}-${index}`}
            text={variant}
            onCopy={handleCopy}
            index={index}
          />
        ))}
      </div>

      {/* 使用提示 */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '0.5rem', 
        padding: '0.75rem', 
        background: '#eff6ff', 
        borderRadius: '0.375rem', 
        border: '1px solid #bfdbfe' 
      }}>
        <svg 
          style={{ 
            width: '1.25rem', 
            height: '1.25rem', 
            color: '#3b82f6', 
            marginTop: '0.125rem',
            flexShrink: 0
          }} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div style={{ fontSize: '0.875rem', color: '#1d4ed8' }}>
          <p style={{ fontWeight: '500', marginBottom: '0.25rem', margin: '0 0 0.25rem 0' }}>
            How to use:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            color: '#2563eb'
          }}>
            <li>• Click on any variant text or the Copy button to copy to clipboard</li>
            <li>• Use "Random" to copy a random variant</li>
            <li>• Use "Copy All" to copy all variants at once</li>
          </ul>
        </div>
      </div>

      {/* 复制成功全局提示 */}
      {copiedText && (
        <div style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: '#10b981',
          color: 'white',
          padding: '0.75rem 1rem',
          borderRadius: '0.375rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          zIndex: 50,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied to clipboard!
          </div>
        </div>
      )}

      {/* 统计信息 */}
      <div style={{ 
        fontSize: '0.75rem', 
        color: '#6b7280', 
        textAlign: 'center', 
        paddingTop: '0.5rem', 
        borderTop: '1px solid #e5e7eb' 
      }}>
        {variants.length} variant{variants.length !== 1 ? 's' : ''} generated • 
        Total characters: {variants.reduce((sum, variant) => sum + variant.length, 0)}
      </div>

      {/* 添加动画样式 */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default GlitchTextVariantList;