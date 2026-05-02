import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Briefcase } from "lucide-react"

export default function FeaturedJobs() {

  const jobs = [
    {
      title: "Frontend Engineer",
      company: "Vercel",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      tags: ["React", "TypeScript", "Next.js"],
      posted: "2h ago",
    },
    {
      title: "Data Scientist",
      company: "Google",
      location: "USA",
      type: "Full-time",
      salary: "$120k - $180k",
      tags: ["Python", "AI", "ML"],
      posted: "1d ago",
    },
    {
      title: "UI/UX Designer",
      company: "Spotify",
      location: "Remote",
      type: "Contract",
      salary: "$70k - $110k",
      tags: ["Figma", "Design Systems"],
      posted: "5h ago",
    },
    {
      title: "Cybersecurity Analyst",
      company: "Microsoft",
      location: "Philippines",
      type: "Full-time",
      salary: "$80k - $130k",
      tags: ["Security", "Networks"],
      posted: "3h ago",
    },
    {
      title: "Backend Engineer",
      company: "Stripe",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $160k",
      tags: ["Node.js", "APIs"],
      posted: "6h ago",
    },
    {
      title: "Product Manager",
      company: "Notion",
      location: "Hybrid",
      type: "Full-time",
      salary: "$110k - $150k",
      tags: ["Strategy", "UX"],
      posted: "8h ago",
    },
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="space-y-3 text-center">

          <h2 className="text-4xl font-bold">
            Featured Jobs
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover high-quality roles from top companies hiring globally.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3">

          {jobs.map((job, i) => (
            <Card
              key={i}
              className="p-6 space-y-5 border border-border bg-card hover:bg-card/70 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >

              {/* TOP */}
              <div className="space-y-1">

                <h3 className="text-lg font-semibold">
                  {job.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {job.company}
                </p>

              </div>

              {/* META */}
              <div className="space-y-2 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {job.posted}
                </div>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">

                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md border border-border bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between pt-2">

                <span className="text-primary font-semibold">
                  {job.salary}
                </span>

                <Button size="sm" className="rounded-xl">
                  Apply
                </Button>

              </div>

            </Card>
          ))}

        </div>

      </div>

    </section>
  )
}