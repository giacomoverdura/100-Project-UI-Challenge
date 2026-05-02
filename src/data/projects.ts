import SaaSLandingPage from "@/features/saas-landing-page/index"
import saasImage from "@/assets/projects/saas-landing-page-ui.png"

export const projects = [
  {
    id : 1,
    slug: "saas-landing-page",
    title: "SaaS Landing Page",
    image: saasImage,
    category: "Landing Page",
    github: "https://github.com/giacomoverdura/100-UI-Project/tree/main/src/features/saas-landing-page",
    component: SaaSLandingPage,
    tech: ["React", "Tailwind", "ShadCN UI", "Vite", "Framer Motion"],
    description: "Modern SaaS UI built with React and Tailwind and ShadCN UI. Features a clean design, responsive layout, and interactive elements. Perfect for showcasing your software product with style and functionality.",
  },
  
]