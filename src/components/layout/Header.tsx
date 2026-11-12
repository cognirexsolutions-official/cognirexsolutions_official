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
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { useCmsContent } from "@/context/CmsContentContext";

interface NavDropdownItem {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES_MENU: NavDropdownItem[] = [
  {
    title: "Website Development",
    href: "/services/website-development",
    description: "Modern, high-performance brand websites & web applications.",
    icon: Globe,
  },
  {
    title: "E-Commerce Development",
    href: "/services/ecommerce-development",
    description: "Digital storefronts, product catalogs & checkout pipelines.",
    icon: ShoppingCart,
  },
  {
    title: "Custom Software",
    href: "/services/custom-software",
    description: "Operational dashboards, customer portals & internal tools.",
    icon: Code2,
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    description: "Intelligent assistants, RAG knowledge bases & automated workflows.",
    icon: Sparkles,
  },
];

const INDUSTRIES_MENU: NavDropdownItem[] = [
  {
    title: "Retail & E-Commerce",
    href: "/industries#retail",
    description: "Digital storefronts, catalog ordering & seamless checkouts.",
    icon: ShoppingBag,
  },
  {
    title: "Manufacturing & Distribution",
    href: "/industries#manufacturing",
    description: "Product portals, distributor tools & operational visibility.",
    icon: Factory,
  },
  {
    title: "Education & Training",
    href: "/industries#education",
    description: "Learning portals, student resource hubs & course catalogs.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare & Wellness",
    href: "/industries#healthcare",
    description: "Service intake workflows, appointment booking & patient portals.",
    icon: Heart,
  },
  {
    title: "Hospitality & Food Services",
    href: "/industries#hospitality",
    description: "Interactive digital menus, table bookings & pickup orders.",
    icon: UtensilsCrossed,
  },
  {
    title: "Professional & Local Services",
    href: "/industries#professional-services",
    description: "Service showcases, quotation inquiries & documentation gateways.",
    icon: Briefcase,
  },
];

export default function Header() {
  const pathname = usePathname();
  const { content } = useCmsContent();
  const brand = content.site_brand;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [isAssembled, setIsAssembled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
    }
    const timer = setTimeout(() => {
      setIsAssembled(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const wordmarkText = (brand.name || siteConfig.name).toUpperCase();
  const wordmarkLetters = wordmarkText.split("");
  const firstSpaceIdx = wordmarkText.indexOf(" ");

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setIndustriesOpen(false);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
    setServicesOpen(false);
  };

  const handleIndustriesLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 180);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isProjectsActive = pathname.startsWith("/projects");
  const isAboutActive = pathname === "/about";
  const isCareersActive = pathname === "/careers";
  const isContactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-[#E5E1ED] shadow-subtle py-3"
          : "bg-[#F8F7FC] border-[#E5E1ED] py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
        >
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden transition-transform duration-200 group-hover:scale-105 relative shrink-0 flex items-center justify-center ${
              isAssembled || reducedMotion
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <Image
              src="/images/logo_main.png"
              alt="Cognirex Solutions Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div
              className="flex items-center tracking-tight leading-none group-hover:opacity-90"
              role="heading"
              aria-level={2}
              aria-label="Cognirex Solutions"
            >
              {wordmarkLetters.map((char, i) => {
                const isSpace = char === " ";
                if (isSpace) {
                  return <span key={`header-space-${i}`} className="w-1 sm:w-1.5" aria-hidden="true" />;
                }
                const centerIndex = (wordmarkLetters.length - 1) / 2;
                const distanceFromCenter = Math.abs(i - centerIndex);
                const delayMs = reducedMotion ? 0 : Math.round(distanceFromCenter * 35);
                const isSolutionsWord = firstSpaceIdx !== -1 && i > firstSpaceIdx;

                return (
                  <span
                    key={`header-char-${i}`}
                    style={{ transitionDelay: `${delayMs}ms` }}
                    className={`inline-block font-heading font-extrabold text-base sm:text-lg transition-all duration-500 ease-out ${
                      isSolutionsWord ? "text-[#7C3AED]" : "text-[#1F1B2E]"
                    } ${
                      isAssembled || reducedMotion
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-2 scale-80"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
            <span
              style={{ transitionDelay: reducedMotion ? "0ms" : "400ms" }}
              className={`text-[10px] uppercase tracking-wider text-[#6F6A7C] font-medium hidden sm:block mt-0.5 transition-all duration-500 ease-out ${
                isAssembled || reducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
            >
              {brand.headerSubtitle || "Intelligence Engineered"}
            </span>
          </div>
        </Link>

        {/* Desktop Global Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {/* Home */}
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              pathname === "/"
                ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isAboutActive
                ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors duration-150 ${
                isServicesActive || servicesOpen
                  ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                  : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#7C3AED]" : "text-[#6F6A7C]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-[360px] bg-white border border-[#E5E1ED] rounded-2xl shadow-dropdown p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#E5E1ED] mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                    Engineering Services
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-[#1F1B2E] hover:text-[#7C3AED] inline-flex items-center gap-1"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {SERVICES_MENU.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                          isActive
                            ? "bg-[#EEE8FA] text-[#7C3AED]"
                            : "hover:bg-[#F8F7FC] text-[#1F1B2E] hover:text-[#7C3AED]"
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#EEE8FA]/80 border border-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold leading-snug">{item.title}</div>
                          <div className="text-xs text-[#6F6A7C] leading-tight mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesEnter}
            onMouseLeave={handleIndustriesLeave}
          >
            <button
              type="button"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              aria-expanded={industriesOpen}
              className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors duration-150 ${
                isIndustriesActive || industriesOpen
                  ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                  : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  industriesOpen ? "rotate-180 text-[#7C3AED]" : "text-[#6F6A7C]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {industriesOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-[380px] bg-white border border-[#E5E1ED] rounded-2xl shadow-dropdown p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#E5E1ED] mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
                    Sectors We Serve
                  </span>
                  <Link
                    href="/industries"
                    className="text-xs font-semibold text-[#1F1B2E] hover:text-[#7C3AED] inline-flex items-center gap-1"
                  >
                    <span>All Verticals</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {INDUSTRIES_MENU.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#F8F7FC] text-[#1F1B2E] hover:text-[#7C3AED] transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#EEE8FA]/80 border border-[#7C3AED]/20 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold leading-tight">{item.title}</div>
                          <div className="text-[11px] text-[#6F6A7C] leading-snug line-clamp-1 mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Projects */}
          <Link
            href="/projects"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isProjectsActive
                ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
            }`}
          >
            Projects
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isCareersActive
                ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
            }`}
          >
            Careers
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
              isContactActive
                ? "text-[#7C3AED] font-semibold bg-[#EEE8FA]/60"
                : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/40"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contact" variant="yellow" size="md">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1F1B2E] hover:text-[#7C3AED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E1ED] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150 shadow-dropdown max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                pathname === "/" ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold" : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                isAboutActive ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold" : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
              }`}
            >
              <span>About</span>
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-[#E5E1ED] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full px-3.5 py-2.5 text-base font-medium text-[#1F1B2E] flex items-center justify-between bg-[#F8F7FC]/70 hover:bg-[#F8F7FC]"
              >
                <span className="font-semibold">Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-[#7C3AED]" : "text-[#6F6A7C]"
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-[#E5E1ED]">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#7C3AED] hover:underline"
                  >
                    View All Services &rarr;
                  </Link>
                  {SERVICES_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#F8F7FC] rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div className="border border-[#E5E1ED] rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full px-3.5 py-2.5 text-base font-medium text-[#1F1B2E] flex items-center justify-between bg-[#F8F7FC]/70 hover:bg-[#F8F7FC]"
              >
                <span className="font-semibold">Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileIndustriesOpen ? "rotate-180 text-[#7C3AED]" : "text-[#6F6A7C]"
                  }`}
                />
              </button>
              {mobileIndustriesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-[#E5E1ED]">
                  <Link
                    href="/industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#7C3AED] hover:underline"
                  >
                    View All Verticals &rarr;
                  </Link>
                  {INDUSTRIES_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#F8F7FC] rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                isProjectsActive ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold" : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
              }`}
            >
              <span>Projects</span>
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                isCareersActive ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold" : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
              }`}
            >
              <span>Careers</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-base font-medium flex items-center justify-between ${
                isContactActive ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold" : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
              }`}
            >
              <span>Contact</span>
            </Link>

            <div className="pt-3 mt-2 border-t border-[#E5E1ED]">
              <Button
                href="/contact"
                variant="yellow"
                size="md"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
