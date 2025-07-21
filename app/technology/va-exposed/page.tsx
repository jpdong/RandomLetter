import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'VirtualApp + Xposed Multiple Accounts | Multi Run',
  description: 'Enhanced VirtualApp with Xposed framework integration for advanced app manipulation.',
};

const VaExposedPage: React.FC = () => {
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
                <h1 className="detail-title">VirtualApp + Xposed</h1>
                <p className="detail-subtitle">
                  Enhanced VirtualApp with Xposed framework integration for advanced app manipulation.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Framework Integration
                  </span>
                  <span className="detail-badge tech-language">
                    Java/C++
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 13.2k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Xposed framework integration</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Advanced app manipulation capabilities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Hook system for runtime modifications</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Enhanced security and privacy features</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Module system for extensibility</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Details</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏢 Architecture</h3>
                      <p>Built on VirtualApp with Xposed framework integration</p>
                    </div>
                    <div className="use-case">
                      <h3>💻 Languages</h3>
                      <p>Java, C++, Native Android</p>
                    </div>
                    <div className="use-case">
                      <h3>📱 Compatibility</h3>
                      <p>Android 5.0 - 14.0</p>
                    </div>
                    <div className="use-case">
                      <h3>📜 License</h3>
                      <p>GPL v3.0</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Advanced Framework Integration</h2>
                  <p className="cta-description">
                    Experience the power of enhanced app virtualization with Multi Run.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/android-hacker/VirtualXposed" 
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

export default VaExposedPage;