import React from 'react';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const FreeFirePage: React.FC = () => {
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
              <div className="app-icon-large">🔫</div>
              <div className="app-info">
                <h1>Free Fire</h1>
                <p className="app-tagline">Survive, battle, and win with multiple accounts</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone Free Fire?</h2>
                <p>
                  Free Fire is Garena's popular battle royale game, and cloning it gives you strategic advantages:
                </p>
                <ul className="feature-list">
                  <li><strong>Different Play Styles</strong> - Master aggressive rushing on one account, tactical gameplay on another</li>
                  <li><strong>Squad Coordination</strong> - Create accounts for different squad roles and strategies</li>
                  <li><strong>Rank Experimentation</strong> - Try new approaches without risking your main rank</li>
                  <li><strong>Character Builds</strong> - Optimize different character combinations across accounts</li>
                  <li><strong>Event Farming</strong> - Maximize rewards by participating in events with multiple accounts</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>Multi Run Benefits for Free Fire</h2>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Instant Account Switching</h3>
                    <p>Switch between Free Fire accounts in seconds without re-login</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Separate Game Data</h3>
                    <p>Each account maintains its own skins, rank, and progress independently</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Battery Optimization</h3>
                    <p>Smart resource management prevents battery drain from multiple instances</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Anti-Ban Protection</h3>
                    <p>Safe cloning technology prevents detection and account bans</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Pro Tips for Free Fire Clones</h2>
                <div className="tips-grid">
                  <div className="tip-card">
                    <h3>Account 1: Rank Push</h3>
                    <p>Focus on competitive ranked play with your best character builds</p>
                  </div>
                  <div className="tip-card">
                    <h3>Account 2: Casual Fun</h3>
                    <p>Experiment with new weapons and strategies without pressure</p>
                  </div>
                  <div className="tip-card">
                    <h3>Account 3: Squad Leader</h3>
                    <p>Dedicated account for coordinating with your regular squad</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card battle-royale">
                <h2>Ready to Master the Battlegrounds?</h2>
                <p>
                  Download Multi Run now and create your Free Fire empire. 
                  Multiple accounts, endless strategies, ultimate victory!
                </p>
                <a href="/#download" className="cta-button battle-royale-button">
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

export default FreeFirePage;