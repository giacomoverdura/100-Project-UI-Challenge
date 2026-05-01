import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { plans } from "@/data/PricingData"

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Simple pricing for every stage
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your growth. Upgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative overflow-visible transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "border-primary shadow-lg scale-105 z-10"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">

                {/* Title */}
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-semibold">
                    {plan.name}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {plan.desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /month
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full rounded-xl"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>

              </div>
            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}