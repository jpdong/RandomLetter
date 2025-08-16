'use client';

import React, { useState } from 'react';
import { generateRandomAddress, addressData } from '../addressData';

const RandomAddressGenerator: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [generatedAddress, setGeneratedAddress] = useState<{
    address: string;
    country: string;
    flag: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const countries = Object.entries(addressData).map(([code, data]) => ({
    code,
    name: data.name,
    flag: data.flag
  }));

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateRandomAddress(selectedCountry);
      setGeneratedAddress(result);
      setIsGenerating(false);
      setCopied(false);
    }, 300);
  };

  const handleCopy = async () => {
    if (generatedAddress) {
      try {
        await navigator.clipboard.writeText(generatedAddress.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
      }
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '60px 0',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '24px',
        padding: '48px',
        maxWidth: '600px',
        width: '90%',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Random Address Generator
          </h1>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            margin: 0,
            fontWeight: '400'
          }}>
            Generate realistic addresses from around the world
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            color: '#374151',
            fontSize: '1rem',
            fontWeight: '600'
          }}>
            Select Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          >
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          style={{
            width: '100%',
            padding: '18px 32px',
            background: isGenerating 
              ? 'linear-gradient(135deg, #94a3b8 0%, #94a3b8 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '32px',
            boxShadow: isGenerating 
              ? 'none' 
              : '0 8px 25px rgba(102, 126, 234, 0.3)',
            transform: isGenerating ? 'none' : 'translateY(0)',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
            }
          }}
        >
          {isGenerating ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{
                width: '20px',
                height: '20px',
                border: '2px solid transparent',
                borderTop: '2px solid #ffffff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginRight: '8px'
              }} />
              Generating...
            </span>
          ) : (
            'Generate Random Address'
          )}
        </button>

        {generatedAddress && (
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            border: '2px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            position: 'relative',
            animation: 'fadeInUp 0.5s ease-out'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h3 style={{
                margin: 0,
                color: '#374151',
                fontSize: '1.2rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                {generatedAddress.flag}
                <span style={{ marginLeft: '8px' }}>{generatedAddress.country}</span>
              </h3>
              <button
                onClick={handleCopy}
                style={{
                  background: copied ? '#10b981' : '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  if (!copied) {
                    e.currentTarget.style.background = '#4b5563';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!copied) {
                    e.currentTarget.style.background = '#6b7280';
                  }
                }}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <div style={{
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              fontFamily: 'monospace',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#374151',
              whiteSpace: 'pre-line'
            }}>
              {generatedAddress.address}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RandomAddressGenerator;