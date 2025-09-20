'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Car,
  CheckCircle,
  DoorOpen,
  Scan,
  Settings,
  Shield,
  Users,
  Zap
} from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      icon: DoorOpen,
      image: '/products/gate-automation.png',
      title: 'Gate Automation',
      description: 'Swing and sliding gate automation for homes, villas, societies, and commercial spaces with world-class systems.',
      features: ['Swing Gates', 'Sliding Gates', 'Smart Connectivity', 'Remote & RFID Control'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      image: '/products/boom-barriers.png',
      title: 'Boom Barriers',
      description: 'Fast, durable boom barriers with RFID/ANPR integration for residential, commercial, and industrial sites.',
      features: ['Quick Open/Close', 'RFID Integration', 'ANPR Support', 'Manual Override'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Scan,
      image: '/products/vehicle-access-automation.png',
      title: 'Vehicle Access (RFID/ANPR)',
      description: 'Advanced RFID and ANPR systems for fast, contactless vehicle identification and automatic plate recognition.',
      features: ['RFID Readers', 'License Plate Recognition', 'Contactless Entry', 'Real-time Monitoring'],
      color: 'from-teal-600 to-teal-700'
    },
    {
      icon: Car,
      image: '/products/parking-management.png',
      title: 'Parking Management',
      description: 'Smart parking solutions with real-time guidance, QR/UPI payments, and comprehensive analytics.',
      features: ['Real-time Guidance', 'QR & UPI Payments', 'Analytics & Reporting', 'Visitor Management'],
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: Users,
      image: '/products/pedestrian-access-control.png',
      title: 'Pedestrian Access Control',
      description: 'Flap barriers, turnstiles, and swing barriers with biometric integration for secure pedestrian access.',
      features: ['Flap Barriers', 'Turnstiles', 'Swing Barriers', 'Biometric & QR Integration'],
      color: 'from-teal-500 to-teal-700'
    },
    {
      icon: Settings,
      image: '/products/technology-integration.png',
      title: 'Technology & Integration',
      description: 'Complete ecosystem integration with API connectivity, mobile dashboards, and IoT-ready solutions.',
      features: ['API Integrations', 'Mobile Dashboards', 'Cloud/On-premise', 'IoT Ready'],
      color: 'from-slate-600 to-slate-800'
    }
  ]

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Enhanced Textured Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/95 to-slate-100/90"></div>
      
      {/* Strong textured pattern overlays */}
      <div className="absolute inset-0 opacity-[0.35]" style={{
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(148, 163, 184, 0.4) 2px, transparent 2px),
          radial-gradient(circle at 75px 75px, rgba(100, 116, 139, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 150px 150px'
      }}></div>
      
      <div className="absolute inset-0 opacity-[0.25]" style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(148, 163, 184, 0.3) 0px, rgba(148, 163, 184, 0.3) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.3) 0px, rgba(148, 163, 184, 0.3) 1px, transparent 1px, transparent 20px)
        `
      }}></div>
      
      {/* Multiple layered background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-200/40 to-gray-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tl from-slate-300/50 to-gray-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-200/35 to-slate-200/35 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        


        {/* Paper texture overlay for sections */}
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0),
            radial-gradient(circle at 2px 3px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '4px 4px, 6px 6px'
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
            <Zap className="w-4 h-4 mr-2" />
            Our Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Intelligent Entrance &
            <span className="block text-teal-600">Access Solutions</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Technology-driven solutions that blend hardware reliability with software intelligence. 
            From automated gates to integrated ecosystems, we create smart access solutions for every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-lg bg-white/80 rounded-2xl border border-white/20 hover:border-teal-200 p-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <motion.div 
                className="w-12 h-12 bg-theme-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-theme-primary group-hover:scale-110 transition-all duration-300"
                whileHover={{ rotate: 10 }}
              >
                <service.icon className="w-6 h-6 text-theme-primary transition-colors duration-300" />
              </motion.div>

              {/* Product Image */}
              {service.image && (
                <motion.div 
                  className="relative w-full h-48 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              )}

              {/* Content */}
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-theme-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="w-full bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-lg bg-gradient-to-r from-teal-600/90 to-teal-700/90 rounded-2xl p-8 text-white shadow-2xl border border-white/10">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Upgrade Your Security?
            </h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Get a free consultation and custom quote for your access control needs. 
              Our experts will design the perfect solution for your business.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services