function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Le Doucen Avocats</h2>
            <p className="text-gray-400">6 Place de la Cité, 12000 Rodez</p>
            <p className="text-gray-400 text-sm mt-1">Barreau de Rodez depuis 1993</p>
          </div>

          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">05 65 67 44 55</p>
          </div>

          <div>
            <p className="text-gray-400">&copy; {currentYear} Le Doucen Avocats. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
