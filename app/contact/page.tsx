import { ContactForm } from '@/components/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="bg-[#111111] pt-32 pb-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Have a project in mind or questions about our services? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-400 mb-8">
                  Whether you're starting a new project, looking to redesign your current website, or just have questions about our services, we're here to help. Reach out to us using your preferred contact method.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card className="border-0 bg-[#1a1a1a]">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                      <Mail className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="font-medium text-white">Email Us</p>
                    <Link
                      href="mailto:aiwebcraftinfo@gmail.com"
                      className="mt-2 text-sm text-blue-500 hover:underline"
                    >
                      aiwebcraftinfo@gmail.com
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="border-0 bg-[#1a1a1a]">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                      <Phone className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="font-medium text-white">Call Us</p>
                    <Link
                      href="tel:+17343416746"
                      className="mt-2 text-sm text-purple-500 hover:underline"
                    >
                      +1 (734) 341-6746
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to complete a website?",
                  answer: "Project timelines vary depending on complexity and scope. A simple landing page might take 2-3 weeks, while a complex business website could take 6-8 weeks. During our initial consultation, we'll provide you with a more accurate timeline based on your specific requirements."
                },
                {
                  question: "What information do you need to get started?",
                  answer: "To get started, we'll need information about your business, your target audience, your objectives for the website, any design preferences, and examples of websites you like. The more information you provide, the better we can tailor our solution to your needs."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes, we offer various maintenance and support packages to keep your website running smoothly after launch. These can include regular updates, security monitoring, content updates, and performance optimization."
                },
                {
                  question: "How much does a website cost?",
                  answer: "Website costs vary based on complexity, features, and scope. Our landing pages start at $1,500, portfolio sites at $2,000, and business websites at $3,500. We provide detailed quotes after understanding your specific requirements."
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-[#1a1a1a] p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}