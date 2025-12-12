import { Link } from "react-router-dom";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  const stats = [
    { number: BRAND.experience, label: "Years of Excellence" },
    { number: BRAND.customers, label: "Happy Customers" },
    { number: BRAND.collections, label: "Collections" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80"
                alt="Ocran Brand Story - Luxury Loungewear"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Crafted for the <span className="italic">Modern Woman</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Founded in {BRAND.founded}, OCRAN was born from a simple belief: that every woman 
              deserves to feel extraordinary in her most intimate moments. Our pieces are designed 
              in India and crafted using only the finest materials sourced from around the world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl md:text-3xl text-gold mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="luxury-outline" size="lg">
                Discover Our Heritage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
