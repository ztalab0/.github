"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, DribbbleIcon, WhatsappIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background">
      {/* Background Decorative Subtle Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-secondary/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Vertical Social Sidebar with Official Links */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
        <span className="text-[11px] font-bold tracking-[0.25em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          CONNECT WITH US
        </span>
        <div className="w-[1px] h-12 bg-border" />
        <div className="flex flex-col gap-4 text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="hover:text-primary transition-colors p-2 rounded-xl hover:bg-card border border-transparent hover:border-border"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="hover:text-primary transition-colors p-2 rounded-xl hover:bg-card border border-transparent hover:border-border"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-primary transition-colors p-2 rounded-xl hover:bg-card border border-transparent hover:border-border"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Dribbble"
            title="Dribbble"
            className="hover:text-primary transition-colors p-2 rounded-xl hover:bg-card border border-transparent hover:border-border"
          >
            <DribbbleIcon className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/8801976540046"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp (+8801976540046)"
            className="hover:text-primary transition-colors p-2 rounded-xl hover:bg-card border border-transparent hover:border-border"
          >
            <WhatsappIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Single Strong Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Build. Launch. <span className="text-primary drop-shadow-[0_0_25px_rgba(38,224,156,0.35)]">Grow.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              At ZTA Lab, we craft high-performance websites, powerful applications, and data-driven digital marketing strategies to help businesses scale faster.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/25"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 bg-card hover:bg-secondary border border-border text-foreground px-7 py-4 rounded-full font-bold text-sm transition-all duration-300 group hover:border-muted-foreground"
              >
                <span>View Our Work</span>
                <span className="w-7 h-7 rounded-full bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Impact Highlights */}
            <div className="mt-12 pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-md">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">10</span>
                  <span className="text-3xl font-extrabold text-primary">+</span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  Digital Solutions Built
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">100</span>
                  <span className="text-3xl font-extrabold text-primary">%</span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Glowing Frame */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-3xl p-3 bg-gradient-to-tr from-primary/30 via-secondary to-card shadow-2xl shadow-primary/10 border border-border">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="ZTA Lab Digital Agency Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Bottom Badge - Clean ZTA Lab Badge */}
            <div className="absolute -bottom-4 left-0 sm:left-4 glass-panel border border-border rounded-2xl p-3 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center font-black border border-border">
                ZTA
              </div>
              <div className="pr-3">
                <p className="text-xs font-bold text-foreground">ZTA Lab</p>
                <p className="text-[10px] text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
