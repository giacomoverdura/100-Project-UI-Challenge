export default function Trusted() {
  const companies = [
    {"name": "Google", logo: "google-logo.svg"},
    {"name": "Microsoft", logo: "microsoft-logo.svg"},
    {"name": "Amazon", logo: "amazon-logo.svg"},
    {"name": "Meta", logo: "meta-logo.svg"},
    {"name": "Netflix", logo: "netflix-logo.svg"},
    {"name": "Spotify", logo: "spotify-logo.svg"},
  ]

  return (
    <section className="py-20 border-border bg-background overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            Trusted globally
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold">
            Built for teams at scale
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineering teams, startups, and enterprises rely on this system
            to ship faster and operate at scale.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">

          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-14 opacity-70">

            {[...companies, ...companies].map((c, i) => (
              <div className="px-6 py-3 rounded-lg border border-border/60 bg-muted/20 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-5 opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>

        </div>

        {/* STATS ROW (ENTERPRISE SIGNAL) */}
        <div className="grid md:grid-cols-3 gap-8 text-center pt-6">

          <div>
            <p className="text-3xl font-bold text-primary">99.99%</p>
            <p className="text-sm text-muted-foreground">
              Uptime SLA
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary">10M+</p>
            <p className="text-sm text-muted-foreground">
              Requests processed daily
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-primary">150+</p>
            <p className="text-sm text-muted-foreground">
              Countries served
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}