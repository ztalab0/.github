import { Sparkles, CheckCircle2, ShieldCheck, Zap, Rocket, Target } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Experienced and dedicated team",
    "Custom solutions for every client",
    "Focus on performance and scalability",
    "Affordable and transparent pricing",
    "Long-term support and maintenance",
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image & Value Card Layout */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                    alt="ZTA Lab Agile Engineering Workflow"
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="glass-panel p-6 rounded-3xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="w-6 h-6 text-primary" />
                    <span className="text-xl font-bold text-foreground">Agile Delivery</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Rapid development cycles engineered for seamless, on-time project launches.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="glass-panel p-6 rounded-3xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-xl font-bold text-foreground">Result-Oriented</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Combining technology with data-driven marketing to maximize ROI.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                    alt="Result-Oriented Digital Growth Strategy"
                    className="w-full h-60 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Glowing Accent Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/15 blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Authentic Agency Info */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Who Are We
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              Creative Technology & Digital Agency
            </h2>

            <p className="mt-5 text-base text-gray-300 leading-relaxed">
              ZTA Lab is a creative technology agency founded by a team of passionate engineers and digital strategists. We specialize in building scalable digital solutions—from modern websites to full-stack applications—combined with result-oriented marketing strategies.
            </p>

            <div className="mt-4 p-4 rounded-2xl bg-card/90 border border-primary/30">
              <p className="text-sm font-semibold text-primary">
                Our mission is simple: <span className="text-foreground">turn ideas into impactful digital experiences.</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                We believe in innovation, precision, and long-term partnerships. Whether you are a startup or an established business, we help you grow in the digital world.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-6 space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision Banner */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Vision</span>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-md">
                    To become a leading digital solutions provider by delivering innovative, efficient, and scalable technology services worldwide.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 shrink-0 text-center"
                >
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
