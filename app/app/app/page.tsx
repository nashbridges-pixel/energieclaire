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
                    </d
