import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const TelegramPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/hot-apps" className="back-link blue">
                ← Back to Hot Apps
              </Link>
            </div>
            
            <div className="detail-page">
              <div className="detail-header">
                <div className="detail-icon">✈️</div>
                <h1 className="detail-title">Telegram</h1>
                <p className="detail-subtitle">
                  Use multiple Telegram accounts for different purposes while maintaining privacy and organization.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Communication
                  </span>
                  <span className="detail-badge app-category green">
                    3M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple Telegram Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separate personal and business communications</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Join different communities with different identities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Maintain privacy across different social circles</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Organize channels and groups by purpose</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Enhanced security with separate accounts</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>Run multiple Telegram accounts simultaneously</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>No need to log in/out constantly</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Isolated data and notifications</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Easy switching between accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Secure virtualization technology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>💼 Business Communication</h3>
                    <p>Keep business chats separate from personal conversations</p>
                  </div>
                  <div className="use-case">
                    <h3>📱 Privacy Management</h3>
                    <p>Maintain anonymity in different communities</p>
                  </div>
                  <div className="use-case">
                    <h3>📊 Channel Management</h3>
                    <p>Manage multiple channels with different accounts</p>
                  </div>
                  <div className="use-case">
                    <h3>🌍 Regional Accounts</h3>
                    <p>Use different accounts for different regions</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card blue">
                  <h2 className="cta-title">Ready to Clone Telegram?</h2>
                  <p className="cta-description">
                    Download Multi Run now and start managing multiple Telegram accounts effortlessly.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
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

export default TelegramPage;