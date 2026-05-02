import { Routes, Route } from "react-router-dom"
// import Home from "./pages/Home"
import SaaSLandingPage from "./features/saas-landing-page/index"

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/projects/saas-landing-page" element={<SaaSLandingPage />} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App