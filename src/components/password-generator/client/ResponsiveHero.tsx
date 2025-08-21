'use client';

import React from 'react';
import Container from '../../layout/Container';
import Row from '../../layout/Row';
import Column from '../../layout/Column';

const ResponsiveHero: React.FC = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '100px 0 80px 0',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3
      }} />

      <Container>
        <Row style={{ justifyContent: 'center' }}>
          <Column xs={24} lg={16} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 16px',
              borderRadius: '20px',
              marginBottom: '24px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '20px', marginRight: '8px' }}>🔒</span>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Enterprise-Grade Security</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              Secure Password Generator
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              margin: '0 auto 32px auto',
              opacity: 0.9,
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Generate ultra-secure passwords with advanced customization. 
              Protect your accounts with cryptographically strong passwords that are impossible to crack.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '40px'
            }}>
              {[
                { icon: '⚡', text: 'Instant Generation' },
                { icon: '🛡️', text: 'Military-Grade Security' },
                { icon: '🎯', text: 'Smart Customization' },
                { icon: '📱', text: 'Mobile Optimized' }
              ].map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '16px' }}>{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '16px 24px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>256-bit</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Encryption</div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '16px 24px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>100%</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Client-Side</div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '16px 24px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                minWidth: '120px'
              }}>
                <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>0</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Data Stored</div>
              </div>
            </div>
          </Column>
        </Row>
      </Container>

      {/* Floating Security Icons */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        fontSize: '40px',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite'
      }}>🔐</div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        fontSize: '35px',
        opacity: 0.1,
        animation: 'float 8s ease-in-out infinite reverse'
      }}>🛡️</div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '15%',
        fontSize: '30px',
        opacity: 0.1,
        animation: 'float 7s ease-in-out infinite'
      }}>🔑</div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default ResponsiveHero;