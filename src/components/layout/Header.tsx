import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="luxury-link text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo - Center */}
          <Link to="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium">
              {BRAND.name}
            </h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="luxury-link text-xs tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons - Right */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" aria-label="Shopping bag">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isSearchOpen ? "h-14 opacity-100" : "h-0 opacity-0"
          )}
        >
          <div className="py-2">
            <input
              type="text"
              placeholder="Search collections..."
              className="w-full h-10 px-4 bg-secondary border-none text-sm tracking-wide placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-background border-b border-border transition-all duration-300",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
