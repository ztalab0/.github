import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

const brandLogos = readdirSync(join(cwd(), "public/assets/collab"));

export default function BrandMarquee() {
  return (
    <section className="py-10 sm:py-14 bg-card/80 border-y border-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-4 w-full">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent flex-1" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            OUR COLLABORATORS
          </span>
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent flex-1" />
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays on left/right for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee space-x-6 sm:space-x-8 items-center">
          {[...brandLogos, ...brandLogos].map((brand, idx) => {
            const name = brand.split(".")[0];
            const publicUrl = `/assets/collab/${brand}`;
            return (
              <img
                key={`${name}-${idx}`}
                src={publicUrl}
                alt={name}
                className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[180px] object-contain filter invert contrast-125 brightness-150 grayscale hover:grayscale-0 opacity-85 hover:opacity-100 transition-all duration-300 mix-blend-screen shrink-0 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
