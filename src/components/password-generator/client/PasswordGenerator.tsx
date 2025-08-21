'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { PasswordOptions, GeneratedPassword, PasswordStrength } from '../types';
import { PasswordGenerator as Generator } from '../passwordGenerator';
import { DEFAULT_OPTIONS } from '../constants';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import CopyButton from './CopyButton';
import PasswordHistory from './PasswordHistory';

const PasswordGeneratorComponent: React.FC = () => {
  const [options, setOptions] = useState<PasswordOptions>(DEFAULT_OPTIONS);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [currentStrength, setCurrentStrength] = useState<PasswordStrength | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [passwordHistory, setPasswordHistory] = useState<GeneratedPassword[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const generatePassword = useCallback(() => {
    try {
      setIsGenerating(true);
      
      setTimeout(() => {
        const password = Generator.generate(options);
        const strength = Generator.calculateStrength(password, options);
        
        // Add to history
        const newPasswordEntry: GeneratedPassword = {
          id: `pwd_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          password,
          strength,
          options: { ...options },
          timestamp: Date.now()
        };
        
        setPasswordHistory(prev => {
          const newHistory = [newPasswordEntry, ...prev];
          return newHistory.slice(0, 10); // Keep only last 10 passwords
        });
        
        setCurrentPassword(password);
        setCurrentStrength(strength);
        setIsGenerating(false);
      }, 200);
      
    } catch (error) {
      console.error('Password generation failed:', error);
      setIsGenerating(false);
    }
  }, [options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleOptionChange = (key: keyof PasswordOptions, value: any) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const getCharacterTypeCount = () => {
    let count = 0;
    if (options.includeUppercase) count++;
    if (options.includeLowercase) count++;
    if (options.includeNumbers) count++;
    if (options.includeSymbols) count++;
    return count;
  };

  const isValid = getCharacterTypeCount() > 0 && options.length >= 4 && options.length <= 128;

  const handleClearHistory = () => {
    setPasswordHistory([]);
  };

  const handleSelectPassword = (password: string) => {
    setCurrentPassword(password);
    if (currentStrength) {
      setCurrentStrength(Generator.calculateStrength(password, options));
    }
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      border: '1px solid #f0f0f0'
    }}>
      {/* Password Display */}
      <div style={{
        background: '#f8f9fa',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        border: '2px solid #e9ecef'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>
            Generated Password
          </h3>
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '4px'
            }}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '🙈'}
          </button>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#fff',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #dee2e6'
        }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={currentPassword}
            readOnly
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              fontFamily: 'monospace',
              background: 'transparent',
              color: '#2c3e50'
            }}
          />
          <CopyButton
            text={currentPassword}
            variant="icon"
            size="medium"
            disabled={!currentPassword}
            onCopy={(success) => {
              if (success) {
                console.log('Password copied successfully');
              }
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '16px'
        }}>
          <button
            onClick={generatePassword}
            disabled={!isValid || isGenerating}
            style={{
              background: isGenerating 
                ? '#6c757d' 
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: isValid && !isGenerating ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              opacity: isValid ? 1 : 0.5
            }}
          >
            <span>{isGenerating ? '⏳' : '🔄'}</span>
            {isGenerating ? 'Generating...' : 'Generate New'}
          </button>

          <CopyButton
            text={currentPassword}
            variant="secondary"
            size="medium"
            disabled={!currentPassword}
          />
        </div>
      </div>

      {/* Basic Options */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{
          margin: '0 0 16px 0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Password Settings
        </h4>

        <div style={{
          display: 'grid',
          gap: '16px'
        }}>
          {/* Length Slider */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <label style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#495057'
              }}>
                Password Length
              </label>
              <span style={{
                background: '#e9ecef',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#495057'
              }}>
                {options.length}
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="128"
              value={options.length}
              onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                background: '#dee2e6',
                outline: 'none',
                appearance: 'none'
              }}
            />
          </div>

          {/* Character Types */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {[
              { key: 'includeUppercase', label: 'Uppercase Letters (A-Z)', example: 'ABCD' },
              { key: 'includeLowercase', label: 'Lowercase Letters (a-z)', example: 'abcd' },
              { key: 'includeNumbers', label: 'Numbers (0-9)', example: '1234' },
              { key: 'includeSymbols', label: 'Special Symbols', example: '!@#$' }
            ].map(({ key, label, example }) => (
              <label
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '1px solid #dee2e6',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e9ecef';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                }}
              >
                <input
                  type="checkbox"
                  checked={options[key as keyof PasswordOptions] as boolean}
                  onChange={(e) => handleOptionChange(key as keyof PasswordOptions, e.target.checked)}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: '#667eea'
                  }}
                />
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#2c3e50'
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6c757d',
                    fontFamily: 'monospace'
                  }}>
                    {example}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Options Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        style={{
          background: 'none',
          border: '1px solid #dee2e6',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#495057',
          cursor: 'pointer',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: showAdvanced ? '24px' : '0',
          transition: 'all 0.2s ease'
        }}
      >
        <span>{showAdvanced ? '▲' : '▼'}</span>
        {showAdvanced ? 'Hide' : 'Show'} Advanced Options
      </button>

      {/* Advanced Options */}
      {showAdvanced && (
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
          marginBottom: '24px'
        }}>
          <h4 style={{
            margin: '0 0 16px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#2c3e50'
          }}>
            Advanced Settings
          </h4>

          <div style={{
            display: 'grid',
            gap: '16px'
          }}>
            {[
              { key: 'excludeSimilar', label: 'Exclude Similar Characters', desc: 'Avoid 0, O, 1, l, I' },
              { key: 'excludeAmbiguous', label: 'Exclude Ambiguous Characters', desc: 'Avoid {}, [], (), /, \\, \', ", etc.' },
              { key: 'requireEachType', label: 'Require Each Selected Type', desc: 'Ensure at least one character from each selected type' },
              { key: 'noRepeatingChars', label: 'No Consecutive Repeating', desc: 'Avoid consecutive identical characters' }
            ].map(({ key, label, desc }) => (
              <label
                key={key}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer'
                }}
              >
                <input
                  type="checkbox"
                  checked={options[key as keyof PasswordOptions] as boolean}
                  onChange={(e) => handleOptionChange(key as keyof PasswordOptions, e.target.checked)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginTop: '2px',
                    accentColor: '#667eea'
                  }}
                />
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#2c3e50',
                    marginBottom: '4px'
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6c757d'
                  }}>
                    {desc}
                  </div>
                </div>
              </label>
            ))}

            {/* Custom Characters */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#2c3e50',
                marginBottom: '8px'
              }}>
                Custom Characters to Include
              </label>
              <input
                type="text"
                value={options.customCharacters}
                onChange={(e) => handleOptionChange('customCharacters', e.target.value)}
                placeholder="Additional characters to include..."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #dee2e6',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            {/* Exclude Characters */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#2c3e50',
                marginBottom: '8px'
              }}>
                Characters to Exclude
              </label>
              <input
                type="text"
                value={options.excludeCharacters}
                onChange={(e) => handleOptionChange('excludeCharacters', e.target.value)}
                placeholder="Characters to avoid..."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #dee2e6',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Password Strength */}
      {currentStrength && (
        <PasswordStrengthIndicator 
          strength={currentStrength} 
          showDetails={true} 
        />
      )}

      {/* Validation Message */}
      {!isValid && (
        <div style={{
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '12px',
          marginTop: '16px'
        }}>
          <div style={{
            fontSize: '14px',
            color: '#856404',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>⚠️</span>
            Please select at least one character type and set length between 4-128 characters.
          </div>
        </div>
      )}

      {/* Password History Toggle */}
      {passwordHistory.length > 0 && (
        <button
          onClick={() => setShowHistory(!showHistory)}
          style={{
            background: 'none',
            border: '1px solid #dee2e6',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#495057',
            cursor: 'pointer',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '16px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f8f9fa';
            e.currentTarget.style.borderColor = '#adb5bd';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.borderColor = '#dee2e6';
          }}
        >
          <span>{showHistory ? '▲' : '▼'}</span>
          {showHistory ? 'Hide' : 'Show'} Password History ({passwordHistory.length})
        </button>
      )}

      {/* Password History */}
      {showHistory && (
        <div style={{ marginTop: '16px' }}>
          <PasswordHistory
            history={passwordHistory}
            onClearHistory={handleClearHistory}
            onSelectPassword={handleSelectPassword}
          />
        </div>
      )}
    </div>
  );
};

export default PasswordGeneratorComponent;