import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Spotify Multiple Accounts | Multi Run',
  description: 'Manage multiple Spotify accounts for different music preferences and family sharing.',
};

const SpotifyPage: React.FC = () => {
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
                <div className="detail-icon">🎶</div>
                <h1 className="detail-title">Spotify</h1>
                <p className="detail-subtitle">
                  Use multiple Spotify accounts for different music preferences and family sharing.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge app-category">
                    Entertainment
                  </span>
                  <span className="detail-badge app-category green">
                    3.2M+ Downloads
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Why Use Multiple Spotify Accounts?</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check">✓</span>
                      <span>Separate music preferences for different moods</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Manage family accounts and shared playlists</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Keep work and personal music libraries separate</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Access region-specific content with different accounts</span>
                    </li>
                    <li>
                      <span className="check">✓</span>
                      <span>Curate specialized playlists for different purposes</span>
                    </li>
                  </ul>
                </div>

                <div className="detail-section">
                  <h2>Multi Run Benefits</h2>
                  <ul className="detail-list">
                    <li>
                      <span className="check blue">✓</span>
                      <span>Switch between music libraries instantly</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Maintain separate listening histories</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Access multiple premium subscriptions</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Manage playlists across different accounts</span>
                    </li>
                    <li>
                      <span className="check blue">✓</span>
                      <span>Keep recommendations algorithm separate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="detail-section">
                <h2>Music Management Strategies</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎵 Genre Separation</h3>
                    <p>Keep different music genres in separate accounts for pure discovery</p>
                  </div>
                  <div className="use-case">
                    <h3>👨‍👩‍👧‍👦 Family Sharing</h3>
                    <p>Manage family members' accounts and create shared family playlists</p>
                  </div>
                  <div className="use-case">
                    <h3>💼 Work & Focus</h3>
                    <p>Maintain a dedicated account for work music and concentration playlists</p>
                  </div>
                  <div className="use-case">
                    <h3>🏃‍♀️ Activity-Based</h3>
                    <p>Create accounts for specific activities like workout, study, or relaxation</p>
                  </div>
                  <div className="use-case">
                    <h3>🌍 Regional Content</h3>
                    <p>Access different regional music libraries and local artist content</p>
                  </div>
                  <div className="use-case">
                    <h3>🎧 Audio Quality</h3>
                    <p>Test different subscription tiers and audio quality settings</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <div className="cta-card" style={{background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)'}}>
                  <h2 className="cta-title">Amplify Your Music Experience</h2>
                  <p className="cta-description">
                    Download Multi Run and enjoy seamless access to multiple Spotify accounts.
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

export default SpotifyPage;