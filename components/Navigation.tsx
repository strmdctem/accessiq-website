'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Menu, Phone, Shield, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#services' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-display text-xl text-slate-900">AccessIQ</div>
              <div className="text-xs text-teal-600 font-medium tracking-wider">
                Smart • Secure • Seamless
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+919757101055"
              className="flex items-center space-x-2 text-slate-700 hover:text-teal-600 transition-colors duration-200"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </motion.a>
            
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-teal-600 transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg font-medium transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <motion.a
                  href="tel:+919757101055"
                  className="flex items-center space-x-3 py-3 px-4 text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 97571 01055</span>
                </motion.a>
                
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation