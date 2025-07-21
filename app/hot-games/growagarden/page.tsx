import React from 'react';
import Footer from '../../../src/components/elements/Footer';
import NavBar from '../../../src/components/elements/NavBar';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'Grow a Garden Multiple Accounts | Multi Run',
  description: 'Cultivate multiple virtual gardens with unique identities and creative styles.',
};

const GrowGardenPage: React.FC = () => {
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
              <div className="app-icon-large">🌱</div>
              <div className="app-info">
                <h1>Grow a Garden</h1>
                <p className="app-tagline">Cultivate multiple virtual gardens with unique identities and creative styles</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone Grow a Garden?</h2>
                <p>
                  Grow a Garden is a peaceful yet engaging simulation game where creativity meets strategy.
                  Cloning it allows you to explore unlimited gardening possibilities and create distinct
                  botanical masterpieces without interfering with your main garden's progress.
                </p>
                <ul className="feature-list">
                  <li><strong>Design Diversity</strong> - Create gardens with completely different themes and aesthetics</li>
                  <li><strong>Plant Experimentation</strong> - Test various plant combinations and growth strategies</li>
                  <li><strong>Seasonal Specialization</strong> - Focus on different seasons and events across accounts</li>
                  <li><strong>Community Engagement</strong> - Participate in various gardening communities and competitions</li>
                  <li><strong>Resource Optimization</strong> - Maximize rewards and achievements across multiple gardens</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>Multi Run Benefits for Grow a Garden</h2>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Creative Freedom</h3>
                    <p>Design gardens with completely different themes without compromising your vision</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Seasonal Mastery</h3>
                    <p>Specialize each account for different seasonal events and plant types</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Trading Networks</h3>
                    <p>Create accounts for different plant trading and resource exchange strategies</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Achievement Hunting</h3>
                    <p>Maximize achievements and rewards across multiple specialized gardens</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Garden Specialization Strategies</h2>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h3>Garden 1: Zen Paradise</h3>
                    <p>Focus on peaceful, meditative garden designs with traditional elements</p>
                    <ul>
                      <li>Bonsai trees and bamboo gardens</li>
                      <li>Water features and stone arrangements</li>
                      <li>Meditation spaces and zen aesthetics</li>
                      <li>Seasonal cherry blossom displays</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Garden 2: Tropical Oasis</h3>
                    <p>Create lush tropical gardens with exotic plants and vibrant colors</p>
                    <ul>
                      <li>Exotic fruit trees and tropical flowers</li>
                      <li>Colorful bird and butterfly attractions</li>
                      <li>Waterfalls and tropical pools</li>
                      <li>Year-round blooming paradise</li>
                    </ul>
                  </div>
                  <div className="strategy-card">
                    <h3>Garden 3: Modern Botanical</h3>
                    <p>Design contemporary gardens with cutting-edge plant technology</p>
                    <ul>
                      <li>Genetically modified plants and hybrids</li>
                      <li>Automated irrigation and lighting systems</li>
                      <li>Sustainable and eco-friendly designs</li>
                      <li>Scientific plant breeding experiments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Popular Garden Themes</h2>
                <div className="popular-games-grid">
                  <div className="game-card">
                    <h4>Rose Garden Collection</h4>
                    <p>Master every rose variety and create stunning rose gardens</p>
                  </div>
                  <div className="game-card">
                    <h4>Vegetable Paradise</h4>
                    <p>Focus on growing rare vegetables and maximizing harvest yields</p>
                  </div>
                  <div className="game-card">
                    <h4>Butterfly Sanctuary</h4>
                    <p>Create gardens specifically designed to attract rare butterflies</p>
                  </div>
                  <div className="game-card">
                    <h4>Herbal Apothecary</h4>
                    <p>Specialize in medicinal herbs and natural remedy gardens</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Advanced Strategies</h2>
                <div className="advanced-tips">
                  <div className="tip-item">
                    <h4>Cross-Pollination Networks</h4>
                    <p>Use separate accounts to create plant breeding networks and discover new hybrid varieties.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Seasonal Event Maximization</h4>
                    <p>Dedicate accounts to different seasonal events for maximum limited-time rewards and achievements.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Community Competition Strategy</h4>
                    <p>Enter different garden competitions with specialized accounts for various categories and themes.</p>
                  </div>
                  <div className="tip-item">
                    <h4>Resource Trading Hub</h4>
                    <p>Create accounts focused on different resource types for optimal trading and exchange opportunities.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card green">
                <h2>Ready to Grow Your Garden Empire?</h2>
                <p>
                  Transform your gardening experience with Multi Run. Create multiple gardens,
                  explore endless creative possibilities, and become the ultimate virtual gardener!
                </p>
                <a href="/#download" className="cta-button green-button">
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

export default GrowGardenPage;