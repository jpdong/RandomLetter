'use client';

import React, { useState, useCallback } from 'react';
import { GlitchTextVariantProps } from '../types';

const GlitchTextVariant: React.FC<GlitchTextVariantProps> = ({ 
  text, 
  onCopy, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // 处理复制点击
  const handleCopyClick = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止触发容器的点击事件
    
    setIsAnimating(true);
    await onCopy(text);
    setIsCopied(true);
    
    // 重置状态
    setTimeout(() => {
      setIsCopied(false);
      setIsAnimating(false);
    }, 2000);
  }, [text, onCopy]);

  // 处理文本点击（也触发复制）
  const handleTextClick = useCallback(() => {
    if (!isCopied) {
      handleCopyClick({ stopPropagation: () => {} } as React.MouseEvent);
    }
  }, [handleCopyClick, isCopied]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTextClick();
    }
  }, [handleTextClick]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        border: '2px solid',
        borderColor: isHovered ? '#3b82f6' : '#e5e7eb',
        background: isHovered ? '#eff6ff' : '#f9fafb',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        transform: isAnimating ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Glitch text variant ${index + 1}: ${text}. Click to copy.`}
    >
      {/* 变体编号 */}
      <div style={{
        flexShrink: 0,
        width: '2rem',
        height: '2rem',
        background: isHovered ? '#dbeafe' : '#e5e7eb',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: isHovered ? '#1d4ed8' : '#6b7280',
        transition: 'all 0.2s ease'
      }}>
        {index + 1}
      </div>

      {/* 故障文本内容 */}
      <div 
        style={{ 
          flex: 1,
          fontFamily: 'monospace', 
          fontSize: '1.125rem',
          lineHeight: '1.4',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
          cursor: 'pointer',
          userSelect: 'all',
          transition: 'color 0.2s ease',
          color: '#1f2937'
        }}
        onClick={handleTextClick}
        title="Click to copy"
      >
        {text}
      </div>

      {/* 复制按钮 */}
      <button
        onClick={handleCopyClick}
        disabled={isCopied}
        style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: isCopied ? 'default' : 'pointer',
          transition: 'all 0.2s ease',
          background: isCopied ? '#dcfce7' : '#dbeafe',
          color: isCopied ? '#16a34a' : '#1d4ed8',
          transform: isCopied ? 'scale(0.95)' : 'scale(1)'
        }}
        onMouseEnter={(e) => {
          if (!isCopied) {
            e.currentTarget.style.background = '#bfdbfe';
          }
        }}
        onMouseLeave={(e) => {
          if (!isCopied) {
            e.currentTarget.style.background = '#dbeafe';
          }
        }}
        aria-label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
      >
        {isCopied ? (
          <>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </>
        )}
      </button>

      {/* 悬停效果指示器 */}
      {isHovered && !isCopied && (
        <div style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '-0.5rem',
          background: '#3b82f6',
          color: 'white',
          fontSize: '0.75rem',
          padding: '0.25rem 0.5rem',
          borderRadius: '9999px',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 10
        }}>
          Click to copy
        </div>
      )}

      {/* 复制成功动画效果 */}
      {isAnimating && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: '#dcfce7',
          borderRadius: '0.5rem',
          opacity: 0.5,
          animation: 'pulse 1s ease-in-out',
          pointerEvents: 'none'
        }} />
      )}
    </div>
  );
};

export default GlitchTextVariant;