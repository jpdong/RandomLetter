import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const DiscordPage: React.FC = () => {
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
                <div className="detail-icon">🎮</div>
                <h1 className="detail-title">Discord</h1>
                <p className="detail-subtitle">
                  Join multiple Discord servers with different accounts for gaming, communities, and work.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Communication
                  </span>
                  <span className="detail-badge app-category green">
                    1.8M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple Discord Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separate gaming and professional communities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Join servers with different personas or identities</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Manage multiple gaming groups or guilds</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Keep work and personal Discord separate</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Test bots and server setups safely</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>Be online in multiple servers simultaneously</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Manage voice chats across different accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Separate notifications for each account</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Quick switching between gaming and work Discord</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Private message management across accounts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Discord Use Cases</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎮 Gaming Communities</h3>
                    <p>Join different gaming servers for various games and tournaments</p>
                  </div>
                  <div className="use-case">
                    <h3>💼 Professional Teams</h3>
                    <p>Collaborate with work teams and professional communities</p>
                  </div>
                  <div className="use-case">
                    <h3>🎓 Educational Groups</h3>
                    <p>Participate in study groups, coding bootcamps, and learning communities</p>
                  </div>
                  <div className="use-case">
                    <h3>🎨 Creative Collaborations</h3>
                    <p>Work with artists, musicians, and content creators</p>
                  </div>
                  <div className="use-case">
                    <h3>🤖 Bot Development</h3>
                    <p>Test and develop Discord bots with separate test accounts</p>
                  </div>
                  <div className="use-case">
                    <h3>🌐 Community Management</h3>
                    <p>Moderate multiple servers with different administrative accounts</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #5865f2 0%, #3c45a5 100%)'}}>
                  <h2 className="cta-title">Level Up Your Discord Experience</h2>
                  <p className="cta-description">
                    Download Multi Run and manage multiple Discord accounts for all your communities.
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

export default DiscordPage;