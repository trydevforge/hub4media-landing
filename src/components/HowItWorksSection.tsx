import { Search, Cpu, Database, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Enter Your Keyword",
    description: "Type any keyword or phrase. Multi-word queries are automatically wrapped in exact-match quotes.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Stealth Agents Activate",
    description: "Our parallel browser pool spins up headless agents with randomized fingerprints to scrape results.",
  },
  {
    icon: Database,
    step: "03",
    title: "Data is Deduplicated",
    description: "Results are upserted by URL. Title, snippet, and publish dates are stored automatically.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Analyze & Expand",
    description: "View results in a clean dashboard. Hit 'Scrap More' to discover older content.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Four steps to <span className="text-primary">content intelligence</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <div key={step.step} className="relative text-left">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-2 tracking-wider">STEP {step.step}</div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
