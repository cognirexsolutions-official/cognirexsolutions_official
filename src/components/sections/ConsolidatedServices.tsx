"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight,
  Zap,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
};

export default function ConsolidatedServices() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];
  const ActiveIcon = iconMap[activeService.icon] || Globe;

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Engineering Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Four Focused Disciplines. Engineered to Scale.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Instead of fragmented agencies and disjointed tools, we provide end-to-end technical execution across web, commerce, bespoke software, and intelligent AI automation.
          </p>
        </div>

        {/* Desktop Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            const isSelected = service.id === activeServiceId;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#5B21B6] text-white border-[#5B21B6] shadow-sm"
                    : "bg-[#F8FAFC] border-[#E2E8F0] text-[#1F1B2E] hover:border-[#5B21B6]/30 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#EDE9FE] text-[#5B21B6]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? "text-[#C4B5FD]" : "text-[#64748B]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div className="font-heading font-bold text-sm leading-snug">
                  {service.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Details & Capabilities */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EDE9FE] text-[#5B21B6] text-xs font-bold mb-4">
                <ActiveIcon className="w-4 h-4" />
                <span>{activeService.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading mb-4">
                {activeService.title}
              </h3>

              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                {activeService.shortDescription}
              </p>

              {/* Capabilities checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-[#E2E8F0]">
                {activeService.capabilities.map((cap) => (
                  <div key={cap.title} className="flex items-start gap-2 text-xs font-medium text-[#1F1B2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                    <span>{cap.title}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B21B6] hover:bg-[#4C1D95] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
                >
                  <span>Explore {activeService.title} Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#5B21B6] text-[#1F1B2E] hover:text-[#5B21B6] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Discuss Requirements</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Custom Visual / Architecture Composition */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F172A] border border-[#334155] rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className="w-4 h-4 text-[#A78BFA]" />
                    <span className="text-xs font-mono font-bold text-[#E2E8F0]">
                      {activeService.slug}.architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Production Verified
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155]/60">
                    <span className="text-[10px] uppercase text-[#94A3B8] block mb-1">
                      Tech Stack Matrix
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.techStack.map((tech) => (
                        <span key={tech} className="bg-[#0F172A] px-2 py-0.5 rounded text-[10px] text-[#C4B5FD]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155]/60">
                    <span className="text-[10px] uppercase text-[#94A3B8] block mb-1">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1 text-[11px] text-[#E2E8F0]">
                      {activeService.capabilities[0]?.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#A78BFA]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeService.demonstrationSlug && (
                  <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-between text-xs">
                    <span className="text-[#94A3B8]">Demonstration:</span>
                    <Link
                      href={`/projects/${activeService.demonstrationSlug}`}
                      className="text-[#C4B5FD] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{activeService.demonstrationTitle}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* View All Services Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#5B21B6] hover:underline"
          >
            <span>View All Engineering Capabilities &amp; Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

