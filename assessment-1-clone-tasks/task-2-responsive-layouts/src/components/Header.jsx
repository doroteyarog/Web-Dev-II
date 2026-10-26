import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand-logo">watch.it</a>
        
        <nav className="header-nav">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>

        <button type="button" className="btn-search">SEARCH</button>
      </div>
    </header>
  );
}