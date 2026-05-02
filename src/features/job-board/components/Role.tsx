export default function Role() {
  const roles = [
    "Finance",
    "Legal",
    "Data Science",
    "Cybersecurity",
    "Product Management",
    "UI/UX Design",
    "DevOps",
    "Marketing",
    "Backend Engineering",
    "Frontend Engineering",
  ]

  return (
    <section className="overflow-hidden border-y border-border bg-background">

      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* MARQUEE */}
        <div className="flex w-max animate-marquee">

          {[...roles, ...roles].map((role, index) => (
            <div
              key={index}
              className="px-10 py-4 uppercase border-x border-border/50 bg-card text-sm text-muted-foreground whitespace-nowrap transition"
            >
              {role}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}