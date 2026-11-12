"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Architecture",
    shortDesc:
      "Deep dive into business objectives, existing system constraints, data workflows, and system architecture planning.",
    icon: Compass,
    deliverables: ["Architecture Blueprint", "Technical Specification", "Milestone Roadmap"],
  },
  {
    number: "02",
    title: "UI/UX Prototyping",
    shortDesc:
      "Designing accessible, user-centric interfaces with comprehensive design systems, component libraries, and interactive flows.",
    icon: Layout,
    deliverables: ["Component Design System", "Interactive Prototype", "Accessibility Review"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    shortDesc:
      "Writing clean, modular, type-safe code using modern frameworks, scalable microservices, and robust API endpoints.",
    icon: Code2,
    deliverables: ["Production Codebase", "API Documentation", "Version Control History"],
  },
  {
    number: "04",
    title: "Quality Assurance & Performance",
    shortDesc:
      "Rigorous unit, integration, and security testing alongside Core Web Vitals optimization and multi-device verification.",
    icon: CheckCircle2,
    deliverables: ["Automated Test Suite", "Lighthouse 95+ Audit", "Security & Load Report"],
  },
  {
    number: "05",
    title: "Deployment & Evolution",
    shortDesc:
      "Zero-downtime production deployment on global edge infrastructure, backed by continuous monitoring and iterative growth.",
    icon: Rocket,
    deliverables: ["Edge CDN Deployment", "CI/CD Automation", "Maintenance Runbook"],
  },
];

export default function ApproachProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="approach"
      aria-label="Our Process — Cognirex Solutions"
      className="py-20 md:py-28 bg-[#FAFAFC] border-b border-[#E5E1ED] scroll-mt-20 relative overflow-hidden"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F3FF]/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] mb-4 shadow-xs">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-5 font-heading">
            A Structured, Disciplined Engineering Process
          </h2>
          <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed max-w-2xl mx-auto">
            From initial discovery through deployment and long-term evolution, we adhere to a transparent, milestone-driven software development lifecycle.
          </p>
        </div>

        {/* ====================================================================
            DESKTOP HORIZONTAL TIMELINE (>= lg)
           ================================================================== */}
        <div className="hidden lg:block">
          {/* Step Progress Track */}
          <div className="relative mb-12">
            <div
              className="absolute top-6 left-12 right-12 h-0.5 bg-[#E5E1ED] -z-0"
              aria-hidden="true"
            />
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B21B6] rounded-xl p-2 transition-all"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 mb-3 shadow-xs ${
                        isSelected
                          ? "bg-[#5B21B6] text-white ring-4 ring-[#EDE9FE] shadow-[0_4px_16px_rgba(91,33,182,0.3)] scale-110"
                          : "bg-white text-[#5B21B6] border-2 border-[#E5E1ED] group-hover:border-[#5B21B6] group-hover:text-[#5B21B6]"
                      }`}
                    >
                      {step.number}
                    </div>

                    <span
                      className={`text-sm font-semibold tracking-tight transition-colors ${
                        isSelected ? "text-[#5B21B6]" : "text-[#1F1B2E] group-hover:text-[#5B21B6]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid Showing All 5 Stages */}
          <div className="grid grid-cols-5 gap-4 mb-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#5B21B6] shadow-[0_12px_30px_rgba(91,33,182,0.12)] -translate-y-1.5 ring-1 ring-[#5B21B6]"
                      : "bg-white/80 border-[#E5E1ED] hover:border-[#C4B5FD] hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#F5F3FF] text-[#5B21B6] border border-[#DDD6FE]">
                        STEP {step.number}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-[#EDE9FE] text-[#5B21B6]" : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#6F6A7C] leading-relaxed mb-4">
                      {step.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B21B6] mb-2 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Key Deliverables
                    </div>
                    <ul className="space-y-1 text-xs text-[#4B4657]">
                      {step.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] leading-tight">
                          <span className="text-[#5B21B6] font-bold mt-0.5">&bull;</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================================
            MOBILE & TABLET CONNECTED VERTICAL TIMELINE (< lg)
           ================================================================== */}
        <div className="lg:hidden relative pl-6 sm:pl-8">
          {/* Vertical Connecting Track */}
          <div
            className="absolute left-3.5 sm:left-4 top-4 bottom-4 w-0.5 bg-[#E5E1ED] -z-0"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative group">
                  {/* Step Node Marker */}
                  <div className="absolute -left-[30px] sm:-left-[34px] top-1 w-9 h-9 rounded-full bg-white border-2 border-[#5B21B6] text-[#5B21B6] flex items-center justify-center text-xs font-bold shadow-xs z-10">
                    {step.number}
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#E5E1ED] shadow-sm hover:border-[#5B21B6] transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-md bg-[#F5F3FF] text-[#5B21B6]">
                        STAGE {step.number}
                      </span>
                      <Icon className="w-4 h-4 text-[#5B21B6]" />
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6F6A7C] leading-relaxed mb-4">
                      {step.shortDesc}
                    </p>

                    <div className="pt-3 border-t border-[#F0EDF6]">
                      <div className="text-xs font-semibold text-[#5B21B6] mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Deliverables &amp; Outcomes
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {step.deliverables.map((deliv, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#F5F3FF] text-[#4B4657] border border-[#DDD6FE]"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process CTA Footer Note */}
        <div className="mt-12 text-center pt-8 border-t border-[#E5E1ED]">
          <p className="text-sm text-[#6F6A7C] mb-4">
            Looking for an engineering team that aligns with your timeline and standards?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B21B6] hover:text-[#6D28D9] group"
          >
            <span>Learn how we tailor our workflow to your requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}