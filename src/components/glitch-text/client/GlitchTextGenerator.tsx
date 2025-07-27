'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { GlitchIntensity, GlitchTextState } from '../types';
import { 
  MAX_INPUT_LENGTH, 
  DEBOUNCE_DELAY, 
  PLACEHOLDER_TEXT, 
  EXAMPLE_TEXTS
} from '../constants';
import { GlitchTextGenerator as Generator, generatePreviewText } from '../glitchGenerator';
import { IntensityController, getIntensityDisplayInfo } from '../intensityController';
import { debounce } from '../utils';
import GlitchTextVariantList from './GlitchTextVariantList';
import ErrorDisplay from './ErrorDisplay';
import { InputValidator, ValidationResult, autoFixInput } from '../validation';

const GlitchTextGenerator: React.FC = () => {
  // 状态管理
  const [state, setState] = useState<GlitchTextState>({
    inputText: '',
    glitchIntensity: 'medium',
    generatedVariants: [],
    isGenerating: false,
    copySuccess: null
  });

  // 验证状态
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  // 创建生成器和强度控制器实例
  const generator = useMemo(() => new Generator(state.glitchIntensity), [state.glitchIntensity]);
  const intensityController = useMemo(() => new IntensityController(state.glitchIntensity), [state.glitchIntensity]);
  const validator = useMemo(() => new InputValidator({ maxLength: MAX_INPUT_LENGTH }), []);

  // 实时预览文本
  const [previewText, setPreviewText] = useState<string>('');

  // 防抖的预览生成函数
  const debouncedGeneratePreview = useCallback(
    debounce((text: string, intensity: GlitchIntensity) => {
      if (text.trim()) {
        const preview = generatePreviewText(text, intensity);
        setPreviewText(preview);
      } else {
        setPreviewText('');
      }
    }, DEBOUNCE_DELAY),
    []
  );

  // 当输入文本或强度改变时更新预览
  useEffect(() => {
    debouncedGeneratePreview(state.inputText, state.glitchIntensity);
  }, [state.inputText, state.glitchIntensity, debouncedGeneratePreview]);

  // 处理输入文本变化
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    
    // 验证输入
    const validation = validator.validate(newText);
    setValidationResult(validation);
    setShowValidation(!validation.isValid || validation.warnings.length > 0);

    // 如果有严重错误，不更新文本
    const hasBlockingErrors = validation.errors.some(error => error.severity === 'error');
    if (hasBlockingErrors) {
      return;
    }

    setState(prev => ({
      ...prev,
      inputText: newText,
      copySuccess: null // 清除复制成功提示
    }));
  }, [validator]);

  // 处理强度变化
  const handleIntensityChange = useCallback((intensity: GlitchIntensity) => {
    setState(prev => ({
      ...prev,
      glitchIntensity: intensity,
      copySuccess: null
    }));
    
    // 更新生成器强度
    generator.updateIntensity(intensity);
    intensityController.setIntensity(intensity);
  }, [generator, intensityController]);

  // 生成故障文本变体
  const handleGenerate = useCallback(async () => {
    if (!state.inputText.trim()) {
      return;
    }

    setState(prev => ({ ...prev, isGenerating: true, copySuccess: null }));

    try {
      const result = generator.generateVariants({
        text: state.inputText,
        intensity: state.glitchIntensity,
        variantCount: 5
      });

      setState(prev => ({
        ...prev,
        generatedVariants: result.variants,
        isGenerating: false
      }));
    } catch (error) {
      console.error('Failed to generate glitch text:', error);
      setState(prev => ({
        ...prev,
        isGenerating: false
      }));
    }
  }, [state.inputText, state.glitchIntensity, generator]);



  // 使用示例文本
  const handleUseExample = useCallback(() => {
    const randomExample = EXAMPLE_TEXTS[Math.floor(Math.random() * EXAMPLE_TEXTS.length)];
    
    // 验证示例文本
    const validation = validator.validate(randomExample);
    setValidationResult(validation);
    setShowValidation(!validation.isValid || validation.warnings.length > 0);
    
    setState(prev => ({
      ...prev,
      inputText: randomExample,
      copySuccess: null
    }));
  }, [validator]);

  // 清除输入
  const handleClear = useCallback(() => {
    setState(prev => ({
      ...prev,
      inputText: '',
      generatedVariants: [],
      copySuccess: null
    }));
    setPreviewText('');
    setValidationResult(null);
    setShowValidation(false);
  }, []);

  // 自动修复输入
  const handleAutoFix = useCallback(() => {
    if (!validationResult) return;
    
    const fixedText = autoFixInput(state.inputText, { maxLength: MAX_INPUT_LENGTH });
    const validation = validator.validate(fixedText);
    
    setValidationResult(validation);
    setShowValidation(!validation.isValid || validation.warnings.length > 0);
    
    setState(prev => ({
      ...prev,
      inputText: fixedText,
      copySuccess: null
    }));
  }, [state.inputText, validationResult, validator]);

  // 获取强度显示信息
  const intensityInfo = getIntensityDisplayInfo(state.glitchIntensity);

  return (
    <div style={{ width: '100%', maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
      {/* 输入区域 */}
      <div style={{ 
        background: 'white', 
        borderRadius: '0.5rem', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label 
            htmlFor="glitch-input" 
            style={{ 
              display: 'block', 
              fontSize: '1rem', 
              fontWeight: '500', 
              color: '#374151', 
              marginBottom: '0.5rem' 
            }}
          >
            Enter your text
          </label>
          <div style={{ position: 'relative' }}>
            <textarea
              id="glitch-input"
              value={state.inputText}
              onChange={handleInputChange}
              placeholder={PLACEHOLDER_TEXT}
              style={{
                width: '100%',
                height: '8rem',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                resize: 'none',
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
              maxLength={MAX_INPUT_LENGTH}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '0.5rem', 
              right: '0.5rem', 
              fontSize: '0.75rem', 
              color: '#6b7280' 
            }}>
              {state.inputText.length}/{MAX_INPUT_LENGTH}
            </div>
          </div>
        </div>

        {/* 验证错误和警告显示 */}
        {showValidation && validationResult && (
          <div style={{ marginBottom: '1.5rem' }}>
            <ErrorDisplay
              validationResult={validationResult}
              showWarnings={true}
              onDismiss={() => setShowValidation(false)}
            />
            {validationResult.errors.length > 0 && (
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={handleAutoFix}
                  style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    background: '#dbeafe',
                    color: '#1d4ed8',
                    borderRadius: '0.375rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#bfdbfe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#dbeafe';
                  }}
                >
                  Auto Fix
                </button>
              </div>
            )}
          </div>
        )}

        {/* 实时预览 */}
        {previewText && (
          <div style={{ 
            marginBottom: '1.5rem', 
            padding: '1rem', 
            background: '#f9fafb', 
            borderRadius: '0.375rem', 
            border: '1px solid #e5e7eb' 
          }}>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
              Preview:
            </div>
            <div 
              style={{ 
                fontFamily: 'monospace', 
                fontSize: '1.25rem', 
                lineHeight: '1.4',
                wordBreak: 'break-all',
                color: '#1f2937'
              }}
            >
              {previewText}
            </div>
          </div>
        )}

        {/* 控制区域 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem', 
          marginBottom: '1.5rem'
        }}>
          {/* 强度选择 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
              Intensity:
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(['light', 'medium', 'heavy'] as GlitchIntensity[]).map((intensity) => {
                const isActive = state.glitchIntensity === intensity;
                const info = getIntensityDisplayInfo(intensity);
                return (
                  <button
                    key={intensity}
                    onClick={() => handleIntensityChange(intensity)}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      borderRadius: '9999px',
                      border: '1px solid',
                      borderColor: isActive ? 'currentColor' : '#d1d5db',
                      background: isActive ? (
                        intensity === 'light' ? '#dcfce7' :
                        intensity === 'medium' ? '#fef3c7' : '#fecaca'
                      ) : '#f3f4f6',
                      color: isActive ? (
                        intensity === 'light' ? '#16a34a' :
                        intensity === 'medium' ? '#d97706' : '#dc2626'
                      ) : '#6b7280',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minHeight: '36px'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#e5e7eb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = '#f3f4f6';
                      }
                    }}
                  >
                    {info.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 强度指示器 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ 
              fontSize: '0.875rem',
              color: intensityInfo.colorClass === 'text-green-500' ? '#16a34a' :
                     intensityInfo.colorClass === 'text-yellow-500' ? '#d97706' : '#dc2626'
            }}>
              {intensityInfo.indicator}
            </span>
          </div>
        </div>

        {/* 按钮区域 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={handleGenerate}
            disabled={!state.inputText.trim() || state.isGenerating || Boolean(validationResult && validationResult.errors.some(e => e.severity === 'error'))}
            style={{
              padding: '0.75rem 1.5rem',
              background: (!state.inputText.trim() || state.isGenerating || Boolean(validationResult && validationResult.errors.some(e => e.severity === 'error'))) ? '#9ca3af' : '#2563eb',
              color: 'white',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: (!state.inputText.trim() || state.isGenerating || Boolean(validationResult && validationResult.errors.some(e => e.severity === 'error'))) ? 'not-allowed' : 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              minHeight: '44px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.background = '#1d4ed8';
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.background = '#2563eb';
              }
            }}
          >
            {state.isGenerating ? 'Generating...' : 'Generate Glitch Text'}
          </button>
          
          <button
            onClick={handleUseExample}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#4b5563',
              color: 'white',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              minHeight: '44px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#374151';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4b5563';
            }}
          >
            Use Example
          </button>
          
          {state.inputText && (
            <button
              onClick={handleClear}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#dc2626',
                color: 'white',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                minHeight: '44px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#dc2626';
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* 强度描述 */}
        <div style={{ 
          marginTop: '1rem', 
          fontSize: '0.75rem', 
          color: '#6b7280', 
          lineHeight: '1.5' 
        }}>
          {intensityInfo.description}
        </div>
      </div>

      {/* 生成结果区域 */}
      {state.generatedVariants.length > 0 && (
        <div style={{ 
          background: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
          padding: '1.5rem' 
        }}>
          <GlitchTextVariantList
            variants={state.generatedVariants}
            onCopy={(text, success) => {
              if (success) {
                setState(prev => ({ ...prev, copySuccess: text }));
                setTimeout(() => {
                  setState(prev => ({ ...prev, copySuccess: null }));
                }, 2000);
              }
            }}
          />
        </div>
      )}

      {/* 空状态提示 */}
      {!state.inputText && state.generatedVariants.length === 0 && (
        <div style={{ 
          background: 'white', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
          padding: '3rem', 
          textAlign: 'center' 
        }}>
          <div style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
            <svg 
              style={{ width: '4rem', height: '4rem', margin: '0 auto' }} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '500', 
            color: '#374151', 
            marginBottom: '1rem' 
          }}>
            Ready to create glitch text?
          </h3>
          <p style={{ 
            fontSize: '1rem', 
            color: '#6b7280', 
            marginBottom: '1.5rem', 
            maxWidth: '28rem', 
            margin: '0 auto 1.5rem' 
          }}>
            Enter some text above and click "Generate Glitch Text" to get started.
          </p>
          <button
            onClick={handleUseExample}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#2563eb',
              color: 'white',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              minHeight: '44px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2563eb';
            }}
          >
            Try an Example
          </button>
        </div>
      )}
    </div>
  );
};

export default GlitchTextGenerator;