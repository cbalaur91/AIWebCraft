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
        url: 'https://aiwebhub.io/thumbnails/logo-thumbnail.png',
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
    images: ['https://aiwebhub.io/thumbnails/logo-thumbnail.png'],
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
    icon: [
      { url: '/favicons/favicon.ico', sizes: '32x32' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicons/favicon.ico',
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicons/favicon.ico' },
      { rel: 'manifest', url: '/favicons/site.webmanifest' },
    ],
  },
  manifest: '/favicons/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://aiwebhub.io/thumbnails/logo-thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AIWebHub - Innovative Web Solutions" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://aiwebhub.io/thumbnails/logo-thumbnail.png" />
        <meta name="twitter:image:alt" content="AIWebHub - Innovative Web Solutions" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AIWebHub",
              "alternateName": "AIWebHub - Innovative Web Solutions",
              "url": "https://aiwebhub.io",
              "logo": "https://aiwebhub.io/logo/logo.png",
              "image": "https://aiwebhub.io/thumbnails/logo-thumbnail.png",
              "description": "Modern web agency building beautiful, high-performing websites with AI-powered precision",
              "sameAs": [
                "https://twitter.com/aiwebhub"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "foundingDate": "2024",
              "areaServed": "Worldwide",
              "serviceType": [
                "Web Design",
                "Web Development",
                "Landing Pages",
                "Portfolio Websites",
                "Business Websites"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#111111] min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}