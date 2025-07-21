import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const WhatsAppBusinessPage: React.FC = () => {
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
                <div className="detail-icon">💬</div>
                <h1 className="detail-title">WhatsApp Business</h1>
                <p className="detail-subtitle">
                  Run multiple WhatsApp Business accounts for different business ventures or client management.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Communication
                  </span>
                  <span className="detail-badge app-category green">
                    2M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Clone WhatsApp Business?</h2>
                  <p className="app-description">
                    WhatsApp Business is essential for modern business communication. With Multi Run, 
                    you can manage multiple business accounts simultaneously, perfect for:
                  </p>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Running multiple business ventures</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Managing different client portfolios</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Separating personal and business communications</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Testing different business strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Key Features</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🏢 Business Profiles</h3>
                      <p>Create professional business profiles with contact info, location, and business hours.</p>
                    </div>
                    <div className="use-case">
                      <h3>🤖 Automated Messages</h3>
                      <p>Set up welcome messages, away messages, and quick replies.</p>
                    </div>
                    <div className="use-case">
                      <h3>📱 Catalog Showcase</h3>
                      <p>Display your products and services directly in WhatsApp.</p>
                    </div>
                    <div className="use-case">
                      <h3>📊 Analytics</h3>
                      <p>Track message statistics and customer engagement.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🛒 E-commerce Businesses</h3>
                    <p>Manage customer inquiries, send order updates, and provide support across multiple stores.</p>
                  </div>
                  <div className="use-case">
                    <h3>🔧 Service Providers</h3>
                    <p>Separate different service offerings and maintain professional communication channels.</p>
                  </div>
                  <div className="use-case">
                    <h3>💼 Freelancers</h3>
                    <p>Keep different client projects organized with dedicated business accounts.</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)'}}>
                  <h2 className="cta-title">Ready to Scale Your Business?</h2>
                  <p className="cta-description">
                    Download Multi Run and manage multiple WhatsApp Business accounts efficiently.
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

export default WhatsAppBusinessPage;