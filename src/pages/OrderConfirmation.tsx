import { Link } from "react-router-dom";
import {
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  Package,
  Clock,
  MessageSquare,
} from "lucide-react";
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
          <div className="max-w-2xl mx-auto">
            {/* Success Animation */}
            <div className="text-center mb-12">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
                <div className="relative w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-gold" />
                </div>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                Thank You for Your Order!
              </h1>

              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                We're thrilled to have you as part of the Arroca family. Your
                order has been received and our team will reach out to you
                shortly.
              </p>
            </div>

            {/* What Happens Next */}
            <div className="bg-secondary/30 border border-border p-8 mb-8">
              <h2 className="font-serif text-xl mb-6 text-center">
                What Happens Next?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gold/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">We'll Contact You</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will reach out within 24 hours to confirm your
                      order details and share payment information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gold/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Once payment is confirmed, we'll carefully prepare your
                      order with love and attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gold/10 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Your beautifully packaged order will be shipped with
                      tracking information sent to your email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Have questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-center gap-2 text-sm hover:text-gold transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_INFO.email}
                </a>
                <span className="hidden sm:inline text-muted-foreground">
                  |
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/">
                <Button variant="luxury" size="lg" className="group">
                  Back to Home
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="mt-4">
                <Link
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OrderConfirmation;
