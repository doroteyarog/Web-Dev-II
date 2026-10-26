import React from 'react';
import authorImg from '../assets/profile_picture.jpg';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

export default function AuthorBio() {
  return (
    <section className="author-section">
      <div className="author-text">
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. 
          Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, 
          diam commodo interdum sapien magnis.
        </p>
      </div>

      <div className="author-media">
        <div className="author-photo-wrapper">
          <img src={authorImg} alt="Author Portrait" className="author-photo" />
        </div>
        <div className="author-social-links">
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
      </div>
    </section>
  );
}