"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"
import { useEffect } from "react"
import { Menu, X } from "lucide-react"

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
  { id: "team", label: "Team", href: "/team" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [activeTab, setActiveTab] = React.useState<string>("")
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    const updateActiveTab = () => {
      const path = window.location.pathname
      const tab = tabs.find(tab => {
        if (tab.href === '/') {
          return path === '/'
        }
        return path.startsWith(tab.href)
      })
      setActiveTab(tab?.label || "Home")
    }

    // Update on mount
    updateActiveTab()

    // Add event listener for navigation changes
    window.addEventListener('popstate', updateActiveTab)

    return () => {
      window.removeEventListener('popstate', updateActiveTab)
    }
  }, [])

  const handleNavClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.label)
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">WebCraft</a>
        <div className="hidden md:flex space-x-2">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => handleNavClick(tab)}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2",
                {
                  "hover:text-white/60": activeTab !== tab.label,
                }
              )}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.label && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 py-2"
          >
            <div className="flex flex-col space-y-2 bg-gray-800 p-4 rounded-lg">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => handleNavClick(tab)}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2",
                    {
                      "bg-white/10": activeTab === tab.label,
                      "hover:bg-white/5": activeTab !== tab.label,
                    }
                  )}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}