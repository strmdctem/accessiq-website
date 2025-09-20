'use client'

import { motion } from 'framer-motion'
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#services' },
    { name: 'Why Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Gate Automation',
    'RFID Systems',
    'ANPR Solutions', 
    'Parking Management',
    'Pedestrian Access',
    'Security Turnstiles'
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-teal-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-teal-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-teal-400 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-600/5"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display text-xl text-white">AccessIQ</div>
                  <div className="text-xs text-teal-400 font-medium">Innovation</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of smart access control solutions across India. 
                Securing businesses with cutting-edge technology and expert support.
              </p>
              
              <div className="space-y-3">
                <motion.a
                  href="tel:+919757101055"
                  className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 97571 01055</span>
                </motion.a>
                
                <motion.a
                  href="mailto:info@accessiq.in"
                  className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>info@accessiq.in</span>
                </motion.a>
                
                <motion.div
                  className="flex items-center space-x-3 text-slate-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Mumbai, Maharashtra, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-white">
                Our Solutions
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Business Hours & Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-white">
                Support & Hours
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-teal-400 mb-2">Business Hours</h4>
                  <p className="text-slate-300 text-sm">Monday - Saturday</p>
                  <p className="text-slate-300 text-sm">9:00 AM - 6:00 PM</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-teal-400 mb-2">Emergency Support</h4>
                  <p className="text-slate-300 text-sm">24/7 Available</p>
                  <p className="text-slate-300 text-sm">Quick Response Time</p>
                </div>
                
                <motion.button
                  onClick={() => handleNavClick('#contact')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 mt-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quote
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-slate-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                © {currentYear} AccessIQ Innovation Pvt Ltd. All rights reserved.
              </motion.p>
              
              <div className="flex items-center space-x-6">
                <motion.button
                  className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Privacy Policy
                </motion.button>
                
                <motion.button
                  className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Terms of Service
                </motion.button>
                
                <motion.button
                  onClick={handleScrollToTop}
                  className="bg-teal-600 hover:bg-teal-700 p-2 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer