export interface NavDropdownItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItemConfig {
  title: string;
  href: string;
  isCta?: boolean;
  children?: NavDropdownItem[];
}

export const siteConfig = {
  name: "Cognirex Solutions",
  shortName: "Cognirex",
  tagline: "Intelligence Engineered. Innovation Delivered.",
  mainPositioning: "Engineering Digital Experiences That Move Businesses Forward.",
  description:
    "We build intelligent digital products, custom software, AI-powered solutions, and automation systems that help businesses operate smarter and scale faster.",
  url: "https://cognirexsolutions.in",
  ogImage: "https://cognirexsolutions.in/images/logo_main.png",

  // Demo flags removed for production readiness
  isDemoData: false,

  // Verified Corporate Contact Information
  contact: {
    email: "hr@cognirexsolutions.in",
    phone: "",
    location: "Kolhapur, Maharashtra, India",
    addressLine: "Kolhapur, Maharashtra, India",
    officeHours: "Monday–Friday, 9:30 AM–6:30 PM IST",
  },

  // Verified Social Links (Configuration Placeholders with exact handles)
  social: {
    linkedin: "https://www.linkedin.com/company/cognirex-solutions",
    twitter: "https://x.com/cognirex",
    github: "https://github.com/cognirexsolutions-official",
  },

  // Global Multi-Page Navigation Structure
  navItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Services",
      href: "/services",
      children: [
        {
          title: "Website Development",
          href: "/services/website-development",
          description: "High-performance marketing websites, brand experiences, and digital portals.",
          icon: "Globe",
        },
        {
          title: "E-Commerce Development",
          href: "/services/ecommerce-development",
          description: "Custom digital storefronts, ordering pipelines, and payment workflows.",
          icon: "ShoppingCart",
        },
        {
          title: "Custom Software Development",
          href: "/services/custom-software",
          description: "Scalable web applications, internal business tools, and operational dashboards.",
          icon: "Code2",
        },
        {
          title: "AI & Workflow Automation",
          href: "/services/ai-automation",
          description: "Intelligent conversational agents, RAG knowledge systems, and process pipelines.",
          icon: "Sparkles",
        },
      ],
    },
    { title: "Industries", href: "/industries" },
    { title: "Projects", href: "/projects" },
    { title: "Careers", href: "/careers" },
    { title: "Get in Touch", href: "/contact", isCta: true },
  ] as NavItemConfig[],

  // Global Multi-Column Footer Links
  footerLinks: {
    company: [
      { title: "About Cognirex", href: "/about" },
      { title: "Our Process", href: "/about#process" },
      { title: "Concept Showcases", href: "/projects" },
      { title: "Careers & Talent", href: "/careers" },
      { title: "Contact & Consultation", href: "/contact" },
    ],
    services: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "E-Commerce Development", href: "/services/ecommerce-development" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "AI & Workflow Automation", href: "/services/ai-automation" },
      { title: "All Services Overview", href: "/services" },
    ],
    industries: [
      { title: "Retail & E-Commerce", href: "/industries#retail" },
      { title: "Manufacturing & Logistics", href: "/industries#manufacturing" },
      { title: "Education & EdTech", href: "/industries#education" },
      { title: "Healthcare & Wellness", href: "/industries#healthcare" },
      { title: "Hospitality & Food", href: "/industries#hospitality" },
      { title: "Professional Services", href: "/industries#professional" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms and Conditions", href: "/terms" },
    ],
  },

  copyright: `© ${new Date().getFullYear()} Cognirex Solutions. All rights reserved.`,
};
