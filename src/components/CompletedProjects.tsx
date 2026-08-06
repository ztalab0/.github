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
    title: "High-Performance E-Commerce & Web Platform",
    category: "Website Design & Development",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80",
    description:
      "A fast, responsive e-commerce web platform engineered for maximum conversion, smooth checkout flow, and custom product catalog management.",
    client: "Aura Commerce",
    year: "2026",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    deliverables: [
      "E-Commerce Platform",
      "Responsive Mobile UI",
      "SEO Optimization",
      "Payment Gateway Integration",
    ],
  },
  {
    id: "2",
    title: "Cross-Platform Mobile Application Suite",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description:
      "Scalable Android & iOS mobile application featuring real-time data sync, user authentication, intuitive UI/UX design, and push notifications.",
    client: "Nexus App Ecosystem",
    year: "2026",
    tags: ["React Native", "Node.js", "UI/UX Design", "GraphQL"],
    deliverables: [
      "iOS & Android Mobile App",
      "User Experience Design",
      "Backend API Architecture",
      "Cloud Deployment",
    ],
  },
  {
    id: "3",
    title: "Data-Driven Digital Marketing Campaign",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    description:
      "Strategic SEO optimization, targeted Meta & Google Ads campaigns, and social media branding that increased client leads by 185%.",
    client: "Cipher Growth",
    year: "2025",
    tags: ["SEO Optimization", "Google Ads", "Meta Ads", "Analytics"],
    deliverables: [
      "Search Engine Optimization",
      "Paid Ad Campaigns",
      "Social Media Branding",
      "Conversion Analytics",
    ],
  },
  {
    id: "4",
    title: "Custom Enterprise Web Portal & Brand Identity",
    category: "Website Design & Development",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    description:
      "Bespoke business portal with interactive user dashboard, custom web workflows, and modern brand design system.",
    client: "Verde Living Group",
    year: "2025",
    tags: ["Website Design", "Web App", "Branding", "UI/UX"],
    deliverables: [
      "Business Website",
      "Custom UI Component Library",
      "Brand Identity Assets",
      "Speed & Performance Tuning",
    ],
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
            "Digital Marketing",
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
