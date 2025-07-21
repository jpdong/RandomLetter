import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col col-4">
          <h3>Multi Run</h3>
          <p>Run multiple accounts and apps simultaneously on one device with complete data isolation.</p>
        </div>
        <div className="col col-4">
          <h3>Products</h3>
          <ul>
            <li><Link href="/">Download</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="col col-4">
          <h3>Support</h3>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Multi Run. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
