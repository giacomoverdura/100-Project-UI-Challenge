import { features } from "@/features/saas-landing-page/data/FeatureData"
import { Card } from "@/components/ui/card"

export default function Features() {
  return (
    <section id="features" className="py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Powerful features for modern SaaS
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and optimize your SaaS product.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={index}
                className="
                  group relative p-6 space-y-4
                  border border-border/60
                  bg-background
                  hover:border-primary/40
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                  overflow-hidden
                "
              >

                {/* subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-primary/5" />

                {/* ICON */}
                <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold relative">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm leading-6 relative">
                  {feature.description}
                </p>

              </Card>
            )
          })}

        </div>

      </div>
    </section>
  )
}