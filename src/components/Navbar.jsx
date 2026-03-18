import React from 'react';
import '../styles/navbar.css'; // Adjust path if your css is elsewhere!

const Navbar = () => {
  return (
    <header className="scrapbook-header">
      <nav className="navbar">
        {/* The Logo */}
        <div className="logo font-handwritten">
          <a href="#top" aria-label="Back to top">kaaahtea.</a>
        </div>

        {/* The Links */}
        <ul className="nav-links font-sans-heavy">
          <li><a href="#code" className="nav-item">THE CODE</a></li>
          <li><a href="#studio" className="nav-item">THE STUDIO</a></li>
          <li><a href="#dossier" className="nav-item">THE DOSSIER</a></li>
          <li><a href="#contact" className="nav-item highlight-link">DROP A LINE</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;