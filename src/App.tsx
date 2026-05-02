import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import DemoPage from "./pages/DemoPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/demo/:slug" element={<DemoPage />} />
    </Routes>
  )
}