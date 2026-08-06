"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import {
  Sparkles,
  Globe,
  TrendingUp,
  CheckCircle,
  Code2,
  Bot,
  Palette,
  Download,
  X,
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

interface SubService {
  id: string;
  name: string;
  shortDesc: string;
  includes: string;
  delivery: string;
  value: string;
}

interface ServiceCategory {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  icon: typeof Globe;
  accentColor: string;
  pillBadgeColor: string;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "web-software",
    badge: "Web & Software",
    title: "Web & Software",
    shortDesc:
      "Full-stack websites, e-commerce stores, and bespoke software engineered around your exact requirements.",
    icon: Globe,
    accentColor: "from-emerald-500/20 to-primary/10",
    pillBadgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    subServices: [
      {
        id: "web-fullstack",
        name: "Websites and Web Applications (Full Stack)",
        shortDesc:
          "Modern, high-performance websites and web apps built end-to-end.",
        includes:
          "Custom frontend interfaces, scalable backend systems, database architecture, and secure API integrations tailored to your business logic.",
        delivery:
          "Our team handles the full lifecycle — discovery, UI/UX design, development, QA, and deployment — using modern frameworks like Next.js and Node.js.",
        value:
          "You get a fast, reliable, and easy-to-maintain platform that grows with your business instead of becoming a liability.",
      },
      {
        id: "ecommerce",
        name: "E-commerce Stores",
        shortDesc: "Conversion-focused online stores that sell around the clock.",
        includes:
          "Product catalog management, secure checkout and payment integration, inventory sync, and mobile-optimized storefronts.",
        delivery:
          "We build on proven, flexible foundations and customize every step of the shopping experience to match your brand and operational needs.",
        value:
          "A smoother buying journey means higher conversion rates, fewer abandoned carts, and a store you can scale confidently.",
      },
      {
        id: "custom-software",
        name: "Custom Software Built to Client Requirements",
        shortDesc: "Bespoke tools engineered around your specific workflow.",
        includes:
          "Requirement analysis, system architecture design, and development of desktop, web, or internal enterprise tools.",
        delivery:
          "We work closely with your team to map real operational needs into a precise technical specification before building anything.",
        value:
          "Software that fits your business exactly — no paying for features you don't need, no working around ones you do.",
      },
    ],
  },
  {
    id: "ai-systems",
    badge: "AI & Systems",
    title: "AI & Systems",
    shortDesc:
      "Practical AI integration, intelligent chat and sales agents, and automation that removes manual busywork.",
    icon: Bot,
    accentColor: "from-blue-500/20 to-primary/10",
    pillBadgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    subServices: [
      {
        id: "ai-integration",
        name: "AI Integration",
        shortDesc: "Embed practical AI capabilities into your existing systems.",
        includes:
          "Assessment of use cases, model selection, and integration of AI into your website, app, or internal tools.",
        delivery:
          "We connect proven AI providers and fine-tuned models to your data through secure, well-tested pipelines.",
        value:
          "You unlock automation and intelligence in your product without the overhead of building AI infrastructure from scratch.",
      },
      {
        id: "ai-chatbots",
        name: "AI Chatbots and AI Sales Agents",
        shortDesc: "24/7 conversational agents that qualify leads and support customers.",
        includes:
          "A trained AI assistant with your business knowledge base, lead qualification logic, and CRM or booking integration.",
        delivery:
          "We design conversation flows around your sales process, then train and deploy the agent on your website or messaging channels.",
        value:
          "Round-the-clock engagement that captures leads and answers questions instantly, even outside business hours.",
      },
      {
        id: "business-automation",
        name: "Business Process Automation",
        shortDesc: "Remove repetitive manual work from daily operations.",
        includes:
          "Mapping of manual workflows, and automation of tasks across CRMs, spreadsheets, emails, and internal tools.",
        delivery:
          "We identify the highest-friction manual steps in your operations and replace them with reliable automated pipelines.",
        value:
          "Your team spends less time on repetitive tasks and more time on work that actually grows the business.",
      },
    ],
  },
  {
    id: "brand-content",
    badge: "Brand & Content",
    title: "Brand & Content",
    shortDesc:
      "Identity, design, and content production that gives your business a distinct, professional presence.",
    icon: Palette,
    accentColor: "from-purple-500/20 to-primary/10",
    pillBadgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    subServices: [
      {
        id: "branding",
        name: "Branding and Identity",
        shortDesc: "A cohesive visual identity that people remember.",
        includes:
          "Logo design, color and typography systems, brand guidelines, and core brand messaging.",
        delivery:
          "We start with your positioning and audience, then translate it into a consistent visual and verbal identity across every touchpoint.",
        value:
          "A brand that looks intentional and consistent everywhere it appears, building trust with every impression.",
      },
      {
        id: "ui-ux",
        name: "UI/UX Design",
        shortDesc: "Interfaces that are as usable as they are attractive.",
        includes:
          "User research, wireframing, interactive prototypes, and final high-fidelity interface designs.",
        delivery:
          "We design with real user flows in mind, validating layouts before a single line of production code is written.",
        value:
          "Fewer usability issues after launch and a product experience that keeps users engaged instead of frustrated.",
      },
      {
        id: "video-graphics",
        name: "Video Editing, Reels, and Graphic Design",
        shortDesc: "Scroll-stopping visual content for every platform.",
        includes:
          "Short-form video edits, social media reels, promotional graphics, and campaign visual assets.",
        delivery:
          "Our creative team edits and designs around your brand guidelines, optimized for how each platform is actually consumed.",
        value:
          "Consistent, professional visual content that keeps your social presence active without draining your internal resources.",
      },
      {
        id: "ai-content",
        name: "AI-Generated Content",
        shortDesc: "Scalable content production accelerated by AI tools.",
        includes:
          "AI-assisted copywriting, image generation, and content drafts refined with human editorial oversight.",
        delivery:
          "We use AI tools to accelerate first drafts and variations, then apply human review to keep quality and brand voice intact.",
        value:
          "Faster content turnaround and higher output volume, without sacrificing the polish of professionally reviewed work.",
      },
    ],
  },
  {
    id: "digital-marketing",
    badge: "Digital Marketing",
    title: "Digital Marketing",
    shortDesc:
      "Data-driven acquisition and growth — from search visibility to paid campaigns and lead generation.",
    icon: TrendingUp,
    accentColor: "from-amber-500/20 to-primary/10",
    pillBadgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    subServices: [
      {
        id: "seo",
        name: "SEO",
        shortDesc: "Higher organic visibility that compounds over time.",
        includes:
          "Technical SEO audits, on-page optimization, content strategy, and ongoing search performance tracking.",
        delivery:
          "We diagnose what's holding your rankings back, then execute a prioritized roadmap of technical and content fixes.",
        value:
          "Sustainable organic traffic growth that reduces your long-term dependency on paid acquisition.",
      },
      {
        id: "paid-ads",
        name: "Paid Advertising (Meta & Google)",
        shortDesc: "Targeted campaigns engineered for measurable return.",
        includes:
          "Campaign strategy, audience targeting, ad creative, and continuous performance optimization across Meta and Google.",
        delivery:
          "We set clear KPIs upfront, launch structured campaigns, and iterate weekly based on real conversion data.",
        value:
          "Ad spend that's accountable to results, with clear reporting on cost-per-lead and return on investment.",
      },
      {
        id: "social-media",
        name: "Social Media Management",
        shortDesc: "Consistent, on-brand presence across your key platforms.",
        includes:
          "Content calendars, post scheduling, community engagement, and monthly performance reporting.",
        delivery:
          "We plan and manage your social channels around a consistent content strategy aligned with your brand voice.",
        value:
          "An active, professional social presence that builds audience trust without consuming your internal team's time.",
      },
      {
        id: "content-marketing",
        name: "Content Marketing",
        shortDesc: "Content that attracts, educates, and converts your audience.",
        includes:
          "Blog and article strategy, SEO-aligned content production, and distribution planning.",
        delivery:
          "We build a content plan around your customers' real questions, then produce and optimize content to match search intent.",
        value:
          "A growing library of assets that keeps attracting qualified traffic long after publication.",
      },
      {
        id: "lead-generation",
        name: "Lead Generation",
        shortDesc: "Consistent pipelines of qualified prospects.",
        includes:
          "Funnel design, landing pages, lead magnets, and outreach or capture systems tailored to your ICP.",
        delivery:
          "We build and connect the funnel stages — from first touch to captured lead — and continuously refine based on conversion data.",
        value:
          "A predictable, measurable stream of qualified leads instead of relying on inconsistent word-of-mouth.",
      },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understanding your goals, audience, and mapping the right technical and creative approach.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "Crafting brand direction, UI/UX, and system architecture before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build & Integration",
    desc: "Engineering the product and integrating AI, automation, and third-party systems.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous quality assurance, performance tuning, and a smooth, controlled release.",
  },
  {
    step: "05",
    title: "Growth & Optimization",
    desc: "Ongoing marketing, SEO, and support to keep results compounding after launch.",
  },
];

