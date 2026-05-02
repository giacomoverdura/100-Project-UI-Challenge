import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { plans } from "@/features/saas-landing-page/data/PricingData"

export default function Pricing() {
  return (
    <section className="py-24" id="pricing">

      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Simple pricing for every stage
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your growth. Upgrade anytime.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`
                relative overflow-visible p-8 space-y-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                border border-border/60
                ${plan.featured ? "border-primary shadow-lg bg-primary/5 scale-[1.03]" : ""}
              `}
            >

              {/* FEATURED BADGE */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* PLAN HEADER */}
              <div className="space-y-3 text-center">

                <h3 className="text-2xl font-semibold">
                  {plan.name}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {plan.desc}
                </p>

                {/* PRICE */}
                <div className="pt-2">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    /month
                  </span>
                </div>

              </div>

              {/* FEATURES */}
              <ul className="space-y-3 pt-2">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className="w-full rounded-xl mt-4 transition-transform active:scale-[0.98]"
                variant={plan.featured ? "default" : "outline"}
              >
                Get Started
              </Button>

            </Card>
          ))}

        </div>

      </div>
    </section>
  )
}