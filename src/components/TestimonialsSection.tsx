import { Star, Sparkles, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Sarah Sanders",
    role: "VP of Digital, Commerce Global",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    content:
      "ZTA Lab transformed our online presence into a lightning-fast modern web application. Their technical precision and creative vision exceeded all our expectations.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "Founder & CEO, Nexus Tech",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    content:
      "Working with ZTA Lab was seamless from day one. They developed our custom web and mobile app suite on schedule with flawless reliability and design.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena Rostova",
    role: "Marketing Director, Aura Luxe",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content:
      "Our traffic and client conversions grew dramatically after ZTA Lab implemented our digital marketing and SEO strategy. Truly world-class agency partners.",
    rating: 5,
  },
  {
    id: "4",
    name: "David H. Sterling",
    role: "Managing Director, Apex Brands",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    content:
      "The team at ZTA Lab is dedicated, skilled, and transparent. They delivered a custom enterprise platform tailored exactly to our business needs.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="feedbacks"
      className="py-20 sm:py-24 bg-card/30 border-t border-border/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Client Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            What Our Partners Say About Us
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Real feedback from business owners and founders who scaled with ZTA
            Lab.
          </p>
        </div>
      </div>

      {/* Automatic Continuous Horizontal Scroll Track (Pause on Hover) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee space-x-6 items-stretch">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-105 shrink-0 glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border relative flex flex-col justify-between shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-border/60" />

              <div>
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full border-2 border-primary object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
