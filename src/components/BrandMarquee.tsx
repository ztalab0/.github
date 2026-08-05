import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";

const brandLogos = readdirSync(join(cwd(), "public/assets/collab"));

export default function BrandMarquee() {
  const loopedLogos = [...brandLogos, ...brandLogos];

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
      <div className="relative w-full overflow-hidden py-6">
        {/* Smooth fade overlays on left/right — color wash + gradually-fading blur for a seamless edge */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-r from-card to-transparent z-10 pointer-events-none" />
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"
        />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-linear-to-l from-card to-transparent z-10 pointer-events-none" />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)]"
        />

        <div className="flex animate-marquee-slow items-center gap-x-10 sm:gap-x-16 bg-card isolate">
          {loopedLogos.map((brand, idx) => {
            const name = brand.split(".")[0];
            const publicUrl = `/assets/collab/${brand}`;
            return (
              <div
                key={`${name}-${idx}`}
                className="h-10 w-28 sm:h-12 sm:w-32 flex items-center justify-center shrink-0"
              >
                <img
                  src={publicUrl}
                  alt={name}
                  draggable={false}
                  aria-hidden={idx >= brandLogos.length}
                  className="max-h-full max-w-full object-contain grayscale brightness-[1.4] contrast-[0.85] opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
