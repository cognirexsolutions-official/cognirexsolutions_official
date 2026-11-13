import React from "react";
import SinglePageWebsite from "../page";
import ScrollToSection from "@/components/common/ScrollToSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cognirex Solutions",
  description:
    "Learn about Cognirex Solutions, our engineering philosophy, mission, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollToSection sectionId="about" />
      <SinglePageWebsite />
    </>
  );
}
