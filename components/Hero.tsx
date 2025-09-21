'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Award, Lock, Shield, Zap } from 'lucide-react'

const Hero = () => {
  const handleGetQuote = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Lock, text: 'Access Control' },
    { icon: Zap, text: 'Smart Automation' },
    { icon: Award, text: 'Trusted Solutions' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Textured Professional Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/98 to-slate-100/95"></div>
        
        {/* Strong Fabric texture pattern */}
        <div className="absolute inset-0 opacity-[0.35]" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.3) 0px, rgba(148, 163, 184, 0.3) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(-45deg, rgba(100, 116, 139, 0.2) 0px, rgba(100, 116, 139, 0.2) 1px, transparent 1px, transparent 12px)
          `
        }}></div>
        
        {/* Strong Paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0),
            radial-gradient(circle at 2px 3px, rgba(255,255,255,0.18) 1px, transparent 0)
          `,
          backgroundSize: '4px 4px, 6px 6px'
        }}></div>
        
        {/* Dotted texture pattern */}
        <div className="absolute inset-0 opacity-[0.30]" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(148, 163, 184, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(100, 116, 139, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
        
        {/* Multiple layered gradient orbs */}
        <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-slate-300/40 to-gray-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-gradient-to-tl from-slate-200/50 to-gray-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-200/35 to-gray-200/35 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        


        {/* Final noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.20) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.12) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 75px 75px, 100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="w-4 h-4 mr-2" />
              India&apos;s Trusted Access Automation Partner
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Redefining Access.
              <span className="block text-teal-600">Empowering Spaces.</span>
            </motion.h1>

            {/* Professional Tagline */}
            <motion.div
              className="inline-block text-sm md:text-base font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-full mb-6 tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              INTELLIGENT ENTRANCE & ACCESS SOLUTIONS
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From automated gates to parking management, from RFID to ANPR, from pedestrian barriers 
              to integrated ecosystems — AccessIQ is your trusted partner in building the future of smart access.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={handleGetQuote}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="tel:+919757101055"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Call +91 97571 01055
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-slate-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <feature.icon className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Enterprise Security Dashboard */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main Container */}
            <div className="relative w-full max-w-sm lg:max-w-lg h-80 lg:h-96 mx-auto">
              
              {/* Professional Control Panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
                
                {/* Header Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600 flex items-center justify-between px-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-200 font-medium text-sm">AccessIQ Security</span>
                  </div>
                  <div className="flex space-x-1">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                    />
                  </div>
                </div>
                
                {/* Central Security Visualization */}
                <div className="absolute inset-0 top-12 flex items-center justify-center">
                  
                  {/* Central Hub */}
                  <motion.div 
                    className="relative w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-xl border border-teal-400/30"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
                        '0 20px 40px -12px rgba(20, 184, 166, 0.3)',
                        '0 20px 40px -12px rgba(0, 0, 0, 0.4)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Shield className="w-10 h-10 text-white" />
                    
                    {/* Scanning Rings */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-teal-400 rounded-xl"
                      animate={{ 
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute inset-0 border border-teal-300 rounded-xl"
                      animate={{ 
                        scale: [1, 2.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>
                  
                  {/* Data Flow Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
                    {/* Horizontal data streams */}
                    <motion.line
                      x1="50" y1="160" x2="150" y2="160"
                      stroke="rgba(20, 184, 166, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.line
                      x1="250" y1="160" x2="350" y2="160"
                      stroke="rgba(20, 184, 166, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    
                    {/* Vertical data streams */}
                    <motion.line
                      x1="200" y1="80" x2="200" y2="120"
                      stroke="rgba(20, 184, 166, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.line
                      x1="200" y1="200" x2="200" y2="240"
                      stroke="rgba(20, 184, 166, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                    />
                  </svg>
                </div>
                
                {/* Security Metrics */}
                <div className="absolute top-16 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Lock, label: 'SECURE', value: '100%' },
                      { icon: Zap, label: 'SPEED', value: '<2s' },
                      { icon: Award, label: 'UPTIME', value: '99.9%' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg p-2 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      >
                        <item.icon className="w-3 h-3 text-teal-400 mx-auto mb-1" />
                        <div className="text-slate-300 text-xs font-medium">{item.label}</div>
                        <div className="text-teal-400 text-xs font-bold">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Status Display */}
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                  }}
                >
                  <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
                    SYSTEM ACTIVE
                  </div>
                </motion.div>
                
                {/* Subtle Corner Accents */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-teal-500/30 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-teal-500/30 rounded-bl-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero