"use client";

import { useEffect } from "react";

export default function ScrollToSection({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const header = document.querySelector("header");
        const headerOffset = header ? header.offsetHeight : 72;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [sectionId]);

  return null;
}
