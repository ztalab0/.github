import { ArrowUpRight } from "lucide-react";
import {
  FacebookIcon,
  UpworkIcon,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
  PinterestIcon,
  InstagramIcon,
} from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background"
    >
      {/* Hero Background Image */}
      <img
        src="/assets/hero/Hero.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none select-none"
      />

      {/* Background Decorative Subtle Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-112.5 h-112.5 bg-secondary/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Vertical Social Sidebar with Official Links */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
        <span className="text-[11px] font-bold tracking-[0.25em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          CONNECT WITH US
        </span>
        <div className="w-px h-12 bg-border" />
        <div className="flex flex-col gap-4 text-gray-400">
          <a
            href="https://www.facebook.com/profile.php?id=61592197508930"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="ZTA Lab Facebook"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/weare.ztalab/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="ZTA Lab Instagram"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.pinterest.com/ztalab2026/"
            target="_blank"
            rel="noreferrer"
            aria-label="Pinterest"
            title="ZTA Lab Pinterest"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <PinterestIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01cee739c8fe979924"
            target="_blank"
            rel="noreferrer"
            aria-label="Upwork"
            title="ZTA Lab Upwork"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <UpworkIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/zta-lab"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="ZTA Lab LinkedIn"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/ztalab0"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="ZTA Lab GitHub"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/8801881064859"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp (+880 1881-064859)"
            className="hover:text-primary transition-colors p-2 rounded-xl border border-transparent hover:border-border"
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
              Build. Launch.{" "}
              <span className="text-primary drop-shadow-[0_0_25px_rgba(38,224,156,0.35)]">
                Grow.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              At ZTA Lab, we craft high-performance websites, powerful
              applications, and data-driven digital marketing strategies to help
              businesses scale faster.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-3 bg-card hover:bg-secondary border border-border text-foreground px-7 py-4 rounded-full font-bold text-sm transition-colors group hover:border-muted-foreground"
              >
                <span>View Our Work</span>
                <span className="w-7 h-7 rounded-full bg-secondary text-primary flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                </span>
              </a>
            </div>

            {/* Impact Highlights */}
            <div className="mt-12 pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-md">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    10
                  </span>
                  <span className="text-3xl font-extrabold text-primary">
                    +
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  Digital Solutions Built
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    100
                  </span>
                  <span className="text-3xl font-extrabold text-primary">
                    %
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Frame */}
            <div className="relative w-75 h-75 sm:w-95 sm:h-95 rounded-3xl p-3 bg-linear-to-tr from-primary/30 via-secondary to-card shadow-2xl shadow-primary/10 border border-border">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="ZTA Lab Digital Agency Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Bottom Badge - Clean ZTA Lab Badge */}
            <div className="absolute -bottom-4 left-0 sm:left-4 glass-panel border border-border rounded-2xl p-3 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center font-black border border-border">
                ZTA
              </div>
              <div className="pr-3">
                <p className="text-xs font-bold text-foreground">ZTA Lab</p>
                <p className="text-[10px] text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
