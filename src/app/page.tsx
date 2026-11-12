import React from "react";
import Hero from "@/components/sections/Hero";
import CompanyPositioning from "@/components/sections/CompanyPositioning";
import ConsolidatedServices from "@/components/sections/ConsolidatedServices";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import ApproachProcess from "@/components/sections/ApproachProcess";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Section A: Premium Hero */}
      <Hero />

      {/* Section B: Company Positioning */}
      <CompanyPositioning />

      {/* Section C: Consolidated Core Services */}
      <ConsolidatedServices />

      {/* Section D: Industry Solutions */}
      <IndustriesSection />

      {/* Section E: Concept Demonstrations & Projects */}
      <ProjectsShowcase />

      {/* Section F: 5-Step Development Process */}
      <ApproachProcess />

      {/* Section G: Final Call to Action */}
      <ContactSection />
    </>
  );
}