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
  Cpu,
  Layers,
  Zap,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCmsContent } from "@/context/CmsContentContext";

export default function ServicesOverview() {
  const { content } = useCmsContent();
  const solutions = content.solutions;

  return (
    <section
      id="solutions"
      className="py-20 md:py-28 bg-[#F8F7FC] border-y border-[#E5E1ED] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge={solutions.badge || "WHAT WE DO"}
          title={solutions.title || "Engineering Solutions That Accelerate Your Business"}
          description={
            solutions.description ||
            "From your primary web presence to autonomous AI workflows and custom cloud applications, we design and build software that works reliably every day."
          }
        />

        {/* High-Craft Bento Grid Layout (Eliminates Card Fatigue) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
          {/* Bento Card 1: AI & Intelligent Automation (Signature Highlight - 7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-3xl p-8 sm:p-10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient violet corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EEE8FA]/90 to-transparent rounded-bl-full pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shadow-xs">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] bg-[#EEE8FA]/80 px-3 py-1 rounded-full border border-[#7C3AED]/20">
                  Intelligent Systems
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                AI &amp; Autonomous Workflows
              </h3>

              <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed mb-6 max-w-xl">
                We develop purpose-built AI agents, automated enquiry processors, and intelligent knowledge assistants that eliminate repetitive manual work and empower your team to operate faster.
              </p>

              {/* Interactive Pipeline Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Custom Conversational AI &amp; Support Agents</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Event-Driven Lead Routing &amp; Notifications</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Enterprise RAG &amp; Vector Document Search</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Automated Data Structuring &amp; Extraction</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#E5E1ED] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6F6A7C]">Deploy autonomous intelligence</span>
              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all"
              >
                <span>Discuss AI Strategy</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Modern Website & Digital Experience (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-3xl p-8 sm:p-10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shadow-xs">
                  <Globe className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                  Performance 100/100
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                Web &amp; Digital Experience
              </h3>

              <p className="text-sm text-[#6F6A7C] leading-relaxed mb-6">
                High-performance company websites and web applications engineered with Next.js 15, tailored design systems, and friction-free visitor pathways that convert.
              </p>

              <ul className="space-y-2.5 mb-6 text-xs text-[#1F1B2E]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Responsive, accessible mobile-first interfaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Sub-second page rendering &amp; dynamic SSR</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Built-in schema structured data for Google dominance</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E5E1ED] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6F6A7C]">Turn visitors into customers</span>
              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all"
              >
                <span>Build Website</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: E-Commerce & Ordering Platforms (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-3xl p-8 sm:p-10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shadow-xs">
                  <ShoppingCart className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-1 rounded-full border border-[#F59E0B]/20">
                  Commercial Hub
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                E-Commerce &amp; Storefronts
              </h3>

              <p className="text-sm text-[#6F6A7C] leading-relaxed mb-6">
                Expand beyond physical storefronts with modern shopping carts, structured product catalogs, secure payment gateways, and automated order fulfillment queues.
              </p>

              <ul className="space-y-2.5 mb-6 text-xs text-[#1F1B2E]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Seamless product browsing &amp; multi-attribute filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Secure UPI, Card &amp; Netbanking payment integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  <span>Automated invoice generation &amp; customer alerts</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E5E1ED] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6F6A7C]">Sell products everywhere</span>
              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all"
              >
                <span>Launch Store</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: Custom Enterprise Software & Cloud Portals (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-3xl p-8 sm:p-10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FACC15]/15 to-transparent rounded-bl-full pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shadow-xs">
                  <Code2 className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1F1B2E] bg-[#E5E1ED] px-3 py-1 rounded-full">
                  Tailored Software
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                Custom Software &amp; Cloud Systems
              </h3>

              <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed mb-6 max-w-xl">
                Bespoke internal dashboards, customer portals, and API backends configured to streamline complex business logic, eliminate data silos, and scale without maintenance headaches.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Operational Dashboards &amp; Real-Time Analytics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Role-Based Permissions &amp; Audit Logs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>High-Performance REST &amp; Webhook APIs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#1F1B2E] font-medium bg-[#F8F7FC] p-3 rounded-xl border border-[#E5E1ED]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Scalable MongoDB &amp; PostgreSQL Schemas</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-[#E5E1ED] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6F6A7C]">Simplify operations with tailored tooling</span>
              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#7C3AED] hover:text-[#6D28D9] group-hover:translate-x-1 transition-all"
              >
                <span>Engineer Software</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
