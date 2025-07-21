import React from 'react';
import Link from 'next/link';
import NavBar from '../../../src/components/elements/NavBar';
import Footer from '../../../src/components/elements/Footer';
import Container from '../../../src/components/layout/Container';

export const metadata = {
  title: 'VirtualApp Multiple Accounts | Multi Run',
  description: 'A powerful Android app virtualization framework that allows running multiple app instances.',
};

const VirtualAppPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <Container>
          <div className="py-16">
            <div className="mb-8">
              <Link href="/technology" className="back-link">
                ← Back to Technology
              </Link>
            </div>
            
            <div className="detail-page">
              <div className="detail-header">
                <h1 className="detail-title">VirtualApp</h1>
                <p className="detail-subtitle">
                  A powerful Android app virtualization framework that allows running multiple app instances.
                </p>
                <div className="detail-badges">
                  <span className="detail-badge tech-category">
                    App Virtualization
                  </span>
                  <span className="detail-badge tech-language">
                    Java
                  </span>
                  <span className="detail-badge tech-stars">
                    ⭐ 8.5k Stars
                  </span>
                </div>
              </div>

              <div className="detail-content">
                <div className="detail-section">
                  <h2>Overview</h2>
                  <p className="app-description">
                    VirtualApp is a pioneering open-source Android application virtualization engine. 
                    It creates a virtual space within Android apps, allowing multiple app instances 
                    to run simultaneously without requiring root access.
                  </p>
                  <p className="app-description">
                    This groundbreaking technology forms the foundation for many app cloning and 
                    parallel space solutions, including Multi Run's core functionality.
                  </p>
                </div>

                <div className="detail-section">
                  <h2>Key Technical Features</h2>
                  <div className="use-cases">
                    <div className="use-case">
                      <h3>🔒 App Sandboxing</h3>
                      <p>Isolates apps in separate virtual environments for security and stability.</p>
                    </div>
                    <div className="use-case">
                      <h3>📱 No Root Required</h3>
                      <p>Works on unrooted devices through advanced hooking mechanisms.</p>
                    </div>
                    <div className="use-case">
                      <h3>🔧 Plugin Architecture</h3>
                      <p>Modular design allows custom plugins and extensions.</p>
                    </div>
                    <div className="use-case">
                      <h3>⚡ Performance Optimized</h3>
                      <p>Efficient resource management and minimal overhead.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>Architecture Highlights</h2>
                <div className="use-cases">
                  <div className="use-case">
                    <h3>🎯 Dynamic Hooking System</h3>
                    <p>Intercepts and redirects system calls to create isolated app environments.</p>
                  </div>
                  <div className="use-case">
                    <h3>💾 Virtual File System</h3>
                    <p>Creates separate storage spaces for each virtualized app instance.</p>
                  </div>
                  <div className="use-case">
                    <h3>⚙️ Process Management</h3>
                    <p>Manages multiple app processes within a single host application.</p>
                  </div>
                  <div className="use-case">
                    <h3>🛡️ Permission Handling</h3>
                    <p>Sophisticated permission mapping and isolation between virtual apps.</p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h2>Use Cases & Applications</h2>
                <ul className="detail-list">
                  <li>
                    <span className="check">✓</span>
                    <span>Dual app functionality for social media and messaging</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Enterprise app isolation and security</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>App testing and development environments</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Privacy protection through app sandboxing</span>
                  </li>
                  <li>
                    <span className="check">✓</span>
                    <span>Game account management and progression separation</span>
                  </li>
                </ul>
              </div>

              <div className="cta-section">
                <div className="cta-card purple">
                  <h2 className="cta-title">Core Virtualization Technology</h2>
                  <div className="cta-buttons">
                    <a href="/#download" className="cta-button">
                      Try Multi Run
                    </a>
                    <a 
                      href="https://github.com/asLody/VirtualApp" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button secondary"
                    >
                      View on GitHub
                    </a>
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

export default VirtualAppPage;