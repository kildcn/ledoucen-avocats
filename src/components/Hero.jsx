function Hero() {
  return (
    <section id="accueil" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background overlay - changed from blue to red */}
      <div className="absolute inset-0 bg-red-900 bg-opacity-70 z-0"></div>

      {/* Background image placeholder - in production, replace with actual image */}
      <div className="absolute inset-0 bg-[url('/src/assets/hero-bg-placeholder.jpg')] bg-cover bg-center z-[-1]">
        {/* This would be replaced with an actual image in production */}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mx-auto max-w-4xl md:max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-hero-heading text-white">
            LE DOUCEN AVOCATS
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 animate-hero-subheading text-white">
            Cabinet d'avocats à Rodez depuis 1972
          </h3>
          <div className="h-1 w-20 bg-white mb-6 mx-auto animate-hero-divider"></div>
          <p className="text-gray-100 text-lg md:text-xl mb-8 mx-auto animate-hero-text max-w-2xl lg:max-w-3xl">
            Le Cabinet Le Doucen Avocats offre une expertise juridique personnalisée, fondée sur l'excellence et le respect des valeurs humaines.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-hero-buttons justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-red-900 font-semibold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#services"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-sm hover:bg-white hover:bg-opacity-10 transition-colors text-center"
            >
              Nos domaines d'expertise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
