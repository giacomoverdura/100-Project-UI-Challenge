import { features } from "@/data/FeatureData"
import { Card } from "@/components/ui/card"

export default function Features() {
  return (
    <>
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Powerful features for modern SaaS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, scale, and optimize your SaaS product.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={index}
                className="p-6 space-y-4 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-6">
                  {feature.description}
                </p>
              </Card>
            )
          })}

        </div>

      </div>
    </section>
    </>
  );
}