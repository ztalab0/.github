"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Elite Fitness BD",
    category: "Website Design & Development",
    image: "https://abirhossen.com/assets/images/websites/elite-fitness.webp",
    description:
      "One of the best gyms in Khulna — a premium fitness destination with world-class training facilities, built as a bold, high-energy brand site.",
    client: "Elite Fitness BD",
    year: "2024",
    tags: ["Next.js", "E-commerce", "Cursor + Claude", "TailwindCSS"],
    deliverables: [
      "Brand Website",
      "E-Commerce Catalog",
      "Responsive Mobile UI",
      "Edge Deployment",
    ],
    liveUrl: "http://elitefitnessbd.com/",
  },
  {
    id: "2",
    title: "Bluearch Creative Digital Agency",
    category: "Website Design & Development",
    image: "https://abirhossen.com/assets/images/websites/bluearch.webp",
    description:
      "My own UK-based creative digital agency — a clean, modern home for design, video, and code work with a calm cyan identity.",
    client: "Bluearch",
    year: "2025",
    tags: ["Next.js", "Agency", "Cursor + Claude", "UI/UX"],
    deliverables: [
      "Agency Platform",
      "Custom Design System",
      "Responsive Layouts",
      "SEO & Performance",
    ],
    liveUrl: "https://bluearchofficial.com",
  },
  {
    id: "3",
    title: "Fitnex Gym BD",
    category: "Website Design & Development",
    image: "https://abirhossen.com/assets/images/websites/fitnex-gym.webp",
    description:
      "A bold gym & fitness brand site with a fierce red identity, deployed globally on Cloudflare Workers for instant edge delivery.",
    client: "Fitnex Gym BD",
    year: "2025",
    tags: ["Cloudflare Workers", "Edge-deployed", "Cursor + Claude", "Web Design"],
    deliverables: [
      "High-Performance Web App",
      "Edge Hosting",
      "Brand Design",
      "Mobile UI",
    ],
    liveUrl: "https://fitnex-gym-bd.bluearchofficial.workers.dev/",
  },
  {
    id: "4",
    title: "Vault Fintech App & Wallet Suite",
    category: "App Development",
    image: "https://abirhossen.com/assets/images/designs/vault-fintech-app.webp",
    description:
      "Modern fintech banking interface and app design suite engineered for secure financial transactions, user analytics, and real-time wallet tracking.",
    client: "Vault Fintech",
    year: "2025",
    tags: ["React Native", "Fintech UI", "GPT Image 2", "Photoshop"],
    deliverables: [
      "Mobile Application UI",
      "Interactive Dashboard",
      "Design System",
      "Security & Wallet UX",
    ],
    liveUrl: "https://abirhossen.com/",
  },
  {
    id: "5",
    title: "Maison Lumière & Lumea Luxury Brand Suite",
    category: "AI Design & Branding",
    image: "https://abirhossen.com/assets/images/designs/maison-lumiere-before-after.webp",
    description:
      "High-end luxury packaging, editorial imagery, and digital brand identity created using AI generation (GPT Image 2) and precision Photoshop retouching.",
    client: "Maison Lumière",
    year: "2025",
    tags: ["AI-Integrated Design", "GPT Image 2", "Photoshop", "Branding"],
    deliverables: [
      "3D Packaging Design",
      "Editorial Brand Campaign",
      "Social Assets",
      "AI Art Direction",
    ],
    liveUrl: "https://abirhossen.com/",
  },
  {
    id: "6",
    title: "Higgsfield AI UGC Video & Motion Reels",
    category: "Video & Digital Marketing",
    image: "https://abirhossen.com/assets/images/hero/hero-main.webp",
    description:
      "Native social video ads and cinematic UGC reels directed and produced entirely with Higgsfield AI, After Effects, and Premiere Pro without traditional film crews.",
    client: "Global Brands",
    year: "2025",
    tags: ["Higgsfield AI", "After Effects", "Premiere Pro", "UGC Video"],
    deliverables: [
      "AI UGC Video Ads",
      "Motion Graphics",
      "Sound Design",
      "Social Campaign Formats",
    ],
    liveUrl: "https://abirhossen.com/",
  },
];

export default function CompletedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-24 bg-background relative border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              Completed Projects
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-extrabold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <span>Request Custom Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10 pb-2 border-b border-border/40">
          {[
            "All",
            "Website Design & Development",
            "App Development",
            "AI Design & Branding",
            "Video & Digital Marketing",
          ].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-card text-gray-300 border border-border hover:border-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Official Carousel Component */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 shadow-xl flex flex-col h-full transition-colors duration-300"
                >
                  {/* Project Visual Image */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-80" />
                  </div>

                  {/* Bottom Card Overview */}
                  <div className="p-6 sm:p-8 bg-card -mt-10 relative z-10 flex flex-col justify-between flex-1 border-t border-border/40">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary">
                          {project.category}
                        </span>
                        <span className="text-[11px] text-muted-foreground font-semibold px-2.5 py-0.5 rounded-full bg-secondary border border-border">
                          {project.client}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
                        <ExternalLink className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <span>View Project Details</span>
                      </span>
                      <span className="w-10 h-10 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12 relative">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
          </div>
        </Carousel>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
