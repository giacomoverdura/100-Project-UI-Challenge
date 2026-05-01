import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/FaqData"

export default function FAQ() {  
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions:
          </h2>

          
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl px-6 transition-all duration-300 hover:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium text-base">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-7 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}