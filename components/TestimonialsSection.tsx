"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Vortex } from '@/components/ui/vortex'

const testimonials = [
   {
   name: "Jessica Miller",
   position: "Owner, Miller & Co. Bakery",
   content: "We hired AIWebHub to redesign our website, and they nailed it. It's clean, easy to use, and our customers love it. The whole process was smooth and communication was great.",
   rating: 5,
   },
   {
   name: "Tom Andrews",
   position: "Freelance Photographer",
   content: "I'm not super tech-savvy, so I really appreciated how patient and helpful the team was. They explained things clearly and built a site that looks professional and works perfectly on mobile.",
   rating: 4,
   },
   {
   name: "Maria Lopez",
   position: "Manager, Willow Tree Wellness",
   content: "AIWebHub helped us move from an outdated site to something fresh and modern. Since launching, we've seen more appointment bookings and better feedback from our clients.",
   rating: 5,
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
    <div className="w-full h-[800px] sm:h-[700px] md:h-[700px] overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={250}
        baseHue={280}
        rangeY={500}
        baseSpeed={0.3}
        rangeSpeed={1.2}
        baseRadius={1.5}
        rangeRadius={2.5}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 md:py-4 w-full h-full"
      >
        <div className="container mx-auto">
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
                  className="border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="flex flex-col items-center md:flex-row md:items-start">
                    <div>
                      <div className="mb-3 flex">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-gray-300 italic text-lg leading-relaxed">
                        "{testimonials[current].content}"
                      </p>
                      <div>
                        <p className="font-semibold text-white text-lg">
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
                  className={`h-3 w-3 rounded-full p-0 transition-all duration-300 ${
                    current === index
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  )
}