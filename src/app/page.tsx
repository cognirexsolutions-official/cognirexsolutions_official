import React from "react";
import Hero from "@/components/sections/Hero";
import CapabilityStrip from "@/components/sections/CapabilityStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ApproachProcess from "@/components/sections/ApproachProcess";
import IndustriesSection from "@/components/sections/IndustriesSection";
import InnovationSection from "@/components/sections/InnovationSection";
import ContactSection from "@/components/sections/ContactSection";
import GlassySection from "@/components/ui/GlassySection";

export default function SinglePageWebsite() {
  return (
    <>
      {/* 1. Hero Section (Home Landing with Centered Cognirex Solutions Name Animation) */}
      <GlassySection id="hero-wrap">
        <Hero />
      </GlassySection>

      {/* Scrolling Capability Strip */}
      <CapabilityStrip />

      {/* 2. About Cognirex Solutions (Placed right after Home per user instruction) */}
      <GlassySection id="about-wrap">
        <AboutSection />
      </GlassySection>

      {/* 3. Solutions / Services Overview (with Single-Template Circular Rotating Passage) */}
      <GlassySection id="solutions-wrap">
        <ServicesOverview />
      </GlassySection>

      {/* 4. Why Cognirex Solutions */}
      <GlassySection id="why-wrap">
        <WhyChooseUs />
      </GlassySection>

      {/* 5. Our Approach Process */}
      <GlassySection id="approach-wrap">
        <ApproachProcess />
      </GlassySection>

      {/* 6. Industries & Sectors */}
      <GlassySection id="industries-wrap">
        <IndustriesSection />
      </GlassySection>

      {/* 7. Innovation & Responsible Tech */}
      <GlassySection id="innovation-wrap">
        <InnovationSection />
      </GlassySection>

      {/* 8. Contact & Consultation Scheduling (At the end per user instruction) */}
      <GlassySection id="contact-wrap">
        <ContactSection />
      </GlassySection>
    </>
  );
}
