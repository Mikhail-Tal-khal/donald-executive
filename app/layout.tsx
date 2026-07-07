import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Donald Executive | Luxury Travel & Transport in Mombasa',
  description:
    'Donald Executive — Safe. Comfort. Luxury. Premium chauffeur-driven wedding, corporate, VIP transport, airport transfers and car hire in Nyali, Mombasa, Kenya. Book instantly via WhatsApp.',
  generator: 'v0.app',
  keywords: [
    'luxury transport Mombasa',
    'chauffeur Mombasa',
    'airport transfer Mombasa',
    'wedding cars Mombasa',
    'car hire Nyali',
    'VIP transport Kenya',
  ],
}

export const viewport: Viewport = {
  themeColor: '#171512',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
