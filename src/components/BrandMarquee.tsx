"use client";

import Image from "next/image";

export default function BrandMarquee() {
  const brandLogos = [
    { name: "Athena Hair", logo: "/assets/collab/Athena Hair.png" },
    { name: "Athena Mortlake", logo: "/assets/collab/Athena Mortlake.png" },
    { name: "Axelman Digital", logo: "/assets/collab/Axelman Digital.png" },
    { name: "Babbar & Co", logo: "/assets/collab/Babbar & Co.png" },
    { name: "Belle Hair Extensions", logo: "/assets/collab/Belle Hair Extensions.png" },
    { name: "Buki Koshoni", logo: "/assets/collab/Buki koshoni.png" },
    { name: "EKcyro", logo: "/assets/collab/EKcyro.png" },
    { name: "Frameworks", logo: "/assets/collab/Frameworks.png" },
    { name: "GL Hair", logo: "/assets/collab/GL Hair.png" },
    { name: "LVC", logo: "/assets/collab/LVC.png" },
    { name: "Luxurist Megazine", logo: "/assets/collab/Luxurist Megazine.png" },
    { name: "Market Square Dental Practice", logo: "/assets/collab/Market Square Dental Practice.png" },
    { name: "Masakali", logo: "/assets/collab/Masakali.png" },
    { name: "Mirari", logo: "/assets/collab/Mirari.png" },
    { name: "Moin Dental", logo: "/assets/collab/Moin Dental.png" },
    { name: "Play Social", logo: "/assets/collab/Play social.png" },
    { name: "Punto Restaurant", logo: "/assets/collab/Punto Restaurant.png" },
    { name: "Ramesh Jewellers", logo: "/assets/collab/Ramesh Jewellers.png" },
    { name: "Scalp 2 Face", logo: "/assets/collab/Scalp 2 Face.png" },
    { name: "The Steak Restaurant", logo: "/assets/collab/The Steak Restaurant.png" },
    { name: "The71", logo: "/assets/collab/The71.png" },
    { name: "Unisef University", logo: "/assets/collab/Unisef University.png" },
    { name: "Weston Cottage Beauty", logo: "/assets/collab/Weston Cottage Beauty.png" },
    { name: "Weston Cottage Dental", logo: "/assets/collab/Weston Cottage Dental.png" },
  ];

  return (
    <section className="py-10 sm:py-14 bg-card/80 border-y border-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-4 w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            OUR COLLABORATORS
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays on left/right for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee space-x-6 sm:space-x-8 items-center">
          {[...brandLogos, ...brandLogos].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="h-16 sm:h-20 w-36 sm:w-48 px-4 py-2.5 bg-background/60 backdrop-blur-xs rounded-2xl border border-border/60 flex items-center justify-center shrink-0 hover:border-primary/50 hover:bg-background/90 hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[155px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

