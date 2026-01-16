import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last Updated: December 2024</p>

            <div className="prose prose-neutral max-w-none space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Arroca ("we", "us", "our") respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                use our website.
              </p>

              <div>
                <h2 className="font-serif text-xl mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect several types of personal information when you use the Site:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>Contact Information: name, email address, phone number</li>
                  <li>Shipping Information: address, city, state, country, pincode</li>
                  <li>Order Information: products purchased, order history</li>
                  <li>Usage Data: pages visited, browsing behavior</li>
                  <li>Cookies & Tracking: data from cookies and similar technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use your data to:</p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders</li>
                  <li>Personalize your shopping experience</li>
                  <li>Improve our website functionality</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">3. Sharing Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your personal information with:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                  <li>Service Providers: shipping partners, payment processors</li>
                  <li>Legal Authorities: when required by law or to protect our rights</li>
                  <li>Affiliated Partners: only with your consent</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">4. Cookies & Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance user experience, analyze site usage, 
                  and improve our services. You may adjust your browser settings to reject cookies, but this may 
                  affect site functionality.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement security measures to protect personal data from unauthorized access, use, or disclosure. 
                  However, no internet transmission is completely secure.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">6. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our site may contain links to third-party websites. We are not responsible for their privacy practices.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal data. Contact us at hello@arroca.com 
                  to exercise these rights.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Policy periodically. We will update the "Last Updated" date to reflect changes.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at hello@arroca.com
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

export default Privacy;
