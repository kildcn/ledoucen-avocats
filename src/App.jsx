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
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app">
      <IntroAnimation />
      {/* Using inline styles to ensure header is above other content */}
      <div className="animate-header" style={{ position: 'relative', zIndex: 9999 }}>
        <Header />
      </div>
      <main style={{ position: 'relative', zIndex: 1, marginTop: '0px', paddingTop: '0px' }}>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer style={{ position: 'relative', zIndex: 1 }} />
    </div>
  );
}

export default App;
