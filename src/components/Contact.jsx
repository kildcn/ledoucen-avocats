function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 animate-on-scroll from-bottom">
            Contactez-nous
          </h2>
          <div className="h-1 w-20 bg-blue-900 mx-auto mb-6 animate-on-scroll from-bottom"></div>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll from-bottom">
            Pour toute question juridique ou pour prendre rendez-vous, veuillez nous contacter par téléphone.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-lg overflow-hidden animate-on-scroll from-bottom">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-900 text-white p-8 md:p-12">
              <h3 className="text-2xl font-serif font-semibold mb-8">Nos Coordonnées</h3>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Adresse</h4>
                    <p className="text-blue-100">6 Place de la Cité<br />12000 Rodez<br />Aveyron, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                    <p className="text-blue-100 text-xl font-semibold">05 65 67 44 55</p>
                    <p className="text-blue-200 mt-1">Pour toute question ou prise de rendez-vous</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Horaires d'ouverture</h4>
                    <ul className="text-blue-100 space-y-1">
                      <li>Lundi - Mercredi : 09h00 - 18h00</li>
                      <li>Jeudi : 09h00 - 18h00</li>
                      <li>Vendredi : 09h00 - 17h00</li>
                      <li>Samedi et dimanche : fermé</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="h-full">
                <a
                  href="https://maps.google.com/?q=6+Place+de+la+Cité+12000+Rodez"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ouvrir dans Google Maps"
                  className="block h-full"
                >
                  <img
                    src="https://i.postimg.cc/Kvw5MmF7/Screenshot-2025-03-30-at-13-36-25.png"
                    alt="Plan d'accès au cabinet Le Doucen Avocats"
                    className="w-full h-full object-cover object-center transition-all duration-300 hover:brightness-105"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 text-center">
            <h4 className="text-xl font-serif text-gray-800 mb-4">Besoin d'une consultation juridique?</h4>
            <p className="text-gray-600 mb-6">Notre équipe est à votre écoute pour répondre à toutes vos questions juridiques.</p>
            <div className="inline-flex items-center justify-center bg-blue-900 text-white font-semibold px-6 py-3 rounded-sm hover:bg-blue-800 transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0565674455" className="text-white">05 65 67 44 55</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
