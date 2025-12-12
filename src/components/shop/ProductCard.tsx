import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-foreground text-background text-xs tracking-wider">-{product.discount}%</div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-background text-foreground text-xs tracking-widest uppercase">Quick View</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">{product.category}</p>
        <h3 className="font-serif text-base md:text-lg text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn("h-3 w-3", i < Math.floor(product.rating) ? "fill-gold text-gold" : "fill-none text-muted-foreground/30")} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
