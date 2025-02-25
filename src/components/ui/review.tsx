import React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface Review {
  name: string
  company: string
  review: string
  rating: number
}

const reviews: Review[] = [
  {
    name: "Anya Solari",
    company: "Tech Innovators",
    review: "AiWebHub delivered an exceptional website that perfectly captures our brand. Their attention to detail and professional approach exceeded our expectations.",
    rating: 5
  },
  {
    name: "Kai Jensen",
    company: "Creative Studio",
    review: "The team at AiWebHub was fantastic to work with. They transformed our vision into a beautiful, functional website that has significantly improved our online presence.",
    rating: 5
  },
  {
    name: "Elias Vega",
    company: "Startup Founder",
    review: "Working with AiWebHub was a game-changer for our business. Their expertise in web development helped us create a powerful online platform that drives results.",
    rating: 5
  }
]

export function Review() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
            What Our Clients Say
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{review.review}</p>
              <div>
                <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{review.name}</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}