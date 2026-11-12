import React from "react";
import Hero from "@/components/sections/Hero";
import TrustPositioning from "@/components/sections/TrustPositioning";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import ApproachProcess from "@/components/sections/ApproachProcess";
import ContactSection from "@/components/sections/ContactSection";

export default function SinglePageWebsite() {
  return (
    <>
      {/* 1. Hero: Product-Led Visual with Interactive Dashboard/AI/Automation Tabs */}
      <Hero />

      {/* 2. Trust & Positioning: Who We Serve, Architecture Principles, Value Drivers */}
      <TrustPositioning />

      {/* 3. Four Core Service Pillars */}
      <ServicesOverview />

      {/* 4. Industries & Verticals */}
      <IndustriesSection />

      {/* 5. Featured Projects & Interactive Concept Demonstrations */}
      <ProjectsShowcase />

      {/* 6. Five-Stage Engineering Methodology */}
      <ApproachProcess />

      {/* 7. Strong Conversion CTA */}
      <ContactSection />
    </>
  );
}
