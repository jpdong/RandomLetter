import React from 'react';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const ClashOfClansPage: React.FC = () => {
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
              <div className="app-icon-large">🏰</div>
              <div className="app-info">
                <h1>Clash of Clans</h1>
                <p className="app-tagline">Build multiple villages and conquer the realm</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone Clash of Clans?</h2>
                <p>
                  Clash of Clans is the ultimate strategy game where village management meets tactical warfare. 
                  Cloning it opens up incredible strategic possibilities:
                </p>
                <ul className="feature-list">
                  <li><strong>Base Design Mastery</strong> - Create different village layouts for defense and war strategies</li>
                  <li><strong>Troop Specialization</strong> - Develop accounts focused on specific troop combinations</li>
                  <li><strong>Clan War Strategy</strong> - Multiple accounts for coordinated clan war attacks</li>
                  <li><strong>Resource Management</strong> - Optimize different accounts for different resource types</li>
                  <li><strong>Trophy Pushing</strong> - Separate accounts for trophy pushing vs farming</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>Multi Run Benefits for Clash of Clans</h2>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Independent Villages</h3>
                    <p>Each account has completely separate village progress, troops, and resources</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Coordinated Gameplay</h3>
                    <p>Use multiple accounts to support your main clan or create your own clan empire</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Efficient Farming</h3>
                    <p>Maximize resource collection across multiple accounts for faster progression</p>
                  </div>
                  <div className="benefit-card">
                    <h3>War Strategy</h3>
                    <p>Create specialized war accounts with specific troop compositions and attack strategies</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Strategic Village Types</h2>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h3>Village 1: War Machine</h3>
                    <p>Focused on clan wars and competitive gameplay</p>
                    <ul>
                      <li>Maxed war troops and spells</li>
                      <li>Anti-3 star base design</li>
                      <li>High-level defensive structures</li>
                      <li>Strategic trap placement</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Village 2: Resource Farmer</h3>
                    <p>Optimized for maximum resource generation</p>
                    <ul>
                      <li>Maxed collectors and mines</li>
                      <li>Farming base layout</li>
                      <li>Low-level defenses for easier matchmaking</li>
                      <li>Focus on upgrade efficiency</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Village 3: Trophy Pusher</h3>
                    <p>Dedicated to climbing the trophy leaderboard</p>
                    <ul>
                      <li>Strong defensive base design</li>
                      <li>Maxed defensive buildings</li>
                      <li>Strategic trophy range targeting</li>
                      <li>Optimized for defense wins</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Advanced Strategies</h2>
                <div className="advanced-tips">
                  <div className="tip-item">
                    <h4>Clan Empire Building</h4>
                    <p>Use multiple accounts to create and manage your own clan, ensuring active participation and strategic advantages in clan wars.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Donation Network</h4>
                    <p>Create a network of accounts that can donate high-level troops to each other for faster progression.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Event Maximization</h4>
                    <p>Participate in special events across multiple accounts to maximize rewards and unique items.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card strategy">
                <h2>Ready to Build Your Village Empire?</h2>
                <p>
                  Transform your Clash of Clans experience with Multi Run. Create multiple villages, 
                  master different strategies, and become the ultimate clan leader!
                </p>
                <a href="/#download" className="cta-button strategy-button">
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

export default ClashOfClansPage;