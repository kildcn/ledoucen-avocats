function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Le Doucen Avocats</h2>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-6">Cabinet d'avocats à Rodez</h3>
            <p className="text-gray-600 mb-8">
              Notre équipe d'avocats expérimentés vous accompagne dans tous vos besoins juridiques avec expertise et professionnalisme.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-800 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video bg-gray-300 rounded shadow-lg">
              {/* Placeholder for image or decorative element */}
              <div className="h-full flex items-center justify-center">
                <span className="text-gray-500">Image du cabinet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
