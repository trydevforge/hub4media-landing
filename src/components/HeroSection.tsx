import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Discover content{" "}
              <span className="text-primary">before anyone else.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10">
              Scrape, analyze, and monitor web content at scale. Our stealth-powered engine discovers relevant articles, news, and mentions across the entire web.
            </p>

            <Link to="/request-demo" className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-base flex items-center gap-3 hover:opacity-90 transition-all">
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right side - image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
              <img src={heroDashboard} alt="Hub4Media Dashboard" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
