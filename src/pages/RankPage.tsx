import React from 'react';
import Container from '../components/layout/Container';

const apps = [
  { rank: 1, name: 'WhatsApp', description: 'Popular messaging app' },
  { rank: 2, name: 'Instagram', description: 'Social media platform' },
  { rank: 3, name: 'Facebook', description: 'Social networking service' },
  { rank: 4, name: 'TikTok', description: 'Short video platform' },
  { rank: 5, name: 'Telegram', description: 'Secure messaging app' },
];

const RankPage: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="page-content">
          <h1>Top 5 Cloned Applications</h1>
          <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
            Here are the most popular apps that users clone with Multi Run.
          </p>
          
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {apps.map(app => (
              <div key={app.rank} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '20px', 
                marginBottom: '16px',
                background: '#f9f9f9', 
                borderRadius: '10px',
                textAlign: 'left'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: '#1890ff', 
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  fontWeight: 'bold'
                }}>
                  {app.rank}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#2c3e50' }}>{app.name}</h3>
                  <p style={{ margin: 0, color: '#666' }}>{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RankPage;
