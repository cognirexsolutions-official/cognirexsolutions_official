import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Home,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { conceptProjects, ProjectDetailData } from "@/data/projects";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return conceptProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = conceptProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Concept Demonstration`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Technical Demonstration`,
      description: project.summary,
      url: `https://cognirexsolutions.in/projects/${project.slug}`,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = conceptProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = conceptProjects.findIndex((p) => p.slug === slug);
  const nextProject = conceptProjects[(currentIndex + 1) % conceptProjects.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 hover:text-[#5B21B6] transition-colors font-medium"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#5B21B6] transition-colors font-medium"
                >
                  Projects
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </li>
              <li className="text-[#5B21B6] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {project.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.badge}</span>
              </span>
              <span className="text-xs font-mono font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="yellow" size="lg">
                Discuss Similar Project
              </Button>
              <Button href={`/services/${project.relatedServiceSlug}`} variant="outline" size="lg">
                Explore {project.relatedServiceName}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Preview Poster & Tech Badges */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] max-h-[560px] border border-[#E2E8F0] shadow-card bg-[#0F172A] mb-8">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C4B5FD] block mb-1">
                  Architecture &amp; Interface Preview
                </span>
                <span className="font-heading font-bold text-lg sm:text-xl text-white">
                  {project.title}
                </span>
              </div>
              <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Tech Stack Strip */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2">
              Technology Stack:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold bg-[#F8FAFC] text-[#5B21B6] border border-[#E2E8F0] px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive: Problem vs Solution */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Problem */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
                  The Problem Statement
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* The Proposed Solution */}
            <div className="bg-[#EDE9FE]/30 border border-[#5B21B6]/20 rounded-3xl p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
                  The Engineered Solution
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#1F1B2E] leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach & Architecture Flow */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              System Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Technical Approach &amp; Architecture
            </h2>
            <p className="text-base text-[#64748B]">
              {project.technicalApproach}
            </p>
          </div>

          {/* Architecture Box */}
          <div className="bg-[#1F1B2E] text-white rounded-3xl p-8 sm:p-10 border border-[#332D48] mb-12 shadow-subtle">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[#A78BFA]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C4B5FD]">
                Architecture Pipeline
              </span>
            </div>
            <p className="font-mono text-sm sm:text-base text-gray-200 leading-relaxed bg-[#2A243D] p-5 rounded-2xl border border-[#3E3659]">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="font-heading font-bold text-xl text-[#1F1B2E] mb-6">
              Core Capabilities Demonstrated
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#5B21B6] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1F1B2E] font-medium leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Carousel Navigation */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#5B21B6] transition-colors"
          >
            &larr; Back to All Demonstrations
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B21B6] hover:underline"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-[#F5F3FF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
            Need an Architecture Like This?
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Tell us about your project requirements. Let&apos;s engineer a tailored solution that fits your exact workflow and business goals.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

