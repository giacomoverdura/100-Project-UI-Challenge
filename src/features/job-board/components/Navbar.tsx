import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl uppercase">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">

          <a href="#" className="hover:text-foreground transition">
            Jobs
          </a>

          <a href="#" className="hover:text-foreground transition">
            Companies
          </a>

          <a href="#" className="hover:text-foreground transition">
            Salaries
          </a>

          <a href="#" className="hover:text-foreground transition">
            Blog
          </a>

        </nav>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            job board
          </span>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex justify-end items-center gap-3">

          <Button variant="ghost" className="rounded-none border border-border">
            SIGN IN
          </Button>

          <Button className="rounded-none">
            POST A JOB
          </Button>

        </div>

      </div>

    </header>
  )
}