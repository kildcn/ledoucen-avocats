// src/App.jsx
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';
import './animations.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  // Prevent scroll during intro animation
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden'; // Ensure horizontal scrolling is always disabled
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden'; // Ensure horizontal scrolling is always disabled
    };
  }, []);

  // Fix for mobile - ensure no horizontal scrollbar
  useEffect(() => {
    const fixViewport = () => {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';

      // Force reflow to apply changes
      document.body.getBoundingClientRect();
    };

    fixViewport();
    window.addEventListener('resize', fixViewport);

    return () => window.removeEventListener('resize', fixViewport);
  }, []);

  return (
    <div className="app" style={{ width: '100%', overflowX: 'hidden' }}>
      <IntroAnimation />
      <div className="animate-header" style={{ position: 'relative', zIndex: 9999, width: '100%', overflowX: 'hidden' }}>
        <Header />
      </div>
      <main style={{ position: 'relative', zIndex: 1, marginTop: '0px', paddingTop: '0px', width: '100%', overflowX: 'hidden' }}>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer style={{ position: 'relative', zIndex: 1, width: '100%', overflowX: 'hidden' }} />
    </div>
  );
}

export default App;
