import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { testimonials } from "@/data/TestimonialsData"

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Loved by modern teams
          </h2>

          <p className="text-muted-foreground">
            Trusted by startups and growing businesses.
          </p>
        </div>

        {/* Carousel */}
        <Carousel className="w-full relative">
          <CarouselContent>

            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3"
              >
                <Card className="p-8 h-full border border-border transition-all duration-300  hover:shadow-xl hover:border-primary/30 hover:bg-accent/40">
                  <div className="space-y-5">

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground">
                      "{item.quote}"
                    </p>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>

                  </div>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}