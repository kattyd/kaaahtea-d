import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import Blog from './pages/Blog';
import Article from './pages/Articles';

function App() {
  useEffect(() => {
    // Keeping your AOS setup because we'll definitely want things 
    // to float and fade in with this scrapbook aesthetic!
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* By putting Navbar and Footer outside the Routes, 
        they become universal across your whole site. One identity! 
      */}
      <div className="app-wrapper">
        <div className="film-grain"></div>
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            {/* Everything will live on this unified Home page for now */}
            <Route path='/' element={<Home />} />
            <Route path='/code' element={<ProjectGrid category="code" />} />
            
            {/* If we ever want deep-dive pages for specific projects later, we just add them here */}
            {/* <Route path='/project/:id' element={<ProjectDetail />} /> */}
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;