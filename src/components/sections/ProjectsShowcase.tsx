"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { conceptProjects } from "@/data/projects";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Proof of Concept</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Featured Concept Demonstrations.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Tangible, interactive system demonstrations showing how we approach information architecture, modern user interfaces, full-stack data flow, and AI integration.
          </p>
        </div>

        {/* 5 Concept Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {conceptProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] hover:border-[#5B21B6]/40 rounded-3xl overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Poster Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

                  {/* Explicit Concept Demonstration Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#5B21B6] shadow-xs">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="text-[11px] font-mono font-semibold text-[#C4B5FD] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-xl text-[#1F1B2E] mb-2 group-hover:text-[#5B21B6] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#F1F5F9] mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                      Problem Addressed:
                    </span>
                    <p className="text-xs text-[#1F1B2E] leading-relaxed line-clamp-2">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#F8FAFC] group-hover:bg-[#EDE9FE] text-[#1F1B2E] group-hover:text-[#5B21B6] text-xs font-bold transition-colors"
                >
                  <span>View Demonstration &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B21B6] hover:underline"
          >
            <span>Explore All Concept Demonstrations &amp; Code Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
