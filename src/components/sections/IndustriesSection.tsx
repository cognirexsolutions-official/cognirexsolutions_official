"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { industriesData } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Sectors &amp; Domains</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Engineered for Real Industry Demands.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            From consumer e-commerce storefronts to specialized B2B manufacturing spec catalogs and clinical booking portals, we adapt our engineering to your sector&apos;s exact workflows.
          </p>
        </div>

        {/* 6 Industry Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {industriesData.map((ind, index) => {
            const IconComp = iconMap[ind.icon] || Briefcase;

            return (
              <div
                key={ind.id}
                className="bg-white border border-[#E2E8F0] hover:border-[#5B21B6]/40 rounded-3xl overflow-hidden shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Preview */}
                  <div className="relative h-44 w-full bg-[#0F172A] overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={`${ind.title} digital solutions`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C4B5FD]">
                        SECTOR 0{index + 1}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-xl text-[#1F1B2E] mb-2 group-hover:text-[#5B21B6] transition-colors leading-snug">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-5">
                      {ind.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#F1F5F9]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                        Delivered Outcomes:
                      </span>
                      {ind.keyOutcomes.slice(0, 2).map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#1F1B2E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B21B6] shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-[#F8FAFC] group-hover:bg-[#EDE9FE] text-[#1F1B2E] group-hover:text-[#5B21B6] text-xs font-bold transition-colors"
                  >
                    <span>Explore {ind.title} Use-Cases</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Industries Link */}
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B21B6] hover:underline"
          >
            <span>View Complete Sector Deep-Dives &amp; Case Scenarios</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
