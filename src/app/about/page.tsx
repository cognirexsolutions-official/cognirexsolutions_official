import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Users2,
  BookOpen,
  Target,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Engineering Philosophy & Purpose | Cognirex Solutions",
  description:
    "Learn about Cognirex Solutions, our engineering philosophy, mission, vision, core architectural values, and our headquarters in Kolhapur, Maharashtra.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us | Engineering Philosophy & Purpose | Cognirex Solutions",
    description:
      "Learn about Cognirex Solutions, our engineering philosophy, mission, vision, core architectural values, and our headquarters in Kolhapur, Maharashtra.",
    url: `${siteConfig.url}/about`,
  },
};

const VALUES = [
  {
    name: "Engineering Excellence",
    desc: "Uncompromising standards in code maintainability, type safety, test coverage, and systems reliability.",
    icon: Award,
  },
  {
    name: "Grounded Innovation",
    desc: "Adopting AI and computational advances that deliver verified business ROI rather than chasing hype.",
    icon: Sparkles,
  },
  {
    name: "Absolute Transparency",
    desc: "Providing straightforward architectural advice, realistic timelines, and clear technical roadmaps.",
    icon: ShieldCheck,
  },
  {
    name: "Collaborative Extension",
    desc: "Partnering as an integrated technical extension of client teams rather than an aloof vendor.",
    icon: Users2,
  },
  {
    name: "Continuous Learning",
    desc: "Persistently refining our craft and mastering emerging computational paradigms.",
    icon: BookOpen,
  },
  {
    name: "Outcome Longevity",
    desc: "Measuring our outcomes by the operational efficiency and commercial value we unlock for clients.",
    icon: Target,
  },
];

export default function AboutPage() {
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
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E5E1ED]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEE8FA] text-[#7C3AED] border border-[#7C3AED]/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT COGNIREX SOLUTIONS</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] font-heading">
                Engineering Digital Experiences That Move Businesses Forward.
              </h1>

              <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed">
                Cognirex Solutions brings together modern digital design, full-stack software development, and intelligent technology. We engineer digital products and automated systems shaped around real operational needs.
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-[#1F1B2E]">
                <MapPin className="w-4 h-4 text-[#7C3AED]" />
                <span>Headquarters: Kolhapur, Maharashtra, India (Serving Nationwide &amp; Global Clients)</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden border border-[#E5E1ED] shadow-card bg-[#EEE8FA]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Cognirex Solutions Collaborative Engineering Team"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B2E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#7C3AED] px-2.5 py-1 rounded shadow-xs">
                    Human-Centric Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-[#E5E1ED] rounded-2xl p-7 sm:p-9 shadow-subtle space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              Our Mission
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#1F1B2E]">
              Purposeful Problem Solving
            </h2>
            <blockquote className="text-base text-[#1F1B2E] font-medium border-l-2 border-[#7C3AED] pl-4 italic">
              &ldquo;To create meaningful, practical and intelligent technology solutions that help solve real-world challenges.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed">
              We believe technology is at its best when it removes friction, accelerates decision-making, and creates dependable business longevity.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-[#E5E1ED] rounded-2xl p-7 sm:p-9 shadow-subtle space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              Our Vision
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#1F1B2E]">
              Enduring Technology Partnership
            </h2>
            <blockquote className="text-base text-[#1F1B2E] font-medium border-l-2 border-[#7C3AED] pl-4 italic">
              &ldquo;To grow as a trusted technology partner through continuous innovation, engineering excellence and valuable digital experiences.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed">
              We strive to be recognized for the clarity of our advice, the elegance of our software architectures, and our reliability under complex constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white border-y border-[#E5E1ED]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-2">
              Values That Anchor Our Work
            </span>
            <h2 className="text-3xl font-extrabold text-[#1F1B2E] font-heading">
              Our Foundational Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F8F7FC] border border-[#E5E1ED] rounded-2xl p-6 hover:border-[#7C3AED]/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E1ED] text-[#7C3AED] flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#1F1B2E] mb-2">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1F1B2E] text-white rounded-3xl p-8 sm:p-14 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Our Engineering Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Simplicity Over Unnecessary Complexity.
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We reject bloated boilerplate and fragile dependencies. Every architecture we ship is built on strong foundations: strict type safety with TypeScript, fast compilation with Next.js, and grounded data models that scale effortlessly.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Button href="/contact" variant="yellow" size="lg" icon>
              Work With Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
