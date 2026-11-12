"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Home,
  Sparkles,
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { conceptProjects, ProjectDetailData } from "@/data/projects";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  "All Demonstrations",
  "Website Development",
  "E-Commerce Development",
  "Custom Software Development",
  "AI & Workflow Automation",
];

export default function ProjectsPortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Demonstrations");

  const filteredProjects = conceptProjects.filter((p) => {
    if (selectedCategory === "All Demonstrations") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 hover:text-[#5B21B6] transition-colors font-medium"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </li>
              <li className="text-[#5B21B6] font-semibold" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Projects Header */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Concept Showcases</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              Concept Demonstrations &amp; Engineering Architectures.
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-6">
              To transparently demonstrate how we design and engineer solutions, we have created dedicated concept showcases across our core disciplines. Each demonstration illustrates problem framing, proposed architecture, UI design, and full-stack implementation.
            </p>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#1F1B2E]">Transparency Notice:</strong> These projects represent functional concept demonstrations engineered by Cognirex Solutions to showcase architectural capabilities. They are not fabricated client case studies or claimed third-party contracts.
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Project Grid */}
      <section className="py-14 md:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-[#5B21B6] text-white shadow-xs"
                    : "bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#1F1B2E] hover:border-[#5B21B6]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white border border-[#E2E8F0] hover:border-[#5B21B6]/40 rounded-3xl overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Poster */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

                    {/* Concept Demonstration Badge */}
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

                  {/* Body Content */}
                  <div className="p-6">
                    <h2 className="font-heading font-extrabold text-xl text-[#1F1B2E] mb-2 group-hover:text-[#5B21B6] transition-colors leading-snug">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Problem / Solution Summary */}
                    <div className="space-y-3 pt-4 border-t border-[#F1F5F9] mb-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                          Problem Addressed:
                        </span>
                        <p className="text-xs text-[#1F1B2E] leading-relaxed line-clamp-2">
                          {project.problemStatement}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 4).map((tech) => (
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-[#F5F3FF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
            Have a Specific Project in Mind?
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Let us engineer a tailored web application, digital storefront, or AI automation pipeline designed around your business needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

