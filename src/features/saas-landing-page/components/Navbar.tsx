import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">

        {/* Desktop View */}
        <a href="/" className="text-2xl font-bold flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <div className="text-foreground">SaaS</div>
        </a>

        <div className="hidden md:flex space-x-5">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
            Testimonials
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition">
            FAQ
          </a>
        </div>

        <div className="hidden md:flex space-x-2">
          <Button variant="outline">
            Log In
          </Button>
          <Button>
            Get Started
          </Button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
              <div className="flex items-center gap-2 pb-6 border-b border-border">
                <div className="h-8 w-8 rounded-full bg-primary" />
                <span className="font-semibold text-lg">SaaS</span>
              </div>
              <div className="flex flex-col space-y-5 mt-6">
                <a href="#features" className="text-base text-muted-foreground hover:text-foreground transition">
                  Features
                </a>

                <a href="#pricing" className="text-base text-muted-foreground hover:text-foreground transition">
                  Pricing
                </a>

                <a href="#testimonials" className="text-base text-muted-foreground hover:text-foreground transition">
                  Testimonials
                </a>

                <a href="#faq" className="text-base text-muted-foreground hover:text-foreground transition">
                  FAQ
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-border space-y-3">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>

                <Button className="w-full">
                  Get Started
                </Button>
              </div>

            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  )
}