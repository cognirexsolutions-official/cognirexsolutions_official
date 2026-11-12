import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { industriesData } from "@/data/industries";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industry Verticals & Tailored Solutions | Cognirex Solutions",
  description:
    "Explore tailored engineering and digital solutions across key industry verticals: retail, manufacturing, education, healthcare, hospitality, and professional services.",
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
  openGraph: {
    title: "Industry Verticals & Tailored Solutions | Cognirex Solutions",
    description:
      "Explore tailored engineering and digital solutions across key industry verticals: retail, manufacturing, education, healthcare, hospitality, and professional services.",
    url: `${siteConfig.url}/industries`,
  },
};

export default function IndustriesCatalogPage() {
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
                Industries
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
            <span>INDUSTRY VERTICALS</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.12] mb-5 font-heading">
            Tailored Engineering for Industry Workflows
          </h1>
          <p className="text-base sm:text-lg text-[#6F6A7C] leading-relaxed max-w-2xl mx-auto">
            From regulatory compliance and supply-chain logistics to intuitive customer ordering and clinical intake, we architect digital systems shaped by your domain realities.
          </p>
        </div>
      </section>

      {/* Industries Detailed Section */}
      <section className="py-16 sm:py-20 max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16">
        {industriesData.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.id}
            className={`bg-white border border-[#E5E1ED] rounded-3xl p-6 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-24 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#E5E1ED] shadow-sm">
                <Image
                  src={ind.image || "/images/product-design-ux.jpg"}
                  alt={`${ind.title} digital engineering solutions`}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B2E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider font-bold bg-[#7C3AED] px-2.5 py-1 rounded-md shadow-xs">
                    {ind.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                <span>Vertical Focus // 0{idx + 1}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1B2E] font-heading">
                {ind.title}
              </h2>

              <p className="text-sm sm:text-base text-[#6F6A7C] leading-relaxed">
                {ind.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5E1ED]">
                <div className="text-xs font-bold text-[#1F1B2E] uppercase tracking-wider">
                  Engineered Deliverables:
                </div>
                {ind.keyOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1F1B2E]">
                    <div className="w-5 h-5 rounded-full bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  href={`/contact?service=${encodeURIComponent(ind.title + " Solutions")}`}
                  variant="yellow"
                  size="md"
                  icon
                >
                  Consult on {ind.title}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-14 sm:py-20 bg-[#1F1B2E] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
            Don&apos;t See Your Exact Sector Listed?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Our core software engineering and AI architectures adapt to any domain with complex data models, multi-step workflows, or high-conversion customer requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="yellow" size="lg" icon>
              Discuss Your Industry Architecture
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

