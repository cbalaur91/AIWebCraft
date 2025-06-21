"use client"

import { motion } from 'framer-motion'
import { Monitor, Palette, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Vortex } from '@/components/ui/vortex'

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
    <div className="w-full h-[1000px] sm:h-[800px] md:h-[800px] overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={300}
        baseHue={220}
        rangeY={600}
        baseSpeed={0.4}
        rangeSpeed={1.5}
        baseRadius={2}
        rangeRadius={3}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 md:py-4 w-full h-full"
      >
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              We offer comprehensive web solutions tailored to your specific needs and objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-8 md:pb-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
              >
                <Card className="group border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10">
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
      </Vortex>
    </div>
  )
}