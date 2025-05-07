"use client"

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn about your business, goals, and target audience to create a strategic plan.",
    delay: 0.1,
  },
  {
    icon: Lightbulb,
    title: "Design",
    description: "Our designers craft beautiful mockups and prototypes tailored to your brand.",
    delay: 0.2,
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers bring the designs to life with clean, efficient, and responsive code.",
    delay: 0.3,
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy your site and provide the tools and training needed for success.",
    delay: 0.4,
  },
]

export const ProcessSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-30"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Our Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-gray-400"
          >
            Our streamlined workflow ensures each project is completed efficiently
            and to the highest standards.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+1.5rem)] right-0 h-[2px] hidden lg:block">
                  <div className="h-full w-full bg-gray-800 relative">
                    <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}