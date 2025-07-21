import React from 'react';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

const MobileLegendsPage: React.FC = () => {
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
              <div className="app-icon-large">⚔️</div>
              <div className="app-info">
                <h1>Mobile Legends: Bang Bang</h1>
                <p className="app-tagline">Master multiple accounts and dominate the Land of Dawn</p>
              </div>
            </div>

            <div className="app-content">
              <section className="app-section">
                <h2>Why Clone Mobile Legends?</h2>
                <p>
                  Mobile Legends is one of the most popular MOBA games globally, and cloning it allows you to:
                </p>
                <ul className="feature-list">
                  <li><strong>Multiple Rank Paths</strong> - Progress different accounts with different hero specialties</li>
                  <li><strong>Role Specialization</strong> - Master one role per account (Tank, Marksman, Mage, etc.)</li>
                  <li><strong>Team Building</strong> - Create multiple accounts for different team compositions</li>
                  <li><strong>Safe Experimentation</strong> - Try new heroes and strategies without affecting main account</li>
                  <li><strong>Regional Play</strong> - Access different server regions with separate accounts</li>
                </ul>
              </section>

              <section className="app-section">
                <h2>How Multi Run Helps</h2>
                <p>
                  Multi Run creates isolated environments for each Mobile Legends instance, ensuring:
                </p>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h3>Complete Separation</h3>
                    <p>Each account runs independently with separate game data and progress</p>
                  </div>
                  <div className="benefit-card">
                    <h3>No Data Conflicts</h3>
                    <p>Prevents account mixing and maintains clean progression paths</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Easy Switching</h3>
                    <p>Quickly switch between accounts without logging out and back in</p>
                  </div>
                  <div className="benefit-card">
                    <h3>Performance Optimization</h3>
                    <p>Optimized resource usage for smooth gameplay across all instances</p>
                  </div>
                </div>
              </section>

              <section className="app-section">
                <h2>Getting Started</h2>
                <ol className="steps-list">
                  <li>Download and install Multi Run from our official website</li>
                  <li>Add Mobile Legends to your cloned apps list</li>
                  <li>Create your first clone and set up a new account</li>
                  <li>Repeat for additional accounts as needed</li>
                  <li>Enjoy seamless switching between your ML accounts!</li>
                </ol>
              </section>
            </div>

            <div className="cta-section">
              <div className="cta-card battle">
                <h2>Ready to Dominate the Land of Dawn?</h2>
                <p>
                  Join millions of players who use Multi Run to manage multiple Mobile Legends accounts. 
                  Start your journey to becoming a multi-account legend today!
                </p>
                <a href="/#download" className="cta-button battle-button">
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

export default MobileLegendsPage;