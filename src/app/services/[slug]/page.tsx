import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
} from "lucide-react";
import { serviceDetailsData } from "@/data/serviceDetails";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceDetailsData[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Not Found — Cognirex Solutions",
    };
  }

  const canonicalUrl = `${siteConfig.url}/services/${service.slug}`;

  return {
    title: `${service.title} | Cognirex Solutions`,
    description: service.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Cognirex Solutions`,
      description: service.shortDescription,
      url: canonicalUrl,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = serviceDetailsData[resolvedParams.slug];

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#F8F7FC]">
        <h1 className="text-2xl font-bold font-heading text-[#1F1B2E] mb-3">Service Not Found</h1>
        <p className="text-sm text-[#6F6A7C] mb-6">The requested engineering service could not be located.</p>
        <Button href="/services" variant="yellow" size="md">
          View All Services
        </Button>
      </div>
    );
  }

  const IconComponent =
    service.icon === "Globe"
      ? Globe
      : service.icon === "ShoppingCart"
      ? ShoppingCart
      : service.icon === "Code2"
      ? Code2
      : Sparkles;

  // JSON-LD Service Schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Cognirex Solutions",
      "url": siteConfig.url,
    },
    "serviceType": service.shortTitle,
    "areaServed": "Global",
  };

  return (
    <div className="bg-[#F8F7FC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
                <Link href="/services" className="hover:text-[#7C3AED] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-[#A78BFA]" />
              </li>
              <li className="font-semibold text-[#1F1B2E]" aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E5E1ED] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE8FA] text-[#7C3AED] border border-[#7C3AED]/20 text-xs font-bold uppercase tracking-wider mb-5">
              <IconComponent className="w-4 h-4 stroke-[2]" />
              <span>{service.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-5 font-heading">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed mb-8">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={`/contact?service=${encodeURIComponent(service.shortTitle)}`} variant="yellow" size="lg" icon>
                Consult on {service.shortTitle}
              </Button>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[#E5E1ED] bg-white hover:border-[#7C3AED] text-sm font-semibold text-[#1F1B2E] hover:text-[#7C3AED] transition-all"
              >
                <span>View Concept Demonstrations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Comparison */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Business Problem Card */}
          <div className="bg-white border border-rose-200/80 rounded-2xl p-7 sm:p-9 shadow-subtle flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-2">
                The Business Challenge
              </span>
              <h2 className="text-2xl font-bold font-heading text-[#1F1B2E] mb-3">
                {service.businessProblem.title}
              </h2>
              <p className="text-sm text-[#6F6A7C] leading-relaxed mb-6">
                {service.businessProblem.description}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E5E1ED]">
              {service.businessProblem.painPoints.map((pain, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#1F1B2E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                  <span>{pain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solution Card */}
          <div className="bg-[#1F1B2E] text-white border border-[#3A3356] rounded-2xl p-7 sm:p-9 shadow-card flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] block mb-2">
                Our Architectural Solution
              </span>
              <h2 className="text-2xl font-bold font-heading text-white mb-3">
                {service.ourSolution.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {service.ourSolution.description}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#312B47]">
              {service.ourSolution.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specific Capabilities & Deliverables */}
      <section className="py-16 bg-white border-y border-[#E5E1ED]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-2">
              Deliverables &amp; Scope
            </span>
            <h2 className="text-3xl font-extrabold text-[#1F1B2E] font-heading">
              What We Build Under This Discipline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-[#F8F7FC] border border-[#E5E1ED] rounded-2xl p-6 flex flex-col justify-between hover:border-[#7C3AED]/40 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold font-heading text-[#1F1B2E] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#6F6A7C] leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E5E1ED]">
                  <div className="text-[10px] uppercase font-bold text-[#7C3AED] tracking-wider mb-1">
                    Key Components:
                  </div>
                  {cap.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#1F1B2E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack & Development Process */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Tech Stack */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1ED] rounded-2xl p-7 shadow-subtle">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-2">
              Technology Stack
            </span>
            <h3 className="text-2xl font-bold font-heading text-[#1F1B2E] mb-3">
              {service.technologyApproach.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-6">
              {service.technologyApproach.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.technologyApproach.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#EEE8FA] text-[#7C3AED] font-semibold text-xs border border-[#7C3AED]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1ED] rounded-2xl p-7 shadow-subtle space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-1">
                Development Lifecycle
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#1F1B2E]">
                How We Deliver {service.shortTitle}
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {service.developmentProcess.map((proc, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1F1B2E] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 mt-0.5">
                    {proc.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F1B2E]">{proc.title}</h4>
                    <p className="text-xs text-[#6F6A7C] leading-relaxed mt-0.5">{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t border-[#E5E1ED]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading">
              Common Questions About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-[#E5E1ED] rounded-2xl p-5 sm:p-6 bg-[#F8F7FC]">
                <h4 className="text-base font-bold font-heading text-[#1F1B2E] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-14 sm:py-20 bg-[#1F1B2E] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
            Ready to Engineer Your {service.shortTitle}?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Tell us about your requirements or schedule an engineering consultation call with our team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={`/contact?service=${encodeURIComponent(service.shortTitle)}`} variant="yellow" size="lg" icon>
              Start {service.shortTitle} Project
            </Button>
            <Link
              href="/contact?tab=meeting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D2745] hover:bg-[#3D355C] text-xs font-semibold text-white border border-[#4A416D] transition-colors"
            >
              <Clock className="w-4 h-4 text-[#FACC15]" />
              <span>Schedule Technical Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

