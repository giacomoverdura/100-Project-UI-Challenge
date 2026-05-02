export default function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Build Your Profile",
      desc: "Add your skills, experience, and what you're looking for. It takes 5 minutes. We do the rest.",
    },
    {
      number: "02",
      title: "Get Matched",
      desc: "Our system surfaces roles that fit your stack and preferences, not random listings.",
    },
    {
      number: "03",
      title: "Apply with Confidence",
      desc: "See salary ranges, company culture, and insights before you apply.",
    },
  ]

  return (
    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="lg:col-span-1 bg-black text-white px-10 py-25 space-y-6">

          <div className="space-y-4">

            <h2 className="text-4xl font-bold leading-tight">
              How
              <br />
              It Works
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Three simple steps. No recruiters flooding your inbox.
              Just real opportunities that match your profile.
            </p>

          </div>

        </div>

        {/* RIGHT STEPS */}
        <div className="lg:col-span-3 grid md:grid-cols-3 border-y">

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative px-10 py-25 space-y-6 hover:bg-muted/30 transition border-e"
            >

              {/* BIG NUMBER BACKGROUND */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-muted-foreground/20">
                {step.number}
              </span>

              {/* TITLE */}
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}