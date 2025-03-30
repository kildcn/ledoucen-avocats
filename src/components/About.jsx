function About() {
  return (
    <section id="cabinet" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <div className="relative animate-on-scroll from-left">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-t-4 border-l-4 border-blue-900"></div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 border-b-4 border-r-4 border-blue-900"></div>
              <div className="aspect-video bg-gray-200 rounded-sm shadow-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/BsJKCPjd/Themis-homepage-1.jpg"
                  alt="Cabinet Le Doucen Avocats"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 animate-on-scroll from-right animate-section-title">
              Notre Cabinet
            </h2>
            <div className="h-1 w-20 bg-blue-900 mb-8 animate-on-scroll from-right animate-section-divider"></div>

            <p className="text-gray-600 mb-6 leading-relaxed animate-on-scroll from-right animate-section-text">
              Fondé par Yann Le Doucen, membre du Barreau de Rodez depuis 1993, notre cabinet est situé au cœur de Rodez,
              dans l'Aveyron. Fort de notre expérience et de notre expertise, nous accompagnons nos clients dans tous
              leurs besoins juridiques.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed animate-on-scroll from-right animate-section-text">
              Nous sommes particulièrement reconnus pour notre compétence en droit civil, droit processuel,
              droit du travail et de la protection sociale.
            </p>

            <div className="law-quote text-gray-700 italic animate-on-scroll from-right">
              <p className="mb-4">
                "Notre mission est de vous offrir des conseils juridiques adaptés à vos besoins personnels et
                professionnels, avec une approche personnalisée et efficace."
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
