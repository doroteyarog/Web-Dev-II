import React from 'react';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

export default function Footer() {
  return (
    <footer className="page-footer">
      <nav className="footer-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
      <p className="footer-copy">Copyright &copy; 2026 Erased Tapes</p>
      <div className="footer-social-links">
        <a href="#facebook" aria-label="Facebook">
          <img src={fbIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="#instagram" aria-label="Instagram">
          <img src={instaIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="#twitter" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}