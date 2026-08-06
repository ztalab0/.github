"use client";

import { Check, Copy, Mail, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const teamMembers = [
  {
    name: "Zul Ikram Musaddik Rayat",
    shortName: "Zul",
    role: "Founder, Lead Backend & Cloud",
    image: "/assets/people/zul.png",
    linkedin: "https://www.linkedin.com/in/zim-rayat/",
    github: "https://github.com/devrayat000",
    email: "mailto:rayat@ztalab.com",
  },
  {
    name: "Tamim Ahmed",
    shortName: "Tamim",
    role: "Founder, Business & Operations",
    image: "/assets/people/tamim.png",
    linkedin: "https://www.linkedin.com/in/tamim-ahmed19/",
    email: "mailto:tamim@ztalab.com",
  },
  {
    name: "Abir Hossen",
    shortName: "Abir",
    role: "Founder, Lead Frontend",
    image: "/assets/people/abir.jpeg",
    linkedin: "https://www.linkedin.com/in/abirhossen54321/",
    email: "mailto:abir@ztalab.com",
  },
];

const EXIT_MS = 300;

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);
  const [entered, setEntered] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openEmailPopup = (member: (typeof teamMembers)[number]) => {
    clearCloseTimeout();
    setActiveMember(member);
    setCopied(false);
  };

  const closeEmailPopup = () => {
    clearCloseTimeout();
    setEntered(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMember(null);
      closeTimeoutRef.current = null;
    }, EXIT_MS);
  };

  // Trigger the slide-in transition on the next frame after mounting.
  useEffect(() => {
    if (!activeMember) return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [activeMember]);

  // Dismiss on Escape.
  useEffect(() => {
    if (!activeMember) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEmailPopup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeMember]);

  const handleCopy = async () => {
    if (!activeMember) return;
    const address = activeMember.email.replace(/^mailto:/, "");
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link and visible address
      // still let the user reach the email manually.
    }
  };

  return (
    <section
      id="team"
      className="py-24 bg-card/60 border-t border-border/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Meet the Minds Behind ZTA Lab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A collective of passionate engineers and digital strategists
            committed to precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group glass-panel bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 shadow-2xl flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                {/* Team Portrait Image Box with 3:4 Aspect Ratio */}
                <div className="relative w-full aspect-3/4 overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent opacity-90" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mt-2">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-center gap-3 text-gray-400">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <button
                    type="button"
                    onClick={() => openEmailPopup(member)}
                    aria-label={`Email ${member.name}`}
                    className="group p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Popup — slides in from the right, doesn't affect page layout */}
      {activeMember && (
        <>
          {/* Invisible click-catcher to dismiss on outside click */}
          <div
            aria-hidden="true"
            onClick={closeEmailPopup}
            className="fixed inset-0 z-[65] cursor-default"
          />

          <div
            role="dialog"
            aria-label={`Email ${activeMember.name}`}
            className={`fixed z-[70] top-1/2 right-4 sm:right-8 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[19rem] glass-panel bg-card border border-border rounded-2xl shadow-2xl p-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              entered
                ? "translate-x-0 opacity-100"
                : "translate-x-[120%] opacity-0"
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/30 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-bold text-foreground leading-tight">
                    {activeMember.shortName}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeEmailPopup}
                aria-label="Close"
                className="group p-1.5 rounded-full bg-secondary hover:bg-border text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            <a
              href={activeMember.email}
              className="group/mail flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors mb-3"
            >
              <span className="text-sm font-semibold text-foreground truncate">
                {activeMember.email.replace(/^mailto:/, "")}
              </span>
              <Send className="w-3.5 h-3.5 text-primary shrink-0 transition-transform duration-300 group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
