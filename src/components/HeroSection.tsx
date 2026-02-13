import { ArrowRight, Search } from "lucide-react";
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
              Hub for Media: <br />
              <span className="text-primary">Search the Whole Internet.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Scrape news from all media channels—Online, Printed, and Social Media. Just type a keyword to discover relevant content from anywhere, anytime.
            </p>


            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full">Online News</span>
                <span className="bg-muted px-3 py-1 rounded-full">Printed Media</span>
                <span className="bg-muted px-3 py-1 rounded-full">Social Media</span>
            </div>
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
