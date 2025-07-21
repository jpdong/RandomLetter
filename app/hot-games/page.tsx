import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Hot Clone Games Multiple Accounts | Multi Run',
  description: 'Discover the most popular games that users clone with Multi Run. Manage multiple accounts and dominate the competition.',
};

const hotGames = [
  // {
  //   id: 'mobile-legends',
  //   name: 'Mobile Legends: Bang Bang',
  //   description: 'Clone multiple Mobile Legends accounts to play different roles and rank up separately. Perfect for gamers with multiple strategies.',
  //   icon: '⚔️',
  //   category: 'MOBA',
  //   downloads: '8M+',
  //   rating: '4.5/5'
  // },
  // {
  //   id: 'free-fire',
  //   name: 'Free Fire',
  //   description: 'Run multiple Free Fire accounts to experiment with different play styles and character builds without affecting your main account.',
  //   icon: '🔫',
  //   category: 'Battle Royale',
  //   downloads: '12M+',
  //   rating: '4.3/5'
  // },
  // {
  //   id: 'pubg-mobile',
  //   name: 'PUBG Mobile',
  //   description: 'Manage separate PUBG Mobile accounts for casual play, competitive gaming, and streaming purposes.',
  //   icon: '🎮',
  //   category: 'Battle Royale',
  //   downloads: '15M+',
  //   rating: '4.4/5'
  // },
  // {
  //   id: 'clash-of-clans',
  //   name: 'Clash of Clans',
  //   description: 'Clone your Clash of Clans village to try different strategies and base layouts without risking your main village.',
  //   icon: '🏰',
  //   category: 'Strategy',
  //   downloads: '6M+',
  //   rating: '4.6/5'
  // },
  {
    id: 'roblox',
    name: 'Roblox',
    description: 'Create multiple Roblox accounts to explore different games and communities without mixing your progress.',
    icon: '🧱',
    category: 'Metaverse',
    downloads: '10M+',
    rating: '4.2/5'
  },
  {
    id: 'growagarden',
    name: 'Grow a Garden',
    description: 'Cultivate multiple virtual gardens with separate accounts to experiment with different plant combinations and landscaping styles.',
    icon: '🌱',
    category: 'Simulation',
    downloads: '3M+',
    rating: '4.6/5'
  }
];

const HotGamesPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="page-header">
              <h1 className="page-title">Hot Clone Games with Multi Run</h1>
              <p className="page-subtitle">
                Discover the most popular games that users clone with Multi Run. 
                Manage multiple gaming accounts and dominate the competition.
              </p>
            </div>
            
            <div className="app-grid">
              {hotGames.map((game) => (
                <Link 
                  key={game.id} 
                  href={`/hot-games/${game.id}`}
                  className="app-card"
                >
                  <div className="app-card-header">
                    <div className="app-icon">{game.icon}</div>
                  </div>
                  <h3 className="app-title">{game.name}</h3>
                  <span className="app-category">
                    {game.category}
                  </span>
                  <p className="app-description">{game.description}</p>
                  <div className="app-footer">
                    <div className="app-stats">
                      <span>Downloads: {game.downloads}</span>
                      <span>Rating: {game.rating}</span>
                    </div>
                    <span className="app-link">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="cta-section">
              <div className="cta-card purple">
                <h2 className="cta-title">Ready to Clone Your Favorite Games with Multi Run?</h2>
                <h3 className="cta-description">
                  Download Multi Run now and start managing multiple accounts with game ease.
                </h3>
                <div className="cta-buttons">
                  <a href="/#download" className="cta-button">
                    Download Multi Run
                  </a>
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

export default HotGamesPage;