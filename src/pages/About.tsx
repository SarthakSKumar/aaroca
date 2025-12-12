import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND, PRESS_QUOTES, TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const About = () => {
  const values = [
    {
      title: "Exceptional Quality",
      description: "Every piece is crafted from the finest materials sourced globally, ensuring lasting luxury and comfort."
    },
    {
      title: "Timeless Design",
      description: "Our designs transcend trends, offering elegant silhouettes that remain relevant season after season."
    },
    {
      title: "Sustainable Practice",
      description: "We're committed to ethical production and sustainable materials, respecting both people and planet."
    },
    {
      title: "Perfect Fit",
      description: "Extensive research and testing ensure every garment flatters and supports the female form."
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              {BRAND.tagline}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {BRAND.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image + Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80"
                  alt="Ocran Brand - Luxury Intimate Apparel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Story */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                A Legacy of Elegance
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in {BRAND.founded} in Bengaluru, India, OCRAN emerged from a simple yet 
                  powerful vision: to create intimate apparel that makes every woman feel 
                  extraordinary in her most private moments.
                </p>
                <p>
                  Our founder, inspired by the timeless elegance of European ateliers and the 
                  modern woman's need for comfort without compromise, set out to redefine 
                  luxury loungewear. Every piece in our collection is a testament to this 
                  commitment—meticulously designed and crafted to perfection.
                </p>
                <p>
                  Today, OCRAN serves over {BRAND.customers} women across India, each one part of 
                  our growing community of women who refuse to settle for ordinary. Our pieces 
                  are worn in moments of quiet confidence, whether it's a peaceful morning at 
                  home or an evening of celebration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="font-serif text-3xl text-gold mb-1">{BRAND.experience}</p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">Years</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold mb-1">{BRAND.customers}</p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">Customers</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold mb-1">{BRAND.collections}</p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">Collections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-border flex items-center justify-center">
                  <span className="font-serif text-2xl text-gold">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
              In The Press
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">What They Say</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {PRESS_QUOTES.map((quote, index) => (
              <div key={index} className="text-center max-w-xs">
                <p className="font-serif text-xl italic mb-4">"{quote.quote}"</p>
                <p className="text-xs tracking-widest uppercase text-background/40">
                  — {quote.publication}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Customer Love</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-secondary/50 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
