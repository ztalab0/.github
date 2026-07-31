import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

const brandLogos = readdirSync(join(cwd(), "public/assets/collab"));

export default function BrandMarquee() {
  return (
    <section className="py-6 sm:py-10 bg-card border-y border-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <div className="inline-flex items-center justify-center gap-4 w-full">
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent flex-1" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            OUR COLLABORATORS
          </span>
          <div className="h-px bg-linear-to-r from-transparent via-border to-transparent flex-1" />
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="w-full overflow-hidden py-6">
        {/* Gradient overlays on left/right for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center gap-x-8 sm:gap-x-12 bg-card isolate">
          {brandLogos.map((brand, idx) => {
            const name = brand.split(".")[0];
            const publicUrl = `/assets/collab/${brand}`;
            return (
              <img
                key={`${name}-${idx}`}
                src={publicUrl}
                alt={name}
                draggable={false}
                aria-hidden={idx >= brandLogos.length}
                className="h-14 w-auto object-cover"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
