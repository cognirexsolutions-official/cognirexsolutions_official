export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cognirexsolutions.com/#organization",
      "name": "Cognirex Solutions",
      "alternateName": ["Cognirex", "Cognirex Solutions Pvt Ltd"],
      "url": "https://cognirexsolutions.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://cognirexsolutions.com/#logo",
        "url": "https://cognirexsolutions.com/images/logo_main.png",
        "contentUrl": "https://cognirexsolutions.com/images/logo_main.png",
        "caption": "Cognirex Solutions Logo",
        "width": 735,
        "height": 660,
      },
      "image": "https://cognirexsolutions.com/images/logo_main.png",
      "description": "Cognirex Solutions is a premium technology consultancy engineering modern web applications, scalable cloud software, AI workflows, and intelligent business automation.",
      "email": "contact@cognirexsolutions.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.209,
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
        "https://github.com/cognirex-solutions",
      ],
      "knowsAbout": [
        "Web Application Development",
        "Artificial Intelligence Solutions",
        "Agentic AI & LLMs",
        "Machine Learning",
        "Intelligent Process Automation",
        "Cloud Architecture",
        "E-Commerce Engineering",
        "Enterprise Software Solutions",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Presence & Web Platforms",
              "description": "High-performance websites, portals, and e-commerce platforms engineered with modern frameworks.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software & Enterprise Architecture",
              "description": "Robust backend systems, microservices, cloud applications, and API platforms built to scale.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Autonomous Automation",
              "description": "Production-grade AI assistants, workflow automation, and custom machine learning pipelines.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cognirexsolutions.com/#website",
      "url": "https://cognirexsolutions.com",
      "name": "Cognirex Solutions",
      "description": "Intelligence Engineered. Innovation Delivered.",
      "publisher": {
        "@id": "https://cognirexsolutions.com/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://cognirexsolutions.com/#localbusiness",
      "name": "Cognirex Solutions",
      "url": "https://cognirexsolutions.com",
      "logo": "https://cognirexsolutions.com/images/logo_main.png",
      "image": "https://cognirexsolutions.com/images/logo_main.png",
      "priceRange": "$$",
      "currenciesAccepted": "INR, USD, EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.209,
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
  ],
};

