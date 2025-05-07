import { CheckCircle, Code, Globe, LineChart, Palette, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceFeature {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: ServiceFeature[];
  price: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Conversion-focused landing pages designed to turn visitors into customers.",
    icon: LineChart,
    features: [
      { title: "Custom Design", description: "Tailored to your brand identity and marketing goals" },
      { title: "Mobile Optimization", description: "Looks and works perfectly on all devices" },
      { title: "A/B Testing", description: "Test different versions to maximize conversion rates" },
      { title: "Lead Capture", description: "Built-in forms and CTAs to collect leads" },
      { title: "Analytics Integration", description: "Track performance with detailed metrics" },
    ],
    price: "From $500",
    popular: true,
  },
  {
    id: "portfolio-sites",
    title: "Portfolio Sites",
    description: "Showcase your work with elegantly designed portfolio websites that highlight your skills, achievements and professional journey.",
    icon: Palette,
    features: [
      { title: "Project Showcase", description: "Beautifully display your work with custom galleries" },
      { title: "Personal Branding", description: "Design that reflects your personal brand" },
      { title: "Contact Form", description: "Make it easy for potential clients to reach you" },
      { title: "Responsive Design", description: "Looks great on desktops, tablets and phones" },
      { title: "SEO Optimization", description: "Get found by potential clients online" },
    ],
    price: "From $1,000",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional business websites that establish credibility and drive growth.",
    icon: Globe,
    features: [
      { title: "Multi-Page Design", description: "Comprehensive site structure for your business" },
      { title: "Content Management", description: "Easy-to-use CMS to update your content" },
      { title: "SEO Strategy", description: "Optimized for search engines from the ground up" },
      { title: "Integration", description: "Connect with your tools and business systems" },
      { title: "Analytics Dashboard", description: "Track performance and user behavior" },
    ],
    price: "From $2,500",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#111111] pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We offer a range of web design and development services to help your business thrive online.
          </p>
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`overflow-hidden border-0 bg-[#1a1a1a] transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/10 ${
                  service.popular ? 'relative border-t-2 border-t-pink-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <div>
                          <p className="font-medium text-white">{feature.title}</p>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <p className="text-xl font-bold text-white">{service.price}</p>
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white">Additional Services</h2>
            <p className="mt-4 text-gray-400">
              Beyond our core services, we offer these additional solutions to enhance your web presence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Solutions",
                description: "Complete online store setup with secure payment processing, inventory management, and seamless customer experience.",
                icon: <Smartphone className="h-10 w-10 text-blue-500" />,
              },
              {
                title: "SEO & Content Marketing",
                description: "Comprehensive SEO strategies and content creation to improve your site's visibility and attract more organic traffic.",
                icon: <LineChart className="h-10 w-10 text-purple-500" />,
              },
              {
                title: "Custom Web Applications",
                description: "Bespoke web applications tailored to your specific business needs and workflows.",
                icon: <Code className="h-10 w-10 text-pink-500" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5">
            <div className="rounded-2xl bg-[#1a1a1a] px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Ready to start your project?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Contact us today to discuss your requirements and get a personalized quote.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:opacity-90 px-8 py-6"
                      size="lg"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}