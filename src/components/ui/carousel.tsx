import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  category: string
  link: string
}

interface CarouselProps {
  items: Project[]
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = items.length - 1
      if (newIndex >= items.length) newIndex = 0
      return newIndex
    })
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative h-[500px] mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full"
          >
            <div className="group relative overflow-hidden rounded-lg bg-gray-800">
              <div className="relative h-[500px]">
                <img
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-purple-600/80 px-3 py-1 text-sm text-white backdrop-blur-sm">
                      {items[currentIndex].category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{items[currentIndex].title}</h3>
                  <p className="mb-4 text-sm text-gray-300">{items[currentIndex].description}</p>
                  <a
                    href={items[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-purple-400 transition-colors bg-purple-600/80 hover:bg-purple-600 px-6 py-2.5 rounded-full backdrop-blur-sm"
                  >
                    View Project
                    <svg
                      className="ml-2 h-5 w-5"
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
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}