"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
  ArrowRight,
  Target,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CompanyPositioning() {
  const pillars = [
    {
      title: "Who We Are",
      text: "A focused software engineering and technology consultancy headquartered in Kolhapur, Maharashtra, partnering with clients across India and internationally.",
    },
    {
      title: "What We Build",
      text: "High-performance websites, custom e-commerce storefronts, internal operational management tools, and practical artificial intelligence automation pipelines.",
    },
    {
      title: "Who We Serve",
      text: "Growing enterprises, industrial manufacturers, retail brands, healthcare providers, and forward-thinking businesses ready to scale their digital operations.",
    },
    {
      title: "Problems We Solve",
      text: "Eliminating fragile spreadsheets, replacing slow bloated templates, connecting fragmented tools, and establishing dependable digital channels for customer acquisition.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Company Positioning</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Pragmatic Engineering Grounded in Business Reality.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We don&apos;t build technology for the sake of buzzwords. We partner with ambitious organizations to engineer dependable software architectures that solve acute operational friction and unlock measurable commercial growth.
          </p>
        </div>

        {/* 4 Positioning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] font-bold text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-0.5 rounded inline-block mb-3">
                  0{index + 1}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="bg-white border border-[#5B21B6]/20 rounded-3xl p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-1.5 block">
              Our Engineering Philosophy
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1F1B2E] mb-2">
              Clean Architectures, Full Code Ownership &amp; Zero Lock-In
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Every deliverable is written with standard TypeScript, modular frameworks, and comprehensive documentation. You retain 100% intellectual property ownership of your codebase, data models, and deployment infrastructure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button href="/about" variant="outline" size="md">
              Learn More About Cognirex
            </Button>
            <Button href="/contact" variant="yellow" size="md">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

