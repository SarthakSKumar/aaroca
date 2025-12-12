import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PRODUCTS, SIZE_CHART } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/useCart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button variant="luxury-outline">Return to Shop</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }
    addToCart(product, selectedSize, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) × ${quantity}`,
      duration: 4000,
    });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-secondary/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/shop"
              className="hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <span>/</span>
            <Link
              to={`/shop?category=${product.categoryId}`}
              className="hover:text-foreground transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground text-background text-xs tracking-wider">
                    -{product.discount}%
                  </div>
                )}

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) =>
                            (prev - 1 + product.images.length) %
                            product.images.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % product.images.length
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Category */}
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "fill-gold text-gold"
                          : "fill-none text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-medium">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs font-medium">
                      Save {product.discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Size</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2">
                        Size Guide
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">
                          Size Guide
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-3">
                          Bras & Tops (inches)
                        </h4>
                        <table className="w-full text-sm mb-6">
                          <thead className="border-b">
                            <tr>
                              <th className="text-left py-2">Size</th>
                              <th className="text-left py-2">Bust</th>
                              <th className="text-left py-2">Band</th>
                            </tr>
                          </thead>
                          <tbody>
                            {SIZE_CHART.bras.map((row) => (
                              <tr
                                key={row.size}
                                className="border-b border-border/50"
                              >
                                <td className="py-2 font-medium">{row.size}</td>
                                <td className="py-2">{row.bust}"</td>
                                <td className="py-2">{row.band}"</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <h4 className="text-sm font-medium mb-3">
                          Bottoms (inches)
                        </h4>
                        <table className="w-full text-sm">
                          <thead className="border-b">
                            <tr>
                              <th className="text-left py-2">Size</th>
                              <th className="text-left py-2">Waist</th>
                              <th className="text-left py-2">Hips</th>
                            </tr>
                          </thead>
                          <tbody>
                            {SIZE_CHART.bottoms.map((row) => (
                              <tr
                                key={row.size}
                                className="border-b border-border/50"
                              >
                                <td className="py-2 font-medium">{row.size}</td>
                                <td className="py-2">{row.waist}"</td>
                                <td className="py-2">{row.hips}"</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 border text-sm transition-colors",
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="text-sm font-medium block mb-3">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mb-8">
                <Button
                  variant="luxury"
                  size="xl"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border mb-8">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    30-Day Returns
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Secure Payment
                  </p>
                </div>
              </div>

              {/* Accordion Details */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="fit">
                  <AccordionTrigger className="text-sm">
                    Fit Notes
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {product.fitNotes}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger className="text-sm">
                    Materials
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 text-muted-foreground">
                      {product.materials.map((material, i) => (
                        <li key={i}>• {material}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger className="text-sm">
                    Care Instructions
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 text-muted-foreground">
                      {product.care.map((instruction, i) => (
                        <li key={i}>• {instruction}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery">
                  <AccordionTrigger className="text-sm">
                    Delivery Information
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {product.delivery}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(product.rating)
                        ? "fill-gold text-gold"
                        : "fill-none text-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
              <span className="text-lg">{product.rating} out of 5</span>
              <span className="text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Sample Reviews */}
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              {
                name: "Priya S.",
                date: "November 2024",
                rating: 5,
                text: "Absolutely gorgeous piece! The quality is outstanding and it fits perfectly. Will definitely be ordering more.",
              },
              {
                name: "Meera M.",
                date: "October 2024",
                rating: 5,
                text: "So comfortable and luxurious. Worth every penny. The packaging was beautiful too - felt like a real treat.",
              },
              {
                name: "Ananya L.",
                date: "October 2024",
                rating: 4,
                text: "Beautiful design and great quality. Runs slightly small, so I'd recommend sizing up if you're between sizes.",
              },
            ].map((review, index) => (
              <div key={index} className="border-b border-border pb-8">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < review.rating
                          ? "fill-gold text-gold"
                          : "fill-none text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3">{review.text}</p>
                <p className="text-sm">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    • {review.date}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
