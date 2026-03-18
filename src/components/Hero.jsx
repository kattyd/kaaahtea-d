import React from "react";
import "../styles/hero.css";
// You can use your techImg or mediaImg here, or a new combined photo!
import profilePic from "../assets/media-face.webp"; 

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Decorative Scrapbook Elements */}
      <div className="tape top-left"></div>
      <div className="star-doodle">✦</div>
      
      <div className="hero-content">
        <p className="kicker">hi, welcome to the digital scrapbook of</p>
        
        <h1 className="hero-title">
          <span className="heavy-sans">KATRINA</span>
          <span className="handwritten">a.k.a kaaahtea</span>
        </h1>
        
        <h2 className="hero-subtitle">
          <span className="block-text">A FULL-STACK DEVELOPER</span> 
          <span className="elegant-serif"> & multimedia storyteller.</span>
        </h2>
        
        <p className="hero-bio">
          I build clean, thoughtful web experiences and craft stories through code, sound, and writing. Based in the intersection of logic and art.
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