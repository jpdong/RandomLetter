import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const ShelterPage: React.FC = () => {
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
                <h1 className="detail-title">Shelter</h1>
                <p className="detail-subtitle">
                  Isolate and clone apps using Android work profile for enhanced privacy.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    Privacy & Security
                  </span>
                  <span className="detail-badge tech-language">
                    Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 2.8k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Key Features</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Work profile-based app isolation</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Enhanced privacy protection</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>App cloning capabilities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Permission management</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Data separation</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Privacy & Security Features</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏢 Work Profile</h3>
                      <p>Leverages Android's work profile for secure app isolation</p>
                    </div>
                    <div className="use-case">
                      <h3>🔒 Data Protection</h3>
                      <p>Complete data separation between isolated apps</p>
                    </div>
                    <div className="use-case">
                      <h3>🛡️ Permission Control</h3>
                      <p>Fine-grained permission management for isolated apps</p>
                    </div>
                    <div className="use-case">
                      <h3>👤 Privacy Shield</h3>
                      <p>Protects personal data from potentially unsafe apps</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>How Multi Run Uses This Technology</h2>
                <p className="app-description">
                  Multi Run incorporates privacy and security concepts from Shelter to provide enhanced 
                  protection when running multiple app instances. The work profile approach inspires 
                  our data isolation and permission management strategies.
                </p>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🔐 Enhanced Privacy</h3>
                    <p>Strong data isolation between different app instances</p>
                  </div>
                  <div className="use-case">
                    <h3>🛠️ Permission Management</h3>
                    <p>Granular control over app permissions and access</p>
                  </div>
                  <div className="use-case">
                    <h3>👥 User Safety</h3>
                    <p>Protection from malicious or untrusted applications</p>
                  </div>
                  <div className="use-case">
                    <h3>🔄 Seamless Integration</h3>
                    <p>User-friendly interface while maintaining security</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Privacy-First App Virtualization</h2>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <a 
                      href="https://github.com/PeterCxy/Shelter" 
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

export default ShelterPage;