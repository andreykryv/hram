import type { Metadata } from 'next'
import { Inter, PT_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const ptSerif = PT_Serif({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Храм Воздвижения Креста Господня | Минск',
    template: '%s | Храм Воздвижения Креста Господня',
  },
  description: 'Приход храма Воздвижения Креста Господня в Минске. Расписание богослужений, история храма, таинства, духовенство.',
  keywords: ['православный храм', 'минск', 'крестовоздвиженский храм', 'богослужения', 'расписание служб', 'таинства'],
  authors: [{ name: 'Храм Воздвижения Креста Господня' }],
  creator: 'Храм Воздвижения Креста Господня',
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://kvhram.by',
    siteName: 'Храм Воздвижения Креста Господня',
    title: 'Храм Воздвижения Креста Господня | Минск',
    description: 'Приход храма Воздвижения Креста Господня в Минске. Расписание богослужений, история храма, таинства.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Храм Воздвижения Креста Господня в Минске',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Храм Воздвижения Креста Господня | Минск',
    description: 'Приход храма Воздвижения Креста Господня в Минске',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${ptSerif.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
