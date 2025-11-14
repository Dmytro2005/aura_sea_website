import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/generated_images/AURA_SEA_company_logo_4bfb05d5.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/ship-owners", label: "For Ship-Owners" },
    { href: "/seafarers", label: "For Seafarers" },
    { href: "/vacancies", label: "Vacancies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 cursor-pointer">
              <img src={logoImage} alt="AURA SEA Logo" className="h-10 w-auto" />
              <span className="font-headline text-xl font-bold text-primary">AURA SEA</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === link.href ? "default" : "ghost"}
                  size="sm"
                  className="text-sm"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link href="/contact" data-testid="button-contact-cta">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Contact Us
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-button-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
