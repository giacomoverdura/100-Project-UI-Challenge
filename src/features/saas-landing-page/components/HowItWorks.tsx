import { howItWorksSteps } from "@/features/saas-landing-page/data/HowItWorksData"

export default function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/20">

      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            How it works
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Launch and scale with a simple three-step workflow.
          </p>
        </div>

        {/* STEPS WRAPPER */}
        <div className="relative">

          {/* CONNECTOR LINE (desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-3 gap-12 relative">

            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center space-y-6"
              >

                {/* STEP CIRCLE */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shadow-md">
                  {step.number}
                </div>

                {/* CONTENT CARD */}
                <div className="space-y-3 max-w-sm">

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-6">
                    {step.description}
                  </p>

                </div>

                {/* DOT CONNECTOR (mobile vertical feel hint) */}
                {index !== howItWorksSteps.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-border" />
                )}

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}