function Team() {
  const team = [
    {
      name: "Yann Le Doucen",
      role: "Avocat Fondateur",
      description: "Expert en droit du travail et protection sociale. Membre du Barreau de Rodez depuis 1993.",
      expertise: ["Droit du travail", "Protection sociale", "Contentieux"],
      image: "https://images.ladepeche.fr/api/v1/images/view/5c2646ba3e4546162545b830/full/image.jpg"
    }
  ];

  return (
    <section id="equipe" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">Notre Équipe</h2>
          <div className="h-1 w-20 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rencontrez notre équipe d'avocats expérimentés, dédiés à vous offrir le meilleur service juridique.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-lg mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-sm shadow-lg overflow-hidden hover-scale">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Me ${member.name}`}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-gray-500">Photo</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-1">
                    Me {member.name}
                  </h3>
                  <p className="text-blue-900 font-medium mb-4">{member.role}</p>
                  <div className="h-0.5 w-12 bg-blue-900 mb-4"></div>
                  <p className="text-gray-600 mb-4">{member.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Spécialités</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((item, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
