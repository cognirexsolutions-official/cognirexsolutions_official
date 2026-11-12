import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services & Engineering Capabilities",
  description:
    "Explore Cognirex Solutions' core software engineering pillars: Website Development, E-Commerce Development, Custom Software Engineering, and AI & Workflow Automation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software Engineering & AI Services — Cognirex Solutions",
    description:
      "From high-performance web platforms to enterprise custom software and production-grade AI automation pipelines.",
    url: "https://cognirexsolutions.in/services",
    images: ["/images/logo_main.png"],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
};

export default function ServicesPage() {
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
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Services Header */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-6 font-heading">
              Engineering Disciplines Built for Sustainable Business Growth.
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] leading-relaxed mb-8">
              We specialize in four focused technical disciplines. Whether you need a conversion-focused web presence, a scalable e-commerce storefront, a custom operational management tool, or production AI automation, we engineer solutions tailored to your commercial reality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="yellow" size="lg">
                Discuss Your Requirements
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Concept Demonstrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars Overview Cards */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const IconComp = iconMap[service.icon] || Globe;

              return (
                <div
                  key={service.id}
                  className="bg-white border border-[#E2E8F0] hover:border-[#5B21B6]/40 rounded-3xl p-8 sm:p-10 shadow-subtle flex flex-col justify-between transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center group-hover:bg-[#5B21B6] group-hover:text-white transition-colors duration-200">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-full">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-[#1F1B2E] font-heading mb-2 group-hover:text-[#5B21B6] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#5B21B6] mb-4">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Capabilities bullets */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-[#F1F5F9]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">
                        Key Capabilities:
                      </span>
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap.title} className="flex items-center gap-2 text-xs text-[#1F1B2E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B21B6] shrink-0" />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {service.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#F8FAFC] group-hover:bg-[#EDE9FE] text-[#1F1B2E] group-hover:text-[#5B21B6] text-sm font-bold transition-colors"
                    >
                      <span>Explore {service.title} &amp; Architecture</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-2 block">
              Proven Modern Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F1B2E] font-heading mb-4">
              Our Technology Stack
            </h2>
            <p className="text-base text-[#64748B]">
              We avoid volatile trends. We build on industry-standard, battle-tested frameworks that offer long-term reliability and ecosystem support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <span className="text-xs font-bold uppercase text-[#5B21B6] block mb-2">Frontend &amp; UX</span>
              <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-3">Modern Web Interfaces</h3>
              <ul className="space-y-2 text-xs text-[#64748B]">
                <li>• Next.js App Router &amp; SSR</li>
                <li>• React 19 &amp; TypeScript</li>
                <li>• Tailwind CSS &amp; Design Tokens</li>
                <li>• WCAG AA Accessibility Patterns</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <span className="text-xs font-bold uppercase text-[#5B21B6] block mb-2">Backend &amp; APIs</span>
              <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-3">Scalable Services</h3>
              <ul className="space-y-2 text-xs text-[#64748B]">
                <li>• Node.js &amp; Express Microservices</li>
                <li>• REST &amp; Webhook API Hubs</li>
                <li>• Zod Strict Schema Validation</li>
                <li>• JWT &amp; Secure Session Auth</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <span className="text-xs font-bold uppercase text-[#5B21B6] block mb-2">Data &amp; Storage</span>
              <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-3">Persistent Reliability</h3>
              <ul className="space-y-2 text-xs text-[#64748B]">
                <li>• PostgreSQL Relational Schemas</li>
                <li>• MongoDB Document Data</li>
                <li>• Redis Distributed Caching</li>
                <li>• Vector Embeddings (Pinecone / pgvector)</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <span className="text-xs font-bold uppercase text-[#5B21B6] block mb-2">Infrastructure</span>
              <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-3">Global Edge &amp; Cloud</h3>
              <ul className="space-y-2 text-xs text-[#64748B]">
                <li>• Cloudflare Workers &amp; Pages</li>
                <li>• Vercel Edge Network</li>
                <li>• Automated CI/CD Pipelines</li>
                <li>• SSL / TLS Encryption &amp; DDoS Shield</li>
              </ul>
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

