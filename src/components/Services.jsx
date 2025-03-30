function Services() {
  const expertiseAreas = [
    {
      title: "Droit Civil",
      description: "Contrats, responsabilité civile, droit des obligations, litiges entre particuliers.",
      icon: "⚖️"
    },
    {
      title: "Droit Processuel",
      description: "Procédures judiciaires, médiation, voies d'exécution, contentieux.",
      icon: "📜"
    },
    {
      title: "Droit du Travail",
      description: "Contrats de travail, licenciements, négociations collectives, contentieux prud'homaux.",
      icon: "👥"
    },
    {
      title: "Protection Sociale",
      description: "Sécurité sociale, assurances, prévoyance, retraites, contentieux de la sécurité sociale.",
      icon: "🛡️"
    },
    {
      title: "Droit Commercial",
      description: "Contrats commerciaux, baux commerciaux, fonds de commerce, sociétés.",
      icon: "💼"
    },
    {
      title: "Droit de la Famille",
      description: "Divorce, séparation, garde d'enfants, successions, régimes matrimoniaux.",
      icon: "👨‍👩‍👧"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Domaines d'Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
