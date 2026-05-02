import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Hero() {

  const categories = [
    "Frontend",
    "Backend",
    "UI/UX",
    "DevOps",
    "Remote"
  ]

  const jobs = [
    { title: "Frontend Developer", company: "Vercel", workSetup : ["Remote"], datePost: "2 days ago", salary: "$120k - $150k" },
    { title: "UI Designer", company: "Spotify", workSetup : ["Makati"], datePost: "1 week ago", salary: "$100k - $120k" },
    { title: "Backend Engineer", company: "Stripe", workSetup : ["Hybrid", "Quezon City"], datePost: "3 days ago", salary: "$130k - $160k" },
    { title: "React Developer", company: "Meta", workSetup : ["Remote"], datePost: "5 days ago", salary: "$140k - $170k" },
  ]

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE - HERO */}
        <div className="space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-green-500 animate-pulse" />
            3,000+ jobs updated daily
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find your next
            <span className="text-primary"> tech job</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl">
            Browse thousands of remote and on-site opportunities
            from top companies worldwide.
          </p>

        </div>

        {/* RIGHT SIDE - SEARCH PANEL */}
        <div className="rounded-lg border border-border bg-card p-7 space-y-6 shadow-lg">

          {/* SEARCH */}
          <div className="space-y-3">

            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />

              <Input
                placeholder="Search roles..."
                className="pl-9 h-11"
              />
            </div>

            <Button className="w-full h-11 rounded-xl">
              Search Jobs
            </Button>

          </div>

          {/* CATEGORIES */}
          <div className="flex flex-wrap gap-2">

            {categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground hover:text-foreground hover:border-primary transition"
              >
                {cat}
              </button>
            ))}

          </div>

          {/* LATEST JOBS */}
          <div className="space-y-3">

            <p className="text-sm font-medium text-muted-foreground">
              Latest Jobs
            </p>

            {jobs.map((job, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 border-b border-border hover:bg-muted/40 transition group"
              >

                <div className="group-hover:translate-x-3 transition duration-300">
                  <p className="font-medium text-sm">
                    {job.title}
                  </p>
                  <div className="text-xs text-muted-foreground gap-3 flex items-center">
                    <span>{job.company}</span>
                    <span>{job.workSetup.join(' - ')}</span>
                    <span>{job.datePost}</span>
                  </div>
                </div>

                <span className="text-xs text-muted-foreground">
                  {job.salary}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}