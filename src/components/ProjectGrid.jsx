import React from 'react';
import '../styles/project-grid.css';

// You can eventually move this data to a separate file, but keeping it here for now!
const projectsData = [
  {
    id: 1,
    title: "Guldspy",
    category: "code",
    description: "A full-stack web application designed for seamless user experiences.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", 
  },
  {
    id: 2,
    title: "Budgettoire",
    category: "code",
    description: "A personal finance tracker with clean data visualization.",
    tech: ["JavaScript", "Express", "CSS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "SearchFM",
    category: "code",
    description: "A music discovery platform hooking into external APIs.",
    tech: ["React", "Spotify API", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Katz Magazine",
    category: "studio",
    description: "An editorial deep-dive into digital culture and storytelling.",
    role: "Writer & Editor",
    link: "#",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Midnight Audio",
    category: "studio",
    description: "A podcast exploring the intersection of technology and art.",
    role: "Producer & Host",
    link: "#",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
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