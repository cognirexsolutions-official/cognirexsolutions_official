import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import CareersSection from "@/components/sections/CareersSection";

export const metadata: Metadata = {
  title: "Careers & Engineering Talent Network — Cognirex Solutions",
  description:
    "Join the Cognirex Solutions engineering talent network. Explore how we collaborate on modern web applications, scalable software architectures, and AI systems in Kolhapur, Maharashtra.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Cognirex Solutions — Engineering Talent Network",
    description:
      "Join our multidisciplinary team building modern websites, custom applications, and intelligent AI systems.",
    url: "https://cognirexsolutions.in/careers",
    images: ["/images/logo_main.png"],
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Subpage Breadcrumb Navigation */}
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
                Careers &amp; Talent Network
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Careers Portal Content */}
      <CareersSection />
    </div>
  );
}
