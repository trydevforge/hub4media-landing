import { Search, Filter, Globe, FileDown } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Enter Your Keyword",
    description: "Type any keyword or search item. Hub4Media processes your input to find relevant matches.",
  },
  {
    icon: Filter,
    step: "02",
    title: "Apply Smart Filters",
    description: "Refine by Language (Marathi, Tamil, etc.), Time (Day-wise), or Location (City/State-wise).",
  },
  {
    icon: Globe,
    step: "03",
    title: "Scrape All Channels",
    description: "Our engine searches Online News, Printed Media, and Social Media simultaneously.",
  },
  {
    icon: FileDown,
    step: "04",
    title: "Download Data",
    description: "Get your results in a proper Excel format, ready for immediate use and analysis.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Four steps to <span className="text-primary">complete media coverage</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <div key={step.step} className="relative text-left">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-background relative flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
                    <step.icon className="h-7 w-7 text-primary relative z-10" />
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
