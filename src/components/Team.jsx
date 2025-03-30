function Team() {
  const team = [
    {
      name: "Yann Le Doucen",
      role: "Avocat",
      description: "Expert en droit du travail et protection sociale. Membre du Barreau de Rodez depuis 1993."
    }
  ];

  return (
    <section id="equipe" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notre Équipe</h2>
        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded shadow-lg overflow-hidden">
              <div className="aspect-square bg-gray-300">
                {/* Placeholder for team member photo */}
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
