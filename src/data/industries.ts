export interface IndustryVerticalData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  industryChallenges: string[];
  digitalSolutions: string[];
  keyOutcomes: string[];
  applicableServices: { title: string; href: string }[];
}

export const industriesData: IndustryVerticalData[] = [
  {
    id: "retail",
    slug: "retail",
    title: "Retail & E-Commerce",
    subtitle: "Digital Storefronts, Catalog Management & Omnichannel Ordering",
    description:
      "Transforming traditional retail and expanding online sales with fast product catalogs, custom cart checkout workflows, and unified order notification pipelines.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Cart abandonment caused by slow loading times or complicated multi-step checkouts",
      "Catalog management difficulties across varying product sizes, colors, and stock levels",
      "Lack of direct integration between online inquiries and store inventory",
    ],
    digitalSolutions: [
      "Sub-second Next.js digital storefronts with instant faceted search",
      "Streamlined single-page checkouts supporting local and international payment gateways",
      "Automated order confirmation and notification webhooks to internal teams",
    ],
    keyOutcomes: [
      "Faster page load times resulting in improved conversion rates",
      "Friction-free customer purchasing across mobile and desktop",
      "Centralized order management and enquiry tracking",
    ],
    applicableServices: [
      { title: "E-Commerce Development", href: "/services/ecommerce-development" },
      { title: "Website Development", href: "/services/website-development" },
    ],
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing & Logistics",
    subtitle: "Distributor Portals, Quotation Workflows & Operational Dashboards",
    description:
      "Modernizing industrial operations with digital product spec catalogs, automated B2B quote request pipelines, and operational visibility dashboards.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Reliance on outdated printed catalogs and unstructured email quote requests",
      "Slow turnaround times when pricing custom manufacturing orders",
      "Siloed production metrics causing delayed customer status updates",
    ],
    digitalSolutions: [
      "Interactive technical product spec catalogs with downloadable technical drawings",
      "Structured Request-for-Quotation (RFQ) portals capturing exact manufacturing specs",
      "Real-time operational dashboards tracking active orders and fulfillment stages",
    ],
    keyOutcomes: [
      "Accelerated sales quotation cycles from days to minutes",
      "Accurate technical specification collection without back-and-forth emails",
      "Clear status visibility for distributors and wholesale partners",
    ],
    applicableServices: [
      { title: "Custom Software Development", href: "/services/custom-software" },
      { title: "AI & Workflow Automation", href: "/services/ai-automation" },
    ],
  },
  {
    id: "education",
    slug: "education",
    title: "Education & EdTech",
    subtitle: "Learning Hubs, Course Portals & Student Enrollment Workflows",
    description:
      "Equipping educational institutions, academies, and training providers with accessible web platforms, structured curriculum catalogs, and seamless enrollment pipelines.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Fragmented course information across static brochures and slow registration pages",
      "High administrative overhead managing student admissions and inquiries manually",
      "Inaccessible digital platforms that fail accessibility standards on mobile",
    ],
    digitalSolutions: [
      "Modern, WCAG AA compliant educational portals with intuitive program guides",
      "Automated student enquiry and admission intake forms with document uploads",
      "Integrated scheduling for campus tours and online counseling sessions",
    ],
    keyOutcomes: [
      "Increased qualified student applicant inquiries",
      "Simplified admissions intake with structured applicant records",
      "Inclusive mobile-friendly learning resource access",
    ],
    applicableServices: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Custom Software Development", href: "/services/custom-software" },
    ],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Wellness",
    subtitle: "Patient Intake Systems, Service Discovery & Appointment Scheduling",
    description:
      "Creating accessible digital touchpoints for clinics, diagnostic centers, and wellness providers with clear service information, patient intake, and consultation booking.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Confusing medical service descriptions that overwhelm patients seeking care",
      "Phone line congestion during peak hours for basic appointment scheduling",
      "Patient data security and privacy compliance concerns",
    ],
    digitalSolutions: [
      "Clean, reassuring clinical service websites detailing treatments and doctors",
      "Interactive online consultation and appointment scheduling with time slot availability",
      "Confidential, encrypted intake forms with non-disclosure terms built in",
    ],
    keyOutcomes: [
      "Reduced reception call burden through 24/7 online booking",
      "Clear, accessible guidance for patients before visiting",
      "Confidential, compliant patient communication protocols",
    ],
    applicableServices: [
      { title: "Custom Software Development", href: "/services/custom-software" },
      { title: "Website Development", href: "/services/website-development" },
    ],
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality & Food Services",
    subtitle: "Interactive Digital Menus, Table Reservations & Guest Portals",
    description:
      "Elevating hospitality brands with high-visual interactive menu platforms, reservation scheduling, event catering inquiries, and guest feedback tools.",
    icon: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Unresponsive PDF menus that are unreadable on mobile screens and slow to load",
      "Missed private dining and event catering inquiries due to generic forms",
      "Dependence on third-party aggregator portals charging high commissions",
    ],
    digitalSolutions: [
      "Interactive digital menus with dietary filters and instant pricing updates",
      "Direct table reservation and event booking workflows without third-party fees",
      "Mobile-optimized photo galleries and location directions",
    ],
    keyOutcomes: [
      "Direct commission-free reservations and banquet inquiries",
      "Delightful mobile browsing experience for on-the-go diners",
      "Higher average inquiry value for weddings and private events",
    ],
    applicableServices: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "E-Commerce Development", href: "/services/ecommerce-development" },
    ],
  },
  {
    id: "professional-services",
    slug: "professional-services",
    title: "Financial & Professional Services",
    subtitle: "Consultancy Portals, Secure Client Workspaces & Lead Pipelines",
    description:
      "Establishing authority and trust for legal, financial, and management consulting firms with professional digital platforms and secure consultation scheduling.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    industryChallenges: [
      "Failing to project technical and institutional credibility to enterprise clients",
      "Lengthy back-and-forth scheduling consultation calls across time zones",
      "Secure handling of confidential client documents and NDAs",
    ],
    digitalSolutions: [
      "Authoritative, minimalist corporate websites emphasizing track record and capabilities",
      "Integrated Google Meet consultation scheduler with timezone conversion",
      "Strict confidentiality policies, NDA acknowledgments, and data security",
    ],
    keyOutcomes: [
      "Enhanced enterprise credibility and high-ticket client acquisition",
      "Elimination of scheduling friction for prospective advisory clients",
      "Full compliance with privacy standards and non-disclosure requirements",
    ],
    applicableServices: [
      { title: "Website Development", href: "/services/website-development" },
      { title: "Custom Software Development", href: "/services/custom-software" },
    ],
  },
];
