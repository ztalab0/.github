"use client";

import { Phone, ArrowUp, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, DribbbleIcon, WhatsappIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border text-gray-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Logo & Quick Phone Callout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-border/60">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/assets/LOGO/SVG Lgos/White with no BG.svg"
              alt="ZTA Lab Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </a>

          {/* Quick Call Callout Box */}
          <div className="flex items-center gap-4 bg-secondary/80 border border-border px-6 py-3.5 rounded-full shadow-lg">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/40 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Direct Contact
              </span>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-foreground">
                <a href="tel:+8801976540046" className="hover:text-primary transition-colors">
                  +8801976540046
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="tel:+8801712345678" className="hover:text-primary transition-colors">
                  +8801712345678
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-border/60">
          {/* Column 1: Agency Tagline & Direct Info */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              ZTA Lab is a creative technology agency specializing in high-performance websites, powerful applications, and result-oriented digital marketing strategies.
            </p>
            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@ztalab.com" className="hover:text-primary transition-colors">
                  info@ztalab.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">Who Are We</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Follow ZTA Lab
            </h4>
            <p className="text-xs text-muted-foreground">
              Stay connected with our latest projects, agency news, and design updates.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/zta-lab"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <DribbbleIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801976540046"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ZTA Lab. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Privacy Policy</a>
            
            {/* Back To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center border border-border transition-all shadow-lg ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
