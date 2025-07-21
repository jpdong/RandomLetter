import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Facebook Multiple Accounts | Multi Run',
  description: 'Manage multiple Facebook accounts for personal use, business promotion, and content creation.',
};

const FacebookPage: React.FC = () => {
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
                <div className="detail-icon">👥</div>
                <h1 className="detail-title">Facebook</h1>
                <p className="detail-subtitle">
                  Switch between personal and business Facebook accounts seamlessly without logging out.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Social Media
                  </span>
                  <span className="detail-badge app-category green">
                    6M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple Facebook Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separate personal and business identities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Manage multiple business pages and accounts</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Keep different social circles organized</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Test marketing strategies across accounts</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Maintain privacy between different aspects of life</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>No more logging in and out constantly</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Switch between accounts instantly</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Isolated notifications for each account</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Secure data separation</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Simultaneous access to multiple accounts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>👤 Personal & Professional</h3>
                    <p>Keep your personal life separate from your professional networking</p>
                  </div>
                  <div className="use-case">
                    <h3>🏢 Business Management</h3>
                    <p>Manage multiple business accounts for different ventures or clients</p>
                  </div>
                  <div className="use-case">
                    <h3>📈 Marketing & Analytics</h3>
                    <p>Test different marketing strategies and track performance across accounts</p>
                  </div>
                  <div className="use-case">
                    <h3>👨‍👩‍👧‍👦 Family Management</h3>
                    <p>Manage family member accounts or community group pages</p>
                  </div>
                  <div className="use-case">
                    <h3>🌍 Regional Presence</h3>
                    <p>Maintain different accounts for different geographical regions</p>
                  </div>
                  <div className="use-case">
                    <h3>🎭 Creative Projects</h3>
                    <p>Separate accounts for different creative projects or brands</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)'}}>
                  <h2 className="cta-title">Ready to Manage Multiple Facebook Accounts?</h2>
                  <p className="cta-description">
                    Download Multi Run and seamlessly switch between your Facebook accounts without the hassle.
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

export default FacebookPage;