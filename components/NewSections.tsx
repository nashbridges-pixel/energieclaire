export function HeroSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texte */}
          <div className="flex-1">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-base font-bold mb-8 shadow-lg">
              ⚡ Service 100% gratuit et automatisé
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Réduisez vos factures d&apos;énergie de <span className="text-blue-600">30%</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Comparez toutes les offres d&apos;électricité et de gaz en 2 minutes. Notre IA trouve automatiquement la meilleure offre pour vous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Comparer maintenant
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-400 transition-all">
                En savoir plus
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-400"></div>
                <div className="w-10 h-10 rounded-full bg-pink-400"></div>
                <div className="w-10 h-10 rounded-full bg-green-400"></div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">+1 247 clients</span><br/>
                ont déjà économisé
              </p>
            </div>
          </div>
          
          {/* Carte exemple */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                <p className="text-sm text-gray-600 mb-1">Facture actuelle</p>
                <p className="text-3xl font-bold text-gray-900">1 560€/an</p>
                <div className="text-blue-600 text-2xl mt-2">↓</div>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-6 border-2 border-green-300">
                <p className="text-sm text-gray-600 mb-1">Nouvelle facture</p>
                <p className="text-3xl font-bold text-green-700">1 092€/an</p>
                <div className="text-green-600 text-2xl mt-2">✓</div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Économie annuelle</p>
                <p className="text-4xl font-bold text-orange-500">468€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommentCaMarche() {
  const steps = [
    {
      icon: "💬",
      title: "Quelques questions simples",
      subtitle: "(2 min, sans facture)"
    },
    {
      icon: "📧",
      title: "3 offres par email",
      subtitle: "adaptées à votre profil"
    },
    {
      icon: "✓",
      title: "Souscrivez en 1 clic",
      subtitle: "Besoin d'aide ?\nOn vous rappelle"
    }
  ];

  const DownChevron = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M8 5 L22 15 L8 25 Z" fill="#3b82f6" transform="rotate(90 15 15)"/>
    </svg>
  );

  return (
    <section id="comment-ca-marche" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Comment ça marche ?</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base whitespace-pre-line">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <DownChevron />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PourquoiEnergieClaireSection() {
  const benefits = [
    {
      icon: "💰",
      iconBg: "from-blue-500 to-blue-600",
      title: "Gratuit et flexible",
      description: "Vous décidez à votre rythme"
    },
    {
      icon: "📉",
      iconBg: "from-blue-600 to-blue-700",
      title: "Économies garanties",
      description: "Jusqu'à 30% d'économies"
    },
    {
      icon: "⚡",
      iconBg: "from-blue-400 to-blue-600",
      title: "Rapide",
      description: "Offres identifiées en 2 minutes"
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Pourquoi ÉnergieClaire ?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl">
                    {benefit.icon}
                  </span>
                </div>
              </div>
              
              <h3 className="text-gray-900 font-bold text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
