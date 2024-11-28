import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient relative">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;