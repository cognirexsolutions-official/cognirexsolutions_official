"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { industriesData } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-16 sm:py-24 bg-white border-y border-[#E5E1ED] relative scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="SECTORS & VERTICALS"
          title="Tailored Solutions for Industry-Specific Challenges"
          description="Every industry operates under distinct compliance, workflow, and customer engagement requirements. Explore how we engineer solutions tailored to your domain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/40 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Card Photo Preview */}
              <div className="p-2.5 bg-white">
                <div className="relative h-44 w-full bg-[#EEE8FA] overflow-hidden rounded-xl border border-[#E5E1ED]">
                  <Image
                    src={ind.image || "/images/product-design-ux.jpg"}
                    alt={`${ind.title} digital solutions`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-[#1F1B2E]/25 transition-opacity group-hover:bg-[#1F1B2E]/10" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7C3AED] px-2.5 py-1 rounded-full shadow-xs">
                      Vertical Solution
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1F1B2E] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-[#6F6A7C] leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#E5E1ED]">
                    {ind.keyOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1F1B2E]">
                        <Check className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:text-[#5B21B6] transition-colors"
                  >
                    <span>View Industry Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Verticals Link */}
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EEE8FA] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white text-xs font-bold transition-all shadow-xs"
          >
            <span>Explore All Industry Architecture Portals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
