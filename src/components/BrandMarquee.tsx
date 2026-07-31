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

        <div className="flex animate-marquee space-x-5 sm:space-x-6 items-center">
          {[...brandLogos, ...brandLogos].map((brand, idx) => {
            const name = brand.split(".")[0];
            const publicUrl = `/assets/collab/${brand}`;
            return (
              <div
                key={`${name}-${idx}`}
                className="h-14 sm:h-16 w-32 sm:w-40 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center shrink-0 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <img
                  src={publicUrl}
                  alt={name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

