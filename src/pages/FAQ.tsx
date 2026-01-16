import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Ordering & Shopping",
      questions: [
        {
          q: "How do I find my perfect size?",
          a: "Use our detailed Size Guide, which includes measurement instructions and fit notes for each collection. For personalized assistance, email fit@arroca.com with your measurements.",
        },
        {
          q: "Do you offer international shipping?",
          a: "Currently, we ship within India. International shipping will be available soon—join our newsletter to be notified.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit/debit cards, UPI, net banking, and digital wallets including Paytm and Google Pay.",
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use bank-grade encryption and do not store your payment details.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      questions: [
        {
          q: "What are your shipping charges?",
          a: "Free shipping on orders over ₹2,500. Orders under ₹2,500 incur a ₹150 shipping fee. Express delivery available for ₹300.",
        },
        {
          q: "How long does delivery take?",
          a: "Standard delivery: 5-7 business days. Express delivery: 2-3 business days. Metro cities may receive orders faster.",
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive a tracking number via email once your order ships.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer 30-day returns on unworn, unwashed items with original tags attached. Lingerie and intimate items must be in hygienically sealed condition.",
        },
        {
          q: "How do I initiate a return?",
          a: "Email returns@arroca.com with your order number. We'll provide a prepaid return label and instructions.",
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 5-7 business days of receiving your return. The amount will be credited to your original payment method.",
        },
        {
          q: "Can I exchange for a different size?",
          a: "Yes! We offer free size exchanges within 30 days. Contact us at fit@arroca.com to arrange.",
        },
      ],
    },
    {
      title: "Product Care",
      questions: [
        {
          q: "How should I care for my Arroca pieces?",
          a: "Hand wash in cold water with mild detergent. Lay flat to dry. Avoid bleach, fabric softeners, and high heat. Store bras fastened to maintain shape.",
        },
        {
          q: "Are your products suitable for sensitive skin?",
          a: "Yes! We use hypoallergenic, OEKO-TEX certified fabrics. However, if you have specific allergies, check product descriptions or contact us.",
        },
        {
          q: "How long will my Arroca pieces last?",
          a: "With proper care, our pieces are designed to maintain their quality for years. We stand behind our craftsmanship.",
        },
      ],
    },
    {
      title: "About Products",
      questions: [
        {
          q: "Are your bras padded?",
          a: "It varies by style. Product descriptions clearly indicate padding level (unpadded, lightly lined, or padded).",
        },
        {
          q: "Do you offer plus sizes?",
          a: "Yes! Many of our collections extend to XXL, with band sizes up to 42 and cup sizes up to E.",
        },
        {
          q: "Are your period panties leak-proof?",
          a: "Yes. Our period-proof underwear features four-layer protection tested for up to 12 hours of wear.",
        },
        {
          q: "Can I wear your lingerie as outerwear?",
          a: "Absolutely! Many of our pieces—especially harness bras and bodysuits—are designed to be styled under sheer tops, blazers, or worn as statement pieces.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Help Center
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find answers to common questions about ordering, shipping, returns, and more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="font-serif text-2xl mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`${index}-${qIndex}`}
                      className="border border-border px-6"
                    >
                      <AccordionTrigger className="text-left font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center p-8 bg-foreground text-background">
            <h3 className="font-serif text-xl mb-4">Still Have Questions?</h3>
            <p className="text-background/70 mb-6">
              Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:hello@arroca.com" className="hover:text-gold transition-colors">
                hello@arroca.com
              </a>
              <span className="hidden sm:inline text-background/40">|</span>
              <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
