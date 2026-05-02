import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Reveal from "@/components/ui/Reveal"
import ToggleTheme from './components/ToggleTheme';

export default function SaaSLandingPage() {
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
      <ToggleTheme />
    </div>
    </>
  )
}