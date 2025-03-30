function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-nous</h2>
        <div className="flex flex-col md:flex-row bg-white rounded shadow-lg overflow-hidden">
          <div className="md:w-1/2 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Nos Coordonnées</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Adresse</h4>
              <p className="text-gray-600">6 Place de la Cité, 12000 Rodez, Aveyron, France</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Téléphone</h4>
              <p className="text-gray-600">05 65 67 44 55</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Horaires d'ouverture</h4>
              <ul className="text-gray-600">
                <li>Lundi au mercredi : 09h00 - 18h00</li>
                <li>Jeudi : 09h00 - 18h00</li>
                <li>Vendredi : 09h00 - 17h00</li>
                <li>Samedi et dimanche : fermé</li>
              </ul>
            </div>

            <div className="aspect-video bg-gray-200 rounded">
              {/* Placeholder for map */}
              <div className="h-full flex items-center justify-center">
                <span className="text-gray-500">Carte</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-6 md:p-8 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Formulaire de Contact</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold py-3 rounded shadow hover:bg-blue-800 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
