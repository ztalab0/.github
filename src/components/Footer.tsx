"use client";

import { ArrowUp, Mail, MapPin } from "lucide-react";
import {
  FacebookIcon,
  UpworkIcon,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
  InstagramIcon,
  PinterestIcon,
} from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border text-gray-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Logo & Quick Contact Callout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-border/60">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/assets/LOGO/SVG Lgos/White with no BG.svg"
              alt="ZTA Lab Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </a>

          {/* Quick Contact Callout Box */}
          <div className="group flex items-center gap-4 bg-secondary/80 border border-border px-6 py-3.5 rounded-full shadow-lg">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/40 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Direct Contact
              </span>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-foreground">
                <a
                  href="mailto:info@ztalab.com"
                  className="hover:text-primary transition-colors"
                >
                  info@ztalab.com
                </a>
                <span className="text-muted-foreground">|</span>
                <a
                  href="https://wa.me/8801881064859"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <WhatsappIcon className="w-3.5 h-3.5 text-primary" />
                  <span>WhatsApp</span>
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
              ZTA Lab is a creative technology agency specializing in
              high-performance websites, custom software engineering, AI
              integrations, and digital marketing strategies.
            </p>
            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="group flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="group flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:-rotate-12" />
                <a
                  href="mailto:info@ztalab.com"
                  className="hover:text-primary transition-colors"
                >
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
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Who Are We
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-primary transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Follow ZTA Lab
            </h4>
            <p className="text-xs text-muted-foreground">
              Stay connected with our latest software releases, AI solutions,
              and project highlights.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href="https://www.facebook.com/profile.php?id=61592197508930"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="ZTA Lab Facebook"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/weare.ztalab/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="ZTA Lab Instagram"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.pinterest.com/ztalab2026/"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                title="ZTA Lab Pinterest"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01cee739c8fe979924"
                target="_blank"
                rel="noreferrer"
                aria-label="Upwork"
                title="ZTA Lab Upwork"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <UpworkIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/zta-lab"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="ZTA Lab LinkedIn"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ztalab0"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="ZTA Lab GitHub"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801881064859"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp (+880 1881-064859)"
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
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>

            {/* Back To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group w-10 h-10 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center border border-border transition-all shadow-lg ml-2"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
