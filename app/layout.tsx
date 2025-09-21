import FAB from '@/components/FAB'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AccessIQ Innovation - Smart Access Control Solutions',
  description: 'Leading provider of gate automation, RFID/ANPR systems, parking management, and pedestrian access control solutions across India. Trusted by 500+ businesses.',
  keywords: 'access control, gate automation, RFID, ANPR, parking management, security systems, Mumbai, India',
  authors: [{ name: 'AccessIQ Innovation' }],
  creator: 'AccessIQ Innovation',
  publisher: 'AccessIQ Innovation',
  robots: 'index, follow',
  openGraph: {
    title: 'AccessIQ Innovation - Smart Access Control Solutions',
    description: 'Leading provider of smart access control solutions across India',
    type: 'website',
    locale: 'en_IN',
    url: 'https://accessiq.in',
    siteName: 'AccessIQ Innovation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AccessIQ Innovation - Smart Access Control Solutions',
    description: 'Leading provider of smart access control solutions across India',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d9488',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      <body className="antialiased bg-white text-slate-900 font-body">
        <div id="root">
          {children}
        </div>
        <FAB />
      </body>
    </html>
  )
}