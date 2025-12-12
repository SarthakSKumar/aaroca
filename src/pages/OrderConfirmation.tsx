import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const OrderConfirmation = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gold/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-gold" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl mb-4">
              Thank You for Your Order!
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We've received your order and our team will reach out to you shortly 
              with payment and delivery details. You'll receive a confirmation email 
              with your order summary.
            </p>

            <div className="bg-secondary/30 border border-border p-8 mb-8">
              <h2 className="font-serif text-xl mb-4">What Happens Next?</h2>
              <ol className="text-left text-sm text-muted-foreground space-y-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 bg-gold/20 text-gold text-xs font-medium rounded-full flex items-center justify-center">1</span>
                  <span>Our team will verify your order and contact you within 24 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 bg-gold/20 text-gold text-xs font-medium rounded-full flex items-center justify-center">2</span>
                  <span>We'll share payment details and confirm product availability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 bg-gold/20 text-gold text-xs font-medium rounded-full flex items-center justify-center">3</span>
                  <span>Once payment is confirmed, your order will be carefully packaged and shipped.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 bg-gold/20 text-gold text-xs font-medium rounded-full flex items-center justify-center">4</span>
                  <span>You'll receive tracking information to follow your delivery.</span>
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Questions? Reach out to us:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_INFO.email}
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <Link to="/">
              <Button variant="luxury" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OrderConfirmation;
