'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, MessageSquare, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleWhatsAppClick = (href: string) => {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile: Open WhatsApp app directly
      window.location.href = href;
    } else {
      // On desktop: Open WhatsApp Web in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: 'Preet: +91 97571 01055\nAnand: +91 77387 31055\nNamra: +91 75592 00595',
      description: 'Monday to Sunday 8 AM to 11 PM',
      action: 'tel:+919757101055'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: 'Connect with Preet',
      description: 'Quick responses via WhatsApp',
      action: 'https://wa.me/919757101055'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@accessiq.in',
      description: 'We\'ll respond within 24 hours',
      action: 'mailto:info@accessiq.in'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9AM - 6PM\nSun: Emergency only',
      description: 'Emergency support: 24/7',
      action: '#'
    }
  ]

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Enhanced Textured Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/95 via-white/98 to-teal-100/95"></div>
      
      {/* Strong textured pattern overlays */}
      <div className="absolute inset-0 opacity-[0.2]" style={{
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(20, 184, 166, 0.3) 2px, transparent 2px),
          radial-gradient(circle at 75px 75px, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 150px 150px'
      }}></div>
      
      <div className="absolute inset-0 opacity-[0.12]" style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0),
          radial-gradient(circle at 2px 3px, rgba(255,255,255,0.15) 1px, transparent 0)
        `,
        backgroundSize: '4px 4px, 6px 6px'
      }}></div>
      
      {/* Multi-layer background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-teal-200/55 to-blue-200/45 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-gradient-to-tl from-slate-200/65 to-teal-200/55 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/50 to-teal-200/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        


        {/* Final textured overlay for professional finish */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.08) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 75px 75px, 100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Ready to Secure
            <span className="block text-teal-600">Your Business?</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and custom quote for your access control needs. 
            Our experts are ready to help you find the perfect solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-xl border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/30 bg-white/50 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Team */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start space-x-4 p-4 backdrop-blur-sm bg-white/60 rounded-xl border border-white/30 hover:bg-white/80 hover:border-teal-200 transition-all duration-300 group ${
                      info.action !== '#' ? 'cursor-pointer' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    onClick={() => {
                      if (info.action.startsWith('https://wa.me/')) {
                        handleWhatsAppClick(info.action);
                      } else if (info.action !== '#') {
                        window.open(info.action, '_self');
                      }
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300 shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-slate-700 font-medium whitespace-pre-line">
                        {info.details}
                      </p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Office Address */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Visit Our Office
              </h3>
              
              <motion.div
                className="backdrop-blur-sm bg-gradient-to-br from-teal-50/80 to-slate-50/80 rounded-xl p-6 border border-teal-200/50 hover:border-teal-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => window.open('https://maps.app.goo.gl/jCuRdTuk8BJT3ah1A', '_blank')}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {/* Google Maps icon */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path 
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                      fill="#EA4335"
                    />
                  </svg>
                  <h4 className="font-semibold text-slate-900 text-lg">AccessIQ Innovation Office</h4>
                </div>
                <p className="text-slate-700 font-medium mb-3 leading-relaxed">
                  173 Upper, Second Floor,<br />
                  Raghuleela Mall, Kandivali (W),<br />
                  Mumbai – 400067, India
                </p>
                <p className="text-teal-600 font-medium text-sm mb-2">
                  Monday to Sunday: 8:00 AM - 11:00 PM
                </p>
                <p className="text-slate-500 text-xs flex items-center space-x-1">
                  <span>📍</span>
                  <span>Click to open in Google Maps</span>
                </p>
              </motion.div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-white/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 backdrop-blur-sm bg-white/40 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">&lt; 24h</div>
                    <div className="text-slate-600 text-sm font-medium">Response Time</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-sm bg-white/40 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">500+</div>
                    <div className="text-slate-600 text-sm font-medium">Projects Done</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact