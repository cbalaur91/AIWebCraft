import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface Project {
  title: string
  description: string
  image: string
  category: string
  link: string
}

interface Gallery4Props {
  items: Project[]
}

export function Gallery4({ items }: Gallery4Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-lg bg-gray-800"
        >
          <div className="aspect-square">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 p-6 w-full">
            <div className="mb-2">
              <span className="inline-block rounded-full bg-purple-600/80 px-3 py-1 text-sm text-white backdrop-blur-sm">
                {item.category}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mb-4 text-sm text-gray-300">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
            >
              View Project
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}