"use client";

import { X, ExternalLink, Tag, CheckCircle2 } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  tags: string[];
  deliverables: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-panel bg-card border border-border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/60">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl font-extrabold text-foreground mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group p-2 rounded-full bg-secondary text-gray-300 hover:text-white hover:bg-border transition-colors"
          >
            <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-border relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-background/60 border border-border/40">
            <div>
              <span className="text-xs text-muted-foreground">Client</span>
              <p className="text-sm font-bold text-foreground mt-0.5">
                {project.client}
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Year</span>
              <p className="text-sm font-bold text-foreground mt-0.5">
                {project.year}
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Industry</span>
              <p className="text-sm font-bold text-primary mt-0.5">
                {project.category}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-foreground mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-foreground mb-3">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-muted-foreground border border-border"
              >
                <Tag className="w-3 h-3 text-primary" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-border/60 bg-background/80 flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-border text-gray-300 hover:text-white font-semibold text-sm transition-colors"
          >
            Close
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <span>Request Similar Project</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
