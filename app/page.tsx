'use client'

import { useState } from 'react'
import { Zap, Phone, Mail } from 'lucide-react'
import Chatbot from '@/components/Chatbot'
import { HeroSection, CommentCaMarche, PourquoiEnergieClaireSection } from '@/components/NewSections'

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
              <a href="#comment-ca-marche" className="text-gray-700 hover:text-blue-600 transition">Comment ça marche ?</a>
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

      {/* Hero Section - NOUVEAU */}
      <div className="pt-16">
        <HeroSection />
      </div>

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

      {/* Comment ça marche - NOUVEAU */}
      <CommentCaMarche />

      {/* Pourquoi ÉnergieClaire - NOUVEAU */}
      <PourquoiEnergieClaireSection />

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
