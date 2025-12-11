import { Link } from "react-router-dom";
import { PRODUCTS } from "@/lib/constants";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  // Get 4 featured products (mix from different categories)
  const featuredProducts = [
    PRODUCTS[0], // Everyday
    PRODUCTS[3], // Active
    PRODUCTS[6], // Lingerie
    PRODUCTS[1], // Everyday
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Featured Pieces
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our most coveted styles, handpicked for their exceptional quality and timeless elegance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop">
            <Button variant="luxury" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
