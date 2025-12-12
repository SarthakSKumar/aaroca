import { Instagram } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&q=80",
  "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=400&q=80",
  "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=400&q=80",
  "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=400&q=80",
  "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=400&q=80",
  "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&q=80",
];

export function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-5 w-5" />
            <a 
              href="https://instagram.com/ocran.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs tracking-[0.3em] uppercase hover:text-primary transition-colors"
            >
              @ocran.in
            </a>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Follow Our Journey
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/ocran.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt={`Ocran Instagram Post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

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
