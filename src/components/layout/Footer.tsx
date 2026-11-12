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
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useCmsContent } from "@/context/CmsContentContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useCmsContent();
  const brand = content.site_brand;
  const nameWords = (brand.name || siteConfig.name).trim().split(/\s+/);
  const brandFirst = nameWords[0] || "Cognirex";
  const brandRest = nameWords.slice(1).join(" ") || "Solutions";

  const contactEmail = brand.email || siteConfig.contact.email || "hr@cognirexsolutions.in";
  const locationLabel = brand.locationLabel || siteConfig.contact.location || "Kolhapur, Maharashtra, India";

  return (
    <footer className="bg-[#1F1B2E] text-white pt-16 pb-12 border-t border-[#312C45] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#312C45]">
          {/* Brand & Mission Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
                <Image
                  src="/images/logo_footer_transparent.png"
                  alt="Cognirex Solutions Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {brandFirst} <span className="text-[#A78BFA] font-normal text-lg">{brandRest}</span>
              </span>
            </Link>

            <p className="text-sm text-gray-300 font-medium">
              {brand.tagline || siteConfig.tagline}
            </p>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              {brand.footerDescription ||
                "Engineering modern websites, custom software applications, AI-driven workflows, and scalable digital solutions for growing enterprises."}
            </p>

            {/* Social Profiles with Accessible ARIA Labels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brand.linkedinUrl || siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex Solutions LinkedIn Company Profile"
                className="w-9 h-9 rounded-lg bg-[#2A253D] hover:bg-[#7C3AED] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={brand.twitterUrl || siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex Solutions on X / Twitter"
                className="w-9 h-9 rounded-lg bg-[#2A253D] hover:bg-[#7C3AED] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={brand.githubUrl || siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cognirex Solutions GitHub Organization"
                className="w-9 h-9 rounded-lg bg-[#2A253D] hover:bg-[#7C3AED] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="hover:text-white transition-colors">
                  E-Commerce Platforms
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
              <li className="pt-1">
                <Link href="/services" className="text-[#A78BFA] hover:text-white inline-flex items-center gap-1 font-semibold">
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/industries#retail" className="hover:text-white transition-colors">
                  Retail &amp; Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries#manufacturing" className="hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries#education" className="hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare" className="hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitality" className="hover:text-white transition-colors">
                  Hospitality
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/industries" className="text-[#A78BFA] hover:text-white inline-flex items-center gap-1 font-semibold">
                  <span>Explore Verticals</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters & Communication Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
              Engineering Headquarters
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Operating from Kolhapur, Maharashtra, partnering with clients nationwide and across global time zones.
            </p>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>{locationLabel}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-200 hover:text-[#A78BFA] underline transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                <span>Monday–Friday, 9:30 AM–6:30 PM IST</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A253D] hover:bg-[#7C3AED] text-xs font-semibold text-[#C4B5FD] hover:text-white transition-colors"
              >
                <span>Direct Inquiry Form</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/contact?tab=meeting"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A253D] hover:bg-[#7C3AED] text-xs font-semibold text-[#C4B5FD] hover:text-white transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} {brand.name || siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms and Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 text-[#A78BFA] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
