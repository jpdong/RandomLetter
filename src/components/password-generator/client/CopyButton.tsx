'use client';

import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
  onCopy?: (success: boolean) => void;
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  onCopy,
  variant = 'primary',
  size = 'medium',
  disabled = false
}) => {
  const [copied, setCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCopy = async () => {
    if (disabled || isAnimating) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setIsAnimating(true);
      setCopied(true);
      onCopy?.(true);

      setTimeout(() => {
        setCopied(false);
        setIsAnimating(false);
      }, 2000);

    } catch (error) {
      console.error('Failed to copy text:', error);
      onCopy?.(false);
    }
  };

  const getButtonStyle = () => {
    const baseStyle = {
      border: 'none',
      borderRadius: variant === 'icon' ? '8px' : '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontWeight: '600',
      fontFamily: 'inherit',
      transition: 'all 0.2s ease-in-out',
      position: 'relative' as const,
      overflow: 'hidden',
      opacity: disabled ? 0.5 : 1,
      transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
    };

    const sizeStyles = {
      small: { padding: variant === 'icon' ? '8px' : '8px 12px', fontSize: '12px' },
      medium: { padding: variant === 'icon' ? '12px' : '12px 16px', fontSize: '14px' },
      large: { padding: variant === 'icon' ? '16px' : '16px 24px', fontSize: '16px' }
    };

    const variantStyles = {
      primary: {
        background: copied ? '#28a745' : '#007bff',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)'
      },
      secondary: {
        background: copied ? '#d4edda' : '#f8f9fa',
        color: copied ? '#155724' : '#495057',
        border: `2px solid ${copied ? '#28a745' : '#dee2e6'}`
      },
      icon: {
        background: copied ? 'rgba(40, 167, 69, 0.1)' : 'rgba(0, 123, 255, 0.1)',
        color: copied ? '#28a745' : '#007bff',
        border: `1px solid ${copied ? '#28a745' : '#007bff'}33`
      }
    };

    return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
  };

  const getIcon = () => {
    if (copied) {
      return '✓';
    }
    return variant === 'icon' ? '📋' : '📋';
  };

  const getText = () => {
    if (variant === 'icon') return '';
    return copied ? 'Copied!' : 'Copy';
  };

  return (
    <button
      onClick={handleCopy}
      disabled={disabled}
      style={getButtonStyle()}
      onMouseEnter={(e) => {
        if (!disabled && !copied) {
          const target = e.target as HTMLButtonElement;
          target.style.transform = 'translateY(-2px)';
          target.style.boxShadow = variant === 'primary' 
            ? '0 6px 16px rgba(0, 123, 255, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          const target = e.target as HTMLButtonElement;
          target.style.transform = isAnimating ? 'scale(0.95)' : 'scale(1)';
          target.style.boxShadow = variant === 'primary' 
            ? '0 4px 12px rgba(0, 123, 255, 0.3)'
            : '0 2px 8px rgba(0, 0, 0, 0.05)';
        }
      }}
      title={copied ? 'Copied to clipboard!' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied to clipboard!' : 'Copy to clipboard'}
    >
      {/* Success Animation */}
      {copied && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(40, 167, 69, 0.1)',
          borderRadius: 'inherit',
          animation: 'pulse 0.6s ease-out'
        }} />
      )}
      
      <span style={{ 
        fontSize: variant === 'icon' ? '16px' : '14px',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        {getIcon()}
        {getText() && <span>{getText()}</span>}
      </span>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0; transform: scale(1); }
        }
      `}</style>
    </button>
  );
};

export default CopyButton;