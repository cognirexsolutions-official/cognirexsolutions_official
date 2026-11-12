import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
  Clock,
} from "lucide-react";
import { detailedProjectsData } from "@/data/detailedProjects";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = detailedProjectsData[resolvedParams.slug];

  if (!project) {
    return {
      title: "Project Not Found — Cognirex Solutions",
    };
  }

  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: `${project.title} | Case Study | Cognirex Solutions`,
    description: project.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Case Study | Cognirex Solutions`,
      description: project.shortDescription,
      url: canonicalUrl,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = detailedProjectsData[resolvedParams.slug];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#F8F7FC]">
        <h1 className="text-2xl font-bold font-heading text-[#1F1B2E] mb-3">Project Demonstration Not Found</h1>
        <p className="text-sm text-[#6F6A7C] mb-6">The requested project demonstration could not be located.</p>
        <Button href="/projects" variant="yellow" size="md">
          Back to Projects Portfolio
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      {/* Breadcrumb Navigation */}
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
              <li>
                <Link href="/projects" className="hover:text-[#7C3AED] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#A78BFA]" />
              </li>
              <li className="font-semibold text-[#1F1B2E]" aria-current="page">
                {project.category}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5E1ED]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#EEE8FA] text-[#7C3AED] px-3 py-1 rounded-full border border-[#7C3AED]/20">
                {project.badge}
              </span>
              <span className="text-xs font-semibold text-[#6F6A7C]">
                Category: {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-5 font-heading">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed mb-8">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={project.demoAvailability.ctaHref} variant="yellow" size="lg" icon>
                {project.demoAvailability.label}
              </Button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[#E5E1ED] bg-white hover:border-[#7C3AED] text-sm font-semibold text-[#1F1B2E] hover:text-[#7C3AED] transition-all"
              >
                <span>All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Architecture Grid */}
      <section className="py-14 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Deep Dive Narrative */}
          <div className="lg:col-span-8 space-y-10">
            {/* Project Image Banner */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#E5E1ED] shadow-sm bg-[#EEE8FA]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B2E]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider font-bold bg-[#7C3AED] px-3 py-1 rounded-md shadow-xs">
                  {project.category} Architecture
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white border border-[#E5E1ED] rounded-2xl p-7 sm:p-9 shadow-subtle space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#1F1B2E]">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-rose-200/80 rounded-2xl p-6 sm:p-7 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
                  The Problem
                </span>
                <p className="text-xs sm:text-sm text-[#1F1B2E] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-white border border-emerald-200/80 rounded-2xl p-6 sm:p-7 shadow-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">
                  The Solution
                </span>
                <p className="text-xs sm:text-sm text-[#1F1B2E] leading-relaxed">
                  {project.solutionBreakdown}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white border border-[#E5E1ED] rounded-2xl p-7 sm:p-9 shadow-subtle space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#1F1B2E]">
                Architectural Features &amp; Capabilities
              </h3>
              <div className="space-y-3 pt-2">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F1B2E]">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Architecture Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E5E1ED] rounded-2xl p-6 shadow-subtle space-y-5">
              <div className="flex items-center gap-2 border-b border-[#E5E1ED] pb-3">
                <Code2 className="w-5 h-5 text-[#7C3AED]" />
                <h3 className="font-heading font-bold text-base text-[#1F1B2E]">
                  Technology Stack
                </h3>
              </div>

              <div className="space-y-4">
                {project.techStack.map((group, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#6F6A7C]">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold bg-[#EEE8FA] text-[#7C3AED] px-2.5 py-1 rounded-lg border border-[#7C3AED]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Summary Box */}
            <div className="bg-[#1F1B2E] text-white border border-[#3A3356] rounded-2xl p-6 shadow-subtle space-y-3">
              <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Deployment Strategy</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-white border border-[#E5E1ED] rounded-2xl p-6 text-center shadow-subtle space-y-3">
              <h4 className="font-heading font-bold text-sm text-[#1F1B2E]">
                Need Similar Architecture?
              </h4>
              <p className="text-xs text-[#6F6A7C]">
                We can architect and ship a tailored version aligned with your company goals.
              </p>
              <Button href={project.demoAvailability.ctaHref} variant="yellow" size="md" className="w-full">
                Start Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-14 sm:py-20 bg-[#1F1B2E] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
            Ready to Discuss Your Project Requirements?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Tell us about your timeline, business goals, and target functionality.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg" icon>
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

