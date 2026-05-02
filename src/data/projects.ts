import SaaSLandingPage from "@/features/saas-landing-page/index"
import saasImage from "@/assets/projects/saas-landing-page-ui.png"
import JobBoard from "@/features/job-board/index"

export const projects = [
  {
    id : 1,
    dateCreated: "2026-05-02",
    slug: "saas-landing-page",
    title: "SaaS Landing Page",
    image: saasImage,
    category: ["Landing Page", "Website"],
    github: "https://github.com/giacomoverdura/100-UI-Project/tree/main/src/features/saas-landing-page",
    component: SaaSLandingPage,
    tech: ["React", "Tailwind CSS", "ShadCN/UI", "Vite", "Framer Motion"],
    description: "Modern SaaS UI built with React and Tailwind and ShadCN UI. Features a clean design, responsive layout, and interactive elements. Perfect for showcasing your software product with style and functionality.",
  },
  {
    id : 2,
    dateCreated: "2026-05-03",
    slug: "job-board",
    title: "Job Board",
    image: saasImage,
    category: ["Web App", "Website"],
    github: "https://github.com/giacomoverdura/100-UI-Project/tree/main/src/features/job-board",
    component: JobBoard,
    tech: ["React", "Tailwind CSS", "ShadCN/UI", "TypeScript"],
    description: "A modern job board platform with job listings, search filters, featured companies, responsive layout, and premium product UI.",
  },
]