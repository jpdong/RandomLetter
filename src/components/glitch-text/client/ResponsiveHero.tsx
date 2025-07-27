'use client';

import React from 'react';
import GlitchTextGenerator from './GlitchTextGenerator';

const ResponsiveHero: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f9fafb 0%, #e0f2fe 100%)' }}>
      {/* 英雄标题区域 */}
      <div style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem 3rem 1rem' }}>
          <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Glitch Text Generator
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6b7280', 
              marginBottom: '2rem', 
              maxWidth: '48rem', 
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Create corrupted, distorted text effects with Unicode characters. 
              Perfect for social media, gaming, and creative projects.
            </p>
            
            {/* 特性标签 */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '0.5rem', 
              marginBottom: '2rem' 
            }}>
              {[
                'Real-time Preview',
                'Multiple Intensities',
                'One-click Copy',
                'Mobile Friendly',
                'No Registration'
              ].map((feature) => (
                <span
                  key={feature}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#dbeafe',
                    color: '#1d4ed8',
                    fontSize: '0.875rem',
                    borderRadius: '9999px',
                    fontWeight: '500'
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主要工具区域 */}
      <div style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <GlitchTextGenerator />
        </div>
      </div>

      {/* 快速示例区域 */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* 背景装饰 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        
        <div style={{ 
          maxWidth: '72rem', 
          margin: '0 auto', 
          padding: '0 1rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'white', 
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              ✨ See It In Action
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '32rem',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Experience the power of glitch text with these live examples
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                title: '💫 Light Glitch',
                example: 'H̃ẽl̃l̃õ W̃õr̃l̃d̃',
                description: 'Subtle effects with basic character variations',
                color: '#10b981',
                bgColor: 'rgba(16, 185, 129, 0.1)'
              },
              {
                title: '⚡ Medium Glitch',
                example: 'H̸̢̛ë́l̶l̴̨ǫ̵ ̷W̶̨ǫ̸r̴l̵d̶',
                description: 'Moderate effects with combining characters',
                color: '#f59e0b',
                bgColor: 'rgba(245, 158, 11, 0.1)'
              },
              {
                title: '🔥 Heavy Glitch',
                example: 'Ḧ̷̢̛̗̰́̾ë̴́l̶̨̛̰̈l̴̨̛̗̾ǫ̵̗̰̈́ ̷̢̛̗W̶̨̛̰̾ǫ̸̗̰̈́r̴̨̛̗l̵̢̛̰d̶̨̛̗̾',
                description: 'Intense effects with heavy distortion',
                color: '#ef4444',
                bgColor: 'rgba(239, 68, 68, 0.1)'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }}
                onClick={() => {
                  // 复制示例文本到剪贴板
                  navigator.clipboard?.writeText(item.example).then(() => {
                    // 可以添加复制成功的提示
                  });
                }}
              >
                {/* 装饰性背景 */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: item.bgColor,
                  borderRadius: '50%',
                  transform: 'translate(30px, -30px)',
                  opacity: 0.6
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    {item.title}
                  </h3>
                  
                  <div style={{
                    background: 'linear-gradient(145deg, #f8fafc, #e2e8f0)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    border: '2px solid rgba(0,0,0,0.05)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)',
                    position: 'relative'
                  }}>
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '1.5rem',
                      lineHeight: '1.4',
                      color: '#1f2937',
                      fontWeight: '500',
                      wordBreak: 'break-all',
                      minHeight: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.example}
                    </div>
                    
                    {/* 复制提示 */}
                    <div style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3b82f6',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.375rem',
                      opacity: 0.7
                    }}>
                      Click to copy
                    </div>
                  </div>
                  
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 底部行动号召 */}
          <div style={{ 
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: 'white', 
              marginBottom: '0.5rem' 
            }}>
              Ready to create your own glitch text?
            </h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.8)', 
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              Start generating unique text effects in seconds
            </p>
            <button
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px 0 rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.4)';
              }}
              onClick={() => {
                document.querySelector('textarea')?.focus();
              }}
            >
              🚀 Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;