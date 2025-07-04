import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AIWebHub",
    "url": "https://aiwebhub.io",
    "description": "Modern web agency specializing in AI-powered web solutions",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aiwebhub.io/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AIWebHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aiwebhub.io/logo/logo.png"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      
      <ServicesSection />
      
      <ProcessSection />
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to transform your digital presence?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400 mb-8">
              Let's create something amazing together. Contact us today to get started.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 px-8 py-6"
                size="lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}