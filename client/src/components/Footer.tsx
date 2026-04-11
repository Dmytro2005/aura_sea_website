import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-lg font-bold text-primary mb-4">AURA SEA</h3>
            <p className="text-sm text-muted-foreground mb-2">
              10+ years maritime experience
            </p>
            <p className="text-sm text-muted-foreground">
              Specializing in tanker and bulk fleets
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" data-testid="footer-link-about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">About Company</span>
                </Link>
              </li>
              <li>
                <Link href="/ship-owners" data-testid="footer-link-ship-owners">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">For Ship-Owners</span>
                </Link>
              </li>
              <li>
                <Link href="/seafarers" data-testid="footer-link-seafarers">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">For Seafarers</span>
                </Link>
              </li>
              <li>
                <Link href="/vacancies" data-testid="footer-link-vacancies">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">Vacancies</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <a href="mailto:info@aurasea.com" className="text-muted-foreground hover:text-foreground" data-testid="footer-email">
                  info@aurasea.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground" data-testid="footer-phone">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground" data-testid="footer-address">
                  Maritime Business Center<br />
                  Harbor District
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="social-facebook">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-md" data-testid="social-twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
            <div>
              <Link href="/privacy" data-testid="footer-link-privacy">
                <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AURA SEA. All rights reserved. | Crewing with Care</p>
        </div>
      </div>
    </footer>
  );
}
