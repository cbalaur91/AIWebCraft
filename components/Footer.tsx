import Link from 'next/link'
import { Facebook as FacebookIcon, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin, Code2 } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AIWebHub
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Crafting exceptional digital experiences with AI-powered precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574644971669" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio Sites
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400">+1 (734) 341-6746</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400">aiwebcraftinfo@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} AIWebHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}