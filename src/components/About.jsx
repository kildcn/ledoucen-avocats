function About() {
  return (
    <section id="cabinet" className="py-20 md:py-28 overflow-visible">
      <div className="container mx-auto px-6 overflow-visible">
        <div className="flex flex-col md:flex-row items-center overflow-visible">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10 overflow-visible">
            <div className="relative animate-on-scroll from-left overflow-visible">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-t-4 border-l-4 border-red-900"></div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 border-b-4 border-r-4 border-red-900"></div>
              <div className="aspect-video bg-gray-200 rounded-sm shadow-lg overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/2-6_Place_de_la_Cite_in_Rodez.jpg"
                  alt="Cabinet Le Doucen Avocats - Place de la Cité à Rodez"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 overflow-visible">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 animate-on-scroll from-right animate-section-title">
              Notre Cabinet
            </h2>
            <div className="h-1 w-20 bg-red-900 mb-8 animate-on-scroll from-right animate-section-divider"></div>

            <p className="text-gray-600 mb-6 leading-relaxed animate-on-scroll from-right animate-section-text">
              Fondé en 1972, le Cabinet Le Doucen Avocats est devenu une société familiale en 2009. Situé au cœur de Rodez dans l'Aveyron, le Cabinet Le Doucen Avocats accompagne ses clients dans tous leurs besoins juridiques.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed animate-on-scroll from-right animate-section-text">
              Le Cabinet Le Doucen Avocats est particulièrement reconnu pour sa compétence en droit civil, droit de la construction, successions, et droit des biens et de la propriété.
            </p>

            <div className="law-quote text-gray-700 italic animate-on-scroll from-right">
              <p className="mb-4">
                "La mission du Cabinet Le Doucen Avocats est de vous offrir des conseils juridiques adaptés à vos besoins personnels et professionnels, avec une approche personnalisée et efficace, et d'assurer votre représentation devant les juridictions."
              </p>
              <p className="font-semibold not-italic">— Maître Yann Le Doucen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
