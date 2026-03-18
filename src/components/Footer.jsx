import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="scrapbook-footer">
      <p>coded with lots of coffee &lt;3</p>
      <p>© {new Date().getFullYear()} Katrina. All rights reserved.</p>
    </footer>
  );
};

export default Footer;