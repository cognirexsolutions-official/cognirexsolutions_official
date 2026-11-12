"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Top 3 distinct flagship concept projects (Web, AI, Software)
const FEATURED_PROJECTS = [
  {
    id: "ai-assistant-demo",
    title: "AI Support & Knowledge Assistant",
    category: "AI & Automation",
    badge: "Concept Prototype",
    description:
      "Conversational assistant with custom knowledge retrieval, smart routing, and human-in-the-loop escalation.",
    tags: ["Generative AI", "RAG Pipeline", "Smart Search"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    href: "/contact?service=AI+%26+Automation",
  },
  {
    id: "business-website-demo",
    title: "Modern Brand Experience & Hub",
    category: "Web & Digital",
    badge: "Concept Prototype",
    description:
      "High-speed, responsive web application engineered for brand credibility, SEO performance, and high conversion.",
    tags: ["Next.js", "Tailwind CSS", "SEO Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/contact?service=Website+%26+Digital+Presence",
  },
  {
    id: "business-dashboard-demo",
    title: "Operations & Analytics Dashboard",
    category: "Custom Software",
    badge: "Concept Prototype",
    description:
      "Real-time operational dashboard for tracking customer requests, workflow queues, and business telemetry.",
    tags: ["Custom Software", "Data Analytics", "Cloud APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    href: "/contact?service=Custom+Software+%26+Applications",
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-14 sm:py-18 bg-white border-b border-[#E5E1ED] relative scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="FEATURED CONCEPTS"
          title="Selected Work & Prototypes"
          description="A concise preview of the modern websites, cloud applications, and AI systems we engineer."
        />

        {/* Compact 3-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="bg-[#F8F7FC] border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Media Preview */}
              <div className="p-2.5">
                <div className="relative h-44 w-full bg-[#EEE8FA] overflow-hidden rounded-xl border border-[#E5E1ED]">
                  <Image
                    src={item.image}
                    alt={`${item.title} demonstration`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B2E]/60 via-[#1F1B2E]/15 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7C3AED] px-2.5 py-0.5 rounded-full shadow-xs backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Category */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold drop-shadow-sm">
                      {item.category}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Compact Tag Pills */}
                <div className="pt-3 border-t border-[#E5E1ED]/70 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#4E4761] bg-white border border-[#E5E1ED] px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
