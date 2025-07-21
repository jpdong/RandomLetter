import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const ParallelSpacePage: React.FC = () => {
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
                <h1 className="detail-title">Parallel Space</h1>
                <p className="detail-subtitle">
                  Open source implementation of parallel app technology for Android devices.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Parallel Apps
                  </span>
                  <span className="detail-badge tech-language">
                    Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 2.1k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Parallel app execution</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Isolated app environments</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Resource management</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Security sandbox</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Details</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏢 Architecture</h3>
                      <p>Lightweight virtualization layer</p>
                    </div>
                    <div className="use-case">
                      <h3>💻 Languages</h3>
                      <p>Java, Android SDK</p>
                    </div>
                    <div className="use-case">
                      <h3>📱 Compatibility</h3>
                      <p>Android 4.4 - 14.0</p>
                    </div>
                    <div className="use-case">
                      <h3>📜 License</h3>
                      <p>Apache 2.0</p>
                    </div>
                  </div>
                </div>
              </div>

          

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Parallel App Technology</h2>
                  <p className="cta-description">
                    Experience seamless parallel app execution with Multi Run.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/xx-dev/ParallelSpace" 
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

export default ParallelSpacePage;