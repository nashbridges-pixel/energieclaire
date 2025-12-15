// Force rebuild v5 - Fixed [QUALIFICATION_TERMINEE] display
'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatbotProps {
  onClose: () => void
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: 'Bonjour ! Je suis ÉcoBot, votre assistant ÉnergieClaire. 😊\n\nJe vais vous aider à trouver la meilleure offre d\'énergie en quelques questions. C\'est parti !\n\nÊtes-vous un particulier ou un professionnel ?',
    sender: 'bot',
    timestamp: new Date(),
  }])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // URLs des deux webhooks - ARCHITECTURE OPTIMISÉE
  const WEBHOOK_CHAT = 'https://n8n-buih.sliplane.app/webhook/chat-response'
  const WEBHOOK_LEAD = 'https://n8n-buih.sliplane.app/webhook/lead-capture'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInputValue('')
    setIsLoading(true)

    try {
      // Construire l'historique pour DeepSeek
      const conversationHistory = newMessages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }))

      // APPEL WEBHOOK 1 : Chatbot Response (à chaque message)
      const chatResponse = await fetch(WEBHOOK_CHAT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationHistory
        }),
      })

      if (!chatResponse.ok) {
        throw new Error('Erreur réseau')
      }

      const chatData = await chatResponse.json()
      let botMessageText = chatData.response || chatData.message || 'Désolé, une erreur est survenue.'

      // CRITIQUE : Détecter ET nettoyer le marqueur AVANT affichage
      const hasQualificationMarker = botMessageText.includes('[QUALIFICATION_TERMINEE]')
      
      if (hasQualificationMarker) {
        // Nettoyer le marqueur pour l'affichage utilisateur
        botMessageText = botMessageText.replace('[QUALIFICATION_TERMINEE]', '').trim()
        
        // Appeler webhook Lead Capture UNE SEULE FOIS
        if (!leadCaptured) {
          setLeadCaptured(true)
          
          // APPEL WEBHOOK 2 : Lead Capture (une seule fois)
          fetch(WEBHOOK_LEAD, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              messages: conversationHistory
            }),
          }).catch(error => {
            console.error('Erreur Lead Capture:', error)
          })
        }
      }

      // Ajouter le message bot NETTOYÉ
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botMessageText,
        sender: 'bot',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      console.error('Erreur:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Désolé, une erreur est survenue. Pouvez-vous réessayer ?',
        sender: 'bot',
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-white font-semibold">ÉcoBot</h3>
            <p className="text-purple-100 text-xs">Assistant ÉnergieClaire</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-purple-600" />
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-purple-600" />
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tapez votre message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
      }
