import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <img src={logo} alt="Hub4Media" className="h-12 mb-4 w-auto mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              AI-powered content discovery and web scraping platform built for speed and stealth.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-display font-semibold text-foreground mb-2">Contact Us</h4>
            <a href="tel:9456963234" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
              +91 94569 63234
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Hub4Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
