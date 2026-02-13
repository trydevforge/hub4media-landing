import { Shield, Search, Globe, Filter, Calendar, FileSpreadsheet } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Whole Internet Search",
    description: "Search the entire internet for any keyword or item. We scrape every corner to find what you need.",
  },
  {
    icon: Search,
    title: "Multi-Channel Scraping",
    description: "Access news from Online sources, Printed media, and Social Media platforms all in one hub.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Filter results by Language (Marathi, Gujarati, Tamil, etc.), City, State, and more.",
  },
  {
    icon: Calendar,
    title: "Time-Based Options",
    description: "Filter news Day-wise or Time-wise to get the exact timeline of events you're looking for.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Export",
    description: "Download your scraped data in a proper Excel format for easy analysis and reporting.",
  },
  {
    icon: Shield,
    title: "Stealth Scraping",
    description: "Browser pool mimics real users with rotating user-agents to avoid detection while you search.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            All your media news <span className="text-primary">in one place</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From local printed news to global social media trends, Hub4Media gathers it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-8 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
