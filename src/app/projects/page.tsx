import React from "react";
import SinglePageWebsite from "../page";
import ScrollToSection from "@/components/common/ScrollToSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Projects & Work | Cognirex Solutions",
  description:
    "Explore case studies and featured digital platforms built by Cognirex Solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollToSection sectionId="projects" />
      <SinglePageWebsite />
    </>
  );
}
