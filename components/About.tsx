'use client'

import { motion } from 'framer-motion'
import { Target, Shield } from 'lucide-react'

const About = () => {
  const roadmapItems = [
    {
      phase: 'Today',
      title: 'Trusted System Integrators',
      description: 'Strong partnerships with global automation brands',
      status: 'current'
    },
    {
      phase: 'Tomorrow',
      title: 'Building Indian Products',
      description: 'Designing solutions specifically for Indian needs',
      status: 'next'
    },
    {
      phase: 'Future',
      title: 'AI-powered Smart Systems',
      description: 'IoT-enabled platforms for next-generation smart systems',
      status: 'future'
    }
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Enhanced Textured Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-teal-50/90"></div>
      
      {/* Strong textured pattern overlays */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(20, 184, 166, 0.2) 2px, transparent 2px),
          radial-gradient(circle at 75px 75px, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 150px 150px'
      }}></div>
      
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(148, 163, 184, 0.1) 0px, rgba(148, 163, 184, 0.1) 1px, transparent 1px, transparent 15px),
          repeating-linear-gradient(-45deg, rgba(20, 184, 166, 0.08) 0px, rgba(20, 184, 166, 0.08) 1px, transparent 1px, transparent 20px)
        `
      }}></div>

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
            <Target className="w-4 h-4 mr-2" />
            About AccessIQ Innovation
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Redefining Access.
            <span className="block text-teal-600">Empowering Spaces.</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            AccessIQ Innovation Pvt Ltd is a technology-driven company focused on redefining how people 
            and vehicles move through spaces. Our mission is to deliver secure, seamless, and intelligent 
            access solutions that blend hardware reliability with software intelligence.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="backdrop-blur-lg bg-white/80 rounded-2xl border border-white/20 p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be India&apos;s most trusted name in access automation and smart mobility, 
              proudly Made in India.
            </p>
          </motion.div>

          <motion.div
            className="backdrop-blur-lg bg-white/80 rounded-2xl border border-white/20 p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We begin as a system integrator with strong associations across global brands in automation, 
              while shaping a future where AccessIQ becomes synonymous with innovation, reliability, 
              and cutting-edge Indian-made technology.
            </p>
          </motion.div>
        </div>

        {/* Roadmap */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Our Roadmap
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From trusted integrators to innovation leaders, here&apos;s our journey forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative backdrop-blur-lg rounded-2xl border p-8 shadow-xl ${
                  item.status === 'current' 
                    ? 'bg-teal-50/80 border-teal-200' 
                    : item.status === 'next'
                    ? 'bg-blue-50/80 border-blue-200'
                    : 'bg-slate-50/80 border-slate-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  item.status === 'current' 
                    ? 'bg-teal-100 text-teal-700' 
                    : item.status === 'next'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {item.phase}
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                {item.status === 'current' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us: moved to single improved WhyChooseUs.tsx component */}
      </div>
    </section>
  )
}

export default About