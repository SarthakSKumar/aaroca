import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Placeholder Image - Elegant gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-secondary to-accent">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-serif text-foreground/5">{slide.id}</span>
            </div>
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-32">
            <div className="text-center text-background px-4">
              <p 
                className={cn(
                  "text-xs tracking-[0.3em] uppercase mb-4 transition-all duration-700",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.subtitle}
              </p>
              <h2 
                className={cn(
                  "font-serif text-4xl md:text-6xl lg:text-7xl mb-8 transition-all duration-700",
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "400ms" }}
              >
                {slide.title}
              </h2>
              <Link to="/shop">
                <Button 
                  variant="luxury-outline" 
                  size="lg"
                  className={cn(
                    "border-background text-background hover:bg-background hover:text-foreground transition-all duration-700",
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: "600ms" }}
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-background/60 hover:text-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-background/60 hover:text-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-8 h-0.5 transition-all duration-300",
              index === currentSlide ? "bg-background" : "bg-background/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-background/60">
        <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-background/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-background animate-pulse" style={{ animation: "scrollDown 2s ease-in-out infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
