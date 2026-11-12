import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  Sparkles,
  Target,
  Award,
  Users2,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — Engineering Philosophy & Capabilities",
  description:
    "Learn about Cognirex Solutions: our engineering philosophy, mission, core values, multidisciplinary capabilities, and technical delivery methodology based in Kolhapur, Maharashtra.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cognirex Solutions — Engineering Philosophy & Capabilities",
    description:
      "A modern software engineering consultancy shaping intelligent digital products, custom software, and AI automation systems.",
    url: "https://cognirexsolutions.in/about",
    images: ["/images/logo_main.png"],
  },
};

export default function AboutPage() {
  const values = [
    {
      name: "Engineering Precision",
      desc: "We write clean, typed, modular code designed for long-term maintainability rather than quick, fragile shortcuts.",
      icon: Code2,
    },
    {
      name: "Radical Transparency",
      desc: "Open, honest architectural recommendations, truthful feasibility assessments, and direct engineer-to-client communication.",
      icon: ShieldCheck,
    },
    {
      name: "Pragmatic Innovation",
      desc: "Applying artificial intelligence and modern tooling where it generates genuine commercial value, not for superficial hype.",
      icon: Lightbulb,
    },
    {
      name: "Human-Centric Design",
      desc: "Software is only as good as the ease with which people can use it. We craft interfaces that eliminate friction.",
      icon: Users2,
    },
    {
      name: "Continuous Evolution",
      desc: "Staying ahead of computational paradigms, edge runtimes, vector architectures, and modern web standards.",
      icon: BookOpen,
    },
    {
      name: "Commercial Longevity",
      desc: "We measure our success by the operational efficiency, customer satisfaction, and commercial resilience we build for clients.",
      icon: Target,
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Needs Assessment",
      desc: "We unpack your operational workflows, user expectations, and technical bottlenecks before proposing solutions.",
    },
    {
      step: "02",
      title: "Architecture & Systems Design",
      desc: "Specifying data schemas, security boundaries, API contracts, and component systems before writing code.",
    },
    {
      step: "03",
      title: "Iterative Sprint Development",
      desc: "Building clean full-stack modules with TypeScript, accessible UI components, and continuous staging reviews.",
    },
    {
      step: "04",
      title: "Quality, Performance & Security Audit",
      desc: "Rigorous cross-browser verification, Core Web Vitals optimization, and rate limiting validation.",
    },
    {
      step: "05",
      title: "Deployment & Evolution",
      desc: "Zero-downtime production launch on high-speed edge infrastructure with monitoring and operational handover.",
    },
  ];

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
              <li className="text-[#5B21B6] font-semibold" aria-current="page">
                About Cognirex
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Cognirex Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              Engineering Digital Experiences That Move Businesses Forward.
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-8">
              Cognirex Solutions is a modern technology and software engineering consultancy. We design and build clean web applications, custom business tools, and practical artificial intelligence solutions that help organizations work smarter, connect with more customers, and scale sustainably.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="yellow" size="lg">
                Discuss Your Project
              </Button>
              <Button href="/services" variant="purple-outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-3 block">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading mb-4">
                  Purposeful Problem Solving
                </h2>
                <p className="text-base text-[#64748B] leading-relaxed mb-6">
                  &ldquo;To create meaningful, practical, and intelligent technology solutions that help solve real-world operational challenges.&rdquo;
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  We believe technology creates lasting value when it removes friction from daily work, speeds up human decision-making, and provides dependable business longevity rather than unnecessary complexity.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#5B21B6]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pragmatic architectures over fragile shortcuts</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 shadow-subtle flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-3 block">
                  Our Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading mb-4">
                  Enduring Technology Partnership
                </h2>
                <p className="text-base text-[#64748B] leading-relaxed mb-6">
                  &ldquo;To grow as a trusted technology partner through continuous innovation, engineering excellence, and valuable digital experiences.&rdquo;
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  We aim to be recognized internationally for the clarity of our advice, the maintainability of our software systems, and our dependable execution under complex operational constraints.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#5B21B6]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Long-term collaborative partnerships worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Values That Anchor Our Engineering
            </h2>
            <p className="text-base text-[#64748B]">
              The foundational convictions that guide our architecture choices, client interactions, and quality standards every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div
                  key={v.name}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#5B21B6]/30 rounded-2xl p-6 sm:p-7 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
                    {v.name}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Methodology Timeline */}
      <section id="process" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Our 5-Stage Development Methodology
            </h2>
            <p className="text-base text-[#64748B]">
              A disciplined, predictable framework ensuring every digital product is delivered on time, within budget, and built to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 relative flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-mono font-bold text-xs text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded-md inline-block mb-3">
                    STAGE {m.step}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2 leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Hub & Corporate Location */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
                Engineering Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
                Operating from India, Partnering Globally
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                Cognirex Solutions is based in Kolhapur, Maharashtra, India. We leverage modern asynchronous collaboration, structured sprint reviews, and overlapping working windows to support clients across India, North America, Europe, and the Middle East.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-[#1F1B2E]">
                  <MapPin className="w-5 h-5 text-[#5B21B6] shrink-0 mt-0.5" />
                  <div>
                    <strong>Headquarters:</strong> Kolhapur, Maharashtra, India
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#1F1B2E]">
                  <Clock className="w-5 h-5 text-[#5B21B6] shrink-0 mt-0.5" />
                  <div>
                    <strong>Operating Hours:</strong> Monday–Friday, 9:30 AM–6:30 PM IST (Online video scheduling across timezones)
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="yellow" size="md">
                Schedule an Introduction &rarr;
              </Button>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#EDE9FE]/40 border border-[#5B21B6]/20 rounded-3xl p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#5B21B6] border border-[#E2E8F0] mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality &amp; Confidentiality Guarantee</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1F1B2E] mb-3">
                  Enterprise-Grade Delivery Standards
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Every project we undertake is governed by strict intellectual property protection, comprehensive non-disclosure terms, and clean version-controlled repository handovers. You retain 100% ownership of your codebase and infrastructure.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#5B21B6]/10 text-xs font-semibold text-[#1F1B2E]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                    <span>Full Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                    <span>Mutual NDA Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                    <span>Zero Vendor Lock-In</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B21B6]" />
                    <span>Direct Senior Engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-[#F5F3FF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
            Have an Idea? Let&apos;s Engineer It.
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Tell us what you want to build. Let&apos;s explore the right technology and engineering approach for your business.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
