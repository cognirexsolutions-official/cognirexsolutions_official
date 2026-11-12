import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import ContactPortal from "@/components/sections/ContactPortal";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Consultation — Cognirex Solutions",
  description:
    "Connect directly with the Cognirex Solutions engineering team. Submit a project enquiry or schedule a 1-on-1 video consultation in Kolhapur, Maharashtra.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Cognirex Solutions — Start a Project or Schedule Consultation",
    description:
      "Direct technical consultations, NDA-backed project inquiries, and custom engineering reviews with our team.",
    url: "https://cognirexsolutions.in/contact",
    images: ["/images/logo_main.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#E2E8F0]">
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
                Let&apos;s Talk
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Immediate Render — Zero Full-Page Suspense Loading Blocker */}
      <ContactPortal />
    </div>
  );
}
