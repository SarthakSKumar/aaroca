import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
  "Chandigarh",
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    notes: "",
  });

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container text-center">
            <h1 className="font-serif text-3xl mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add items to proceed to checkout.</p>
            <Link to="/shop">
              <Button variant="luxury">Continue Shopping</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    clearCart();
    setIsSubmitting(false);
    navigate("/order-confirmation");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const shippingCost = totalPrice >= 2500 ? 0 : 150;
  const finalTotal = totalPrice + shippingCost;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container">
          <h1 className="font-serif text-3xl md:text-4xl mb-10">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Customer Details Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">Street Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="House/Flat No., Building, Street"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">Country *</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                        >
                          <option value="India">India</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-2">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{6}"
                          className="w-full h-12 px-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors"
                          placeholder="6-digit pincode"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">Order Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-4 bg-secondary/50 border border-border text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                        placeholder="Any special instructions for delivery..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/30 border border-border p-6 sticky top-24">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="flex gap-3"
                      >
                        <div className="w-16 h-20 shrink-0 overflow-hidden bg-secondary">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Size: {item.size} × {item.quantity}
                          </p>
                          <p className="text-sm mt-1">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
                    </div>
                  </div>

                  <div className="border-t border-border mt-4 pt-4">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Including all taxes</p>
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We will reach out to you shortly regarding payment and delivery details.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Checkout;
