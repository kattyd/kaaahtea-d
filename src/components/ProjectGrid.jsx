import React from 'react';
import '../styles/project-grid.css';
import guldspy from "../assets/guldpsy.webp";
import budgettoire from "../assets/budgettoire.webp";
import litdao from "../assets/litdao.webp";
import libtracker from "../assets/libtracker.webp";
import brainwave from "../assets/brainwave.webp";
import mascot from "../assets/mascot.webp";
import search from "../assets/search.webp";
import profile from "../assets/profile.webp";
import Navbar from "../components/Navbar";
import { title } from 'framer-motion/client';

// You can eventually move this data to a separate file, but keeping it here for now!
const projectsData = [
  {
    id: 1,
    title: "Guldspy",
    category: "code",
    description: "A full-stack web application designed for seamless user experiences.",
    tech: ["React", "Node.js", "CSS"],
    link: "https://guldspy.vercel.app/",
    image: guldspy, 
  },
  {
    id: 2,
    title: "Budgettoire",
    category: "code",
    description: "A personal finance tracker with clean data visualization.",
    tech: ["React", "CSS"],
    link: "https://budgettoire.vercel.app/",
    image: budgettoire,
  },
  {
    id: 3,
    title: "LitDAO",
    category: "code",
    description: "A decentralized platform for literary collaboration and publishing.",
    tech: ["React", "CSS"],
    link: "#",
    image: litdao,
  },
  {
    id: 4,
    title: "Katz Library Tracker",
    category: "code",
    description: "Track the books you read",
    tech: ["React", "CSS"],
    link: "https://library-tracker-zeta.vercel.app/",
    image: libtracker,
  },
  {
    id: 5,
    title: "Brainwave.io",
    category: "code",
    description: "A furniture store landing page",
    tech: ["React", "CSS"],
    link: "#",
    image: brainwave,
  },
  {
    id: 6,
    title: "Katz Magazine",
    category: "studio",
    description: "A literary magazine for poets, writers, and artists.",
    role: ["Editor-in-Chief"],
    link: "https://katzmagazine.substack.com/",
    image: mascot,
  },
  {
    id: 7,
    title: "OAP at SearchFM",
    category: "studio",
    description: "Hosting weekly radio shows featuring music, interviews, and storytelling.",
    role: ["On-Air Personality"],
    link: "https://searchfm.ca/",
    image: search,
  },
  {
    id: 8,
    title: "YouTube Channel",
    category: "studio",
    description: "Creating videos on lifestyle, digital culture, and personal growth.",
    role: ["Content Creator"],
    link: "https://www.youtube.com/@kaaahtea",
    image: profile,
  }
];

const ProjectGrid = ({ category }) => {
  // Filter projects based on whether we are in "The Code" or "The Studio" section
  const filteredProjects = projectsData.filter(project => project.category === category);

  return (
    <div className="project-grid">
      {filteredProjects.map((project, index) => (
        <a href={project.link} className={`project-card card-tilt-${index % 3}`} key={project.id}>
          {/* The Tape Graphic */}
          <div className="card-tape"></div>
          
          <div className="card-image-container">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          
          <div className="card-info">
            <h3 className="card-title font-sans-heavy">{project.title}</h3>
            <p className="card-desc font-typewriter">{project.description}</p>
            
            <div className="card-tags">
              {project.tech 
                ? project.tech.map((t, i) => <span key={i} className="tag code-tag">{t}</span>)
                : <span className="tag studio-tag">{project.role}</span>
              }
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;