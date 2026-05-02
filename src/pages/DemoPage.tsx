import { useParams } from "react-router-dom"
import { projects } from "@/data/projects"

export default function DemoPage() {
  const { slug } = useParams()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  const Component = project.component

  return <Component />
}