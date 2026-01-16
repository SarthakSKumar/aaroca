import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-12">
              Last Updated: December 2024
            </p>

            <div className="prose prose-neutral max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Arroca. By accessing or using this website and its
                services (collectively, the "Site"), you agree to be bound by
                these Terms & Conditions. If you do not agree with any part,
                please do not use the Site.
              </p>

              <div>
                <h2 className="font-serif text-xl mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This agreement is between Arroca (referred to as "we", "us",
                  or "our") and you ("you", "your", "user"). These Terms govern
                  your use of the Site, purchase of products, and any associated
                  services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">2. Use of the Site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You must be at least 18 years old to use this Site. By using
                  the Site, you represent and warrant that you are old enough to
                  enter into these Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">
                  3. Products & Orders
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All product descriptions, pricing, and availability are
                  subject to change without notice. Orders are an offer by you
                  to purchase, and we reserve the right to accept or decline any
                  order.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">4. Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to pay all charges at the prices in effect at the
                  time your order is placed. We accept all major credit/debit
                  cards, UPI, net banking, and digital wallets.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">
                  5. Delivery, Shipping & Returns
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Delivery times are estimates only. Standard delivery takes 5-7
                  business days. Express delivery is available for 2-3 business
                  days. Free shipping on orders over ₹2,500.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We offer 30-day returns on unworn, unwashed items with
                  original tags attached. Lingerie and intimate items must be in
                  hygienically sealed condition.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on the Site — including text, images, logos,
                  graphics, designs, and software — is the property of Arroca or
                  its licensors and is protected by copyright and trademark
                  laws.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">7. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to misuse the Site, interfere with its
                  operation, or upload harmful content. Any violation may result
                  in termination of your access.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by applicable law, Arroca will
                  not be liable for any indirect, incidental, special, or
                  consequential damages arising from your use of the Site or
                  purchase of products.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms at any time. Continued use of the
                  Site after changes implies acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India, without regard
                  to its conflict of laws principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
