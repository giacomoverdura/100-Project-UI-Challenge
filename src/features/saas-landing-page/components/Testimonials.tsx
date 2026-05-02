import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { testimonials } from "@/features/saas-landing-page/data/TestimonialsData"

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20" id="testimonials">

      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Loved by modern teams
          </h2>

          <p className="text-muted-foreground">
            Trusted by startups and growing businesses.
          </p>
        </div>

        {/* CAROUSEL */}
        <Carousel className="w-full relative">

          <CarouselContent className="-ml-4">

            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3">

                <Card className="
                  p-8 h-full
                  border border-border/60
                  bg-background
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                ">

                  <div className="space-y-6">

                    {/* STARS (muted premium style) */}
                    <div className="flex gap-1 opacity-90">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* QUOTE */}
                    <p className="text-muted-foreground leading-7 text-sm">
                      “{item.quote}”
                    </p>

                    {/* USER */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">

                      {/* Avatar placeholder */}
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                        {item.name?.charAt(0)}
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm">
                          {item.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.role}
                        </p>
                      </div>

                    </div>

                  </div>

                </Card>

              </CarouselItem>
            ))}

          </CarouselContent>

          {/* NAV BUTTONS */}
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>

        </Carousel>

      </div>
    </section>
  )
}