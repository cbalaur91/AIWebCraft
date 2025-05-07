"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content: "AIWebHub transformed our online presence with a stunning website that perfectly captures our brand identity. Their team was professional, responsive, and delivered beyond our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "David Chen",
    position: "Founder, Innovate Design",
    content: "Working with AIWebHub was an incredible experience. They not only built us a beautiful website but also provided valuable insights that improved our user experience and conversion rates.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthHub",
    content: "The team at AIWebHub are true professionals. They delivered our project on time and on budget, with exceptional attention to detail. Our new site has received countless compliments.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
]

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Client Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Hear what our clients have to say about working with AIWebHub.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1a1a] rounded-2xl p-8 shadow-xl"
              >
                <div className="flex flex-col items-center md:flex-row md:items-start">
                  <div className="shrink-0 mb-6 md:mb-0 md:mr-6">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-3 flex">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-gray-300 italic">
                      "{testimonials[current].content}"
                    </p>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[current].position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={"ghost"}
                size={"icon"}
                className={`h-3 w-3 rounded-full p-0 ${
                  current === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-700"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}