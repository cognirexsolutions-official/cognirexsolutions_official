"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowRight, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#1F1B2E] text-white relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#7C3AED]/20 pointer-events-none blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#A78BFA]/10 pointer-events-none blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2E2744] text-[#C4B5FD] border border-[#7C3AED]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>START A CONVERSATION</span>
          </span>
        </div>

        {/* Main Conversion Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-heading max-w-3xl mx-auto">
          Have an Idea? Let&apos;s Engineer It.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you need an enterprise web application, custom internal dashboard, e-commerce storefront, or intelligent AI automation, our engineering team is ready to help you plan, architect, and ship.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            href="/contact"
            variant="yellow"
            size="lg"
            icon
            className="shadow-lg hover:shadow-xl transition-all cursor-pointer text-base px-8 py-3.5"
          >
            Start a Project
          </Button>

          <Link
            href="/contact?tab=meeting"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2D2745] hover:bg-[#3D355C] text-sm font-semibold text-white border border-[#4A416D] transition-colors"
          >
            <Clock className="w-4 h-4 text-[#FACC15]" />
            <span>Schedule 45-Min Consultation</span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-gray-400 pt-6 border-t border-[#312B47] max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A78BFA]" />
            <span>NDA &amp; IP Protection Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#A78BFA]" />
            <span>Direct Technical Response in 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#A78BFA]" />
            <span>No High-Pressure Sales Calls</span>
          </div>
        </div>
      </div>
    </section>
  );
}
