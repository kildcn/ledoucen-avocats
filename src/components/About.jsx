function About() {
  return (
    <section id="cabinet" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre Cabinet</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-video bg-gray-200 rounded shadow-lg">
              {/* Placeholder for image */}
              <div className="h-full flex items-center justify-center">
                <span className="text-gray-500">Photo du cabinet</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-6">
              Fondé par Yann Le Doucen, membre du Barreau de Rodez depuis 1993, notre cabinet est situé au cœur de Rodez,
              dans l'Aveyron. Fort de notre expérience et de notre expertise, nous accompagnons nos clients dans tous
              leurs besoins juridiques.
            </p>
            <p className="text-gray-600 mb-6">
              Nous sommes particulièrement reconnus pour notre compétence en droit civil, droit processuel,
              droit du travail et de la protection sociale.
            </p>
            <div className="border-l-4 border-blue-900 pl-4 italic text-gray-600">
              <p>
                "Notre mission est de vous offrir des conseils juridiques adaptés à vos besoins personnels et
                professionnels, avec une approche personnalisée et efficace."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
