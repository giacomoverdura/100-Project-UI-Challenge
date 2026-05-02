export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="font-semibold text-lg">SaaS</span>
            </div>

            <p className="text-sm text-muted-foreground leading-6">
              A modern SaaS starter template built for speed, scalability, and clean UI systems.
            </p>
          </div>

          {/* PRODUCT */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Product</h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Features</li>
              <li>Pricing</li>
              <li>How it works</li>
              <li>Updates</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Company</h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Legal</h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JG SaaS Company. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground transition">Twitter</span>
            <span className="hover:text-foreground transition">GitHub</span>
            <span className="hover:text-foreground transition">LinkedIn</span>
          </div>

        </div>

      </div>

    </footer>
  )
}