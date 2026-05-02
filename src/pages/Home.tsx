import { useEffect, useState } from "react"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/ProjectCard"
import Navbar from "@/components/layout/Navbar"
import ToggleTheme from "./ToggleTheme"

export default function Home() {
  const categories = ["All", "Landing Page", "Dashboard"]
  const [selected, setSelected] = useState("All")
  
  const filteredProjects =
  selected === "All"
    ? projects
    : projects.filter((p) => p.category === selected)

  
  const ITEMS_PER_PAGE = 6
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)

  const paginatedProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )
  useEffect(() => {
    setPage(1)
  }, [selected])
  return (
    <div className="min-h-screen bg-background">

      <Navbar />
      <div className="flex justify-center gap-2 max-w-6xl mx-auto px-6 py-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-3 py-1 rounded-full text-sm border transition
              ${
                selected === cat
                  ? "bg-primary text-white border-primary"
                  : "text-muted-foreground hover:text-foreground border-border"
              }`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-3">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {paginatedProjects.length > 0 ? (
            paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            "No projects found."
          )}

        </div>

        <div className="flex items-center justify-center gap-3 mt-10">

          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1 border rounded-md disabled:opacity-50">
            Prev
          </button>

          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>

          <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1 border rounded-md disabled:opacity-50">
            Next
          </button>
          
        </div>

      </div>
      
      <ToggleTheme />
    </div>
  )
}