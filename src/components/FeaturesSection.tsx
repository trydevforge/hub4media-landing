import { Shield, Zap, Search, Database, Globe, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Keyword-based content discovery with automatic exact phrase matching for multi-word queries.",
  },
  {
    icon: Shield,
    title: "Stealth Scraping",
    description: "Browser pool mimics real users with rotating user-agents and short-lived sessions to avoid detection.",
  },
  {
    icon: Zap,
    title: "Parallel Processing",
    description: "3–5 simultaneous headless agents scrape different result pages, maximizing speed and throughput.",
  },
  {
    icon: Database,
    title: "Auto-Deduplication",
    description: "URL-based upsert ensures zero duplicates. Clean, consistent data every time you scrape.",
  },
  {
    icon: Globe,
    title: "Date Range Filtering",
    description: "Discover content within specific time windows. Roll back through weeks of history with one click.",
  },
  {
    icon: BarChart3,
    title: "Rate Limit Protection",
    description: "Token-bucket algorithm with randomized fingerprints keeps your scraping sustainable.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Everything you need to <span className="text-primary">scrape smarter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built for speed, stealth, and scale. Hub4Media handles the hard parts so you can focus on insights.
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
