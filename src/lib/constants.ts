// OCRAN - Luxury Loungewear & Lingerie Brand Constants

export const BRAND = {
  name: "OCRAN",
  tagline: "Intimate Luxury, Effortless Elegance",
  description: "Where comfort meets couture. OCRAN crafts exquisite loungewear and intimate apparel for the modern woman who refuses to compromise on elegance.",
  founded: "2018",
  experience: "15+",
  customers: "50,000+",
  collections: "12",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const CATEGORIES = [
  {
    id: "everyday-comfort",
    name: "Everyday Comfort",
    description: "Bras, Panties & Period Panties designed for all-day ease",
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=800&q=80",
  },
  {
    id: "active-sport",
    name: "Active & Sport",
    description: "Performance sports bras that move with you",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800&q=80",
  },
  {
    id: "lingerie-shaping",
    name: "Lingerie & Shaping",
    description: "Bodysuits, Harness Lingerie & Push-Up Thong Bodysuits",
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80",
  },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  fitNotes: string;
  price: number;
  originalPrice: number;
  discount: number;
  sizes: string[];
  materials: string[];
  care: string[];
  delivery: string;
  rating: number;
  reviewCount: number;
  images: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  // Everyday Comfort
  {
    id: "ec-001",
    name: "Silk Touch Wireless Bra",
    category: "Everyday Comfort",
    categoryId: "everyday-comfort",
    description: "Experience unparalleled comfort with our signature wireless bra. Crafted from the finest silk-blend fabric, this piece offers gentle support without compromising on luxury.",
    fitNotes: "True to size. For a more relaxed fit, size up. Designed with a seamless construction for invisible wear under clothing.",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["70% Mulberry Silk", "25% Cotton", "5% Elastane"],
    care: ["Hand wash in cold water", "Do not bleach", "Lay flat to dry", "Do not iron directly on fabric"],
    delivery: "Free shipping on orders over ₹2,500. Express delivery available.",
    rating: 4.8,
    reviewCount: 234,
    images: ["https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=800&q=80"],
    inStock: true,
  },
  {
    id: "ec-002",
    name: "Luna Lace Bikini Set",
    category: "Everyday Comfort",
    categoryId: "everyday-comfort",
    description: "Delicate French lace meets everyday wearability. The Luna set features intricate floral patterns with a breathable cotton lining.",
    fitNotes: "Bikini cut sits comfortably on the hip. Bralette offers light support, ideal for A-C cups.",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    sizes: ["XS", "S", "M", "L"],
    materials: ["85% Nylon Lace", "15% Spandex", "Cotton Gusset"],
    care: ["Machine wash gentle cycle", "Use lingerie bag", "Air dry recommended"],
    delivery: "Ships within 2-3 business days.",
    rating: 4.6,
    reviewCount: 189,
    images: ["https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80"],
    inStock: true,
  },
  {
    id: "ec-003",
    name: "Velvet Period Panty",
    category: "Everyday Comfort",
    categoryId: "everyday-comfort",
    description: "Revolutionary period protection meets luxury. Four-layer absorption technology with a velvet-soft exterior for confidence on your heaviest days.",
    fitNotes: "High-waisted design for full coverage. Absorbency equivalent to 3 tampons.",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    materials: ["Organic Cotton Exterior", "Bamboo Absorption Layer", "Waterproof Barrier"],
    care: ["Rinse in cold water after use", "Machine wash cold", "Do not use fabric softener", "Tumble dry low"],
    delivery: "Discreet packaging. Free returns within 30 days.",
    rating: 4.9,
    reviewCount: 412,
    images: ["https://images.unsplash.com/photo-1617331140180-e8262094733a?w=800&q=80"],
    inStock: true,
  },

  // Active & Sport
  {
    id: "as-001",
    name: "Eclipse High-Impact Sports Bra",
    category: "Active & Sport",
    categoryId: "active-sport",
    description: "Engineered for intense workouts without sacrificing style. The Eclipse features adjustable straps, moisture-wicking fabric, and encapsulated support.",
    fitNotes: "Recommended for high-impact activities. Fits snug for maximum support. Consider sizing up for medium-impact use.",
    price: 2299,
    originalPrice: 2799,
    discount: 18,
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["88% Recycled Polyester", "12% Elastane", "Mesh Ventilation Panels"],
    care: ["Machine wash cold", "Do not bleach", "Tumble dry low", "Do not iron"],
    delivery: "Express shipping available. Arrives in 1-2 business days.",
    rating: 4.7,
    reviewCount: 156,
    images: ["https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800&q=80"],
    inStock: true,
  },
  {
    id: "as-002",
    name: "Aura Seamless Training Bra",
    category: "Active & Sport",
    categoryId: "active-sport",
    description: "Zero distractions, maximum performance. Our seamless construction eliminates chafing while the compression fit provides medium support for yoga and pilates.",
    fitNotes: "Second-skin fit. True to size. Removable padding for customizable shape.",
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    sizes: ["S", "M", "L", "XL"],
    materials: ["92% Nylon", "8% Spandex", "Moisture-wicking finish"],
    care: ["Hand wash preferred", "Machine wash in lingerie bag", "Air dry"],
    delivery: "Free shipping on orders over ₹2,500.",
    rating: 4.5,
    reviewCount: 98,
    images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"],
    inStock: true,
  },
  {
    id: "as-003",
    name: "Pulse Racerback Bra",
    category: "Active & Sport",
    categoryId: "active-sport",
    description: "The perfect blend of fashion and function. Featuring a striking strappy back design visible under tanks, with built-in padding and sweat-resistant fabric.",
    fitNotes: "Medium support ideal for running and cycling. Pull-on style. Band runs firm.",
    price: 1999,
    originalPrice: 2399,
    discount: 17,
    sizes: ["XS", "S", "M", "L"],
    materials: ["85% Polyester", "15% Elastane", "Anti-microbial treatment"],
    care: ["Machine wash cold", "Do not use fabric softener", "Hang to dry"],
    delivery: "Ships same day if ordered before 2 PM.",
    rating: 4.8,
    reviewCount: 203,
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"],
    inStock: true,
  },

  // Lingerie & Shaping
  {
    id: "ls-001",
    name: "Noir Harness Bodysuit",
    category: "Lingerie & Shaping",
    categoryId: "lingerie-shaping",
    description: "A statement piece for the bold. Geometric strap detailing over sheer mesh creates an avant-garde silhouette that commands attention.",
    fitNotes: "Adjustable straps for customized fit. Snap closure for convenience. Pairs beautifully with high-waisted trousers.",
    price: 4499,
    originalPrice: 5799,
    discount: 22,
    sizes: ["XS", "S", "M", "L"],
    materials: ["Premium Stretch Mesh", "Satin-finish Elastic Straps", "Nickel-free Hardware"],
    care: ["Hand wash only", "Do not wring", "Lay flat to dry", "Store hung to maintain shape"],
    delivery: "Arrives in luxury gift packaging. Express shipping available.",
    rating: 4.9,
    reviewCount: 87,
    images: ["https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80"],
    inStock: true,
  },
  {
    id: "ls-002",
    name: "Sculpt Push-Up Thong Bodysuit",
    category: "Lingerie & Shaping",
    categoryId: "lingerie-shaping",
    description: "Revolutionary shaping technology meets seductive design. Built-in push-up cups and smoothing panels create a flawless silhouette.",
    fitNotes: "Firm compression. Size up for everyday wear. Hook-and-eye back closure with adjustable straps.",
    price: 3799,
    originalPrice: 4899,
    discount: 22,
    sizes: ["S", "M", "L", "XL"],
    materials: ["Power Mesh Body", "Molded Foam Cups", "Smooth Microfiber Lining"],
    care: ["Hand wash cold", "Do not twist", "Air dry away from direct heat"],
    delivery: "Free expedited shipping on this item.",
    rating: 4.7,
    reviewCount: 145,
    images: ["https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80"],
    inStock: true,
  },
  {
    id: "ls-003",
    name: "Ethereal Lace Bodysuit",
    category: "Lingerie & Shaping",
    categoryId: "lingerie-shaping",
    description: "Timeless elegance in Chantilly lace. This romantic piece features scalloped edges, delicate eyelash trim, and light support for an effortlessly feminine look.",
    fitNotes: "Relaxed fit through the body. Unlined cups for a natural shape. Suitable for A-D cups.",
    price: 4199,
    originalPrice: 5499,
    discount: 24,
    sizes: ["XS", "S", "M", "L", "XL"],
    materials: ["French Chantilly Lace", "Silk Charmeuse Lining", "Gold-tone Hardware"],
    care: ["Dry clean recommended", "Or hand wash with silk detergent", "Never wring or twist", "Reshape while damp"],
    delivery: "Complimentary gift wrapping available.",
    rating: 4.8,
    reviewCount: 112,
    images: ["https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?w=800&q=80"],
    inStock: true,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya M.",
    location: "Mumbai",
    quote: "Finally, lingerie that looks as beautiful as it feels. The quality is exceptional, and I've never felt more confident.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali R.",
    location: "Bangalore",
    quote: "I've never felt more confident. The fit is perfect, and the designs are stunning. Worth every rupee.",
    rating: 5,
  },
  {
    id: 3,
    name: "Kavya S.",
    location: "Delhi",
    quote: "Ocran has ruined me for other brands. Nothing else compares to the comfort and elegance.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha K.",
    location: "Pune",
    quote: "The most comfortable sports bra I own—and it looks incredible. Perfect for my yoga sessions.",
    rating: 5,
  },
  {
    id: 5,
    name: "Rhea D.",
    location: "Hyderabad",
    quote: "Luxury that's actually worth the investment. These pieces last and still look brand new after months.",
    rating: 5,
  },
];

export const PRESS_QUOTES = [
  { publication: "Vogue India", quote: "The new standard in luxury loungewear." },
  { publication: "Elle India", quote: "Where comfort meets couture." },
  { publication: "Harper's Bazaar", quote: "Intimates for the modern muse." },
];

export const SIZE_CHART = {
  bras: [
    { size: "XS", bust: "30-32", band: "28-30" },
    { size: "S", bust: "32-34", band: "30-32" },
    { size: "M", bust: "34-36", band: "32-34" },
    { size: "L", bust: "36-38", band: "34-36" },
    { size: "XL", bust: "38-40", band: "36-38" },
  ],
  bottoms: [
    { size: "XS", waist: "24-26", hips: "34-36" },
    { size: "S", waist: "26-28", hips: "36-38" },
    { size: "M", waist: "28-30", hips: "38-40" },
    { size: "L", waist: "30-32", hips: "40-42" },
    { size: "XL", waist: "32-34", hips: "42-44" },
    { size: "XXL", waist: "34-36", hips: "44-46" },
  ],
};

export const CONTACT_INFO = {
  email: "hello@ocran.com",
  phone: "+91 98765 43210",
  address: "2nd Floor, Above Cafe Mocha, 27th Main Road, BTM Layout 2nd Stage, Bengaluru, Karnataka 560076, India",
  hours: "Monday - Saturday: 10 AM - 6 PM IST",
  social: {
    instagram: "https://instagram.com/ocran.in",
    pinterest: "https://pinterest.com/ocranlingerie",
    facebook: "https://facebook.com/ocranofficial",
    linkedin: "https://linkedin.com/company/ocranofficial",
  },
  mapCoords: {
    lat: 12.9165,
    lng: 77.6101,
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9264019449946!2d77.60756841482176!3d12.916499990886644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1497684d3a8d%3A0x2f82e4c7f89b0c86!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1702396800000!5m2!1sen!2sin",
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Where Comfort Meets Desire",
    subtitle: "Discover intimate luxury crafted for the modern woman",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=1920&q=80",
  },
  {
    id: 2,
    title: "Effortless Elegance",
    subtitle: "Premium loungewear and lingerie designed to empower",
    cta: "Discover",
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=1920&q=80",
  },
  {
    id: 3,
    title: "Your Most Beautiful Moments",
    subtitle: "Curated collections for every curve, every mood",
    cta: "Explore",
    image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=1920&q=80",
  },
];

export const FILTERS = {
  styles: ["All", "Bralette", "Underwire", "Sports", "Bodysuit", "Briefs", "Thong"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  materials: ["Silk", "Cotton", "Lace", "Mesh", "Satin"],
};
