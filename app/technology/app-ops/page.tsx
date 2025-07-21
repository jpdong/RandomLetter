import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const AppOpsPage: React.FC = () => {
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
                <h1 className="detail-title">App Ops</h1>
                <p className="detail-subtitle">
                  Permission management framework for controlling app access and behavior.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Permission Control
                  </span>
                  <span className="detail-badge tech-language">
                    Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 1.5k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Fine-grained permission control</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>App operation monitoring</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Behavior analysis and control</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Privacy protection mechanisms</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Real-time permission management</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Permission Management</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🔐 Access Control</h3>
                      <p>Granular control over app permissions and system access</p>
                    </div>
                    <div className="use-case">
                      <h3>📊 Monitoring</h3>
                      <p>Real-time tracking of app operations and behaviors</p>
                    </div>
                    <div className="use-case">
                      <h3>🛡️ Privacy Shield</h3>
                      <p>Advanced privacy protection through permission limiting</p>
                    </div>
                    <div className="use-case">
                      <h3>⚙️ Customization</h3>
                      <p>Flexible permission policies for different use cases</p>
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Advanced Permission Management</h2>
                  
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/rikka/AppOps" 
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

export default AppOpsPage;