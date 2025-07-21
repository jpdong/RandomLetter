import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Instagram Multiple Accounts | Multi Run',
  description: 'Manage multiple Instagram accounts for personal use, business promotion, and content creation.',
};

const InstagramPage: React.FC = () => {
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
                <div className="detail-icon">📸</div>
                <h1 className="detail-title">Instagram</h1>
                <p className="detail-subtitle">
                  Manage multiple Instagram accounts for personal use, business promotion, and content creation.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Social Media
                  </span>
                  <span className="detail-badge app-category green">
                    5M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Clone Instagram?</h2>
                  <p className="app-description">
                    Instagram is the leading platform for visual storytelling and brand building. 
                    With Multi Run, manage multiple Instagram accounts for:
                  </p>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Personal and business content separation</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Different niche audiences and themes</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Brand management across multiple businesses</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Content testing and A/B strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Key Features</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>📱 Stories & Reels</h3>
                      <p>Share engaging short-form content and behind-the-scenes moments.</p>
                    </div>
                    <div className="use-case">
                      <h3>💼 Business Tools</h3>
                      <p>Access insights, promote posts, and manage business inquiries.</p>
                    </div>
                    <div className="use-case">
                      <h3>🛍️ Shopping Features</h3>
                      <p>Tag products, create shop sections, and drive sales directly.</p>
                    </div>
                    <div className="use-case">
                      <h3>🎨 Creator Studio</h3>
                      <p>Schedule posts, track performance, and manage content efficiently.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>Popular Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎬 Content Creators</h3>
                    <p>Separate personal life from content creation with dedicated accounts for different niches.</p>
                  </div>
                  <div className="use-case">
                    <h3>🏪 Small Businesses</h3>
                    <p>Manage multiple business accounts for different products, locations, or target markets.</p>
                  </div>
                  <div className="use-case">
                    <h3>⭐ Influencers</h3>
                    <p>Test different content strategies and maintain multiple brand partnerships.</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)'}}>
                  <h2 className="cta-title">Ready to Clone Instagram?</h2>
                  <p className="cta-description">
                    Download Multi Run now and start managing multiple Instagram accounts like a pro.
                  </p>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Clone with Multi Run
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

export default InstagramPage;