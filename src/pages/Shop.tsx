import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS, CATEGORIES, FILTERS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory && product.categoryId !== selectedCategory) return false;
      if (selectedSize && !product.sizes.includes(selectedSize)) return false;
      if (selectedMaterial && !product.materials.some(m => m.toLowerCase().includes(selectedMaterial.toLowerCase()))) return false;
      return true;
    });
  }, [selectedCategory, selectedSize, selectedMaterial]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedSize("");
    setSelectedMaterial("");
    setSearchParams({});
  };

  const activeFilterCount = [selectedCategory, selectedSize, selectedMaterial].filter(Boolean).length;

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
            The Collection
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our curated selection of luxury loungewear and intimate apparel, 
            designed for the woman who appreciates the finer things.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Filter Bar */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-foreground text-background rounded-full text-xs flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>

              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                  Clear all
                </Button>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Filter Panel */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 overflow-hidden transition-all duration-300",
            isFilterOpen ? "max-h-96 opacity-100 pb-8 border-b border-border" : "max-h-0 opacity-0"
          )}>
            {/* Category Filter */}
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4">Category</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setSelectedCategory(""); setSearchParams({}); }}
                  className={cn(
                    "px-3 py-1.5 text-xs border transition-colors",
                    !selectedCategory ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                  )}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }); }}
                    className={cn(
                      "px-3 py-1.5 text-xs border transition-colors",
                      selectedCategory === cat.id ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4">Size</h4>
              <div className="flex flex-wrap gap-2">
                {FILTERS.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? "" : size)}
                    className={cn(
                      "w-10 h-10 text-xs border transition-colors",
                      selectedSize === size ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-4">Material</h4>
              <div className="flex flex-wrap gap-2">
                {FILTERS.materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(selectedMaterial === material ? "" : material)}
                    className={cn(
                      "px-3 py-1.5 text-xs border transition-colors",
                      selectedMaterial === material ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                    )}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-muted-foreground mb-4">No products match your selected filters.</p>
              <Button variant="luxury-outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Shop;
