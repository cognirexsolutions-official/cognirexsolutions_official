"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  Coffee,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useCmsContent } from "@/context/CmsContentContext";

export default function IndustriesSection() {
  const { content } = useCmsContent();
  const industries = content.industries;
  const [activeIdx, setActiveIdx] = useState(0);

  const activeIndustry = industries.items[activeIdx] || industries.items[0];

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "retail":
        return ShoppingBag;
      case "manufacturing":
        return Factory;
      case "education":
        return GraduationCap;
      case "healthcare":
        return Heart;
      case "hospitality":
        return Coffee;
      default:
        return ShoppingBag;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F8F7FC] border-b border-[#E5E1ED] relative scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={industries.badge || "SECTORS WE EMPOWER"}
          title={industries.title || "Tailored Digital Architectures Across Industries"}
          description={
            industries.description ||
            "Discover how we engineer targeted web applications, automated workflows, and digital experiences across key economic sectors."
          }
        />

        {/* Interactive Industry Matrix (Split Layout: List on Left, Active Deep Dive on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sector Switcher Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6F6A7C] block mb-3 pl-1">
              Select Sector
            </span>

            {industries.items.map((ind, idx) => {
              const Icon = getIndustryIcon(ind.id);
              const isActive = activeIdx === idx;

              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-white border-[#7C3AED] shadow-card text-[#1F1B2E]"
                      : "bg-white/60 hover:bg-white border-[#E5E1ED] text-[#6F6A7C] hover:text-[#1F1B2E]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#7C3AED] text-white"
                          : "bg-[#EEE8FA] text-[#7C3AED]"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-[#1F1B2E]">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-[#6F6A7C] line-clamp-1 mt-0.5">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-all ${
                      isActive ? "text-[#7C3AED] translate-x-1" : "text-gray-300 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Sector Deep Dive Showcase Card */}
          {activeIndustry && (
            <div className="lg:col-span-7 bg-white border border-[#E5E1ED] rounded-3xl p-6 sm:p-10 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#EEE8FA] px-3 py-1 rounded-full">
                    Sector Blueprint
                  </span>
                  <span className="text-xs font-semibold text-[#6F6A7C]">
                    Engineering Focus
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1F1B2E] mb-3">
                  {activeIndustry.title}
                </h3>

                <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed mb-6">
                  {activeIndustry.description}
                </p>

                {/* Banner Photo Preview */}
                <div className="relative h-56 sm:h-64 w-full bg-[#EEE8FA] overflow-hidden rounded-2xl border border-[#E5E1ED] mb-6">
                  <Image
                    src={activeIndustry.image || "/images/product-design-ux.jpg"}
                    alt={`${activeIndustry.title} digital solutions`}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B2E]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                    Engineered for high availability, transactional speed &amp; automated customer journeys.
                  </div>
                </div>

                {/* Concrete Deliverables & Outcomes */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F1B2E] block">
                    Core Solutions Delivered for this Sector:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeIndustry.keyOutcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED] text-xs font-medium text-[#1F1B2E]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#E5E1ED] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6F6A7C] text-center sm:text-left">
                  Need a tailored software architecture for your industry?
                </span>
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 shrink-0"
                >
                  <span>Consult with Our Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
