"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers, Check } from "lucide-react";
import { conceptProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-[#F8F7FC] relative scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="FEATURED WORK & PROTOTYPES"
          title="Interactive Concept Demonstrations"
          description="Explore our interactive engineering demonstrations illustrating modern web architectures, e-commerce pipelines, operational software, and AI RAG workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {conceptProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/40 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Photo preview with Concept Badge */}
              <div className="p-2.5 bg-white">
                <div className="relative h-48 w-full bg-[#EEE8FA] overflow-hidden rounded-xl border border-[#E5E1ED]">
                  <Image
                    src={item.image}
                    alt={`${item.title} concept demonstration`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-[#1F1B2E]/30 transition-opacity group-hover:bg-[#1F1B2E]/15" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7C3AED] px-2.5 py-1 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-semibold drop-shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-[#F8F7FC] text-[#1F1B2E] border border-[#E5E1ED] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E1ED] flex items-center justify-between">
                  <Link
                    href={`/projects/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:text-[#5B21B6] transition-colors"
                  >
                    <span>Read Technical Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(item.category)}`}
                    className="text-[11px] font-semibold text-[#6F6A7C] hover:text-[#1F1B2E] transition-colors"
                  >
                    Build Similar &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#E5E1ED] hover:border-[#7C3AED] hover:text-[#7C3AED] text-xs font-bold transition-all shadow-xs"
          >
            <span>Explore Full Project Portfolio &amp; Technical Stacks</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
