import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS, PRESS_QUOTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden">
      <div className="container">
        {/* Press Quotes */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 pb-20 border-b border-background/10">
          {PRESS_QUOTES.map((quote, index) => (
            <div 
              key={quote.publication} 
              className="text-center opacity-60 hover:opacity-100 transition-opacity"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="font-serif text-lg italic mb-2">"{quote.quote}"</p>
              <p className="text-xs tracking-widest uppercase text-background/40">
                — {quote.publication}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
            What Our Clients Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Voices of Elegance
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="h-[280px] md:h-[240px] flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 px-8",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto">
                  <p className="text-sm tracking-widest uppercase">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-background/40 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-background/20 hover:border-background/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-background/20 hover:border-background/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-background" : "bg-background/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
