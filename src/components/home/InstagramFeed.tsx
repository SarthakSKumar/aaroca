import { Instagram } from "lucide-react";

export function InstagramFeed() {
  const posts = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-5 w-5" />
            <a 
              href="https://instagram.com/ocran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs tracking-[0.3em] uppercase hover:text-primary transition-colors"
            >
              @ocran
            </a>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Follow Our Journey
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {posts.map((post) => (
            <a
              key={post}
              href="https://instagram.com/ocran"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden image-zoom"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-secondary to-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-serif text-foreground/5">{post}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
