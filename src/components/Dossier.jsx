import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/dossier.css';

const Dossier = () => {
  // The boundary reference so stickers stay in their box
  const constraintsRef = useRef(null);

  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 
    'CSS3 / HTML5', 'Figma', 'Git', 'Writing', 'Audio Production'
  ];

  return (
    <div className="dossier-wrapper">
      <div className="tape tape-top-right"></div>
      
      <div className="bio-column">
        <p className="bio-text">
          <span className="drop-cap">A</span>s a self-taught full-stack developer and a multimedia creative, I exist in the space where logic meets art. Whether I'm building clean, thoughtful web applications or telling stories through essays and podcasts, my goal is always the same: <span className="highlight-text">to craft engaging, human-centric experiences.</span>
        </p>
        <p className="bio-text mt-3">
          I'm drawn to storytelling in all its forms. When I'm not writing code, you can find me exploring digital culture, editing audio, or hunting down the perfect typography combination.
        </p>
        
        <div className="scribble-signature font-handwritten">stay curious, Katrina</div>
      </div>

      <div className="stack-column">
        <h3 className="stack-title font-sans-heavy">THE TOOLKIT</h3>
        
        {/* We attach the ref here to act as our dragging boundary */}
        <div className="stickers-container" ref={constraintsRef}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className={`tech-sticker sticker-tilt-${index % 4}`}
              
              /* Framer Motion Magic ✨ */
              drag 
              dragConstraints={constraintsRef}
              whileDrag={{ scale: 1.15, rotate: 0, zIndex: 99, boxShadow: "5px 10px 15px rgba(0,0,0,0.3)" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dossier;