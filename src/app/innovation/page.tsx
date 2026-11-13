import React from "react";
import SinglePageWebsite from "../page";
import ScrollToSection from "@/components/common/ScrollToSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation & Labs | Cognirex Solutions",
  description:
    "Explore the innovative architectures and AI demonstrations engineered by Cognirex Solutions.",
};

export default function InnovationPage() {
  return (
    <>
      <ScrollToSection sectionId="projects" />
      <SinglePageWebsite />
    </>
  );
}
