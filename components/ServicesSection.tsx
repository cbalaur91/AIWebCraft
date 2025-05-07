"use client"

import { motion } from 'framer-motion'
import { Monitor, Palette, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Landing Pages",
    description: "Conversion-focused landing pages designed to turn visitors into customers with compelling CTAs and optimized user journeys.",
    icon: Monitor,
    delay: 0.1,
  },
  {
    title: "Portfolio Sites",
    description: "Showcase your work with elegantly designed portfolio websites that highlight your skills and achievements.",
    icon: Palette,
    delay: 0.2,
  },
  {
    title: "Business Websites",
    description: "Professional business websites that establish credibility, communicate your value proposition, and drive growth.",
    icon: BarChart3,
    delay: 0.3,
  },
]

export const ServicesSection = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We offer comprehensive web solutions tailored to your specific needs and objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 bg-[#1a1a1a] shadow-xl transition-all duration-200 hover:shadow-blue-900/20">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}