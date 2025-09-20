import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-100 rounded-full blur-3xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-50 rounded-full blur-3xl" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15, 23, 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}