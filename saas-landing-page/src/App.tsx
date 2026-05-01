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

function App() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
    </>
  )
}

export default App
