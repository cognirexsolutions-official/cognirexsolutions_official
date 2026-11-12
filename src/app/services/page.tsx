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
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { serviceDetailsData } from "@/data/serviceDetails";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Engineering Services & Digital Solutions | Cognirex Solutions",
  description:
    "Explore our full suite of technical engineering services: modern website development, e-commerce platforms, custom enterprise software, and AI workflow automation.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Engineering Services & Digital Solutions | Cognirex Solutions",
    description:
      "Explore our full suite of technical engineering services: modern website development, e-commerce platforms, custom enterprise software, and AI workflow automation.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesCatalogPage() {
  const servicesList = Object.values(serviceDetailsData);

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
                Services Catalog
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
            <span>FULL TECHNICAL CAPABILITIES</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-5 font-heading">
            Engineering Solutions Built to Move Your Business Forward
          </h1>
          <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed max-w-2xl mx-auto">
            From modern web applications and scalable storefronts to internal software dashboards and grounded AI automation, explore our four core engineering pillars.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => {
            const Icon =
              service.icon === "Globe"
                ? Globe
                : service.icon === "ShoppingCart"
                ? ShoppingCart
                : service.icon === "Code2"
                ? Code2
                : Sparkles;

            return (
              <div
                key={service.slug}
                className="bg-white border border-[#E5E1ED] hover:border-[#7C3AED]/50 rounded-2xl p-7 sm:p-9 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center border border-[#7C3AED]/20 shadow-xs group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] bg-[#EEE8FA]/70 px-2.5 py-1 rounded-full">
                      Pillar Discipline
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-[#1F1B2E] mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6F6A7C] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#E5E1ED] mb-8">
                    <div className="text-[11px] font-bold text-[#1F1B2E] uppercase tracking-wider mb-2">
                      Key Engineering Capabilities:
                    </div>
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1F1B2E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">{cap.title}:</span>{" "}
                          <span className="text-[#6F6A7C]">{cap.deliverables.slice(0, 3).join(", ")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5E1ED]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7C3AED] text-white hover:bg-[#6D28D9] text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.shortTitle)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F8F7FC] hover:bg-[#EEE8FA] text-[#1F1B2E] hover:text-[#7C3AED] text-xs font-semibold transition-colors border border-[#E5E1ED]"
                  >
                    <span>Request Consultation</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-14 sm:py-20 bg-[#1F1B2E] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
            Have a Complex Engineering Requirement?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Our team reviews technical scopes and provides direct architectural feedback without high-pressure sales calls.
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

