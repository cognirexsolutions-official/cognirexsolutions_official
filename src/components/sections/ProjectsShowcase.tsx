"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { conceptProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Check, Layers, Sparkles } from "lucide-react";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Business Website", "Digital Storefront", "Business Dashboard", "AI Assistant", "Workflow Automation"];

  const filteredProjects = selectedCategory === "All"
    ? conceptProjects
    : conceptProjects.filter(item => item.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-[#E5E1ED] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="MADE TO BE EXPERIENCED"
          title="Featured Demonstrations & Architecture"
          description="Explore concept implementations demonstrating how we engineer modern web applications, intelligent assistants, and custom business pipelines."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#7C3AED] text-white shadow-xs"
                  : "bg-[#F8F7FC] text-[#6F6A7C] hover:text-[#1F1B2E] border border-[#E5E1ED] hover:bg-[#EEE8FA]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/40 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Photo preview with rounded container */}
              <div className="p-3 bg-white">
                <div className="relative h-48 w-full bg-[#EEE8FA] overflow-hidden rounded-xl border border-[#E5E1ED]">
                  <Image
                    src={item.image}
                    alt={`${item.title} demonstration`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-[#1F1B2E]/25 transition-opacity group-hover:bg-[#1F1B2E]/10" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7C3AED] px-2.5 py-1 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-semibold drop-shadow-sm bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2.5 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F0EDF7] mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-[#7C3AED] bg-[#EEE8FA] px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold text-[#1F1B2E] group-hover:text-[#7C3AED] transition-colors pt-1"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-base text-[#1F1B2E] mb-1">
              Have a tailored system or platform in mind?
            </h4>
            <p className="text-xs text-[#6F6A7C]">
              We architect custom solutions tailored specifically to your operational requirements.
            </p>
          </div>
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
          >
            Request System Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
