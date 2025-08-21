'use client';

import React from 'react';
import { PasswordStrength } from '../types';

interface PasswordStrengthIndicatorProps {
  strength: PasswordStrength;
  showDetails?: boolean;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ 
  strength, 
  showDetails = true 
}) => {
  const getStrengthWidth = (score: number) => {
    return `${(score / 4) * 100}%`;
  };

  const getStrengthIcon = (label: string) => {
    switch (label) {
      case 'Very Weak': return '🔴';
      case 'Weak': return '🟠';
      case 'Fair': return '🟡';
      case 'Good': return '🟢';
      case 'Strong': return '🔵';
      default: return '⚪';
    }
  };

  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      border: '2px solid #f0f0f0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Password Strength
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '16px' }}>{getStrengthIcon(strength.label)}</span>
          <span style={{
            color: strength.color,
            fontWeight: '600',
            fontSize: '14px'
          }}>
            {strength.label}
          </span>
        </div>
      </div>

      {/* Strength Bar */}
      <div style={{
        width: '100%',
        height: '8px',
        background: '#e9ecef',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: showDetails ? '16px' : '0'
      }}>
        <div style={{
          width: getStrengthWidth(strength.score),
          height: '100%',
          background: `linear-gradient(90deg, ${strength.color}dd, ${strength.color})`,
          borderRadius: '4px',
          transition: 'width 0.3s ease-in-out',
          boxShadow: `0 0 8px ${strength.color}33`
        }} />
      </div>

      {showDetails && (
        <>
          {/* Strength Details */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <div style={{
              background: '#f8f9fa',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '4px'
              }}>
                {strength.entropy}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                Entropy (bits)
              </div>
            </div>
            
            <div style={{
              background: '#f8f9fa',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '4px'
              }}>
                {strength.crackTime}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                Crack Time
              </div>
            </div>
          </div>

          {/* Feedback */}
          {strength.feedback.length > 0 && (
            <div style={{
              background: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '8px',
              padding: '12px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#856404',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>💡</span>
                Security Recommendations
              </div>
              <ul style={{
                margin: 0,
                paddingLeft: '16px',
                fontSize: '12px',
                color: '#856404'
              }}>
                {strength.feedback.map((tip, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Visual Strength Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            gap: '4px'
          }}>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                style={{
                  flex: 1,
                  height: '6px',
                  borderRadius: '3px',
                  background: level <= strength.score 
                    ? strength.color 
                    : '#e9ecef',
                  transition: 'background 0.3s ease',
                  opacity: level <= strength.score ? 1 : 0.3
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;