import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const AndroidContainerPage: React.FC = () => {
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
                <h1 className="detail-title">Android Container</h1>
                <p className="detail-subtitle">
                  Lightweight container technology for running isolated Android applications.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Containerization
                  </span>
                  <span className="detail-badge tech-language">
                    C++/Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 956 Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Lightweight containerization technology</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Isolated application environments</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Resource management and control</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>High performance execution</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>System-level security</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Technical Details</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏗️ Architecture</h3>
                      <p>Container-based virtualization with minimal overhead</p>
                    </div>
                    <div className="use-case">
                      <h3>⚡ Performance</h3>
                      <p>Near-native performance with resource isolation</p>
                    </div>
                    <div className="use-case">
                      <h3>🔒 Security</h3>
                      <p>Sandboxed execution environment for applications</p>
                    </div>
                    <div className="use-case">
                      <h3>🛠️ Implementation</h3>
                      <p>Advanced C++ core with Java API layer</p>
                    </div>
                  </div>
                </div>
              </div>

          

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Experience Container Technology</h2>
                
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/container4android/AndroidContainer" 
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

export default AndroidContainerPage;