import { Link } from "react-router-dom"
import { projects } from "@/data/projects"

export default function Navbar() {
  const totalProjects = 100
  const completed = projects.length
  
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link
          to="/"
          className="font-semibold tracking-tight text-foreground"
        >
          100 UI
        </Link>

        <div className="hidden md:block text-xs text-muted-foreground">
  Building a UI Project • {completed} / {totalProjects} completed
</div>

        <div className="flex items-center gap-4 text-sm">

          <a
            href="https://github.com/giacomoverdura/100-UI-Project"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </header>
  )
}