import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function ProjectCard({ project }: any) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
    >

      {/* IMAGE PREVIEW */}
      <div className="h-48 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill transition-transform duration-500 rounded-tl-2xl rounded-tr-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        {/* TITLE + ARROW */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg leading-tight">
            {project.title}
          </h3>

          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition" />
        </div>

        {/* CATEGORY */}
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {project.category[0]}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech?.slice(0, 3).map((t: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* HOVER GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/5 transition" />

    </Link>
  )
}