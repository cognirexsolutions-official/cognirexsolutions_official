import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceDetailsData } from "@/data/serviceDetails";
import { detailedProjectsData } from "@/data/detailedProjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const serviceRoutes = Object.keys(serviceDetailsData).map(
    (slug) => `/services/${slug}`
  );

  const projectRoutes = Object.keys(detailedProjectsData).map(
    (slug) => `/projects/${slug}`
  );

  const allRoutes = [...baseRoutes, ...serviceRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === ""
        ? "weekly"
        : route.startsWith("/services") || route.startsWith("/projects")
        ? "monthly"
        : "yearly",
    priority:
      route === ""
        ? 1.0
        : route === "/services" || route === "/projects"
        ? 0.9
        : route.startsWith("/services/")
        ? 0.85
        : 0.8,
  }));
}
