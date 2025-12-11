import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { Testimonials } from "@/components/home/Testimonials";
import { Lookbook } from "@/components/home/Lookbook";
import { InstagramFeed } from "@/components/home/InstagramFeed";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <Lookbook />
      <InstagramFeed />
      <Footer />
    </main>
  );
};

export default Index;
