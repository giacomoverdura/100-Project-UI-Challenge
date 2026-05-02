import { Card } from "@/components/ui/card"
import { categories } from "../data/CategoriesData"

export default function Categories() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HEADER */}
        <div className="flex items-end justify-between">

          <div>
            <h2 className="text-4xl font-bold">
              Browse by Field
            </h2>

            <p className="text-muted-foreground mt-2">
              Explore jobs based on your expertise
            </p>
          </div>

          <button className="text-sm text-muted-foreground hover:text-foreground transition underline">
            View all categories
          </button>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((cat, i) => {
            const Icon = cat.icon

            return (
              <Card key={i} className="rounded-none p-5 space-y-4 border border-border bg-card hover:bg-card/70 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">

                <div className="flex items-center justify-between">

                  <Icon className="w-5 h-5 text-primary" />

                  <span className="text-xs text-muted-foreground">
                    Open roles
                  </span>

                </div>

                <div>
                  <h3 className="font-semibold">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {cat.count}
                  </p>
                </div>

              </Card>
            )
          })}

        </div>

      </div>

    </section>
  )
}