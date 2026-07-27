"use client";

export default function ImpactStats() {
  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "100%", label: "On-Time Delivery" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background border-y border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight drop-shadow-[0_0_20px_rgba(38,224,156,0.2)]">
                {stat.value}
              </span>
              <span className="mt-2 sm:mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
