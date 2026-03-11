'use client'

import { useState } from 'react'
import { Zap, TrendingDown, Clock, Shield, CheckCircle, BarChart2, HeartHandshake } from 'lucide-react'
import FactureForm from '@/components/FactureForm'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen bg-white">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Zap className="w-7 h-7 text-blue-600" />
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                ÉnergieClaire
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#comment-ca-marche" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Comment ça marche
              </a>
              <a href="#avantages" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Avantages
              </a>
              <a href="#temoignages" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Témoignages
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Comparer maintenant
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <Zap className="w-3.5 h-3.5" />
                Service 100% gratuit et automatisé
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Réduisez vos factures d&apos;énergie de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  30%
                </span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Comparez toutes les offres d&apos;électricité et de gaz en 2 minutes. Notre IA trouve les meilleures offres du marché adaptées à votre profil.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Zap className="w-4 h-4" />
                Comparer maintenant — c&apos;est gratuit
              </button>
              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                {['Sans engagement', 'Résultat en 24h', 'Données sécurisées'].map(t => (
                  <div key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* ── CARD OPTION B ── */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100">
                <p className="text-xs font-semibold text-gray-400 mb-1">Votre situation actuelle</p>
                <h3 className="text-xl font-extrabold text-gray-900 mb-5">
                  Économisez{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    432€/an
                  </span>
                </h3>

                {/* Barres avant/après */}
                <div className="flex flex-col gap-2 mb-5">
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-center">
                    <span className="text-xs font-semibold text-gray-400">Tarif actuel</span>
                    <div className="h-8 rounded-lg bg-red-50 flex items-center px-3">
                      <span className="text-xs font-bold text-red-500">1 580 €/an</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2 items-center">
                    <span className="text-xs font-semibold text-blue-600">Meilleure offre</span>
                    <div className="h-8 rounded-lg bg-blue-50 flex items-center px-3 w-[72%]">
                      <span className="text-xs font-bold text-blue-600">1 148 €/an</span>
                    </div>
                  </div>
                </div>

                {/* Encart économie */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-emerald-200 mb-4">
                  <div>
                    <div className="text-xs font-semibold text-green-700">💰 Économie annuelle</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">Sans aucune démarche de votre part</div>
                  </div>
                  <div className="text-2xl font-extrabold text-green-700">
                    432€ <span className="text-sm font-semibold text-green-600">/an</span>
                  </div>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-2.5">
                  <div className="flex">
                    {['ML', 'TB', 'SC', '+'].map((init, i) => (
                      <div key={init} className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-[9px] font-bold text-blue-600"
                        style={{ marginLeft: i === 0 ? 0 : -6 }}>
                        {init}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    <strong className="text-gray-800">500+</strong> restaurateurs déjà économisés
                  </span>
                </div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -top-3 -right-3 hidden lg:flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-lg text-xs font-semibold text-gray-700 border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                +248 économies ce mois
              </div>
              <div className="absolute -bottom-3 -left-3 hidden lg:flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-lg text-xs font-semibold text-gray-700 border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_#3B82F6]" />
                Analyse en cours…
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="comment-ca-marche">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            Comment ça marche
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Simple, rapide, sans engagement</h2>
          <p className="text-base text-gray-500 max-w-xl">4 étapes pour commencer à économiser sur vos factures d&apos;énergie dès aujourd&apos;hui.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { n: '1', title: 'Votre profil', desc: 'Renseignez vos informations et les données de votre facture en 2 minutes.' },
              { n: '2', title: 'Analyse', desc: 'Notre IA compare votre contrat avec toutes les offres disponibles sur le marché.' },
              { n: '3', title: 'Proposition', desc: 'Vous recevez les meilleures offres avec les économies précises calculées pour vous.' },
              { n: '4', title: 'Signature', desc: 'Nous gérons toutes les démarches. Zéro effort supplémentaire de votre côté.' },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className="text-center relative">
                {i < 3 && <span className="hidden lg:block absolute right-[-16px] top-[22px] text-gray-300 text-xl">→</span>}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 text-lg font-extrabold flex items-center justify-center mx-auto mb-3">{n}</div>
                <div className="text-sm font-bold text-gray-900 mb-1.5">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="avantages">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            Avantages
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Pourquoi choisir ÉnergieClaire ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Zap className="w-5 h-5 text-blue-600" />, title: 'Comparaison instantanée', desc: "Notre IA analyse toutes les offres du marché en temps réel pour trouver la meilleure option pour vous." },
              { icon: <TrendingDown className="w-5 h-5 text-blue-600" />, title: 'Économies garanties', desc: "Nos clients économisent en moyenne 400€ par an sur leurs factures d'énergie professionnelles." },
              { icon: <Shield className="w-5 h-5 text-blue-600" />, title: '100% sécurisé', desc: "Vos données sont chiffrées et ne sont jamais partagées sans votre accord explicite." },
              { icon: <Clock className="w-5 h-5 text-blue-600" />, title: 'Zéro charge mentale', desc: "Nous gérons toutes les démarches administratives à votre place. Vous n'avez rien à faire." },
              { icon: <BarChart2 className="w-5 h-5 text-blue-600" />, title: 'Suivi en temps réel', desc: "Accédez à votre tableau de bord pour suivre vos économies et l'évolution de vos contrats." },
              { icon: <HeartHandshake className="w-5 h-5 text-blue-600" />, title: 'Accompagnement humain', desc: "Un conseiller vous rappelle pour finaliser votre transition en toute sérénité." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-3">{icon}</div>
                <div className="text-sm font-bold text-gray-900 mb-1.5">{title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="temoignages">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            Témoignages
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Ils ont déjà économisé</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { initials: 'ML', name: 'Marie L.', role: 'Restaurant · Lyon', text: "\"Incroyable ! En 10 minutes, j'ai économisé 580€ sur ma facture annuelle. Le processus est vraiment simple et l'équipe est réactive.\"" },
              { initials: 'TB', name: 'Thomas B.', role: 'Brasserie · Paris', text: "\"Je n'y croyais pas trop, mais les chiffres parlent d'eux-mêmes. 420€ économisés et zéro démarche de ma part. Parfait pour un restaurateur.\"" },
              { initials: 'SC', name: 'Sophie C.', role: 'Hôtel · Bordeaux', text: "\"Service impeccable. J'ai rempli le formulaire un mardi matin, j'ai été rappelé l'après-midi et le nouveau contrat était signé le lendemain.\"" },
            ].map(({ initials, name, role, text }) => (
              <div key={name} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="text-amber-400 text-sm mb-2">★★★★★</div>
                <p className="text-xs text-gray-600 leading-relaxed italic mb-4">{text}</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-xs font-bold text-blue-600">{initials}</div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">{name}</div>
                    <div className="text-[11px] text-gray-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">Prêt à réduire vos factures ?</h2>
        <p className="text-base text-white/80 mb-8">Rejoignez 500+ entreprises qui économisent déjà avec ÉnergieClaire</p>
        <button onClick={() => setShowForm(true)} className="px-10 py-3.5 bg-white text-blue-600 font-bold rounded-full text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Analyser mon contrat gratuitement →
        </button>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-extrabold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ÉnergieClaire</span>
              </div>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Courtier en énergie certifié. Nous aidons les professionnels à réduire leurs factures grâce à l&apos;automatisation.
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {['Mentions légales', 'Confidentialité', 'Contact', 'FAQ'].map(l => (
                <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex justify-between flex-wrap gap-3 text-xs text-gray-600">
            <span>© 2026 ÉnergieClaire. Tous droits réservés.</span>
            <span>Made with ⚡ in France</span>
          </div>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {showForm && <FactureForm onClose={() => setShowForm(false)} />}

    </main>
  )
}
