import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Home,
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries Served & Sector Solutions",
  description:
    "Tailored digital products and software engineering solutions across Retail & E-Commerce, Manufacturing, Education, Healthcare, Hospitality, and Professional Services.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries Served — Sector-Specific Software Solutions",
    description:
      "Engineered digital solutions for real commercial challenges across 6 core industry verticals.",
    url: "https://cognirexsolutions.in/industries",
    images: ["/images/logo_main.png"],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
};

export default function IndustriesPage() {
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
                Industries
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Industries Header */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Industry-Specific Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              Digital Solutions Grounded in Real Sector Dynamics.
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-8">
              Every industry has distinct operational challenges, compliance expectations, and customer journeys. We bring modern software architecture and practical AI tools together to solve the specific bottlenecks your sector faces.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="yellow" size="lg">
                Discuss Your Industry Needs
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Core Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Industry Verticals Deep-Dive */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16">
          {industriesData.map((ind, index) => {
            const IconComp = iconMap[ind.icon] || Briefcase;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-subtle scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E2E8F0] shadow-sm">
                      <Image
                        src={ind.image}
                        alt={`${ind.title} — Sector Visual Preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 480px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold block mb-1">
                          SECTOR 0{index + 1}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-white">
                          {ind.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EDE9FE] text-[#5B21B6] text-xs font-bold mb-3">
                      <IconComp className="w-4 h-4" />
                      <span>{ind.subtitle}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading mb-3">
                      {ind.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-[#F1F5F9]">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F1B2E] mb-2.5">
                          Key Operational Challenges:
                        </h4>
                        <ul className="space-y-1.5">
                          {ind.industryChallenges.map((ch, idx) => (
                            <li key={idx} className="text-xs text-[#64748B] leading-snug">
                              • {ch}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2.5">
                          Delivered Digital Outcomes:
                        </h4>
                        <ul className="space-y-1.5">
                          {ind.keyOutcomes.map((out, idx) => (
                            <li key={idx} className="text-xs text-[#1F1B2E] flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B21B6] shrink-0 mt-0.5" />
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Relevant Services Cross-Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#F1F5F9]">
                      <span className="text-xs font-semibold text-[#64748B] mr-2">
                        Relevant Services:
                      </span>
                      {ind.applicableServices.map((srv) => (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B21B6] bg-[#EDE9FE]/50 hover:bg-[#5B21B6] hover:text-white px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span>{srv.title}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="py-16 md:py-20 bg-[#F5F3FF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
            Need a Solution for Your Industry?
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Tell us about your industry, current bottlenecks, and vision. We will engineer the right digital platform for your operational needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg">
              Start an Industry Discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

