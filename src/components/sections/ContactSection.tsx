"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ContactEnquiryForm from "@/components/forms/ContactEnquiryForm";
import { siteConfig } from "@/config/site";
import { useCmsContent } from "@/context/CmsContentContext";

export default function ContactSection() {
  const { content } = useCmsContent();
  const c = content.contact_section;
  const brand = content.site_brand;

  const contactEmail = brand.email || siteConfig.contact.email || "hr@cognirexsolutions.in";
  const locationLabel = brand.locationLabel || siteConfig.contact.location || "Kolhapur, Maharashtra, India";

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8F7FC] border-t border-[#E5E1ED] relative overflow-hidden scroll-mt-20">
      {/* Decorative ambient background glows */}
      <div
        className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#EEE8FA]/70 -z-0 pointer-events-none blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-10 w-80 h-80 rounded-full bg-[#C4B5FD]/20 -z-0 pointer-events-none blur-2xl"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Start a Conversation with Our Engineering Team"
          description="Tell us about your business goals, project idea, or technical requirements. We will review your scope and provide a structured implementation roadmap."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office & Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Information Card */}
            <div className="bg-white border border-[#E5E1ED] rounded-3xl p-7 sm:p-8 shadow-card">
              <h3 className="font-heading font-extrabold text-xl text-[#1F1B2E] mb-2 flex items-center gap-2">
                <span>Engineering Studio &amp; HQ</span>
              </h3>
              <p className="text-xs text-[#6F6A7C] leading-relaxed mb-6">
                Operating from Maharashtra, partnering with organizations nationwide and globally across time zones.
              </p>

              <div className="space-y-4 text-xs">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED]">
                  <div className="w-8 h-8 rounded-lg bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6F6A7C] font-bold block">
                      Primary Location
                    </span>
                    <span className="font-semibold text-[#1F1B2E] text-sm">
                      {locationLabel}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED]">
                  <div className="w-8 h-8 rounded-lg bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6F6A7C] font-bold block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-semibold text-[#7C3AED] hover:underline text-sm break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E5E1ED]">
                  <div className="w-8 h-8 rounded-lg bg-[#EEE8FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6F6A7C] font-bold block">
                      Consultation Hours
                    </span>
                    <span className="font-semibold text-[#1F1B2E]">
                      {brand.officeHours || "Monday–Friday, 9:30 AM–6:30 PM IST"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response SLA & Trust Card */}
            <div className="bg-[#1F1B2E] text-white rounded-3xl p-7 shadow-card border border-[#38314F]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Guaranteed 24-Hour Review
                </span>
              </div>
              <p className="text-xs text-[#E2DCF0] leading-relaxed mb-4">
                Every enquiry is reviewed directly by our technical architects and engineering team. You will receive an actionable response within 24 business hours.
              </p>
              <div className="flex items-center gap-2 text-[11px] text-[#C4B5FD] pt-3 border-t border-[#312C45]">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
                <span>NDA &amp; Strict Confidentiality Enforced</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Project Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
