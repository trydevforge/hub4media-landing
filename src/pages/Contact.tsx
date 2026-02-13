import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email Us", detail: "hello@hub4media.com", sub: "We reply within 24 hours" },
  { icon: MapPin, title: "Office", detail: "San Francisco, CA", sub: "United States" },
  { icon: Clock, title: "Working Hours", detail: "Mon – Fri, 9am – 6pm PST", sub: "Excluding public holidays" },
  { icon: MessageSquare, title: "Live Chat", detail: "Available on dashboard", sub: "For existing customers" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
              We'd love to <span className="text-primary">hear from you</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or partnership idea? Reach out and our team will get back to you promptly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {contactInfo.map((c) => (
              <div key={c.title} className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-foreground font-medium">{c.detail}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-lg">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6 text-center">Send us a message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Send Message
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

export default Contact;
