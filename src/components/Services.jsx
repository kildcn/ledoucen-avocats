function Services() {
  const expertiseAreas = [
    {
      title: "Droit Civil",
      description: "Droit des contrats, droit de la construction, droit des biens et des personnes, droit de la propriété (bornage, servitude, etc.).",
      icon: "⚖️"
    },
    {
      title: "Droit Processuel",
      description: "Procédures judiciaires, médiation, voies d'exécution, contentieux.",
      icon: "📜"
    },
    {
      title: "Protection Sociale",
      description: "Sécurité sociale, assurances, prévoyance, retraites, contentieux de la sécurité sociale.",
      icon: "🛡️"
    },
    {
      title: "Droit de la Réparation du Dommage Corporel",
      description: "Indemnisation des préjudices corporels, expertises médicales, recours contre tiers responsables.",
      icon: "🩺"
    },
    {
      title: "Recouvrement de Créances",
      description: "Procédures de recouvrement, mise en demeure, injonctions de payer, saisies.",
      icon: "💼"
    },
    {
      title: "Droit des Successions",
      description: "Règlement des successions, héritages, donations, testaments.",
      icon: "📋"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 animate-on-scroll from-bottom animate-section-title">
            Nos Domaines d'Expertise
          </h2>
          <div className="h-1 w-20 bg-red-900 mx-auto mb-6 animate-on-scroll from-bottom animate-section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll from-bottom animate-section-text">
            Le Cabinet Le Doucen Avocats propose une expertise reconnue dans plusieurs domaines du droit, avec une approche personnalisée et rigoureuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="law-card bg-white p-8 rounded-sm shadow-md hover-scale animate-card">
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">{area.title}</h3>
              <div className="h-0.5 w-12 bg-red-900 mb-4"></div>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
