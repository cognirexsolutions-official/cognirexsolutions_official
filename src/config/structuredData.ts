export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cognirexsolutions.in/#organization",
      "name": "Cognirex Solutions",
      "alternateName": ["Cognirex", "Cognirex Solutions India"],
      "url": "https://cognirexsolutions.in",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://cognirexsolutions.in/#logo",
        "url": "https://cognirexsolutions.in/images/logo_main.png",
        "contentUrl": "https://cognirexsolutions.in/images/logo_main.png",
        "caption": "Cognirex Solutions Logo",
        "width": 735,
        "height": 660,
      },
      "image": "https://cognirexsolutions.in/images/logo_main.png",
      "description":
        "Cognirex Solutions is a modern technology and software engineering consultancy building digital products, custom software, AI-powered solutions, and automation systems that help businesses operate smarter.",
      "email": "hr@cognirexsolutions.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
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
          "name": "Global",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/company/cognirex-solutions",
        "https://x.com/cognirex",
        "https://github.com/cognirexsolutions-official",
      ],
      "knowsAbout": [
        "Website Development",
        "E-Commerce Engineering",
        "Custom Software Development",
        "Artificial Intelligence Solutions",
        "Workflow Automation",
        "Cloud Architecture",
        "Next.js Development",
        "Enterprise Systems Integration",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Engineering & AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
              "url": "https://cognirexsolutions.in/services/website-development",
              "description":
                "High-performance marketing websites, brand experiences, and digital portals engineered for reliability and SEO.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Development",
              "url": "https://cognirexsolutions.in/services/ecommerce-development",
              "description":
                "Custom digital storefronts, structured product catalogs, shopping carts, and secure payment integrations.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development",
              "url": "https://cognirexsolutions.in/services/custom-software",
              "description":
                "Tailored business applications, operational dashboards, customer portals, and unified API platforms.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Workflow Automation",
              "url": "https://cognirexsolutions.in/services/ai-automation",
              "description":
                "Production-grade AI assistants, RAG knowledge systems, and event-driven workflow automation pipelines.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cognirexsolutions.in/#website",
      "url": "https://cognirexsolutions.in",
      "name": "Cognirex Solutions",
      "description": "Engineering Digital Experiences That Move Businesses Forward.",
      "publisher": {
        "@id": "https://cognirexsolutions.in/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://cognirexsolutions.in/#localbusiness",
      "name": "Cognirex Solutions",
      "url": "https://cognirexsolutions.in",
      "logo": "https://cognirexsolutions.in/images/logo_main.png",
      "image": "https://cognirexsolutions.in/images/logo_main.png",
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD, EUR",
      "paymentAccepted": "Bank Transfer, Credit Card, Wire",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolhapur",
        "addressRegion": "Maharashtra",
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
    {
      "@type": "FAQPage",
      "@id": "https://cognirexsolutions.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Cognirex Solutions offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cognirex Solutions specializes in four core areas: Website Development, E-Commerce Development, Custom Software Development, and AI & Workflow Automation.",
          },
        },
        {
          "@type": "Question",
          "name": "Where is Cognirex Solutions based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Cognirex Solutions is headquartered in Kolhapur, Maharashtra, India, partnering with clients across India and globally across multiple time zones.",
          },
        },
        {
          "@type": "Question",
          "name": "Can Cognirex Solutions integrate AI into existing business software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. We design and deploy intelligent conversational assistants, automated lead and document pipelines, and custom machine learning workflows directly into existing web applications and databases.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I start a project or schedule a consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You can submit a project enquiry or schedule a 1-on-1 video consultation directly through our contact portal at https://cognirexsolutions.in/contact.",
          },
        },
      ],
    },
  ],
};
