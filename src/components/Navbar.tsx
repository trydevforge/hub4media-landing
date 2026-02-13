import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hub4Media" className="h-12 md:h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <button onClick={() => (window as any).Intercom && (window as any).Intercom('show')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => (window as any).Intercom && (window as any).Intercom('show')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Sales</button>
          <a href={import.meta.env.VITE_DEMO_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Request Demo
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          <a href="/#features" className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>How It Works</a>
          <button className="block text-sm text-muted-foreground hover:text-foreground text-left w-full" onClick={() => { (window as any).Intercom && (window as any).Intercom('show'); setIsOpen(false); }}>Contact</button>
          <button className="block text-sm text-muted-foreground hover:text-foreground text-left w-full" onClick={() => { (window as any).Intercom && (window as any).Intercom('show'); setIsOpen(false); }}>Contact Sales</button>
          <a href={import.meta.env.VITE_DEMO_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center" onClick={() => setIsOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