export default function OurServices() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    null,
  );
  const [activeSubService, setActiveSubService] = useState<{
    category: ServiceCategory;
    sub: SubService;
  } | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategory((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-card/40 border-t border-border/50 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-125 h-125 bg-secondary/50 rounded-full blur-[160px] pointer-events-none" />

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
            We group our expertise into 4 comprehensive divisions—covering
            web & software engineering, AI & systems, brand & content, and
            digital marketing.
          </p>
        </div>

        {/* 4 Main Service Category Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-20">
          {serviceCategories.map((category) => {
            const IconComp = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className={cn(
                  "group glass-panel bg-card/90 p-6 sm:p-7 rounded-3xl border border-border/80 hover:border-primary/50 shadow-2xl flex flex-col transition-all duration-300 relative overflow-hidden",
                  isExpanded && "ring-2 ring-primary/20 bg-card",
                )}
              >
                {/* Subtle Card Accent Gradient */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-40 h-40 bg-linear-to-bl rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300",
                    category.accentColor,
                  )}
                />

                {/* Category Header (click to expand) */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-start justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md shrink-0">
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                    <div>
                      <span
                        className={cn(
                          "inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border mb-2",
                          category.pillBadgeColor,
                        )}
                      >
                        {category.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        {category.shortDesc}
                      </p>
                    </div>
                  </div>

                  <span className="w-9 h-9 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 border border-border transition-transform duration-300 group-hover:scale-110">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Expandable Sub-Services List */}
                {isExpanded && (
                  <div className="mt-6 pt-5 border-t border-border/50 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    {category.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/60"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-foreground">
                          {sub.name}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSubService({ category, sub })
                          }
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-[11px] font-bold transition-all cursor-pointer shrink-0"
                        >
                          See More
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature-Rich In-House Software Download & Subscription Showcase (Group 2 Special Feature) */}
        {/* <div className="glass-panel bg-card p-8 sm:p-12 rounded-3xl border border-border/80 shadow-2xl relative mb-20">
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
        </div> */}

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
                className="glass-panel p-5 rounded-2xl border border-border/80 hover:border-primary/50 hover:shadow-[0_0_30px_-8px_rgba(38,224,156,0.45)] transition-all duration-300 relative flex flex-col justify-between"
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

      {/* Sub-Service Details Modal */}
      {activeSubService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-card border border-border w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveSubService(null)}
              className="group absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-border text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {activeSubService.category.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                {activeSubService.sub.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                {activeSubService.sub.shortDesc}
              </p>
            </div>

            {/* Deep Description */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-secondary/60 border border-border/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    What's Included
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeSubService.sub.includes}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/60 border border-border/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    How We Deliver It
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeSubService.sub.delivery}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/60 border border-border/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                    The Value It Provides
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {activeSubService.sub.value}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-6 border-t border-border flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => setActiveSubService(null)}
                className="px-5 py-2.5 rounded-full bg-secondary text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveSubService(null)}
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
