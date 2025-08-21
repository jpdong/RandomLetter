'use client';

import React from 'react';
import Link from 'next/link';
import Container from '../layout/Container';
import Row from '../layout/Row';
import Column from '../layout/Column';

interface Tool {
  title: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
}

const tools: Tool[] = [
  {
    title: 'Random Letter Generator',
    description: 'Generate random letters with customizable options for games, education, and creative projects.',
    icon: '🔤',
    href: '/',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Password Generator',
    description: 'Create ultra-secure passwords with advanced customization and real-time strength analysis.',
    icon: '🔐',
    href: '/password-generator',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Random Name Generator',
    description: 'Create realistic names from different cultures and regions for characters, projects, or testing.',
    icon: '👤',
    href: '/random-name-generator',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Random Address Generator',
    description: 'Generate realistic addresses from major countries worldwide for testing and development.',
    icon: '📍',
    href: '/random-address-generator',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: 'Yes/No Wheel',
    description: 'Make decisions with an interactive spinning wheel. Perfect for quick choices and fun activities.',
    icon: '🎯',
    href: '/yes-no-wheel',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    title: 'Glitch Text Generator',
    description: 'Create cool glitch effects and zalgo text for social media, gaming, and creative content.',
    icon: '⚡',
    href: '/glitch-text-generator',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
];

interface MoreToolsProps {
  currentPath?: string;
}

const MoreTools: React.FC<MoreToolsProps> = ({ currentPath }) => {
  const filteredTools = tools.filter(tool => tool.href !== currentPath);

  return (
    <div style={{ background: '#fff', padding: '80px 0' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            More Useful Tools
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover our collection of free online tools designed to make your work easier and more creative.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {filteredTools.map((tool, index) => (
            <Column xs={24} md={12} lg={currentPath ? 6 : 8} key={tool.href}>
              <Link href={tool.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: tool.gradient
                  }} />
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: tool.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      marginRight: '16px'
                    }}>
                      {tool.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      margin: 0,
                      lineHeight: '1.3'
                    }}>
                      {tool.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    color: '#64748b',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {tool.description}
                  </p>
                  
                  <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#667eea',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Try it now
                    <span style={{
                      marginLeft: '8px',
                      transition: 'transform 0.3s ease'
                    }}>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Column>
          ))}
        </Row>

        {/* CTA Section */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: '#fff'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '12px',
            margin: 0
          }}>
            Need a Custom Tool?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '24px',
            margin: '12px 0 24px 0'
          }}>
            Have an idea for a useful online tool? We'd love to hear from you!
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255,255,255,0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MoreTools;