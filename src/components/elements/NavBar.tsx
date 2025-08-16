import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => (
  <>
    <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-checkbox" />

    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Random Letter Logo" />
          <span className="logo-text">Random Letter Generator</span>
        </Link>

        <nav>
          <ul className="nav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/random-name-generator">Random Names</Link></li>
            <li><Link href="/random-address-generator">Random Address</Link></li>
            <li><Link href="/yes-no-wheel">Yes/No Wheel</Link></li>
            <li><Link href="/glitch-text-generator">Glitch Text Generator</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <label htmlFor="mobile-menu-toggle" className="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </label>


      </div>
    </header>

    {/* Mobile Navigation Overlay */}
    <label htmlFor="mobile-menu-toggle" className="mobile-nav-overlay"></label>

    {/* Mobile Navigation Menu */}
    <nav className="mobile-nav">
      <div className="mobile-nav-header">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Random Letter Logo" width="32" height="32" />
          <span className="logo-text">Random Letter Generator</span>
        </Link>
        <label htmlFor="mobile-menu-toggle" className="mobile-nav-close" aria-label="Close mobile menu">
          ×
        </label>
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/random-name-generator">Random Names</Link></li>
        <li><Link href="/random-address-generator">Random Address</Link></li>
        <li><Link href="/yes-no-wheel">Yes/No Wheel</Link></li>
        <li><Link href="/glitch-text-generator">Glitch Text Generator</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </>
);

export default NavBar;
