import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-surface-darker/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg glow-purple group-hover:glow-purple-strong transition-all duration-300">
              <span className="text-2xl font-bold text-primary-foreground">SS</span>
            </div>
            <span className="text-xl font-bold text-gradient hidden sm:block">SCALESTACK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={isActive(link.path) ? "text-primary" : "text-muted-foreground"}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    isActive(link.path) ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="lg" className="w-full mt-4">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
