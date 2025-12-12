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

        <div className="relative max-w-3xl mx-auto px-12 md:px-16">
          {/* Navigation Arrows - Positioned outside content */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-background/20 hover:border-background/60 hover:bg-background/10 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-background/20 hover:border-background/60 hover:bg-background/10 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Content */}
          <div className="min-h-[320px] md:min-h-[280px] flex items-center justify-center relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0 pointer-events-auto" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full pointer-events-none" 
                      : "opacity-0 translate-x-full pointer-events-none"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg md:text-xl lg:text-2xl italic mb-8 leading-relaxed max-w-2xl">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-auto pt-4">
                  <p className="text-sm tracking-widest uppercase font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-background/50 mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-background w-6" : "bg-background/30 hover:bg-background/50"
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
  );
}
