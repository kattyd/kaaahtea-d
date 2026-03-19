import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  // 1. Set up state to hold the form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 2. Set up state for the button text (so we can show "Sending...")
  const [status, setStatus] = useState('SEND IT ↗');

  // 3. Handle user typing
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING... ⏳');

    // Add your Web3Forms Access Key to the data payload
    const payload = {
      ...formData,
      access_key: "4f74b810-ba5b-4fb1-a1b3-d118183a74b2" // <-- PASTE KEY HERE
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('SENT! 📬');
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
        
        // Reset the button text after 3 seconds
        setTimeout(() => setStatus('SEND IT ↗'), 3000);
      } else {
        setStatus('ERROR. TRY AGAIN.');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR. TRY AGAIN.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="postcard">
        <div className="stamp"></div>
        <div className="postmark font-typewriter">JOS - 2026</div>

        <div className="postcard-content">
          <div className="postcard-left">
            <h3 className="font-handwritten text-large">dear katrina,</h3>
            
            {/* 5. Update the form to use our new function */}
            <form className="scrapbook-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="font-typewriter">My name is</label>
                <input 
                  type="text" 
                  name="name" // Required for state matching
                  placeholder="your name here..." 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="input-group">
                <label className="font-typewriter">and you can reach me at</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="your email address..." 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="input-group message-group">
                <label className="font-typewriter">I wanted to say:</label>
                <textarea 
                  name="message"
                  placeholder="let's build something cool..." 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* 6. Button text is now dynamic! */}
              <button 
                type="submit" 
                className="send-btn font-sans-heavy"
                disabled={status !== 'SEND IT ↗'} // Prevent double clicks
              >
                {status}
              </button>
            </form>
          </div>

          <div className="postcard-right">
            <div className="divider-line"></div>
            <div className="address-block">
              <h4 className="font-sans-heavy">SEND TO:</h4>
              <p className="font-typewriter">Katrina (kaaahtea)</p>
              <p className="font-typewriter">Frontend Dev &</p>
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