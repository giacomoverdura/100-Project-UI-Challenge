import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow z-50 bg-background text-foreground backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="text-2xl font-bold flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <div className="text-foreground">SaaS</div>
          </a>
          <div className="space-x-5">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-100">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-100">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors duration-100">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-100">
              Contact
            </a>
          </div>
          <div className="space-x-2">
            <Button variant="outline" className="text-foreground transition-colors duration-100">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 transition-colors duration-100">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}