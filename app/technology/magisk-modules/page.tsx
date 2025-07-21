import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const MagiskModulesPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/technology" className="back-link">
                ← Back to Technology
              </Link>
            </div>
            
            <div className="detail-page">
              <div className="detail-header">
                <h1 className="detail-title">Magisk Hide</h1>
                <p className="detail-subtitle">
                  Systemless root solution with app hiding capabilities for sensitive applications.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Root & Hide
                  </span>
                  <span className="detail-badge tech-language">
                    C++/Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 35k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Systemless root implementation</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>App hiding and detection bypass</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Module system for extensibility</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>SafetyNet bypass capabilities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Advanced stealth technology</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Innovation</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🎭 Stealth Technology</h3>
                      <p>Advanced hiding mechanisms to bypass detection systems</p>
                    </div>
                    <div className="use-case">
                      <h3>🔧 Systemless Approach</h3>
                      <p>Modifies system behavior without touching system partitions</p>
                    </div>
                    <div className="use-case">
                      <h3>🛡️ SafetyNet Bypass</h3>
                      <p>Sophisticated methods to pass Google's security checks</p>
                    </div>
                    <div className="use-case">
                      <h3>📦 Module Ecosystem</h3>
                      <p>Extensible framework for custom modifications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Stealth Virtualization Technology</h2>
                  
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/topjohnwu/Magisk" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button secondary"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MagiskModulesPage;