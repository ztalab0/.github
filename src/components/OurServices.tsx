"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Smartphone,
  TrendingUp,
  CheckCircle,
  Code2,
  Download,
  Bot,
  Zap,
  Cpu,
  Layers,
  ShieldCheck,
  Key,
  RefreshCw,
  BarChart3,
  ExternalLink,
  X,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface InHouseSoftware {
  name: string;
  category: string;
  version: string;
  size: string;
  description: string;
  downloadUrl: string;
  model: string;
  features: string[];
}

export default function OurServices() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleServiceExpand = (id: string) => {
    setExpandedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const sampleSoftware: InHouseSoftware[] = [
    {
      name: "ZTA Sales Bot Agent",
      category: "AI & Sales Automation",
      version: "v2.1.0 Stable",
      size: "45 MB",
      description:
        "Autonomous AI Sales Assistant for desktop & web that nurtures leads, answers customer queries, and closes sales 24/7.",
      downloadUrl: "#contact",
      model: "Subscription / License Key",
      features: [
        "OpenAI & Gemini API Integration",
        "Custom Knowledge Base Training",
        "CRM Auto-Sync",
      ],
    },
    {
      name: "ZTA Workflow Automator",
      category: "Business Process Automation",
      version: "v1.8.4",
      size: "62 MB",
      description:
        "Lightweight desktop middleware connecting webhooks, databases, and custom API pipelines with zero-code rules.",
      downloadUrl: "#contact",
      model: "Monthly / Lifetime Plan",
      features: [
        "Multi-App Webhook Dispatcher",
        "Encrypted Local Storage",
        "Scheduled Cron Tasks",
      ],
    },
    {
      name: "ZTA SEO & Growth Suite",
      category: "Digital Marketing & SEO",
      version: "v3.0.2",
      size: "28 MB",
      description:
        "Real-time technical SEO auditor, keyword tracker, and ad campaign performance dashboard.",
      downloadUrl: "#contact",
      model: "Subscription Model",
      features: [
        "Sitemap & Schema Inspector",
        "PageSpeed Score Analytics",
        "Automated Ranking Reports",
      ],
    },
  ];

  const groupedServices = [
    {
      id: "web-mobile-ai",
      groupTag: "Group 01",
      badge: "Web, Mobile & AI Solutions",
      title: "Web & Mobile Development + AI Integration",
      shortDesc:
        "High-performance website engineering (Frontend & Backend), native/cross-platform mobile apps for Android & iOS, alongside client-tailored AI Agents and 24/7 AI Sales Reps.",
      icon: Globe,
      accentColor: "from-emerald-500/20 to-primary/10",
      pillBadgeColor:
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      pillars: [
        {
          name: "Full-Stack Web Engineering",
          desc: "Responsive React/Next.js frontends, scalable Node/Python backends, REST/GraphQL APIs, and cloud database architecture.",
        },
        {
          name: "Android & iOS App Development",
          desc: "Seamless cross-platform mobile apps, native device integration, offline sync, push notifications, and App Store / Play Store deployment.",
        },
        {
          name: "Client-Tailored AI & AI Sales Man",
          desc: "Autonomous 24/7 AI Sales Agent designed to engage website visitors, qualify leads, answer product queries, and automate sales pipelines.",
        },
      ],
      subFeatures: [
        "Frontend & Backend Custom Web Systems",
        "iOS & Android Native / Cross-Platform Apps",
        "AI Sales Man Chatbot (Custom Client Rules)",
        "Fine-Tuned LLMs & Vector Database RAG",
        "Lead Capture & Sales Funnel Integration",
        "High-Security Cloud & API Architecture",
      ],
      techStack: [
        "Next.js",
        "React Native",
        "Node.js",
        "Python",
        "OpenAI API",
        "Gemini AI",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      id: "software-dev-products",
      groupTag: "Group 02",
      badge: "Custom Dev & In-House Products",
      title: "Software Development & In-House Products",
      shortDesc:
        "Bespoke software solutions built precisely to client specifications, plus ZTA Lab's proprietary suite of in-house software tools with direct download options and flexible subscription licensing.",
      icon: Code2,
      accentColor: "from-blue-500/20 to-primary/10",
      pillBadgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      pillars: [
        {
          name: "Customised Client Software",
          desc: "Tailor-made desktop, web, and enterprise applications engineered around your company's specific business logic and operating needs.",
        },
        {
          name: "In-House Made Software Showcase",
          desc: "Explore ready-to-use software built by ZTA Lab. Featured with direct links on our site, version logs, and product showcases.",
        },
        {
          name: "Direct Download Hub & Subscriptions",
          desc: "One-click GetIntoPC-style fast installer downloads (Setup / Portable / Standalone) with flexible monthly, annual, or license-key subscription models.",
        },
      ],
      subFeatures: [
        "Client Requirement-Based Custom Engineering",
        "ZTA Lab In-House Software Showcase Portal",
        "Direct Setup & Installer Download Options",
        "Flexible Subscription & License Key System",
        "Background Auto-Updates & Cloud Sync",
        "Cross-Platform Windows / Mac / Linux Builds",
      ],
      techStack: [
        "Electron",
        "C# / .NET",
        "Go",
        "Python",
        "TypeScript",
        "Docker",
        "Stripe Subscription API",
        "SQLite / Cloud DB",
      ],
    },
    {
      id: "marketing-seo-automation",
      groupTag: "Group 03",
      badge: "Growth & Automation",
      title: "Digital Marketing, SEO & Business Automation",
      shortDesc:
        "Data-driven marketing campaigns, technical & content SEO optimization, and intelligent business process automation tailored to streamline operations and scale your revenue.",
      icon: TrendingUp,
      accentColor: "from-purple-500/20 to-primary/10",
      pillBadgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      pillars: [
        {
          name: "Search Engine Optimization (SEO)",
          desc: "On-page, technical & off-page SEO audits, schema markup, site speed optimization, and high-converting search rank strategy.",
        },
        {
          name: "Performance Digital Marketing",
          desc: "Targeted Meta & Google Ad campaigns, conversion rate optimization (CRO), brand positioning, and social media growth funnels.",
        },
        {
          name: "Client-Specific Business Automation",
          desc: "Custom automated workflows connecting CRMs, ERPs, payment channels, automated email sequences, and webhook integrations.",
        },
      ],
      subFeatures: [
        "Comprehensive Technical & Content SEO Audits",
        "Meta Ads & Google PPC Performance Campaigns",
        "Custom Business Process Automation Pipelines",
        "CRM, ERP & Payment Gateway API Sync",
        "Automated Lead Capture & Email Nurturing",
        "Real-Time ROI & Conversion Analytics",
      ],
      techStack: [
        "Google Analytics 4",
        "Meta Business Suite",
        "Zapier / Make",
        "Custom Webhooks",
        "SEO Schema",
        "Ahrefs / SEMrush",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding client requirements & architecture",
    },
    {
      step: "02",
      title: "Strategy & UX",
      desc: "Designing system flow, UI/UX, & tech stack",
    },
    {
      step: "03",
      title: "Engineering",
      desc: "Building frontends, backends, apps & AI models",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Quality assurance, deployment & release",
    },
    {
      step: "05",
      title: "Automation & Growth",
      desc: "SEO, marketing funnels & continuous support",
    },
  ];

  const selectedServiceModal = groupedServices.find(
    (s) => s.id === activeModal,
  );

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-card/40 border-t border-border/50 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Core Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Feature-Rich Digital & <br className="hidden sm:block" />{" "}
              Engineering Solutions
            </h2>
          </div>

          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            We group our expertise into 3 comprehensive divisions—delivering
            full-stack web/mobile apps with AI integration, custom & in-house
            software solutions, and automated growth marketing.
          </p>
        </div>

        {/* 3 Main Grouped Service Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {groupedServices.map((service) => {
            const IconComp = service.icon;
            const isExpanded = expandedServices.includes(service.id);

            return (
              <div
                key={service.id}
                className="group glass-panel bg-card/90 p-6 sm:p-7 rounded-3xl border border-border/80 hover:border-primary/50 shadow-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Card Accent Gradient */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-bl ${service.accentColor} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${service.pillBadgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Tech Badges Preview (Always concise) */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {(isExpanded
                      ? service.techStack
                      : service.techStack.slice(0, 4)
                    ).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-secondary/80 text-gray-300 px-2 py-0.5 rounded-md border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && service.techStack.length > 4 && (
                      <span className="text-[10px] font-medium bg-secondary/40 text-muted-foreground px-2 py-0.5 rounded-md">
                        +{service.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Expandable Section: Key Highlights & Full Details */}
                  {isExpanded && (
                    <div className="space-y-3 pt-4 mb-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Key Highlights:
                      </span>
                      {service.pillars.map((pillar) => (
                        <div
                          key={pillar.name}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-foreground">
                              {pillar.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-3 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleServiceExpand(service.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "See More"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <button
                        type="button"
                        onClick={() => setActiveModal(service.id)}
                        className="text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                      >
                        Full Spec Modal
                      </button>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors shadow-md shrink-0"
                    aria-label={`Inquire ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature-Rich In-House Software Download & Subscription Showcase (Group 2 Special Feature) */}
        <div className="glass-panel bg-card p-8 sm:p-12 rounded-3xl border border-border/80 shadow-2xl relative mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                <Download className="w-3.5 h-3.5" />
                <span>In-House Software Products & Downloads</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                ZTA Lab In-House Software Suite
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                Explore tools built in-house by ZTA Lab. Get direct fast
                download links (GetIntoPC style access), installers, standalone
                tools, and simple subscription licensing.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shrink-0"
            >
              <span>Inquire Custom Software</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Software Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {sampleSoftware.map((soft) => (
              <div
                key={soft.name}
                className="bg-secondary/40 p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-3">
                    <span className="font-bold text-primary">
                      {soft.category}
                    </span>
                    <span className="bg-card px-2 py-0.5 rounded border border-border text-gray-400 font-mono">
                      {soft.version}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {soft.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {soft.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {soft.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-[11px] text-gray-300"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3 text-xs">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground">
                      Licensing Model
                    </span>
                    <span className="font-bold text-foreground text-[11px]">
                      {soft.model}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-xl bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-all border border-primary/30 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download / Get Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="pt-12 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              OUR WORKFLOW & METHODOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              How We Turn Requirements Into Production-Ready Systems
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
                  <h4 className="text-base font-bold text-foreground mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Specs Modal Popup */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-card border border-border w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {selectedServiceModal.groupTag} — {selectedServiceModal.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                {selectedServiceModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                {selectedServiceModal.shortDesc}
              </p>
            </div>

            {/* Deep Feature List */}
            <div className="space-y-6 mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-2">
                Core Architectural Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedServiceModal.subFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="p-3.5 rounded-xl bg-secondary/60 border border-border/80 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-foreground">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Technologies & Frameworks Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedServiceModal.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-6 border-t border-border flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-full bg-secondary text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                Close Specifications
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
              >
                Inquire This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
