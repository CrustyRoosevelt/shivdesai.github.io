import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Shiv Desai | Program Planning & Controls Specialist',
  description: 'Deputy Director of Program Controls with expertise in aerospace, earned value management, and business intelligence.',
  referrer: 'strict-origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://challenges.cloudflare.com; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      </head>
      <body className="min-h-screen bg-[#02070A] text-[#EBF5FA] antialiased">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
