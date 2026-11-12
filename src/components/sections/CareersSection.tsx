"use client";

import React from "react";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import {
  Sparkles,
  Code2,
  Cpu,
  Palette,
  Workflow,
  CheckCircle2,
  Users2,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";
import { careerValues } from "@/data/careers";

const TALENT_PROFILES = [
  {
    title: "Full-Stack Web Engineers",
    skills: "Next.js, React 19, TypeScript, Tailwind CSS, Node.js",
    description: "Engineers who value component maintainability, sub-second performance, and clean type-safe architectures.",
    icon: Code2,
  },
  {
    title: "AI & Workflow Engineers",
    skills: "Python, RAG Pipelines, Vector Databases, LLM APIs, Webhooks",
    description: "Builders passionate about applying generative models and automated pipelines to real operational bottlenecks.",
    icon: Cpu,
  },
  {
    title: "Product & UI/UX Designers",
    skills: "Design Systems, WCAG AA Accessibility, Wireframing, Figma",
    description: "Designers focused on functional minimalism, clear typography, and delightful, friction-free user flows.",
    icon: Palette,
  },
  {
    title: "Systems & Cloud Architects",
    skills: "Edge Deployment (Cloudflare/Vercel), CI/CD, PostgreSQL, Redis",
    description: "Specialists in database reliability, security boundaries, and high-availability edge delivery.",
    icon: Workflow,
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Engineering Talent Network</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Bring Your Curiosity. Build What&apos;s Next.
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            We value engineers and designers who enjoy building thoughtful digital products, solving hard technical problems, and shipping software people can depend on every single day.
          </p>
        </div>

        {/* Talent Profiles Grid */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1F1B2E] font-heading">
              Engineering Disciplines We Value
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Whether you are an experienced architect or an ambitious junior engineer, we always welcome passionate problem solvers into our network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TALENT_PROFILES.map((profile) => {
              const IconComp = profile.icon;
              return (
                <div
                  key={profile.title}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#5B21B6]/30 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-1">
                      {profile.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#5B21B6] font-semibold mb-3">
                      {profile.skills}
                    </p>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Principles & Culture */}
        <div className="bg-[#EDE9FE]/30 border border-[#5B21B6]/20 rounded-3xl p-8 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-1 block">
              Culture &amp; Philosophy
            </span>
            <h2 className="text-2xl font-extrabold text-[#1F1B2E] font-heading">
              How We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerValues.slice(0, 3).map((val) => (
              <div key={val.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-xs">
                <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                  <span>{val.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#5B21B6]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#5B21B6]" />
              <span>Engineering Hub: Kolhapur, Maharashtra, India (Hybrid &amp; Remote flexibility)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5B21B6]" />
              <span>Collaborative team reviews &amp; direct mentorship</span>
            </div>
          </div>
        </div>

        {/* Embedded General Application Form */}
        <div id="career-form" className="max-w-[900px] mx-auto scroll-mt-24">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-1 block">
              Talent Network Intake
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading mb-2">
              Submit Your Expression of Interest
            </h2>
            <p className="text-sm text-[#64748B]">
              Share your background, portfolio or GitHub, and resume. Our engineering leads review every submission directly.
            </p>
          </div>

          <CareerApplicationForm />
        </div>
      </div>
    </section>
  );
}
