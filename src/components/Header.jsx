// src/components/Header.jsx
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} style={{ position: 'fixed', width: '100%', top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-serif font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            Le Doucen Avocats
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Accueil', 'Le Cabinet', 'Expertise', 'Équipe', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${['accueil', 'cabinet', 'services', 'equipe', 'contact'][index]}`}
              className={`font-medium ${scrolled ? 'text-gray-800 hover:text-blue-900' : 'text-white hover:text-gray-200'} transition-colors`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 animate-fadeIn" style={{ position: 'relative', zIndex: 9999 }}>
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['Accueil', 'Le Cabinet', 'Expertise', 'Équipe', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${['accueil', 'cabinet', 'services', 'equipe', 'contact'][index]}`}
                className="text-gray-800 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
