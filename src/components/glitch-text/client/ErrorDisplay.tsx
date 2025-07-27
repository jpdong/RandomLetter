'use client';

import React from 'react';
import { ValidationResult, ValidationError, ValidationWarning } from '../validation';

interface ErrorDisplayProps {
  validationResult?: ValidationResult;
  className?: string;
  showWarnings?: boolean;
  onDismiss?: () => void;
  compact?: boolean;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  validationResult,
  className = '',
  showWarnings = true,
  onDismiss,
  compact = false
}) => {
  if (!validationResult || (validationResult.errors.length === 0 && (!showWarnings || validationResult.warnings.length === 0))) {
    return null;
  }

  const { errors, warnings } = validationResult;

  const getErrorIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getErrorBgColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getErrorTextColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'text-red-800';
      case 'warning':
        return 'text-yellow-800';
      default:
        return 'text-blue-800';
    }
  };

  if (compact) {
    // 紧凑模式：只显示第一个错误
    const firstError = errors[0] || (showWarnings ? warnings[0] : null);
    if (!firstError) return null;

    return (
      <div className={`flex items-center gap-2 p-2 rounded-md ${getErrorBgColor(firstError.severity || 'warning')} ${className}`}>
        {getErrorIcon(firstError.severity || 'warning')}
        <span className={`text-sm ${getErrorTextColor(firstError.severity || 'warning')}`}>
          {firstError.message}
        </span>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-auto text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {/* 错误列表 */}
      {errors.map((error, index) => (
        <div
          key={`error-${index}`}
          className={`flex items-start gap-3 p-3 rounded-md border ${getErrorBgColor(error.severity)}`}
        >
          <div className="flex-shrink-0 mt-0.5">
            {getErrorIcon(error.severity)}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${getErrorTextColor(error.severity)}`}>
              {error.message}
            </p>
            {error.field && (
              <p className={`text-xs mt-1 ${getErrorTextColor(error.severity)} opacity-75`}>
                Field: {error.field}
              </p>
            )}
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
              aria-label="Dismiss error"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      ))}

      {/* 警告列表 */}
      {showWarnings && warnings.map((warning, index) => (
        <div
          key={`warning-${index}`}
          className={`flex items-start gap-3 p-3 rounded-md border ${getErrorBgColor('warning')}`}
        >
          <div className="flex-shrink-0 mt-0.5">
            {getErrorIcon('warning')}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${getErrorTextColor('warning')}`}>
              {warning.message}
            </p>
            {warning.suggestion && (
              <p className={`text-xs mt-1 ${getErrorTextColor('warning')} opacity-75`}>
                💡 {warning.suggestion}
              </p>
            )}
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600"
              aria-label="Dismiss warning"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ErrorDisplay;