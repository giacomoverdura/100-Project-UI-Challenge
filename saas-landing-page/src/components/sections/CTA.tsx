import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to build your SaaS product?
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Start building faster with modern tools, scalable architecture,
          and beautiful UI components.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button className="px-8 py-6 text-base rounded-xl">
            Get Started Free
          </Button>

          <Button variant="outline" className="px-8 py-6 text-base rounded-xl">
            View Documentation
          </Button>
        </div>

        {/* Small note */}
        <p className="text-sm text-muted-foreground">
          No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  )
}