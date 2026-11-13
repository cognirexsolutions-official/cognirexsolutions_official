import React from "react";
import SinglePageWebsite from "../page";
import ScrollToSection from "@/components/common/ScrollToSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Solutions & Services | Cognirex Solutions",
  description:
    "Explore Cognirex engineering capabilities: Modern Web, Enterprise AI, Intelligent Automation, and Cloud Systems.",
};

export default function SolutionsPage() {
  return (
    <>
      <ScrollToSection sectionId="solutions" />
      <SinglePageWebsite />
    </>
  );
}
