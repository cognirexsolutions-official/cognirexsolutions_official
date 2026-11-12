"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Globe2,
  Database,
  ArrowUpRight,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCmsContent } from "@/context/CmsContentContext";

export default function Hero() {
  const { content } = useCmsContent();
  const hero = content.hero;
  const [activeConsoleTab, setActiveConsoleTab] = useState<"ai" | "web" | "cloud">("ai");

  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F7FC] via-white to-[#F8F7FC] scroll-mt-20"
      aria-label="Cognirex Solutions Hero"
    >
      {/* Background ambient mesh glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#EEE8FA]/70 blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-[#C4B5FD]/30 blur-3xl" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#7C3AED]/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1ED] shadow-xs mb-6 text-xs font-semibold text-[#1F1B2E]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[#7C3AED] font-bold">Intelligence Engineered</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#6F6A7C]">Kolhapur, Maharashtra &amp; Global</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              {hero.headlineLine1}{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9061F9] to-[#6D28D9] bg-clip-text text-transparent">
                {hero.headlineHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6F6A7C] max-w-xl leading-relaxed mb-8">
              {hero.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <Button href="#solutions" variant="yellow" size="lg" icon>
                {hero.primaryCtaLabel || "Explore Capabilities"}
              </Button>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#1F1B2E] bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 hover:bg-[#F8F7FC] shadow-xs transition-all duration-200 group cursor-pointer"
              >
                <span>{hero.secondaryCtaLabel || "Schedule Consultation"}</span>
                <ChevronRight className="w-4 h-4 text-[#7C3AED] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Fast Proof / Value Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E1ED] w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#1F1B2E] font-heading">100%</div>
                <div className="text-xs text-[#6F6A7C] font-medium mt-0.5">Type-Safe Cloud</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#7C3AED] font-heading">&lt; 300ms</div>
                <div className="text-xs text-[#6F6A7C] font-medium mt-0.5">SSR Edge Latency</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#1F1B2E] font-heading">Direct</div>
                <div className="text-xs text-[#6F6A7C] font-medium mt-0.5">Architect Collaboration</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Studio Console Window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              {/* Decorative background glow behind console */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/20 to-[#A78BFA]/20 rounded-3xl blur-xl opacity-70 -z-10" />

              {/* Console Container */}
              <div className="bg-[#1F1B2E] text-white rounded-2xl border border-[#37314A] shadow-2xl overflow-hidden">
                {/* Window Header / Tab Bar */}
                <div className="bg-[#181524] px-4 py-3 border-b border-[#2C273E] flex items-center justify-between">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  </div>

                  {/* Studio Label */}
                  <span className="text-[11px] font-mono text-gray-400 font-medium">
                    cognirex-studio-engine.ts
                  </span>

                  {/* Live Pulse Indicator */}
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Console Switcher Tabs */}
                <div className="flex items-center border-b border-[#2C273E] bg-[#1B1829] px-2 pt-2 gap-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("ai")}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${
                      activeConsoleTab === "ai"
                        ? "bg-[#252038] text-white border-t-2 border-[#7C3AED]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    AI Pipeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("web")}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${
                      activeConsoleTab === "web"
                        ? "bg-[#252038] text-white border-t-2 border-[#7C3AED]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Web Architecture
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("cloud")}
                    className={`px-3 py-2 rounded-t-lg font-medium transition-all ${
                      activeConsoleTab === "cloud"
                        ? "bg-[#252038] text-white border-t-2 border-[#7C3AED]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Cloud &amp; APIs
                  </button>
                </div>

                {/* Tab 1: AI Automation Pipeline */}
                {activeConsoleTab === "ai" && (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 pb-2 border-b border-[#2C273E]">
                      <span className="font-mono">Autonomous Workflow Execution</span>
                      <span className="text-[#C4B5FD] font-mono">Status: Stream Ready</span>
                    </div>

                    {/* Step 1 */}
                    <div className="flex items-start gap-3 bg-[#26213B] p-3 rounded-xl border border-[#3D3558]">
                      <div className="w-7 h-7 rounded-lg bg-[#7C3AED]/30 text-[#C4B5FD] flex items-center justify-center shrink-0 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">1. Intelligent Query Ingestion</span>
                          <span className="text-[10px] text-emerald-400 font-mono">Validated</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">Extracts intent, context vectors &amp; parameters</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3 bg-[#26213B] p-3 rounded-xl border border-[#7C3AED]/40 shadow-inner">
                      <div className="w-7 h-7 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">2. Cognirex LLM Router</span>
                          <span className="text-[10px] text-[#A78BFA] font-mono animate-pulse">Processing</span>
                        </div>
                        <p className="text-[11px] text-gray-300 mt-0.5">RAG retrieval with enterprise vector store</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3 bg-[#26213B] p-3 rounded-xl border border-[#3D3558]">
                      <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">3. Automated Dispatch &amp; Action</span>
                          <span className="text-[10px] text-emerald-400 font-mono">Dispatched</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">Dispatches notifications, updates DB, sends reply</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Web Architecture */}
                {activeConsoleTab === "web" && (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 pb-2 border-b border-[#2C273E]">
                      <span className="font-mono">Production Performance Audit</span>
                      <span className="text-emerald-400 font-mono">Lighthouse: 100/100</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#26213B] p-3.5 rounded-xl border border-[#3D3558]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1">Framework</span>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Globe2 className="w-4 h-4 text-[#7C3AED]" />
                          <span>Next.js 15 SSR</span>
                        </div>
                      </div>
                      <div className="bg-[#26213B] p-3.5 rounded-xl border border-[#3D3558]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1">Styling</span>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Code2 className="w-4 h-4 text-[#FACC15]" />
                          <span>Tailwind v3.4</span>
                        </div>
                      </div>
                      <div className="bg-[#26213B] p-3.5 rounded-xl border border-[#3D3558]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1">Core Web Vitals</span>
                        <div className="text-sm font-bold text-emerald-400">All Metrics Green</div>
                      </div>
                      <div className="bg-[#26213B] p-3.5 rounded-xl border border-[#3D3558]">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1">Security</span>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#A78BFA]" />
                          <span>CSP &amp; HTTPS</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-400 leading-relaxed font-mono pt-1">
                      Architecture configured for instant page transitions, zero layout shifts, and search engine dominance.
                    </p>
                  </div>
                )}

                {/* Tab 3: Cloud & APIs */}
                {activeConsoleTab === "cloud" && (
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 pb-2 border-b border-[#2C273E]">
                      <span className="font-mono">Serverless &amp; Cloud Infra</span>
                      <span className="text-emerald-400 font-mono">Uptime: 99.98%</span>
                    </div>

                    <div className="bg-[#26213B] p-3.5 rounded-xl border border-[#3D3558] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-mono">POST /api/contact</span>
                        <span className="text-emerald-400 font-mono">200 OK (82ms)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-mono">POST /api/meetings</span>
                        <span className="text-emerald-400 font-mono">201 CREATED (110ms)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300 font-mono">GET /api/public/content</span>
                        <span className="text-[#C4B5FD] font-mono">EDGE CACHED (12ms)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-300 pt-1">
                      <Database className="w-4 h-4 text-[#7C3AED]" />
                      <span>Encrypted at Rest &amp; Transit with Automated Backups</span>
                    </div>
                  </div>
                )}

                {/* Console Footer */}
                <div className="px-5 py-3 bg-[#181524] border-t border-[#2C273E] flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Ready to discuss your stack?</span>
                  <Link
                    href="#contact"
                    className="text-[#C4B5FD] hover:text-white font-semibold inline-flex items-center gap-1 group transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Ticker / Capability Ecosystem */}
        <div className="mt-14 pt-8 border-t border-[#E5E1ED]">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#6F6A7C] mb-6">
            Technologies &amp; Architecture Standards We Build With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#1F1B2E]">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">Next.js 15 &amp; React 19</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">TypeScript (Strict)</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs text-[#7C3AED] font-bold">Agentic AI &amp; LLMs</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">Tailwind CSS</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">REST &amp; GraphQL APIs</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">MongoDB &amp; PostgreSQL</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E1ED] shadow-xs">Serverless &amp; Cloudflare Workers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
