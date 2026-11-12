import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy — Cognirex Solutions",
  description: "Privacy policy, data retention, and confidentiality guidelines for Cognirex Solutions.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Cognirex Solutions",
    description: "Corporate privacy and non-disclosure standards.",
    url: "https://cognirexsolutions.in/privacy-policy",
    images: ["/images/logo_main.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        <Badge variant="lavender" className="mb-4">
          Corporate Governance
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F1B2E] mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#64748B] font-mono mb-8">
          Effective Date: January 1, 2026 | Cognirex Solutions (Kolhapur, Maharashtra, India)
        </p>

        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-subtle space-y-8 text-sm sm:text-base text-[#1F1B2E] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              1. Information Collection &amp; Purpose
            </h2>
            <p className="text-[#64748B]">
              Cognirex Solutions collects information that you provide directly through our contact inquiries, consultation bookings, and engineering talent network applications. This data may include full names, company affiliations, work email addresses, phone numbers, project requirements, and uploaded resumes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              2. Data Protection &amp; Confidentiality
            </h2>
            <p className="text-[#64748B]">
              All communication records, project scopes, and uploaded documents are encrypted in transit using modern TLS protocols. We enforce strict confidentiality: your technical ideas and contact information are never sold, rented, or distributed to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              3. Data Retention &amp; Usage
            </h2>
            <p className="text-[#64748B]">
              Information submitted via project enquiry forms is utilized strictly to scope deliverables and communicate technical proposals. Resumes submitted through our careers network are retained securely for evaluating engineering fit against current and upcoming project teams.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#1F1B2E]">
              4. Contact for Privacy Inquiries
            </h2>
            <p className="text-[#64748B]">
              If you have inquiries regarding how your data is handled or wish to request data updates or deletion, reach out directly at{" "}
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
