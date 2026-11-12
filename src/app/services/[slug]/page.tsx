import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Home,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Code2,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Cognirex Solutions`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} — Software Engineering & Architecture`,
      description: service.shortDescription,
      url: `https://cognirexsolutions.in/services/${service.slug}`,
      images: ["/images/logo_main.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Generate FAQ Schema for Google Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Inject FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                  href="/services"
                  className="hover:text-[#5B21B6] transition-colors font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
              </li>
              <li className="text-[#5B21B6] font-semibold" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-6 font-heading">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-[#5B21B6] mb-4">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={`/contact?service=${encodeURIComponent(service.title)}`} variant="yellow" size="lg">
                Discuss Your {service.title} Project
              </Button>
              {service.demonstrationSlug && (
                <Button href={`/projects/${service.demonstrationSlug}`} variant="outline" size="lg">
                  View Concept Demonstration
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Side-by-Side */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Problem &amp; Resolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Commercial Challenges We Solve
            </h2>
            <p className="text-base text-[#64748B]">
              How we diagnose bottlenecks and engineer dependable solutions for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Common Pitfalls / Challenges */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1F1B2E]">
                  Common Industry Challenges
                </h3>
              </div>

              <div className="space-y-5">
                {service.businessChallenges.map((challenge, idx) => (
                  <div key={idx} className="pb-4 border-b border-[#F1F5F9] last:border-none last:pb-0">
                    <h4 className="font-heading font-bold text-sm text-[#1F1B2E] mb-1">
                      {challenge.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cognirex Engineering Solutions */}
            <div className="bg-white border border-[#5B21B6]/30 rounded-3xl p-8 shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1F1B2E]">
                  Cognirex Engineering Approach
                </h3>
              </div>

              <div className="space-y-5">
                {service.proposedSolutions.map((sol, idx) => (
                  <div key={idx} className="pb-4 border-b border-[#F1F5F9] last:border-none last:pb-0">
                    <h4 className="font-heading font-bold text-sm text-[#5B21B6] mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B21B6] shrink-0" />
                      <span>{sol.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pl-5">
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              What We Deliver
            </h2>
            <p className="text-base text-[#64748B]">
              Comprehensive technical features and production deliverables included in our {service.title.toLowerCase()} engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1F1B2E] mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cap.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-[#1F1B2E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B21B6] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Concept Demonstration Cross-Link */}
      {service.demonstrationSlug && (
        <section className="py-14 bg-[#EDE9FE]/30 border-b border-[#E2E8F0]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="bg-white border border-[#5B21B6]/20 rounded-3xl p-8 sm:p-10 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
                  Concept Demonstration
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1B2E] font-heading mb-2">
                  See This in Action: {service.demonstrationTitle}
                </h3>
                <p className="text-sm text-[#64748B] max-w-2xl">
                  Explore our tangible architectural showcase demonstrating the user interface, technology stack, and engineering approach behind this service.
                </p>
              </div>

              <Button
                href={`/projects/${service.demonstrationSlug}`}
                variant="yellow"
                size="md"
                className="shrink-0"
              >
                View Demonstration &rarr;
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Development Methodology */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              How We Deliver Your Project
            </h2>
            <p className="text-base text-[#64748B]">
              A disciplined, phased engineering framework with weekly milestone demos and transparent reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.methodologySteps.map((m) => (
              <div
                key={m.number}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 relative flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-mono font-bold text-xs text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded-md inline-block mb-3">
                    STAGE {m.number}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#1F1B2E] mb-2 leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Questions About {service.title}
            </h2>
            <p className="text-base text-[#64748B]">
              Straightforward answers to common questions about timelines, technology, and ownership.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7"
              >
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#1F1B2E] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#5B21B6] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed pl-7.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="py-16 md:py-20 bg-[#F5F3FF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
            Ready to Build Your {service.title}?
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto mb-8">
            Tell us about your requirements or schedule a direct consultation with our engineering team in Kolhapur, Maharashtra.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="yellow"
              size="lg"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

