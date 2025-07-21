import React from 'react';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const PubgMobilePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="back-button-container">
              <a href="/hot-games" className="back-button">
                <span className="back-arrow">←</span>
                Back to Hot Games
              </a>
            </div>
            <div className="app-detail-header">
              <div className="app-icon-large">🎮</div>
              <div className="app-info">
                <h1>PUBG Mobile</h1>
                <p className="app-tagline">Conquer the battlegrounds with multiple strategic accounts</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone PUBG Mobile?</h2>
                <p>
                  PUBG Mobile offers intense battle royale experiences, and cloning it unlocks new strategic possibilities:
                </p>
                <ul className="feature-list">
                  <li><strong>Tactical Diversity</strong> - Develop different play styles: aggressive, tactical, and support roles</li>
                  <li><strong>Map Mastery</strong> - Specialize in different maps with dedicated accounts</li>
                  <li><strong>Squad Chemistry</strong> - Build perfect squad combinations across multiple accounts</li>
                  <li><strong>Rank Protection</strong> - Experiment with new strategies without risking your main rank</li>
                  <li><strong>Tournament Prep</strong> - Create practice accounts for competitive preparation</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>Multi Run Features for PUBG Mobile</h2>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Seamless Account Management</h3>
                    <p>Instantly switch between PUBG Mobile accounts with zero downtime</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Isolated Progression</h3>
                    <p>Each account maintains separate rank, skins, achievements, and stats</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Optimized Performance</h3>
                    <p>Advanced resource management for smooth gameplay across all instances</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Anti-Detection Technology</h3>
                    <p>Stay undetected with our advanced anti-ban protection system</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Strategic Account Setup</h2>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h3>Account 1: Competitive Rank</h3>
                    <p>Your serious competitive account for pushing rank and tournaments</p>
                    <ul>
                      <li>Focus on meta weapons and strategies</li>
                      <li>Prioritize rank advancement</li>
                      <li>Join competitive squads</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Account 2: Casual Gaming</h3>
                    <p>Relaxed account for fun gameplay and trying new approaches</p>
                    <ul>
                      <li>Experiment with off-meta weapons</li>
                      <li>Try different landing strategies</li>
                      <li>Play with friends casually</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Account 3: Content Creation</h3>
                    <p>Dedicated account for streaming and content creation</p>
                    <ul>
                      <li>Showcase different gameplay styles</li>
                      <li>Create tutorial content</li>
                      <li>Build audience engagement</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card pubg">
                <h2>Ready to Rule the Battlegrounds?</h2>
                <p>
                  Transform your PUBG Mobile experience with Multi Run. Multiple accounts, 
                  endless strategies, and ultimate battlefield dominance await you.
                </p>
                <a href="/#download" className="cta-button pubg-button">
                  Download Multi Run Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default PubgMobilePage;