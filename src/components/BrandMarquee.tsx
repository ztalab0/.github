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
          {brandLogos.map((brand, idx) => {
            const name = brand.split(".")[0];
            const publicUrl = `/assets/collab/${brand}`;
            return (
              <div
                key={`${name}-${idx}`}
                className="h-16 sm:h-20 w-36 sm:w-48 px-4 py-2.5 bg-background/60 backdrop-blur-xs rounded-2xl border border-border/60 flex items-center justify-center shrink-0 hover:border-primary/50 hover:bg-background/90 hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={publicUrl}
                  alt={name}
                  className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[155px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
