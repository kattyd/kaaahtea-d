import React from 'react';
import Hero from '../components/Hero';

import ProjectGrid from '../components/ProjectGrid';
import Dossier from '../components/Dossier';
import Contact from '../components/Contact';
import Marquee from '../components/Marquee';

import '../styles/home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. The Cover Page */}
      <section id="top">
        <Hero />
      </section>

      <Marquee />

      {/* 2. The Development Portfolio */}
      <section id="code" className="content-section" data-aos="fade-up">
        <div className="section-header">
          <h2 className="section-title font-sans-heavy">THE CODE.</h2>
          <p className="section-subtitle font-handwritten">things I've built with logic & caffeine.</p>
        </div>
        <ProjectGrid category="code" />
      </section>

      {/* 3. The Media Portfolio */}
      <section id="studio" className="content-section" data-aos="fade-up">
        <div className="section-header">
          <h2 className="section-title font-sans-heavy">THE STUDIO.</h2>
          <p className="section-subtitle font-handwritten">words, visuals, and multimedia explorations.</p>
        </div>
        <ProjectGrid category="studio" />
      </section>

      {/* 4. About & Skills */}
      <section id="dossier" className="content-section" data-aos="fade-up">
        <div className="section-header">
          <h2 className="section-title font-sans-heavy">THE DOSSIER.</h2>
          <p className="section-subtitle font-handwritten">the human behind the screen.</p>
        </div>
        <Dossier />
      </section>

      {/* 5. Footer/Contact */}
      <section id="contact" className="content-section" data-aos="fade-up">
        <div className="section-header">
          <h2 className="section-title font-sans-heavy">DROP A LINE.</h2>
          <p className="section-subtitle font-handwritten">let's make something cool together.</p>
        </div>
        <Contact />
      </section>
    </div>
  );
};

export default Home;