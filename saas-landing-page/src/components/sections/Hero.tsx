import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT CONTENT */}
        <div className="space-y-7 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-background text-sm text-muted-foreground mx-auto md:mx-0">
            <span className="bg-green-500 size-2 rounded-full animate-pulse"></span>
            New: AI-powered workflow automation
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Build smarter SaaS products
            <span className="text-primary"> faster than ever</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto md:mx-0 leading-7">
            Launch your SaaS idea with modern UI components, automation tools,
            and scalable architecture.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">

            <Button className="px-7 py-6 text-base rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </Button>

            <Button variant="outline" className="px-7 py-6 text-base rounded-xl transition-all hover:bg-accent">
              View Demo
            </Button>

          </div>

        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative hidden md:block">

          {/* glow */}
          <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />

          {/* mock UI */}
          <div className="relative border border-border rounded-2xl p-6 bg-background shadow-xl">

            <div className="space-y-4">

              <div className="h-4 w-32 bg-muted rounded"></div>
              <div className="h-4 w-48 bg-muted rounded"></div>
              <div className="h-4 w-40 bg-muted rounded"></div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-20 bg-muted rounded-xl"></div>
                <div className="h-20 bg-muted rounded-xl"></div>
                <div className="h-20 bg-muted rounded-xl"></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}