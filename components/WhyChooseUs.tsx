'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Globe, Shield, Star, TrendingUp, Users, Wrench } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: '50+ Projects',
      description: 'Successfully completed projects across India with high client satisfaction.',
      stat: '50+',
      label: 'Projects Completed'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services for uninterrupted operations.',
      stat: '24/7',
      label: 'Support Available'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled engineers and technicians with years of experience in access control systems.',
      stat: '10+',
      label: 'Years Experience'
    },
    {
      icon: Shield,
      title: 'Enterprise Grade',
      description: 'Military-grade security standards and compliance with international safety protocols.',
      stat: '99.9%',
      label: 'Uptime Guarantee'
    }
  ]

  const benefits = [
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored systems designed specifically for your business requirements and infrastructure.'
    },
    {
      icon: Globe,
      title: 'Pan-India Service',
      description: 'Comprehensive coverage across major cities with local support teams and service centers.'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Premium components from global leaders with extended warranties and quality guarantees.'
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready',
      description: 'Scalable solutions that grow with your business and integrate with emerging technologies.'
    }
  ]

  // reasons removed to reduce card count per request

  return (
    <section id="why-choose-us" className="relative py-20 overflow-hidden">
      {/* Enhanced Textured Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-100/85 to-white/95"></div>
      
      {/* Strong textured pattern overlays */}
      <div className="absolute inset-0 opacity-[0.35]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.3) 0px, rgba(148, 163, 184, 0.3) 1px, transparent 1px, transparent 15px)'
      }}></div>
      
      <div className="absolute inset-0 opacity-[0.25]" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.25) 0px, rgba(148, 163, 184, 0.25) 1px, transparent 1px, transparent 8px),
          repeating-linear-gradient(-45deg, rgba(100, 116, 139, 0.2) 0px, rgba(100, 116, 139, 0.2) 1px, transparent 1px, transparent 12px)
        `
      }}></div>
      
      {/* Multiple layered background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-slate-300/40 to-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-slate-200/40 to-gray-200/30 rounded-full blur-2xl"></div>
      </div>
      
      {/* Enhanced paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.18]" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 75%, rgba(148, 163, 184, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(100, 116, 139, 0.3) 0%, transparent 50%),
          linear-gradient(120deg, rgba(71, 85, 105, 0.08) 0%, rgba(148, 163, 184, 0.05) 100%)
        `
      }}></div>
      
      {/* Subtle geometric accents */}
      <div className="absolute top-10 left-1/4 w-2 h-20 bg-slate-300/60 transform rotate-12 rounded-full"></div>
      <div className="absolute bottom-10 right-1/3 w-3 h-16 bg-gray-400/50 transform -rotate-12 rounded-full"></div>

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
            <Star className="w-4 h-4 mr-2" />
            Why AccessIQ
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Why Choose
            <span className="block text-teal-600">AccessIQ</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology, trusted partnerships, and 24/7 support — delivered with an Indian-first vision.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 backdrop-blur-lg bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl border border-white/20 group-hover:border-teal-300 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-teal-600" />
              </motion.div>
              
              <motion.div 
                className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                {feature.stat}
              </motion.div>
              
              <div className="text-sm font-medium text-teal-600 mb-2">{feature.label}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

  {/* Benefits + Reasons Grid (merged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={`b-${index}`}
              className="backdrop-blur-lg bg-white/80 rounded-2xl p-6 shadow-xl border border-white/20 hover:border-teal-200 transition-all duration-300 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}

          {/* Removed additional reason cards per request */}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs