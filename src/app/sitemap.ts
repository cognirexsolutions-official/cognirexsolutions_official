import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url; // https://cognirexsolutions.in

  const staticRoutes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services/website-development", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/ecommerce-development", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/custom-software", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/ai-automation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.85, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.85, changeFrequency: "weekly" },
    { path: "/projects/business-website-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects/digital-storefront-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects/business-dashboard-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects/ai-assistant-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects/workflow-automation-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
  ];

  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
