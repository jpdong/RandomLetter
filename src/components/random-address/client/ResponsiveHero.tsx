'use client';

import React from 'react';
import RandomAddressGenerator from './RandomAddressGenerator';

const ResponsiveHero: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 0'
    }}>
      <RandomAddressGenerator />
    </div>
  );
};

export default ResponsiveHero;