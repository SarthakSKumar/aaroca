import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Lookbook() {
  const lookbookItems = [
    { id: 1, title: "Autumn Elegance", tag: "Lookbook" },
    { id: 2, title: "Studio Sessions", tag: "Editorial" },
    { id: 3, title: "The Art of Comfort", tag: "Featured" },
    { id: 4, title: "Intimate Moments", tag: "Campaign" },
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
            to="/lookbook" 
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
            to={`/lookbook/${lookbookItems[0].id}`}
            className="col-span-2 row-span-2 group relative overflow-hidden image-zoom"
          >
            <div className="aspect-square bg-gradient-to-br from-accent via-cream-dark to-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[150px] font-serif text-foreground/5">{lookbookItems[0].id}</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                {lookbookItems[0].tag}
              </span>
              <h3 className="font-serif text-xl mt-2 group-hover:text-primary transition-colors">
                {lookbookItems[0].title}
              </h3>
            </div>
          </Link>

          {/* Smaller Items */}
          {lookbookItems.slice(1).map((item, index) => (
            <Link
              key={item.id}
              to={`/lookbook/${item.id}`}
              className="group relative overflow-hidden image-zoom"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary via-cream-dark to-accent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-serif text-foreground/5">{item.id}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {item.tag}
                </span>
                <h3 className="font-serif text-sm mt-1 group-hover:text-primary transition-colors">
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
