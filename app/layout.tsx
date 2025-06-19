import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIWebHub - Modern Web Agency',
  description: 'We build beautiful, high-performing websites with AI-powered precision. Innovative web solutions for landing pages, portfolios, and business websites.',
  keywords: 'web design, web development, agency, website, landing page, portfolio, business website, AI-powered, modern web solutions',
  authors: [{ name: 'AIWebHub' }],
  creator: 'AIWebHub',
  publisher: 'AIWebHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aiwebhub.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AIWebHub - Innovative Web Solutions',
    description: 'Transform your digital presence with AI-powered web design. We create stunning landing pages, portfolios, and business websites that convert.',
    url: 'https://aiwebhub.io',
    siteName: 'AIWebHub',
    images: [
      {
        url: '/AiWebHubLogo.jpg',
        width: 1200,
        height: 630,
        alt: 'AIWebHub - Innovative Web Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIWebHub - Modern Web Agency',
    description: 'Build beautiful, high-performing websites with AI-powered precision. Professional web solutions for your business.',
    images: ['/AiWebHubLogo.jpg'],
    creator: '@aiwebhub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/AiWebHubLogo.jpg',
    shortcut: '/AiWebHubLogo.jpg',
    apple: '/AiWebHubLogo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111111] min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}