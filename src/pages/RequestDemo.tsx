import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "See Hub4Media's stealth scraping engine in action",
  "Learn how parallel browser pools maximize speed",
  "Explore auto-deduplication and data management",
  "Get a custom plan tailored to your content needs",
  "Ask our team any technical questions live",
];

const RequestDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left - Info */}
            <div>
              <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Request a Demo</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
                See Hub4Media <span className="text-primary">in action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                Book a personalized demo with our team. We'll walk you through the platform, answer your questions, and help you find the right plan.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">Fill in your details</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Team Size</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message (Optional)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us about your use case..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Book My Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">We'll get back to you within 24 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RequestDemo;
