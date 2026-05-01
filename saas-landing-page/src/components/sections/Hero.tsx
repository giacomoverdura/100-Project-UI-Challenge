import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-background text-sm text-muted-foreground">
            <span className="bg-red-700 size-2 rounded-full animate-pulse"></span> New Feature: AI-powered workflow automation
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build smarter SaaS products
            <span className="text-primary"> faster than ever</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-md">
            Launch your SaaS idea with modern UI components, automation tools,
            and scalable architecture.
          </p>

          <div className="flex items-center gap-4">
            <Button className="px-6 py-6 text-base rounded-xl hover:bg-primary/90 transition-colors duration-100">
              Get Started
            </Button>

            <Button variant="outline" className="px-6 py-6 text-base rounded-xl">
              View Demo
            </Button>
          </div>

        </div>

        {/* skeleton */}
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full animate-pulse duration-1000"/>
          
          <div className="relative border border-border rounded-2xl p-6 bg-background shadow-lg animate-pulse">
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