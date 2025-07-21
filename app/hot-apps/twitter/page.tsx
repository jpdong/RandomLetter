import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Twitter Multiple Accounts | Multi Run',
  description: 'Manage multiple Twitter accounts for different interests, businesses, or social circles.',
};

const TwitterPage: React.FC = () => {
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
                <div className="detail-icon">🐦</div>
                <h1 className="detail-title">Twitter (X)</h1>
                <p className="detail-subtitle">
                  Manage multiple Twitter accounts for different interests, businesses, or social circles.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Social Media
                  </span>
                  <span className="detail-badge app-category green">
                    2.5M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple Twitter Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separate professional and personal content</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Target different audiences with specialized content</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Manage business accounts for different brands</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Engage with different communities and interests</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Maintain anonymity for sensitive topics</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>Tweet from multiple accounts simultaneously</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Monitor different timelines concurrently</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Manage DMs across all accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Schedule content for different accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Quick account switching without re-login</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Twitter Strategies</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>💼 Professional Networking</h3>
                    <p>Build your professional brand and connect with industry peers</p>
                  </div>
                  <div className="use-case">
                    <h3>🎯 Niche Communities</h3>
                    <p>Engage with specific communities around your interests or expertise</p>
                  </div>
                  <div className="use-case">
                    <h3>📢 Brand Marketing</h3>
                    <p>Promote different brands or products with dedicated accounts</p>
                  </div>
                  <div className="use-case">
                    <h3>📰 News & Commentary</h3>
                    <p>Share news and commentary on current events and trending topics</p>
                  </div>
                  <div className="use-case">
                    <h3>🎨 Creative Showcase</h3>
                    <p>Display your creative work, art, or creative projects</p>
                  </div>
                  <div className="use-case">
                    <h3>🤝 Customer Support</h3>
                    <p>Provide customer support and engage with customers directly</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)'}}>
                  <h2 className="cta-title">Amplify Your Twitter Presence</h2>
                  <p className="cta-description">
                    Download Multi Run and manage multiple Twitter accounts like a social media pro.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Download Multi Run
                    </a>
                    <Link href="/hot-apps" className="cta-button secondary">
                      View More Apps
                    </Link>
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

export default TwitterPage;