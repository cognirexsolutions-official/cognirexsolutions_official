"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import WebOfConnections from "@/components/ui/WebOfConnections";
import { useCmsContent } from "@/context/CmsContentContext";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Layers,
  Code2,
} from "lucide-react";

export default function AboutSection() {
  const { content } = useCmsContent();
  const about = content.about;

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-[#E5E1ED] relative overflow-hidden scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Section: Editorial Story + Core Principles Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
          {/* Left Column: Brand Story & Studio Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="lavender">{about.badge || "About Cognirex Solutions"}</Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.18] mb-6 font-heading">
              {about.headingLine1 || "Building a Smarter,"}{" "}
              <span className="text-[#7C3AED]">{about.headingHighlight || "More Connected Future."}</span>
            </h2>

            <p className="text-base text-[#6F6A7C] leading-relaxed mb-6">
              {about.storyText ||
                "Cognirex Solutions brings together digital design, software development and intelligent technology to help businesses build a stronger online presence, connect with customers and simplify the way they work. We focus on practical solutions shaped around real needs."}
            </p>

            <p className="text-sm text-[#6F6A7C] leading-relaxed mb-8">
              Headquartered in Kolhapur, Maharashtra, we partner with clients across India and internationally, delivering enterprise-grade web applications, automated business pipelines, and autonomous AI systems that eliminate manual friction.
            </p>

            {/* Credibility Checklist */}
            <div className="space-y-3 w-full pt-4 border-t border-[#E5E1ED]">
              <div className="flex items-center gap-3 text-sm text-[#1F1B2E] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Direct collaboration with senior engineers &amp; architects</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1F1B2E] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Full repository &amp; intellectual property ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#1F1B2E] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Transparent architectural documentation &amp; clean schemas</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Anchoring Engineering Principles (Bento Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Principle 1 */}
            <div className="p-6 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED] hover:border-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-4 shadow-2xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2">
                Purposeful AI Integration
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                We implement AI and machine learning only where it adds measurable efficiency — automating repetitive workflows, answering queries, and structuring complex datasets.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-6 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED] hover:border-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-4 shadow-2xs">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2">
                Performance by Default
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                Every application is engineered for sub-second page loads, minimal DOM footprint, and rock-solid SEO architecture that outranks competitors.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-6 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED] hover:border-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-4 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2">
                Zero Vendor Lock-In
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                You own 100% of your source code, schemas, and configurations. We build on open industry standards like React, Next.js, and standard cloud APIs.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-6 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED] hover:border-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-4 shadow-2xs">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2">
                Architectural Longevity
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                Software built to endure. We emphasize strict typing, comprehensive schema validation, and modular architecture that easily scales as you expand.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Quote Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] bg-[#EEE8FA] px-2.5 py-1 rounded-md mb-3 inline-block">
              {about.missionBadge || "Our Mission"}
            </span>
            <h4 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
              {about.missionTitle || "Purposeful Problem Solving"}
            </h4>
            <p className="text-sm text-[#6F6A7C] leading-relaxed italic border-l-2 border-[#7C3AED] pl-3.5 my-2.5">
              &ldquo;{about.missionQuote}&rdquo;
            </p>
            <p className="text-xs text-[#6F6A7C] leading-relaxed">
              {about.missionSubtext}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-[#F8F7FC] border border-[#E5E1ED]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F1B2E] bg-[#FACC15]/30 px-2.5 py-1 rounded-md mb-3 inline-block">
              {about.visionBadge || "Our Vision"}
            </span>
            <h4 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
              {about.visionTitle || "Enduring Technology Partnership"}
            </h4>
            <p className="text-sm text-[#6F6A7C] leading-relaxed italic border-l-2 border-[#FACC15] pl-3.5 my-2.5">
              &ldquo;{about.visionQuote}&rdquo;
            </p>
            <p className="text-xs text-[#6F6A7C] leading-relaxed">
              {about.visionSubtext}
            </p>
          </div>
        </div>

        {/* Cinematic Callout Banner with Interactive WebOfConnections */}
        <div className="rounded-3xl bg-[#1F1B2E] text-white p-8 sm:p-14 text-center shadow-xl border border-[#37314A] relative overflow-hidden">
          <WebOfConnections side="left" className="w-1/2 md:w-5/12 z-0" />
          <WebOfConnections side="right" className="w-1/2 md:w-5/12 z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4B5FD] mb-3 block">
              {about.calloutEyebrow || "What We Build For You"}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug font-heading text-white mb-4">
              {about.calloutQuote || "We Don’t Just Write Code — We Engineer Extraordinary AI & Digital Solutions."}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#E2DCF0] leading-relaxed font-normal max-w-2xl mx-auto">
              {about.calloutDescription ||
                "From enterprise-grade web applications to autonomous AI workflows, we empower your business with intelligent technology built to scale your operations and turn ambitious ideas into reliable digital systems."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
