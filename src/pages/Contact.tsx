import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: CONTACT_INFO.address,
      link: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: CONTACT_INFO.hours,
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We'd love to hear from you. Whether you have a question about our products, 
            sizing, or anything else, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium block mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full p-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="luxury" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-secondary group-hover:bg-foreground group-hover:text-background transition-colors">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        {method.label}
                      </p>
                      <p className="text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-foreground hover:text-background transition-colors"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Visit Our Office
                </h3>
                <div className="aspect-[4/3] overflow-hidden border border-border">
                  <iframe
                    src={CONTACT_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ocran Office Location - BTM Layout, Bengaluru"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  {CONTACT_INFO.address}
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

export default Contact;
