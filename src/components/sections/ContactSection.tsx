"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Call to Action — Cognirex Solutions"
      className="py-20 md:py-28 bg-[#1F1B2E] text-white relative overflow-hidden scroll-mt-20 border-t border-[#312C45]"
    >
      {/* Subtle atmospheric glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#5B21B6]/30 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6D28D9]/20 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2A253D] text-[#C4B5FD] border border-[#5B21B6]/50 shadow-xs">
            <span>Next Steps</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-heading max-w-3xl mx-auto">
          Have an Idea? Let&apos;s Engineer It.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us what you want to build. Let&apos;s explore the right technology and engineering approach for your business.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#1F1B2E] transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_24px_rgba(245,158,11,0.35)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact?tab=meeting"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold bg-[#2A253D] hover:bg-[#383152] text-white border border-[#4C4368] transition-all cursor-pointer"
          >
            <span>Schedule a Consultation</span>
          </Link>
        </div>

        {/* Trust & Reassurance Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-[#312C45] text-xs text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#A78BFA] shrink-0" />
            <span>Guaranteed 24-hour response</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A78BFA] shrink-0" />
            <span>Strict NDA &amp; confidentiality</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
            <span>Engineering Hub in Kolhapur, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}