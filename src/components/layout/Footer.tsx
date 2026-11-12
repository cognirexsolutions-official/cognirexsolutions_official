"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  MapPin,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171424] text-white pt-16 pb-12 border-t border-[#2A253D] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14 border-b border-[#2A253D]">
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden relative shrink-0 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center bg-[#251F38] p-1 border border-[#3D3558]">
                <Image
                  src="/images/logo_footer_transparent.png"
                  alt="Cognirex Solutions Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Cognirex <span className="text-[#A78BFA] font-light">Solutions</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Engineering intelligent digital products, custom enterprise software, AI solutions, and automation systems that help businesses operate smarter and scale faster.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex on LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#251F38] hover:bg-[#5B21B6] border border-[#383050] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex on X"
                className="w-8 h-8 rounded-lg bg-[#251F38] hover:bg-[#5B21B6] border border-[#383050] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex on GitHub"
                className="w-8 h-8 rounded-lg bg-[#251F38] hover:bg-[#5B21B6] border border-[#383050] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#221B35] text-[#C4B5FD] border border-[#3D3558]">
                Registered Engineering Entity &bull; Maharashtra, India
              </span>
            </div>
          </div>

          {/* Column 2: Company Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 tracking-wider uppercase font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Cognirex
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-white transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Concept Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers &amp; Talent</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#5B21B6] text-white font-mono">We&apos;re Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 tracking-wider uppercase font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A78BFA] hover:text-white transition-colors font-medium">
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 tracking-wider uppercase font-mono">
              Industries
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/industries#retail-ecommerce" className="hover:text-white transition-colors">
                  Retail &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries#manufacturing-logistics" className="hover:text-white transition-colors">
                  Manufacturing &amp; Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries#education-edtech" className="hover:text-white transition-colors">
                  Education &amp; EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare-healthtech" className="hover:text-white transition-colors">
                  Healthcare &amp; HealthTech
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitality-travel" className="hover:text-white transition-colors">
                  Hospitality &amp; Travel
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-[#A78BFA] hover:text-white transition-colors font-medium">
                  All Industries &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Location (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gray-200 tracking-wider uppercase font-mono">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Kolhapur, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                <a
                  href="mailto:hr@cognirexsolutions.in"
                  className="hover:text-[#C4B5FD] underline transition-colors"
                >
                  hr@cognirexsolutions.in
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?tab=meeting"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#251F38] hover:bg-[#5B21B6] text-xs font-medium text-[#C4B5FD] hover:text-white border border-[#3D3558] transition-colors"
              >
                <span>Book Consultation</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>&copy; {currentYear} Cognirex Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link
              href="/#hero"
              className="inline-flex items-center gap-1 text-[#A78BFA] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}