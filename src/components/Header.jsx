import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Le Doucen Avocats</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#accueil" className="text-gray-800 hover:text-blue-900 transition-colors">Accueil</a>
          <a href="#cabinet" className="text-gray-800 hover:text-blue-900 transition-colors">Le Cabinet</a>
          <a href="#services" className="text-gray-800 hover:text-blue-900 transition-colors">Domaines d'expertise</a>
          <a href="#equipe" className="text-gray-800 hover:text-blue-900 transition-colors">Notre Équipe</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-900 transition-colors">Contact</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#accueil" className="text-gray-800 hover:text-blue-900 transition-colors">Accueil</a>
            <a href="#cabinet" className="text-gray-800 hover:text-blue-900 transition-colors">Le Cabinet</a>
            <a href="#services" className="text-gray-800 hover:text-blue-900 transition-colors">Domaines d'expertise</a>
            <a href="#equipe" className="text-gray-800 hover:text-blue-900 transition-colors">Notre Équipe</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-900 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
