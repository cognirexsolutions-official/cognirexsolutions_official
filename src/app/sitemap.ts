import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Canonical indexable routes for search engine crawlers
  const routes = [
    {
      route: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      route: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      route: "/solutions",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      route: "/projects",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      route: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      route: "/careers",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      route: "/privacy-policy",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      route: "/terms",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];

  return routes.map((item) => ({
    url: `${siteConfig.url}${item.route}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
