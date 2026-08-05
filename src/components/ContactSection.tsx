import {
  Sparkles,
  Send,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { FacebookIcon } from "./SocialIcons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-background relative overflow-hidden border-t border-border/40"
    >
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Let’s Build Something Amazing Together.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Have a project in mind or need expert digital consultation? Send us
            a message and our team will connect with you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border space-y-6 sm:space-y-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                Get In Touch
              </h3>

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Us
                  </span>
                  <a
                    href="mailto:info@ztalab.com"
                    className="block text-sm sm:text-base font-bold text-foreground mt-0.5 hover:text-primary transition-colors"
                  >
                    info@ztalab.com
                  </a>
                  <p className="text-xs text-gray-400">Direct Agency Email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Facebook
                  </span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61592197508930"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm sm:text-base font-bold text-foreground mt-0.5 hover:text-primary transition-colors"
                  >
                    facebook.com/ztalab
                  </a>
                  <p className="text-xs text-gray-400">
                    Follow & Message Us on Facebook
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border transition-transform duration-300 group-hover:scale-110">
                  <MessageSquare className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    WhatsApp Us
                  </span>
                  <a
                    href="https://wa.me/8801881064859"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm sm:text-base font-bold text-foreground mt-0.5 hover:text-primary transition-colors"
                  >
                    +880 1881-064859
                  </a>
                  <p className="text-xs text-gray-400">
                    Instant Chat & Consultation
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel bg-card p-6 sm:p-10 rounded-3xl border border-border shadow-2xl relative">
              <form
                action="https://formsubmit.co/ztalab.2026@gmail.com"
                method="POST"
                // onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New submission!" />
                <input
                  type="hidden"
                  name="_cc"
                  value="rayathossain49@gmail.com,founders@ztalab.com,rayat@ztalab.com"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_next" value="https://ztalab.com" />
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Business Name Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Your Business Name
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    placeholder="Your Business Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm"
                  />
                </div>

                {/* Project Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project, goals, or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-4 rounded-xl bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
