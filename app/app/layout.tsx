import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ÉnergieClaire - Réduisez vos factures d\'énergie de 30%',
  description: 'Comparez et souscrivez aux meilleures offres d\'électricité et gaz en 2 minutes. Service gratuit, 100% automatisé.',
  keywords: 'énergie, électricité, gaz, comparateur, courtier, économies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
