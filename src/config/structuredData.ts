import { siteConfig } from "./site";

export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Core Organization Schema
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "alternateName": [siteConfig.shortName, "Cognirex Solutions Pvt Ltd", "Cognirex Tech"],
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#logo`,
        "url": `${siteConfig.url}/images/logo_main.png`,
        "contentUrl": `${siteConfig.url}/images/logo_main.png`,
        "caption": "Cognirex Solutions Official Logo",
        "width": 735,
        "height": 660,
      },
      "image": `${siteConfig.url}/images/logo_main.png`,
      "description": siteConfig.description,
      "email": siteConfig.contact.email,
      "telephone": siteConfig.contact.phone || undefined,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.addressLine,
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
        "postalCode": "416001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.705,
        "longitude": 74.2433,
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "Country",
          "name": "United States",
        },
        {
          "@type": "Country",
          "name": "United Kingdom",
        },
        {
          "@type": "Country",
          "name": "Global",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": siteConfig.contact.email,
          "contactType": "Customer Support & Inquiries",
          "areaServed": "Global",
          "availableLanguage": ["English", "Hindi", "Marathi"],
        },
      ],
      "sameAs": [
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
        siteConfig.social.github,
      ],
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "Artificial Intelligence",
          "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence",
        },
        {
          "@type": "Thing",
          "name": "Agentic AI & Intelligent Agents",
          "sameAs": "https://en.wikipedia.org/wiki/Intelligent_agent",
        },
        {
          "@type": "Thing",
          "name": "Retrieval-Augmented Generation (RAG)",
          "sameAs": "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
        },
        {
          "@type": "Thing",
          "name": "Web Application Development",
          "sameAs": "https://en.wikipedia.org/wiki/Web_development",
        },
        {
          "@type": "Thing",
          "name": "Next.js Framework",
          "sameAs": "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          "@type": "Thing",
          "name": "Business Process & Workflow Automation",
          "sameAs": "https://en.wikipedia.org/wiki/Business_process_automation",
        },
        {
          "@type": "Thing",
          "name": "Cloud Computing & Serverless Architecture",
          "sameAs": "https://en.wikipedia.org/wiki/Cloud_computing",
        },
        "Full-Stack Software Engineering",
        "Enterprise Web Portals",
        "API Integration & Microservices",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cognirex Engineering & Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Modern Web & Digital Presence Development",
              "description":
                "Engineering high-speed, SEO-optimized, responsive websites and client portals built with Next.js, React, and Tailwind CSS.",
              "provider": { "@id": `${siteConfig.url}/#organization` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Artificial Intelligence & Intelligent Automation",
              "description":
                "Custom AI agents, LLM integrations, retrieval-augmented knowledge bases, and event-driven workflow automation.",
              "provider": { "@id": `${siteConfig.url}/#organization` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Enterprise Software & Cloud Applications",
              "description":
                "Scalable internal business dashboards, operations tracking tools, API integrations, and secure role-based portals.",
              "provider": { "@id": `${siteConfig.url}/#organization` },
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Platforms & Digital Storefronts",
              "description":
                "End-to-end digital commerce experiences, product catalogs, payment workflows, and automated customer notifications.",
              "provider": { "@id": `${siteConfig.url}/#organization` },
            },
          },
        ],
      },
    },

    // 2. LocalBusiness / ProfessionalService Schema (Local SEO: Kolhapur, Maharashtra, India)
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#localbusiness`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/images/logo_main.png`,
      "image": `${siteConfig.url}/images/logo_main.png`,
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD, EUR, GBP",
      "paymentAccepted": "Bank Transfer, Credit Card, UPI",
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.addressLine,
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
        "postalCode": "416001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.705,
        "longitude": 74.2433,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "18:30",
        },
      ],
    },

    // 3. WebSite Schema with Sitelinks SearchBox
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": siteConfig.name,
      "description": siteConfig.tagline,
      "publisher": {
        "@id": `${siteConfig.url}/#organization`,
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteConfig.url}/#solutions`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 4. FAQPage Schema for Rich Search Snippets in SERP
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What technology services does Cognirex Solutions offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cognirex Solutions delivers full-cycle digital solutions including modern responsive website development, custom web applications, enterprise software architectures, intelligent AI automation, and e-commerce platforms.",
          },
        },
        {
          "@type": "Question",
          "name": "Where is Cognirex Solutions located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cognirex Solutions is headquartered in Kolhapur, Maharashtra, India. We partner with clients locally, across Maharashtra, nationwide in India, and globally.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Cognirex Solutions integrate AI and automated workflows into our existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We specialize in custom AI integrations including smart customer service assistants, RAG knowledge bases, automated document processing, CRM webhook pipelines, and internal AI agents.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Cognirex Solutions manage software projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "We follow a disciplined 5-stage engineering lifecycle: Discovery & Requirements Assessment, Architecture & Solution Design, Development & Rapid Prototyping, Integration & Quality Testing, and Deployment & Continuous Support.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I request a project proposal or consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You can submit a project enquiry directly through our website contact form or schedule an online video consultation. Our engineering team reviews all requests within 24 hours.",
          },
        },
      ],
    },
  ],
};

// Helper for generating page-level breadcrumbs
export function generateBreadcrumbJsonLd(
  breadcrumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.path.startsWith("http")
        ? crumb.path
        : `${siteConfig.url}${crumb.path}`,
    })),
  };
}
