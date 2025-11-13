'use client'

import { useState } from 'react'
import { Zap, TrendingDown, Clock, Shield, CheckCircle, Users, Phone, Mail } from 'lucide-react'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                ÉnergieClaire
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#comment-ca-marche" className="text-gray-700 hover:text-blue-600 transition">Comment ça marche</a>
              <a href="#avantages" className="text-gray-700 hover:text-blue-600 transition">Avantages</a>
              <a href="#temoignages" className="text-gray-700 hover:text-blue-600 transition">Témoignages</a>
              <button 
                onClick={() => setShowChatbot(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition"
              >
                Commencer
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-white animate-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Service 100% gratuit et automatisé</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Réduisez vos factures d&apos;énergie de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  30%
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Comparez toutes les offres d&apos;électricité et de gaz en 2 minutes. 
                Notre IA trouve automatiquement la meilleure offre pour vous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowChatbot(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  Comparer maintenant
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition">
                  En savoir plus
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-white"></div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">+1 247 clients</div>
                  <div>ont déjà économisé</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <div>
                      <div className="text-sm text-gray-600">Facture actuelle</div>
                      <div className="text-2xl font-bold text-gray-900">1 560€/an</div>
                    </div>
                    <TrendingDown className="w-8 h-8 text-blue-600" />
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                    <div>
                      <div className="text-sm text-gray-600">Nouvelle facture</div>
                      <div className="text-2xl font-bold text-green-600">1 092€/an</div>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>

                  <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl text-center">
                    <div className="text-sm text-gray-600 mb-1">Économie annuelle</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                      468€
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30%', label: 'Économie moyenne' },
              { number: '2 min', label: 'Pour comparer' },
              { number: '100%', label: 'Gratuit' },
              { number: '50+', label: 'Fournisseurs' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Un processus simple et rapide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: <Users className="w-8 h-8" />,
                title: 'Répondez à 5 questions',
                description: 'Notre chatbot IA vous pose quelques questions (2 minutes)'
              },
              {
                step: '2',
                icon: <Zap className="w-8 h-8" />,
                title: 'Recevez les meilleures offres',
                description: 'Nous vous envoyons les 3 meilleures offres par email'
              },
              {
                step: '3',
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Souscrivez en 1 clic',
                description: 'Signature électronique simple et rapide'
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition h-full border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl mb-6">
                    {item.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi ÉnergieClaire ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: '100% Automatisé', description: 'Aucune intervention humaine' },
              { icon: <TrendingDown />, title: 'Économies garanties', description: "Jusqu'à 30% d'économies" },
              { icon: <Clock />, title: 'Rapide', description: 'Comparaison en 2 minutes' },
              { icon: <Shield />, title: 'Sans engagement', description: 'Gratuit, sans frais cachés' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie D.',
                avatar: '👩',
                text: "J'ai économisé 420€ par an ! Le processus était tellement simple.",
                saving: '420€/an',
              },
              {
                name: 'Thomas L.',
                avatar: '👨',
                text: 'En tant que petit entrepreneur, ÉnergieClaire m\'a fait économiser 1 200€.',
                saving: '1 200€/an',
              },
              {
                name: 'Sophie M.',
                avatar: '👩‍🦰',
                text: 'Service impeccable ! Le chatbot était clair et efficace.',
                saving: '380€/an',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                  Économie : {testimonial.saving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Prêt à économiser sur vos factures ?</h2>
          <button 
            onClick={() => setShowChatbot(true)}
            className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Comparer maintenant - Gratuit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-xl font-bold">ÉnergieClaire</span>
              </div>
              <p className="text-gray-400 text-sm">Courtage en énergie 100% automatisé</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#comment-ca-marche" className="hover:text-white transition">Comment ça marche</a></li>
                <li><a href="#avantages" className="hover:text-white transition">Avantages</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Légal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition">CGV</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@energieclaire.fr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ÉnergieClaire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </main>
  )
}
