"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Who Are We", href: "#about" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo - Scaled Up & Visible */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/assets/LOGO/SVG Lgos/White with no BG.svg"
              alt="ZTA Lab Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 glass-panel px-7 py-2.5 rounded-full border border-border/60">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Contact Us CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-border/80 border border-primary/40 text-foreground pl-5 pr-2 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:border-primary group shadow-lg shadow-primary/10 hover:shadow-primary/25"
            >
              <span>Contact Us</span>
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-card border border-border text-gray-300 hover:text-primary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-primary py-2 border-b border-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold text-sm shadow-md"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
