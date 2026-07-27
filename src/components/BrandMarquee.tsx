"use client";

import { Sparkles } from "lucide-react";

export default function BrandMarquee() {
  const brandLogos = [
    { name: "Aura Commerce", code: "AURA COMMERCE" },
    { name: "Nexus Ecosystem", code: "NEXUS ECOSYSTEM" },
    { name: "Verde Living", code: "VERDE LIVING" },
    { name: "Cipher Growth", code: "CIPHER GROWTH" },
    { name: "Solutio Tech", code: "SOLUTIO TECH" },
    { name: "Elevate Studio", code: "ELEVATE STUDIO" },
    { name: "Apex Digital", code: "APEX DIGITAL" },
  ];

  return (
    <section className="py-10 sm:py-12 bg-card/80 border-y border-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 sm:mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-4 w-full">
          <div className="h-px bg-linear-to-r from-transparent to-border flex-1" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            OUR COLLABORATORS
          </span>
          <div className="h-px bg-linear-to-l from-transparent to-border flex-1" />
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-8 sm:space-x-12 items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-8 sm:gap-12 shrink-0"
            >
              <span className="text-lg sm:text-xl font-extrabold tracking-widest text-muted-foreground/70 hover:text-foreground transition-colors cursor-pointer uppercase">
                {brand.code}
              </span>
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-primary shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
