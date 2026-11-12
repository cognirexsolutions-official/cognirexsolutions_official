import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions — Cognirex Solutions",
  description: "Terms and conditions of service and engagement for Cognirex Solutions in Kolhapur, Maharashtra.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions — Cognirex Solutions",
    description: "Terms and conditions of service and engagement for Cognirex Solutions.",
    url: "https://cognirexsolutions.in/terms",
    images: ["/images/logo_main.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        <Badge variant="lavender" className="mb-4">
          Corporate Governance
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1B2E] mb-6">
          Terms and Conditions
        </h1>
        <p className="text-xs text-[#64748B] font-mono mb-8">
          Effective Date: January 1, 2026 | Cognirex Solutions (Kolhapur, Maharashtra, India)
        </p>

        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-subtle space-y-8 text-sm sm:text-base text-[#1F1B2E] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#64748B]">
              By accessing and using the Cognirex Solutions digital web portal, you agree to comply with and be bound by these Terms and Conditions and our corporate privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              2. Intellectual Property Rights &amp; Client Ownership
            </h2>
            <p className="text-[#64748B]">
              All text, graphic layouts, distinctive brand marks, and technical architecture diagrams contained within this website are the intellectual property of Cognirex Solutions. In client software engineering engagements, custom deliverables and code developed for the client are 100% owned by the client upon project completion and settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              3. Consultation Booking &amp; Double-Booking Policies
            </h2>
            <p className="text-[#64748B]">
              Meeting reservations submitted through this platform are validated against real-time slot availability. A reservation is held tentatively pending mutual technical agenda alignment. Cognirex Solutions reserves the right to reschedule consulting sessions upon reasonable advance notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-[#64748B]">
              These terms shall be governed by and construed in accordance with the laws of Maharashtra, India, without regard to conflict of law provisions. Any legal proceedings shall be subject to the exclusive jurisdiction of courts located in Maharashtra, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              5. Contact &amp; Inquiries
            </h2>
            <p className="text-[#64748B]">
              For questions concerning these terms or project agreements, please contact us at{" "}
              <a href="mailto:hr@cognirexsolutions.in" className="text-[#5B21B6] font-semibold underline">
                hr@cognirexsolutions.in
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="text-[#5B21B6] underline font-semibold">
                contact portal
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
