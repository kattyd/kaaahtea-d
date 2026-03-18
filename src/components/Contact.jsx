import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="postcard">
        {/* Decorative Postcard Elements */}
        <div className="stamp"></div>
        <div className="postmark font-typewriter">JOS - 2026</div>

        <div className="postcard-content">
          <div className="postcard-left">
            <h3 className="font-handwritten text-large">dear katrina,</h3>
            
            <form className="scrapbook-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label className="font-typewriter">My name is</label>
                <input type="text" placeholder="your name here..." required />
              </div>
              
              <div className="input-group">
                <label className="font-typewriter">and you can reach me at</label>
                <input type="email" placeholder="your email address..." required />
              </div>
              
              <div className="input-group message-group">
                <label className="font-typewriter">I wanted to say:</label>
                <textarea placeholder="let's build something cool..." rows="4" required></textarea>
              </div>

              <button type="submit" className="send-btn font-sans-heavy">SEND IT ↗</button>
            </form>
          </div>

          <div className="postcard-right">
            <div className="divider-line"></div>
            <div className="address-block">
              <h4 className="font-sans-heavy">SEND TO:</h4>
              <p className="font-typewriter">Katrina (kaaahtea)</p>
              <p className="font-typewriter">Full-Stack Dev &</p>
              <p className="font-typewriter">Multimedia Creative</p>
              <p className="font-typewriter">The Internet</p>
              
              <div className="social-links font-handwritten">
                <a href="https://github.com/kattyd" target="_blank" rel="noreferrer">github</a>
                <a href="https://www.linkedin.com/in/katrina-dawap-485535200/" target="_blank" rel="noreferrer">linkedin</a>
                <a href="https://x.com/diretnan" target="_blank" rel="noreferrer">X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;