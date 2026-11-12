import React from "react";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function TrustPositioning() {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#E5E1ED] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Positioning Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Mission & Who We Serve */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">
              Our Positioning
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] tracking-tight font-heading leading-tight">
              Technology Engineered for Longevity, Not Temporary Quick Fixes.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed">
              Cognirex Solutions partners with ambitious founders, established businesses, and growing teams. We transform manual operational friction into resilient web applications, streamlined storefronts, and automated workflows.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] hover:text-[#5B21B6] transition-colors"
              >
                <span>Read Our Engineering Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Pillar Value Drivers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-[#F8F7FC] border border-[#E5E1ED] rounded-2xl p-5 hover:border-[#7C3AED]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-3.5 shadow-xs">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1F1B2E] mb-1.5 font-heading">
                Clean Architecture
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                Type-safe TypeScript, modern Next.js patterns, and decoupled APIs ensure codebases remain maintainable for years.
              </p>
            </div>

            <div className="bg-[#F8F7FC] border border-[#E5E1ED] rounded-2xl p-5 hover:border-[#7C3AED]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-3.5 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1F1B2E] mb-1.5 font-heading">
                Grounded AI
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                RAG and boundary prompt systems that guarantee 100% grounded answers from verified company documentation.
              </p>
            </div>

            <div className="bg-[#F8F7FC] border border-[#E5E1ED] rounded-2xl p-5 hover:border-[#7C3AED]/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-3.5 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1F1B2E] mb-1.5 font-heading">
                Outcome-Focused
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed">
                Every line of code and user journey is engineered to drive customer conversion, reduce manual toil, and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

