import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/dossier.css';

const Dossier = () => {
  // The boundary reference so stickers stay in their box
  const constraintsRef = useRef(null);

  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 
    'CSS3 / HTML5', 'Figma', 'Git', 'Writing', 'Video Editing', 'Podcasting/Radio Production'
  ];

  return (
    <div className="dossier-wrapper">
      <div className="tape tape-top-right"></div>
      
      <div className="bio-column">
        <p className="bio-text">
  <span className="drop-cap">I</span> build for the internet and document the process as I go. 
  My work moves between code, writing, and video, <span className="highlight-text">usually all at once</span>.
</p>

<p className="bio-text mt-3">
  I’m currently developing a literary project, creating content around it, 
  and building the kind of digital experiences I wish existed. 
  I care about how things work, but more importantly, how they feel to move through.
</p>

<p className="bio-text mt-3">
  I’m open to working on projects that sit within this space, especially ones that value 
  thoughtful execution and a strong sense of direction.
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