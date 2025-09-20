import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-teal-100 relative overflow-hidden">
      {/* Professional Textured Background Patterns */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-100/80 via-slate-50/60 to-blue-100/70"></div>
        
        {/* Strong Textured Pattern Overlays */}
        <div className="absolute inset-0 opacity-[0.25]" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(20, 184, 166, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
        
        {/* Diagonal Cross-Hatch Pattern */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(20, 184, 166, 0.2) 0px, rgba(20, 184, 166, 0.2) 1px, transparent 1px, transparent 12px),
            repeating-linear-gradient(-45deg, rgba(148, 163, 184, 0.15) 0px, rgba(148, 163, 184, 0.15) 1px, transparent 1px, transparent 16px)
          `,
        }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(148, 163, 184, 0.2) 0px, rgba(148, 163, 184, 0.2) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.2) 0px, rgba(148, 163, 184, 0.2) 1px, transparent 1px, transparent 20px)
          `,
        }}></div>
        
        {/* Paper Texture - More Visible */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0),
            radial-gradient(circle at 2px 3px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '4px 4px, 6px 6px'
        }}></div>
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: `
            radial-gradient(circle at 30px 30px, rgba(20, 184, 166, 0.3) 3px, transparent 3px),
            radial-gradient(circle at 60px 15px, rgba(148, 163, 184, 0.2) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 60px 60px'
        }}></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-300/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-teal-200/50 to-slate-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-tr from-blue-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric texture elements */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute top-40 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-45"></div>
          <div className="absolute bottom-60 right-40 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
          <div className="absolute top-60 right-20 w-16 h-16 border border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 left-40 w-20 h-20 border border-blue-400 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border border-slate-400 rounded-md rotate-45"></div>
          <div className="absolute bottom-1/3 right-1/4 w-14 h-14 border border-teal-500 rounded-full"></div>
        </div>
      </div>

      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
