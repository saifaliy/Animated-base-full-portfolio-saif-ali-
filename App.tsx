
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Research from './pages/Research';
import Achievements from './pages/Achievements';
import Volunteer from './pages/Volunteer';
import DesignSystem from './pages/DesignSystem';
import Blog from './pages/Blog';
import Consultation from './pages/Consultation';
import VisionX from './pages/VisionX';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/vision-x" element={<VisionX />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
