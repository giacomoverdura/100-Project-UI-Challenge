import { useParams, Link } from "react-router-dom"
import { projects } from "@/data/projects"
import { ArrowLeft } from "lucide-react"
import ToggleTheme from "./ToggleTheme"

export default function ProjectPage() {
  const { slug } = useParams()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Project not found
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
        <ArrowLeft className="w-4 h-4" />
          Back to 100 UI
      </Link>

      <div className="rounded-2xl overflow-hidden border border-border bg-muted">
        <img src={project.image} alt={project.title} className="w-full h-auto object-cover"/>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>

        <p className="text-sm text-muted-foreground uppercase tracking-wide"> 
          {`category: ${project.category.join(", ")}`}
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-2">
        <p className="text-sm font-medium">Tech Stack</p>

        <div className="flex flex-wrap gap-2">
          {project.tech?.map((t: string, i: number) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Link to={`/demo/${project.slug}`} target="_blank" className="px-5 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition">
          View Demo
        </Link>
        <a href={project.github} target="_blank" className="px-5 py-2 border border-border rounded-xl hover:bg-muted transition">
          Source Code
        </a>

      </div>

      <ToggleTheme />
    </div>
  )
}