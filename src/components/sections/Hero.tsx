"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ProductHeroVisual from "@/components/hero/ProductHeroVisual";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-[#F8F7FC]"
      aria-label="Cognirex Solutions Hero"
    >
      {/* Background restrained ambient geometries */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[1240px] pointer-events-none -z-10">
        <div className="absolute -top-16 -left-12 w-72 h-72 rounded-full bg-[#EEE8FA]/70 blur-3xl" />
        <div className="absolute top-48 right-0 w-96 h-96 rounded-full bg-[#EEE8FA]/50 blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Positioning & Conversion-Focused Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1ED] text-xs font-semibold text-[#7C3AED] shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span>Modern Software &amp; AI Engineering Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-5 font-heading">
              Engineering Digital Experiences That{" "}
              <span className="text-[#7C3AED]">Move Businesses Forward.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6F6A7C] max-w-xl leading-relaxed mb-7">
              We build intelligent digital products, custom software applications, AI-powered workflows, and automation systems that help businesses operate smarter and scale faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-8">
              <Button href="/services" variant="yellow" size="lg" icon>
                Explore Our Solutions
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F1B2E] hover:text-[#7C3AED] px-4 py-3 rounded-xl border border-[#E5E1ED] hover:border-[#7C3AED]/40 bg-white shadow-xs transition-all"
              >
                <span>Discuss Your Project</span>
                <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
              </Link>
            </div>

            {/* Trust & Reassurance Badges */}
            <div className="pt-5 border-t border-[#E5E1ED] w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6F6A7C]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                <span>Modern React &amp; Next.js Architectures</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
                <span>NDA &amp; IP Protection Enforced</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-[#7C3AED]" />
                <span>Strict Core Web Vitals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Product-Led Interactive Mockup */}
          <div className="lg:col-span-5 w-full">
            <ProductHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
