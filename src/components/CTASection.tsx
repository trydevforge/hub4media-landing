import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section id="pricing" className="py-24 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-background">
            Ready to discover content?
          </h2>
          <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
            Start scraping the web for relevant content today. No credit card required. Free tier includes 1,000 scrapes per month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/request-demo" className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
              Get Started Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact-sales" className="px-8 py-4 rounded-full font-semibold border border-background/20 text-background hover:bg-background/10 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
