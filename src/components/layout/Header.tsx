"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  ShoppingCart,
  Code2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface ServiceNavEntry {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICE_NAV_ITEMS: ServiceNavEntry[] = [
  {
    title: "Website Development",
    href: "/services/website-development",
    description: "High-performance brand platforms, marketing websites, and digital portals.",
    icon: Globe,
  },
  {
    title: "E-Commerce Development",
    href: "/services/ecommerce-development",
    description: "Custom digital storefronts, shopping carts, and secure payment integrations.",
    icon: ShoppingCart,
  },
  {
    title: "Custom Software Development",
    href: "/services/custom-software",
    description: "Tailored business software, operational dashboards, and centralized management tools.",
    icon: Code2,
  },
  {
    title: "AI & Workflow Automation",
    href: "/services/ai-automation",
    description: "Production-grade conversational AI assistants, RAG hubs, and automated webhook pipelines.",
    icon: Sparkles,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for sticky header backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard accessibility: Close menus on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isServicesActive = pathname.startsWith("/services");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isProjectsActive = pathname.startsWith("/projects");
  const isCareersActive = pathname.startsWith("/careers");
  const isContactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-[#E2E8F0] shadow-subtle py-3"
          : "bg-white border-[#E2E8F0] py-3.5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B21B6] rounded-xl"
          aria-label="Cognirex Solutions Homepage"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden relative shrink-0 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center border border-[#E2E8F0] bg-white shadow-xs">
            <Image
              src="/images/logo_main.png"
              alt="Cognirex Solutions Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center font-heading font-extrabold text-base sm:text-lg tracking-tight leading-none">
              <span className="text-[#1F1B2E]">COGNIREX</span>
              <span className="text-[#5B21B6] ml-1">SOLUTIONS</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold mt-1 hidden sm:block">
              Intelligence Engineered
            </span>
          </div>
        </Link>

        {/* Desktop Global Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-1.5"
          aria-label="Primary Navigation"
        >
          {/* 1. Home */}
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isHomeActive
                ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
            }`}
          >
            Home
          </Link>

          {/* 2. About */}
          <Link
            href="/about"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isAboutActive
                ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
            }`}
          >
            About
          </Link>

          {/* 3. Services with Accessible Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setServicesDropdownOpen(true);
                }
              }}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B21B6] ${
                isServicesActive || servicesDropdownOpen
                  ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                  : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 text-[#64748B] ${
                  servicesDropdownOpen ? "rotate-180 text-[#5B21B6]" : ""
                }`}
              />
            </button>

            {/* Services Dropdown Flyout */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-[420px] pt-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                role="menu"
                aria-label="Services Submenu"
              >
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-3 shadow-dropdown">
                  <div className="px-3 pt-2 pb-2 mb-2 border-b border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Core Capabilities
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-semibold text-[#5B21B6] hover:text-[#4C1D95] inline-flex items-center gap-1"
                    >
                      <span>Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-1">
                    {SERVICE_NAV_ITEMS.map((service) => {
                      const IconComponent = service.icon;
                      const isCurrentService = pathname === service.href;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                            isCurrentService
                              ? "bg-[#F5F3FF] border border-[#5B21B6]/20"
                              : "hover:bg-[#F8FAFC]"
                          }`}
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0 group-hover:bg-[#5B21B6] group-hover:text-white transition-colors mt-0.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#1F1B2E] group-hover:text-[#5B21B6] transition-colors leading-tight">
                              {service.title}
                            </div>
                            <p className="text-xs text-[#64748B] mt-1 line-clamp-1 leading-snug">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#F1F5F9] px-2.5 pb-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="w-full flex items-center justify-between py-2 text-xs font-semibold text-[#5B21B6] hover:underline"
                    >
                      <span>Explore all capabilities &amp; engineering roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Industries */}
          <Link
            href="/industries"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isIndustriesActive
                ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
            }`}
          >
            Industries
          </Link>

          {/* 5. Projects */}
          <Link
            href="/projects"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isProjectsActive
                ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
            }`}
          >
            Projects
          </Link>

          {/* 6. Careers */}
          <Link
            href="/careers"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isCareersActive
                ? "text-[#5B21B6] font-semibold bg-[#EDE9FE]/50"
                : "text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF]"
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="/contact"
            variant="yellow"
            size="md"
            className="shadow-sm font-semibold tracking-tight"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1F1B2E] hover:text-[#5B21B6] hover:bg-[#F5F3FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B21B6] rounded-xl transition-colors"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0F172A]/40 backdrop-blur-xs z-50">
          <div className="bg-white border-b border-[#E2E8F0] shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto px-4 py-5 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isHomeActive
                    ? "bg-[#EDE9FE] text-[#5B21B6]"
                    : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>Home</span>
                {isHomeActive && <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />}
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isAboutActive
                    ? "bg-[#EDE9FE] text-[#5B21B6]"
                    : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>About</span>
                {isAboutActive && <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />}
              </Link>

              {/* Services Accordion for Mobile */}
              <div className="rounded-xl border border-[#E2E8F0] overflow-hidden my-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full px-3.5 py-3 text-base font-semibold flex items-center justify-between text-[#1F1B2E] bg-[#F8FAFC]"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#5B21B6]" />
                    <span>Services</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${
                      mobileServicesExpanded ? "rotate-180 text-[#5B21B6]" : ""
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="p-2 space-y-1 bg-white border-t border-[#E2E8F0]">
                    {SERVICE_NAV_ITEMS.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                          pathname === service.href
                            ? "bg-[#EDE9FE] text-[#5B21B6] font-semibold"
                            : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#5B21B6] hover:underline pt-2 border-t border-[#F1F5F9]"
                    >
                      View All Services Overview &rarr;
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries */}
              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isIndustriesActive
                    ? "bg-[#EDE9FE] text-[#5B21B6]"
                    : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>Industries</span>
                {isIndustriesActive && <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />}
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isProjectsActive
                    ? "bg-[#EDE9FE] text-[#5B21B6]"
                    : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>Projects</span>
                {isProjectsActive && <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />}
              </Link>

              {/* Careers */}
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  isCareersActive
                    ? "bg-[#EDE9FE] text-[#5B21B6]"
                    : "text-[#1F1B2E] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>Careers</span>
                {isCareersActive && <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />}
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-4 mt-2 border-t border-[#E2E8F0]">
                <Button
                  href="/contact"
                  variant="yellow"
                  size="lg"
                  className="w-full text-center font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch &amp; Schedule
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
