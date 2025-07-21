import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const EpicPage: React.FC = () => {
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
                <h1 className="detail-title">Epic</h1>
                <p className="detail-subtitle">
                  A modern Android app virtualization solution with enhanced security and performance.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    App Virtualization
                  </span>
                  <span className="detail-badge tech-language">
                    Java/C++
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 1.8k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Modern virtualization architecture</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Enhanced security features</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Optimized performance</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Native code support</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Advanced debugging capabilities</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Details</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏢 Architecture</h3>
                      <p>Next-generation virtualization framework</p>
                    </div>
                    <div className="use-case">
                      <h3>💻 Languages</h3>
                      <p>Java, C++, Assembly</p>
                    </div>
                    <div className="use-case">
                      <h3>📱 Compatibility</h3>
                      <p>Android 6.0 - 14.0</p>
                    </div>
                    <div className="use-case">
                      <h3>📜 License</h3>
                      <p>MIT License</p>
                    </div>
                  </div>
                </div>
              </div>

        

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Modern Virtualization</h2>
                  <p className="cta-description">
                    Experience next-generation app virtualization with Multi Run.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/tiann/epic" 
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

export default EpicPage;