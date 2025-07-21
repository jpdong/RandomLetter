import React from 'react';
import Link from 'next/link';
import NavBar from '../../src/components/elements/NavBar';
import Footer from '../../src/components/elements/Footer';
import Container from '../../src/components/layout/Container';

export const metadata = {
  title: 'Hot Clone Apps Multiple Accounts | Multi Run',
  description: 'Explore a variety of apps and manage multiple accounts simultaneously with Multi Run App.',
};

const hotApps = [
  // {
  //   id: 'whatsapp-business',
  //   name: 'WhatsApp Business',
  //   description: 'Run multiple WhatsApp Business accounts for different business ventures or client management.',
  //   icon: '💬',
  //   category: 'Communication',
  //   downloads: '2M+'
  // },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Manage multiple Instagram accounts for personal use, business promotion, and content creation.',
    icon: '📸',
    category: 'Social Media',
    downloads: '5M+'
  },
  // {
  //   id: 'telegram',
  //   name: 'Telegram',
  //   description: 'Use multiple Telegram accounts for different purposes while maintaining privacy and organization.',
  //   icon: '✈️',
  //   category: 'Communication',
  //   downloads: '3M+'
  // },
  // {
  //   id: 'tiktok',
  //   name: 'TikTok',
  //   description: 'Create and manage multiple TikTok accounts for different content themes and audiences.',
  //   icon: '🎵',
  //   category: 'Entertainment',
  //   downloads: '4M+'
  // },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Switch between personal and business Facebook accounts seamlessly without logging out.',
    icon: '👥',
    category: 'Social Media',
    downloads: '6M+'
  },
  {
    id: 'twitter',
    name: 'Twitter (X)',
    description: 'Manage multiple Twitter accounts for different interests, businesses, or social circles.',
    icon: '🐦',
    category: 'Social Media',
    downloads: '2.5M+'
  },
  // {
  //   id: 'discord',
  //   name: 'Discord',
  //   description: 'Join multiple Discord servers with different accounts for gaming, communities, and work.',
  //   icon: '🎮',
  //   category: 'Communication',
  //   downloads: '1.8M+'
  // },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Use multiple Spotify accounts for different music preferences and family sharing.',
    icon: '🎶',
    category: 'Entertainment',
    downloads: '3.2M+'
  }
];

const HotAppsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="page-header">
              <h1 className="page-title">Hot Clone Apps</h1>
              <p className="page-subtitle">
                Discover the most popular apps that users clone with Multi Run. 
                Manage multiple accounts efficiently and boost your productivity.
              </p>
            </div>
            
            <div className="app-grid">
              {hotApps.map((app) => (
                <Link 
                  key={app.id} 
                  href={`/hot-apps/${app.id}`}
                  className="app-card"
                >
                  <div className="app-card-header">
                    <div className="app-icon">{app.icon}</div>
                  </div>
                  <h3 className="app-title">{app.name}</h3>
                  <span className="app-category">
                    {app.category}
                  </span>
                  <p className="app-description">{app.description}</p>
                  <div className="app-footer">
                    <div className="app-stats">
                      <span>Downloads: {app.downloads}</span>
                    </div>
                    <span className="app-link">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="cta-section">
              <div className="cta-card blue">
                <h2 className="cta-title">Ready to Clone Your Favorite Apps?</h2>
                <p className="cta-description">
                  Download Multi Run now and start managing multiple accounts with ease.
                </p>
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

export default HotAppsPage;