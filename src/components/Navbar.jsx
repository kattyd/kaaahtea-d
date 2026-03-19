import React, { useState } from 'react';
import '../styles/navbar.css'; // Adjust path if your css is elsewhere!

const Navbar = () => {
  const [isDarkroom, setIsDarkroom] = useState(false);

  const toggleDarkroom = () => {
    setIsDarkroom(!isDarkroom);
    document.body.classList.toggle('darkroom-mode');
  };

  return (
    <header className="scrapbook-header">
      <nav className="navbar">
        {/* The Logo */}
        <div className="logo font-handwritten">
          <a href="/" aria-label="Back to top">kaaahtea.</a>
        </div>

        {/* The Links */}
        <ul className="nav-links font-sans-heavy">
          <li><a href="/#code" className="nav-item">CODE</a></li>
          <li><a href="/#studio" className="nav-item">STUDIO</a></li>
          <li><a href="/#dossier" className="nav-item">DOSSIER</a></li>
          <li><a href="/blog" className="nav-item">BLOG</a></li>
          <li><a href="/#contact" className="nav-item highlight-link">DROP A LINE</a></li>
          <li>
            <button onClick={toggleDarkroom} className="darkroom-toggle font-typewriter">
              {isDarkroom ? '☀ LIGHTS ON' : '☾ DARKROOM'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;