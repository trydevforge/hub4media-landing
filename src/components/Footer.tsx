import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Hub4Media" className="h-12 mb-4 w-auto" />
            <p className="text-sm text-muted-foreground mt-3">
              AI-powered content discovery and web scraping platform built for speed and stealth.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "API Docs", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 Hub4Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
