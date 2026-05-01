import './App.css'
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Trusted from './components/sections/Trusted';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import Reveal from "@/components/ui/Reveal"

function App() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Trusted />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Footer />
    </div>
    </>
  )
}

export default App
