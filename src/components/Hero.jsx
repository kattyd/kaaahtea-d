import React from "react";
import "../styles/hero.css";
import confetti from "canvas-confetti"
import profilePic from "../assets/media-face.webp"; 

const Hero = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 300,
      origin: { y: 0.5 },
      colors: ['#ccff00', '#d1495b', '#121212']
    });
  };
  return (
    <section className="hero-section">
      {/* Decorative Scrapbook Elements */}
      <div className="tape top-left"></div>
      <div className="star-doodle"
            onClick={triggerConfetti}
            style={{ cursor: 'pointer' }}>✦</div>
      
      <div className="hero-content">
        <p className="kicker">hi, i'm</p>
        
        <h1 className="hero-title">
          <span className="heavy-sans">KATRINA</span>
          <span className="handwritten">a.k.a kaaahtea</span>
        </h1>
        
        <h2 className="hero-subtitle">
          <span className="block-text">A FRONTEND DEVELOPER</span> 
          <span className="elegant-serif"> & multimedia storyteller.</span>
        </h2>
        
        <p className="hero-bio">
          I build clean web experiences and tell stories through code, video, and writing. Based in Jos.
        </p>

        <button className="scribble-btn">Explore my work ↗</button>
      </div>

      <div className="hero-visuals">
        {/* Polaroid frame effect */}
        <div className="polaroid">
          <div className="tape-center"></div>
          <img src={profilePic} alt="Katrina" loading="lazy" />
          <p className="polaroid-caption">me, probably coding or writing.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;