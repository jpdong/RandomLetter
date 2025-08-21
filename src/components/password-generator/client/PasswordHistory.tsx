'use client';

import React from 'react';
import { GeneratedPassword } from '../types';
import CopyButton from './CopyButton';

interface PasswordHistoryProps {
  history: GeneratedPassword[];
  onClearHistory: () => void;
  onSelectPassword: (password: string) => void;
}

const PasswordHistory: React.FC<PasswordHistoryProps> = ({
  history,
  onClearHistory,
  onSelectPassword
}) => {
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);

    if (diffSec < 60) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    return date.toLocaleDateString();
  };

  const maskPassword = (password: string) => {
    if (password.length <= 4) return password;
    return password.substring(0, 2) + '•'.repeat(Math.min(password.length - 4, 8)) + password.substring(password.length - 2);
  };

  if (history.length === 0) {
    return (
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '32px',
        textAlign: 'center',
        border: '2px dashed #e9ecef'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}>📋</div>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#6c757d'
        }}>
          No password history yet
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#6c757d'
        }}>
          Generated passwords will appear here for easy access
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: '#fff',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid #e9ecef'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Recent Passwords ({history.length})
        </h3>
        <button
          onClick={onClearHistory}
          style={{
            background: 'none',
            border: '1px solid #dc3545',
            color: '#dc3545',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#dc3545';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = '#dc3545';
          }}
        >
          Clear All
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        {history.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '16px',
              background: '#f8f9fa',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f1f3f4';
              e.currentTarget.style.borderColor = '#dee2e6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8f9fa';
              e.currentTarget.style.borderColor = '#e9ecef';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: item.strength.color
                }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: item.strength.color
                }}>
                  {item.strength.label}
                </span>
                <span style={{
                  fontSize: '11px',
                  color: '#6c757d',
                  background: '#e9ecef',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  {item.password.length} chars
                </span>
              </div>
              <span style={{
                fontSize: '11px',
                color: '#6c757d'
              }}>
                {formatTimestamp(item.timestamp)}
              </span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <button
                onClick={() => onSelectPassword(item.password)}
                style={{
                  flex: 1,
                  background: '#fff',
                  border: '1px solid #dee2e6',
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  color: '#495057',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#adb5bd';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.borderColor = '#dee2e6';
                }}
                title="Click to select this password"
              >
                {maskPassword(item.password)}
              </button>
              
              <CopyButton
                text={item.password}
                variant="icon"
                size="small"
                onCopy={(success) => {
                  if (success) {
                    console.log('Historical password copied');
                  }
                }}
              />
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '8px',
              fontSize: '11px',
              color: '#6c757d'
            }}>
              <span>Entropy: {item.strength.entropy} bits</span>
              <span>•</span>
              <span>Crack time: {item.strength.crackTime}</span>
            </div>
          </div>
        ))}
      </div>

      {history.length >= 10 && (
        <div style={{
          marginTop: '12px',
          padding: '8px',
          background: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#856404',
          textAlign: 'center'
        }}>
          Showing last 10 passwords. Older entries are automatically removed.
        </div>
      )}
    </div>
  );
};

export default PasswordHistory;