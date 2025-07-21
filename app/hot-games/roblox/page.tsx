import React from 'react';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Roblox Multiple Accounts | Multi Run',
  description: 'Discover the most popular Roblox clone games that users clone with Multi Run. Manage multiple accounts and dominate the competition.',
};

const RobloxPage: React.FC = () => {
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
              <div className="app-icon-large">🧱</div>
              <div className="app-info">
                <h1>Roblox</h1>
                <p className="app-tagline">Explore infinite worlds with multiple creative identities</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone Roblox?</h2>
                <p>
                  Roblox is the ultimate metaverse platform where imagination meets creation. 
                  Cloning it opens up unlimited possibilities for exploration and creativity:
                </p>
                <ul className="feature-list">
                  <li><strong>Diverse Gaming Experiences</strong> - Create accounts for different game genres and communities</li>
                  <li><strong>Creator Identity</strong> - Separate accounts for game development vs gameplay</li>
                  <li><strong>Social Circles</strong> - Build different friend groups across various games</li>
                  <li><strong>Achievement Hunting</strong> - Maximize achievements across different games and experiences</li>
                  <li><strong>Trading Networks</strong> - Create accounts for different trading and marketplace strategies</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>Multi Run Benefits for Roblox</h2>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Unlimited Worlds</h3>
                    <p>Access different Roblox experiences simultaneously across multiple accounts</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Creative Freedom</h3>
                    <p>Separate accounts for game development, testing, and regular gameplay</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Social Flexibility</h3>
                    <p>Join different communities and friend groups without mixing identities</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Economic Opportunities</h3>
                    <p>Optimize trading and marketplace activities across multiple accounts</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Strategic Account Types</h2>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h3>Account 1: Game Developer</h3>
                    <p>Focus on creating and publishing your own Roblox games</p>
                    <ul>
                      <li>Roblox Studio development</li>
                      <li>Game testing and updates</li>
                      <li>Developer community engagement</li>
                      <li>Revenue optimization</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Account 2: Social Gamer</h3>
                    <p>Connect with friends and explore popular games together</p>
                    <ul>
                      <li>Popular game exploration</li>
                      <li>Friend group management</li>
                      <li>Social event participation</li>
                      <li>Community building</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Account 3: Competitive Player</h3>
                    <p>Master competitive games and climb leaderboards</p>
                    <ul>
                      <li>Competitive game focus</li>
                      <li>Skill development</li>
                      <li>Tournament participation</li>
                      <li>Achievement hunting</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Popular Roblox Games to Clone</h2>
                <div className="popular-games-grid">
                  <div className="game-card">
                    <h4>Adopt Me!</h4>
                    <p>Create multiple accounts for pet trading and collection</p>
                  </div>
                  <div className="game-card">
                    <h4>Brookhaven RP</h4>
                    <p>Build different character roles and storylines</p>
                  </div>
                  <div className="game-card">
                    <h4>Blox Fruits</h4>
                    <p>Master different fighting styles and fruit combinations</p>
                  </div>
                  <div className="game-card">
                    <h4>Pet Simulator X</h4>
                    <p>Maximize pet collection and trading opportunities</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Advanced Strategies</h2>
                <div className="advanced-tips">
                  <div className="tip-item">
                    <h4>Game Development Testing</h4>
                    <p>Use separate accounts for testing your games from both developer and player perspectives.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Trading Networks</h4>
                    <p>Create accounts specializing in different types of items (pets, vehicles, accessories) for optimal trading.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Community Management</h4>
                    <p>Manage multiple Roblox groups and communities across different accounts for broader reach.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card metaverse">
                <h2>Ready to Explore Infinite Worlds?</h2>
                <p>
                  Transform your Roblox experience with Multi Run. Create multiple identities, 
                  explore endless possibilities, and become a master of the metaverse!
                </p>
                <a href="/#download" className="cta-button metaverse-button">
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

export default RobloxPage;