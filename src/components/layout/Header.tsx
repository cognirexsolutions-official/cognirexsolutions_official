"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { useCmsContent } from "@/context/CmsContentContext";

// Sections mapped to their corresponding nav item id
const TRACKED_SECTIONS: { id: string; navId: string }[] = [
  { id: "hero", navId: "hero" },
  { id: "about", navId: "about" },
  { id: "solutions", navId: "solutions" },
  { id: "approach", navId: "solutions" },
  { id: "projects", navId: "projects" },
  { id: "industries", navId: "projects" },
  { id: "contact", navId: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { content } = useCmsContent();
  const brand = content.site_brand;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isAssembled, setIsAssembled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Lock flag to prevent scrollspy from overriding user click during smooth scrolling
  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const wordmarkText = (brand.name || siteConfig.name).toUpperCase();
  const wordmarkLetters = wordmarkText.split("");
  const firstSpaceIdx = wordmarkText.indexOf(" ");

  // High-precision scrollspy with getBoundingClientRect
  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Do not allow scroll events to override activeSection while smooth-scrolling from click
      if (isManualScrollingRef.current) {
        return;
      }

      // If at the very top of the page, hero is always active
      if (window.scrollY < 60) {
        setActiveSection("hero");
        return;
      }

      // Check if user has scrolled near bottom of page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection("projects");
        return;
      }

      // Viewport trigger threshold just below the sticky header (~72px header + 50px buffer)
      const triggerY = 120;
      let matchedNavId = "hero";

      for (const section of TRACKED_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element is active if its top has reached or passed trigger line and bottom is still below trigger line
          if (rect.top <= triggerY && rect.bottom > triggerY) {
            matchedNavId = section.navId;
            break;
          }
        }
      }

      setActiveSection(matchedNavId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to establish correct initial active item
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  // Handle hash on initial mount or back/forward navigation
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        setActiveSection(hash);
        setTimeout(() => {
          const header = document.querySelector("header");
          const headerOffset = header ? header.offsetHeight : 72;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }, 150);
      }
    }
  }, [pathname]);

  const allNavItems = brand.navItems?.length ? brand.navItems : siteConfig.navItems;
  const navLinks = allNavItems.filter((item) => !item.isCta);
  const ctaItem = allNavItems.find((item) => item.isCta) || { title: "Get in Touch", href: "/contact", isCta: true };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    // If clicking on Careers link
    if (href === "/careers") {
      if (pathname === "/careers") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // If clicking on Contact link
    if (href === "/contact") {
      if (pathname === "/contact") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // If clicking on homepage section anchor (e.g. "/#about", "#about", "/#hero")
    const hash = href.includes("#") ? href.split("#")[1] : "";
    if (hash) {
      if (pathname === "/") {
        e.preventDefault();

        // 1. Instantly highlight target nav item
        const mappedNavId =
          TRACKED_SECTIONS.find((s) => s.id === hash)?.navId || hash;
        setActiveSection(mappedNavId);

        // 2. Temporarily lock scrollspy to prevent intermediate scroll frames from overriding
        isManualScrollingRef.current = true;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          isManualScrollingRef.current = false;
        }, 850);

        // 3. Scroll to top if hero
        if (hash === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        // 4. Smooth scroll to target element with exact sticky header offset
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          const header = document.querySelector("header");
          const headerOffset = header ? header.offsetHeight : 72;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }
    }
  };

  const isHomePage = pathname === "/";
  const isCareersPage = pathname === "/careers";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-[#E5E1ED] shadow-subtle py-3.5"
          : "bg-[#F8F7FC] border-[#E5E1ED] py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo - Returns to top in the same window */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, "/#hero")}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
        >
          {/* Distinctive Logo Mark */}
          <div
            className={`w-12 h-12 rounded-xl overflow-hidden transition-transform duration-200 group-hover:scale-105 relative shrink-0 flex items-center justify-center ${
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

                // Center-outwards stagger delay calculation
                const centerIndex = (wordmarkLetters.length - 1) / 2;
                const distanceFromCenter = Math.abs(i - centerIndex);
                const delayMs = reducedMotion ? 0 : Math.round(distanceFromCenter * 40);

                // First word in midnight navy, remaining words in signature purple
                const isSolutionsWord = firstSpaceIdx !== -1 && i > firstSpaceIdx;

                return (
                  <span
                    key={`header-char-${i}`}
                    style={{
                      transitionDelay: `${delayMs}ms`,
                    }}
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
              style={{
                transitionDelay: reducedMotion ? "0ms" : "450ms",
              }}
              className={`text-[10px] uppercase tracking-wider text-[#6F6A7C] font-medium hidden sm:block mt-0.5 transition-all duration-600 ease-out ${
                isAssembled || reducedMotion
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
            >
              {brand.headerSubtitle || "Intelligence Engineered"}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((item) => {
            const isCareersLink = item.href === "/careers";
            const sectionId = item.href.replace(/^\/?#/, "");
            const isActive = isCareersLink
              ? isCareersPage
              : isHomePage && activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-[#7C3AED] font-semibold"
                    : "text-[#1F1B2E] hover:text-[#7C3AED] hover:bg-[#EEE8FA]/50"
                }`}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#7C3AED] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={ctaItem.href || "/contact"}
            variant="yellow"
            size="md"
          >
            {ctaItem.title || "Get in Touch"}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1F1B2E] hover:text-[#7C3AED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E1ED] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150 shadow-dropdown">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isCareersLink = item.href === "/careers";
              const sectionId = item.href.replace(/^\/?#/, "");
              const isActive = isCareersLink
                ? isCareersPage
                : isHomePage && activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-[#EEE8FA] text-[#7C3AED] font-semibold"
                      : "text-[#1F1B2E] hover:bg-[#F8F7FC]"
                  }`}
                >
                  <span>{item.title}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E5E1ED]">
              <Button
                href={ctaItem.href || "/contact"}
                variant="yellow"
                size="md"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaItem.title || "Get in Touch"}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
