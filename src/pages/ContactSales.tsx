import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Users, Zap, Shield } from "lucide-react";

const reasons = [
  { icon: Building2, title: "Enterprise Plans", description: "Custom pricing for teams with high-volume scraping needs and dedicated support." },
  { icon: Users, title: "Dedicated Account Manager", description: "Get a single point of contact who understands your business and goals." },
  { icon: Zap, title: "Custom Integrations", description: "We'll help you connect Hub4Media to your existing data pipeline and tools." },
  { icon: Shield, title: "SLA & Compliance", description: "Enterprise-grade SLAs, GDPR compliance, and data security guarantees." },
];

const ContactSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Contact Sales</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              Let's find the right plan <span className="text-primary">for your team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you need higher limits, custom integrations, or enterprise-grade security — our sales team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-lg">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6 text-center">Talk to our sales team</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">What are you looking for?</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Enterprise plan</option>
                  <option>Custom integrations</option>
                  <option>Higher scraping limits</option>
                  <option>API access</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Tell us more</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Describe your needs, team size, and any specific requirements..." />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Contact Sales
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactSales;
