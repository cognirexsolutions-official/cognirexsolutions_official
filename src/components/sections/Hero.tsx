"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  CheckCircle2,
  Workflow,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-white border-b border-[#E2E8F0]"
      aria-label="Cognirex Solutions Hero"
    >
      {/* Subtle ambient lavender aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#EDE9FE]/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#F5F3FF] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#5B21B6]/15 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software Engineering &amp; AI Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.10] mb-6 font-heading">
              Engineering Digital Experiences That Move Businesses{" "}
              <span className="text-[#5B21B6]">Forward.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#64748B] max-w-xl leading-relaxed mb-8">
              We build intelligent digital products, custom software, AI-powered solutions, and automation systems that help businesses operate smarter and scale faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <Button href="/services" variant="yellow" size="lg" icon>
                Explore Our Solutions
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Discuss Your Project
              </Button>
            </div>

            {/* Verified Corporate Badges */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#64748B] pt-4 border-t border-[#F1F5F9] w-full max-w-lg">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                <span>Production Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5B21B6]" />
                <span>Full Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#5B21B6]" />
                <span>Modern Edge Runtimes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Product-Led Visual Composition (No Stock Office Photos) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[460px] w-full">
              {/* Decorative Accent Background Box */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl bg-[#EDE9FE] -z-10" />

              {/* Main Product Canvas: Operational Software Dashboard Mockup */}
              <div className="bg-[#0F172A] border border-[#334155] rounded-3xl p-5 shadow-2xl text-white">
                {/* Mock Window Controls Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 text-[10px] font-mono text-[#94A3B8]">
                      cognirex-dashboard.internal
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Live System: Active
                  </span>
                </div>

                {/* Dashboard Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155]/60">
                    <div className="text-[10px] font-mono uppercase text-[#94A3B8] mb-1">
                      Event Pipeline
                    </div>
                    <div className="text-xl font-bold font-heading text-white">
                      100%
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span>Sub-second edge delivery</span>
                    </div>
                  </div>

                  <div className="bg-[#1E293B] p-3 rounded-xl border border-[#334155]/60">
                    <div className="text-[10px] font-mono uppercase text-[#94A3B8] mb-1">
                      AI Assist Latency
                    </div>
                    <div className="text-xl font-bold font-heading text-[#C4B5FD]">
                      240ms
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span>RAG vector search</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Connected Components / Architecture Layer */}
                <div className="bg-[#1E293B]/70 p-3.5 rounded-xl border border-[#334155]/60 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#E2E8F0] font-semibold flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#A78BFA]" />
                      <span>Next.js App Core</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      Optimized SSR
                    </span>
                  </div>

                  <div className="w-full bg-[#0F172A] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#5B21B6] h-1.5 rounded-full w-4/5" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8] pt-1">
                    <span>DB: PostgreSQL / Mongo</span>
                    <span>Edge: Cloudflare</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Interactive AI Assistant Preview Widget */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-xl max-w-[280px] sm:max-w-[300px]">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1F1B2E] block leading-tight">
                      Intelligent Assistant
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      Context Bounded • Zero Hallucination
                    </span>
                  </div>
                </div>
                <div className="text-xs bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E2E8F0] text-[#1F1B2E] leading-snug">
                  &ldquo;Customer query analyzed. Verified specs retrieved from catalog. Quotation prepared.&rdquo;
                </div>
              </div>

              {/* Floating Element 2: Automated Pipeline Status Pill */}
              <div className="absolute -top-5 -right-4 bg-white border border-[#E2E8F0] rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#5B21B6] animate-pulse" />
                <span className="text-xs font-bold text-[#1F1B2E]">
                  Webhook Pipeline: Automated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
