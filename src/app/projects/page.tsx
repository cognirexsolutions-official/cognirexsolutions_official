import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
} from "lucide-react";
import { conceptProjects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Featured Projects & Interactive Concept Demonstrations | Cognirex Solutions",
  description:
    "Explore our interactive engineering concept demonstrations showcasing custom web applications, e-commerce storefronts, business dashboards, and grounded AI assistant workflows.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Featured Projects & Interactive Concept Demonstrations | Cognirex Solutions",
    description:
      "Explore our interactive engineering concept demonstrations showcasing custom web applications, e-commerce storefronts, business dashboards, and grounded AI assistant workflows.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPortfolioPage() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E1ED]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3.5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-[#6F6A7C]">
              <li>
                <Link href="/" className="hover:text-[#7C3AED] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#A78BFA]" />
              </li>
              <li className="font-semibold text-[#1F1B2E]" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E5E1ED] text-center">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEE8FA] text-[#7C3AED] border border-[#7C3AED]/20 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO &amp; DEMONSTRATIONS</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-5 font-heading">
            Engineering Made Tangible
          </h1>
          <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed max-w-2xl mx-auto">
            We believe the fastest way to validate architectural capability is through working code. Explore our interactive concept demonstrations below, complete with technical breakdowns and technology stack specifications.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {conceptProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-2xl overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Preview with Concept Tag */}
                <div className="p-2.5 bg-white">
                  <div className="relative h-48 w-full bg-[#EEE8FA] overflow-hidden rounded-xl border border-[#E5E1ED]">
                    <Image
                      src={project.image}
                      alt={`${project.title} demonstration`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-[#1F1B2E]/35 transition-opacity group-hover:bg-[#1F1B2E]/15" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#7C3AED] px-2.5 py-1 rounded-full shadow-xs">
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-xs font-semibold drop-shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E5E1ED]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-[#F8F7FC] text-[#1F1B2E] border border-[#E5E1ED] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-[#E5E1ED] flex items-center justify-between mt-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] group-hover:text-[#5B21B6] transition-colors"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/contact?service=${encodeURIComponent(project.category)}`}
                  className="text-xs font-semibold text-[#6F6A7C] hover:text-[#1F1B2E] transition-colors"
                >
                  Build Similar &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-14 sm:py-20 bg-[#1F1B2E] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
            Have a Specific Project Scope in Mind?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            We provide structured technical feasibility assessments, architectural roadmaps, and clear milestone estimates.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg" icon>
              Start a Project Conversation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
