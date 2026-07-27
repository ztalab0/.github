"use client";

import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Smartphone,
  TrendingUp,
  Search,
  CheckCircle,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function OurServices() {
  const services = [
    {
      id: "1",
      title: "Website Design & Development",
      icon: Globe,
      description:
        "We create fast, responsive, and visually stunning websites tailored to your business needs.",
      bulletPoints: ["Business websites", "E-commerce platforms", "Portfolio & landing pages"],
    },
    {
      id: "2",
      title: "App Development",
      icon: Smartphone,
      description:
        "We design and develop scalable mobile and web applications.",
      bulletPoints: ["Android & iOS apps", "Custom web applications", "UI/UX design"],
    },
    {
      id: "3",
      title: "Digital Marketing",
      icon: TrendingUp,
      description:
        "We help your business reach the right audience and grow online.",
      bulletPoints: ["Social media marketing", "SEO optimization", "Paid advertising (Google & Meta Ads)"],
    },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Understanding your idea and goals" },
    { step: "02", title: "Planning", desc: "Strategy, design, and roadmap" },
    { step: "03", title: "Development", desc: "Building your product" },
    { step: "04", title: "Launch", desc: "Deployment and testing" },
    { step: "05", title: "Growth", desc: "Marketing and optimization" },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-card/40 border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Carousel Header */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                Tailored Services for <br className="hidden sm:block" /> Digital Growth
              </h2>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-3 relative">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
            </div>
          </div>

          {/* Services Cards Carousel Track */}
          <CarouselContent className="-ml-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <CarouselItem key={service.id} className="pl-4 md:basis-1/3">
                  <div className="group glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border hover:border-primary/50 shadow-xl flex flex-col justify-between h-full transition-colors duration-300">
                    <div>
                      {/* Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary mb-6 sm:mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Bullet Features */}
                      <div className="space-y-2.5 mb-8">
                        {service.bulletPoints.map((pt) => (
                          <div key={pt} className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <a
                      href="#contact"
                      className="pt-6 border-t border-border/40 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300"
                    >
                      <span>Inquire Service</span>
                      <span className="w-9 h-9 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Our Process Section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              OUR PROCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              How We Turn Ideas Into Impactful Products
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="glass-panel p-5 rounded-2xl border border-border/80 hover:border-primary/50 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-primary/40 block mb-2 font-mono">
                    {p.step}
                  </span>
                  <h4 className="text-base font-bold text-foreground mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
