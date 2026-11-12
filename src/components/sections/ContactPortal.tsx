"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Globe,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Clock,
  Video,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import ContactEnquiryForm from "@/components/forms/ContactEnquiryForm";
import MeetingRequestForm from "@/components/forms/MeetingRequestForm";
import { siteConfig } from "@/config/site";

// Isolated Suspense listener for query parameters without blocking page render
function SearchParamsSync({
  onParams,
}: {
  onParams: (tab: "enquiry" | "meeting", service: string) => void;
}) {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const tabParam = searchParams.get("tab") === "meeting" ? "meeting" : "enquiry";
    const serviceParam = searchParams.get("service") || "";
    onParams(tabParam, serviceParam);
  }, [searchParams, onParams]);

  return null;
}

export default function ContactPortal() {
  const [activeTab, setActiveTab] = useState<"enquiry" | "meeting">("enquiry");
  const [selectedService, setSelectedService] = useState<string>("");

  const handleParamsUpdate = React.useCallback(
    (tab: "enquiry" | "meeting", service: string) => {
      setActiveTab(tab);
      if (service) {
        setSelectedService(service);
      }
    },
    []
  );

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Search parameter sync without blocking SSR or inspection */}
      <Suspense fallback={null}>
        <SearchParamsSync onParams={handleParamsUpdate} />
      </Suspense>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1F1B2E] tracking-tight leading-[1.15] mb-4 font-heading">
            Let&apos;s Talk About Your Next Project.
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Whether you want to submit detailed technical specifications or book a 1-on-1 video consultation, connect directly with our engineering team in Kolhapur, Maharashtra.
          </p>
        </div>

        {/* Corporate Trust & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 max-w-[1000px] mx-auto">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-subtle flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-[#1F1B2E] mb-1">
                Engineering Hub
              </h2>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Kolhapur, Maharashtra, India. Partnering with clients nationwide and across global time zones.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-subtle flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-[#1F1B2E] mb-1">
                Consultation Hours
              </h2>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Monday–Friday, 9:30 AM–6:30 PM IST. Online video meetings (Google Meet) &amp; scheduled appointments.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-subtle flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-[#1F1B2E] mb-1">
                NDA &amp; 24h Review
              </h2>
              <p className="text-xs text-[#64748B] leading-relaxed">
                All inquiries reviewed under strict confidentiality by senior engineers with a guaranteed 24-hour response.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center p-1.5 rounded-2xl bg-white border border-[#E2E8F0] mb-6 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("enquiry")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "enquiry"
                  ? "bg-[#5B21B6] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#1F1B2E]"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Project Enquiry</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("meeting")}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === "meeting"
                  ? "bg-[#5B21B6] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#1F1B2E]"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation (IST / Timezones)</span>
            </button>
          </div>

          {/* Form Content */}
          {activeTab === "enquiry" ? (
            <ContactEnquiryForm
              key={selectedService || "default"}
              initialService={selectedService}
            />
          ) : (
            <MeetingRequestForm />
          )}

          {/* Confidentiality Box */}
          <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-subtle flex items-start sm:items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-[#5B21B6] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1F1B2E] uppercase tracking-wide">
                Confidentiality &amp; Privacy Enforced
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                All project requirements, architecture proposals, and consultation notes are protected under strict non-disclosure terms. Your business data is never shared with third parties.
              </p>
            </div>
          </div>

          {/* Service & Process Links */}
          <div className="mt-10 bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 text-center shadow-subtle">
            <h3 className="font-heading font-bold text-lg text-[#1F1B2E] mb-2">
              Want to Review Our Engineering Capabilities First?
            </h3>
            <p className="text-sm text-[#64748B] mb-5">
              Explore our core disciplines, technical project demonstrations, and full-stack architecture standards.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B21B6] bg-[#EDE9FE] hover:bg-[#5B21B6] hover:text-white px-4 py-2.5 rounded-xl transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about#process"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F1B2E] hover:text-[#5B21B6] px-4 py-2.5 rounded-xl transition-colors border border-[#E2E8F0]"
              >
                <span>See Our 5-Stage Process</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
