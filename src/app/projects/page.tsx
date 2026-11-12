import React from "react";
import type { Metadata } from "next";
import ProjectsPortfolioClient from "./ProjectsPortfolioClient";

export const metadata: Metadata = {
  title: "Concept Demonstrations & Project Showcases",
  description:
    "Explore Cognirex Solutions' technical concept demonstrations across modern brand websites, custom e-commerce storefronts, business operational dashboards, and AI automation systems.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Concept Demonstrations & Architecture Showcases — Cognirex Solutions",
    description:
      "Explore tangible technical demonstrations showcasing our UI/UX design, full-stack engineering, and AI automation capabilities.",
    url: "https://cognirexsolutions.in/projects",
    images: ["/images/logo_main.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsPortfolioClient />;
}
