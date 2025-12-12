import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Lookbook() {
  const lookbookItems = [
    { id: 1, title: "Autumn Elegance", tag: "Lookbook", image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80" },
    { id: 2, title: "Studio Sessions", tag: "Editorial", image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&q=80" },
    { id: 3, title: "The Art of Comfort", tag: "Featured", image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=600&q=80" },
    { id: 4, title: "Intimate Moments", tag: "Campaign", image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Editorial
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              The Lookbook
            </h2>
          </div>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
          >
            View All
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Lookbook Grid - Asymmetric */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large Item */}
          <Link 
            to="/shop"
            className="col-span-2 row-span-2 group relative overflow-hidden"
          >
            <div className="aspect-square relative">
              <img
                src={lookbookItems[0].image}
                alt={lookbookItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
              <span className="text-xs tracking-widest uppercase text-background/80">
                {lookbookItems[0].tag}
              </span>
              <h3 className="font-serif text-xl mt-2 text-background">
                {lookbookItems[0].title}
              </h3>
            </div>
          </Link>

          {/* Smaller Items */}
          {lookbookItems.slice(1).map((item) => (
            <Link
              key={item.id}
              to="/shop"
              className="group relative overflow-hidden"
            >
              <div className="aspect-square relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                <span className="text-xs tracking-widest uppercase text-background/80">
                  {item.tag}
                </span>
                <h3 className="font-serif text-sm mt-1 text-background">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
