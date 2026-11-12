"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PillarData {
  id: string;
  slug: string;
  title: string;
  shortLine: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  capabilities: string[];
}

const PILLARS: PillarData[] = [
  {
    id: "website-presence",
    slug: "website-development",
    title: "Website Development",
    shortLine: "High-Performance Digital Presence",
    description:
      "Modern, responsive web applications engineered with Next.js App Router and semantic HTML to articulate your value and capture client interest.",
    icon: Globe,
    capabilities: [
      "Sub-second initial page loads",
      "Mobile-first responsive architecture",
      "Accessible WCAG-compliant design",
      "Built-in JSON-LD SEO schema",
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    shortLine: "Digital Storefronts & Catalogs",
    description:
      "Frictionless online shopping experiences, multidimensional product catalogs, and secure payment pipelines built for high conversion velocity.",
    icon: ShoppingCart,
    capabilities: [
      "Instant faceted catalog filtering",
      "Optimized one-page checkout flows",
      "Stripe / Razorpay payment webhooks",
      "Inventory & order sync pipelines",
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software",
    shortLine: "Operational Dashboards & Portals",
    description:
      "Bespoke internal management platforms, executive KPI dashboards, and secure client portals designed around your exact operational workflows.",
    icon: Code2,
    capabilities: [
      "Centralized metrics & reporting",
      "Role-Based Access Control (RBAC)",
      "Automated department handoffs",
      "REST & GraphQL API microservices",
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    shortLine: "Grounded AI & Event Pipelines",
    description:
      "Domain-specific AI assistants, RAG knowledge retrieval systems, and event-driven automation pipelines with deterministic accuracy guardrails.",
    icon: Sparkles,
    capabilities: [
      "Grounded RAG knowledge retrieval",
      "Zero-hallucination guardrails",
      "Asynchronous webhook automation",
      "Automated lead triage & alerts",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="solutions"
      className="py-16 sm:py-24 bg-[#F8F7FC] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OUR CORE DISCIPLINES"
          title="Four Pillars of Modern Engineering"
          description="Everything your business needs to establish authority, automate manual toil, and deliver digital products that scale."
        />

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-subtle hover:shadow-card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EEE8FA] border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] mb-5 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7C3AED] group-hover:text-white shadow-xs">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] mb-2 block">
                    {pillar.shortLine}
                  </span>

                  <h3 className="font-heading font-extrabold text-xl text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#E5E1ED] mb-6">
                    {pillar.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#1F1B2E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/services/${pillar.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#F8F7FC] hover:bg-[#7C3AED] text-[#1F1B2E] hover:text-white text-xs font-bold transition-all group-hover:border-[#7C3AED]"
                  >
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-white border border-[#E5E1ED] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-[#1F1B2E]">
              Need a bespoke technical consultation?
            </h4>
            <p className="text-xs text-[#6F6A7C] mt-0.5">
              We review project specifications and advise on optimal architecture.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EEE8FA] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white text-xs font-bold transition-colors shrink-0"
          >
            <span>View Full Services Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
