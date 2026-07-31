"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web & Mobile Development + AI Integration",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Web & Mobile Development + AI Integration",
    "Software Dev & In-House Products",
    "Digital Marketing, SEO & Business Automation",
    "Custom Enterprise Requirement",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-6 h-6" />
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
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Call Us
                  </span>
                  <div className="space-y-1 mt-0.5">
                    <a
                      href="tel:+8801976540046"
                      className="block text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +8801976540046{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        (Primary / Zul)
                      </span>
                    </a>
                    <a
                      href="tel:+8801712345678"
                      className="block text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +8801712345678{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        (Team Line)
                      </span>
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct Phone & Support Lines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    WhatsApp Us
                  </span>
                  <a
                    href="https://wa.me/8801976540046"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm sm:text-base font-bold text-foreground mt-0.5 hover:text-primary transition-colors"
                  >
                    +8801976540046
                  </a>
                  <p className="text-xs text-gray-400">
                    Instant Chat & Consultation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <MapPin className="w-6 h-6" />
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
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto border-2 border-primary">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you for contacting ZTA Lab. A strategist will review
                    your message and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Website Design & Development",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-secondary text-foreground text-xs font-bold hover:bg-border transition-colors border border-border"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Required Selection Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      Service Required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, service: item })
                          }
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            formData.service === item
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                              : "bg-background text-gray-300 border border-border hover:border-muted-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your project, goals, or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
