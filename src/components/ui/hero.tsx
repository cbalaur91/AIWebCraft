"use client"

import React from "react"
import { motion } from "framer-motion"

const FloatingShape = ({ className }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.6, 0.3, 0.6],
      y: [0, 20, 0],
      rotate: [0, 10, 0]
    }}
    transition={{ 
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`absolute rounded-full blur-3xl ${className}`}
  />
)

export function Hero() {
  return (
    <div className="relative min-h-[45rem] w-full dark:bg-black bg-white overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape className="w-72 h-72 bg-purple-500/30 -top-10 -left-10" />
      <FloatingShape className="w-96 h-96 bg-blue-500/30 top-20 -right-20" />
      <FloatingShape className="w-72 h-72 bg-pink-500/30 bottom-10 left-1/3" />

      <div className="absolute inset-0 w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24 min-h-[45rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Elevate Your
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Digital Vision
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="/contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition">
            Get Started
          </a>
          <a href="/portfolio" className="px-6 py-3 rounded-lg border border-purple-500 text-white hover:bg-purple-500/10 transition">
            View Our Work
          </a>
        </motion.div>
      </div>
    </div>
  )
}
