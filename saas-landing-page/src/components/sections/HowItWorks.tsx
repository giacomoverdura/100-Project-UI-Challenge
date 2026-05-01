import { Card } from "@/components/ui/card"
import { howItWorksSteps } from "../../data/HowItWorksData"

export default function HowItWorks() {
  return (
    <>
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            How it works
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Launch and scale with a simple three-step workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {howItWorksSteps.map((step, index) => (
            <div key={index} className="relative text-center">

              {/* Line Connector */}
              {index !== howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-full h-px bg-border"></div>
              )}

              {/* Circle */}
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold relative z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-6 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
    </>
  );
}