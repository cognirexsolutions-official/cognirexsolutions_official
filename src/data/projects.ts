export interface ProjectDetailData {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string; // "Concept Demonstration"
  summary: string;
  problemStatement: string;
  proposedSolution: string;
  technicalApproach: string;
  architectureOverview: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  imageAlt: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  interfaceMockupType: "browser-service" | "storefront-catalog" | "dashboard-analytics" | "ai-chat" | "automation-flow";
}

export const conceptProjects: ProjectDetailData[] = [
  {
    id: "business-website-demo",
    slug: "business-website-demo",
    title: "Modern Brand Experience & Service Hub",
    category: "Website Development",
    badge: "Concept Demonstration",
    summary:
      "A fast, responsive web application engineered to showcase technical service offerings, explain architectural capabilities with clarity, and provide friction-free enquiry pathways.",
    problemStatement:
      "Many technology companies struggle with websites that look generic, load slowly due to heavy templates, and fail to communicate engineering depth. Visitors leave without understanding the core value proposition.",
    proposedSolution:
      "A tailored Next.js static and edge architecture with structured service hierarchies, responsive typography tokens, WCAG AA contrast compliance, and instant FormSubmit client enquiry routing.",
    technicalApproach:
      "Engineered using Next.js App Router with server-side rendering for critical metadata and zero-runtime client chunks for static reading zones. Interactive components (accordions, timeline, modals) are hydrated on demand.",
    architectureOverview:
      "Client Browser → Global Edge CDN (Cloudflare/Vercel) → Pre-rendered HTML/CSS → Lightweight React Hydration → AJAX Form Validation (Zod) → FormSubmit + Database API Handshake.",
    keyFeatures: [
      "Sub-second page loads globally via edge-cached static generation",
      "Interactive multi-step consultation and project enquiry forms",
      "Structured JSON-LD Organization and Service schemas for search engines",
      "Accessible navigation with sticky header offset and keyboard tab navigation",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Zod", "Lucide Icons", "Cloudflare Pages"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern Brand Experience & Service Hub — Concept Demonstration UI Preview",
    relatedServiceSlug: "website-development",
    relatedServiceName: "Website Development",
    interfaceMockupType: "browser-service",
  },
  {
    id: "digital-storefront-demo",
    slug: "digital-storefront-demo",
    title: "Interactive Product Catalog & Ordering",
    category: "E-Commerce Development",
    badge: "Concept Demonstration",
    summary:
      "An intuitive online commerce experience allowing customers to browse structured product catalogs, filter by specifications in real time, and request quotations or place orders.",
    problemStatement:
      "Off-the-shelf e-commerce templates often lack the flexibility to handle specialized technical catalogs, tiered commercial pricing, or dual payment/quotation workflows.",
    proposedSolution:
      "A custom commerce storefront architecture with faceted attribute filtering, responsive cart drawers, and dual checkout modes for retail purchasing and commercial quote generation.",
    technicalApproach:
      "Built with client-side reactive filtering and optimistic UI updates for cart items. Checkout integrates tokenized payment forms alongside a structured quote inquiry pipeline.",
    architectureOverview:
      "Catalog Engine → Client Faceted Filter State → Dynamic Product Grid → Reactive Cart Context → Tokenized Checkout / Quotation API Dispatch.",
    keyFeatures: [
      "Real-time product filtering across categories, pricing, and availability",
      "Slide-out reactive shopping bag with quantity controls and order summaries",
      "Dual purchasing pathways: Instant checkout or 'Request Commercial Quote'",
      "Mobile-optimized catalog browsing with high-resolution responsive posters",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Zod", "PostgreSQL", "Node.js"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Interactive Product Catalog & Ordering — Concept Demonstration UI Preview",
    relatedServiceSlug: "ecommerce-development",
    relatedServiceName: "E-Commerce Development",
    interfaceMockupType: "storefront-catalog",
  },
  {
    id: "business-dashboard-demo",
    slug: "business-dashboard-demo",
    title: "Operational Activity & Metrics Dashboard",
    category: "Custom Software Development",
    badge: "Concept Demonstration",
    summary:
      "A centralized web application providing business operators with real-time visibility into customer inquiries, consultation requests, and key operational metrics.",
    problemStatement:
      "Business managers often lose tracking when customer inquiries, job applications, and client requests are scattered across disconnected email threads and spreadsheets.",
    proposedSolution:
      "A unified administrative dashboard that consolidates inbound leads, meeting reservations, and application pipelines into clear filterable views with status indicators.",
    technicalApproach:
      "Constructed using modular dashboard components, role-based authorization guardrails, and responsive data tables with exportable summaries and live status changes.",
    architectureOverview:
      "Secure Auth Boundary (JWT/Cookie) → API Routing Layer → Database Aggregation → Reactive Dashboard State → Filterable Data Tables & Metrics Cards.",
    keyFeatures: [
      "KPI summary cards for weekly inquiries, booked consultations, and active leads",
      "Interactive data tables with search, status filtering, and detail modal views",
      "Role-based administrative views ensuring sensitive data isolation",
      "Direct response email triggers and status progression tracking",
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "MongoDB / PostgreSQL", "JWT Auth", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Operational Activity & Metrics Dashboard — Concept Demonstration UI Preview",
    relatedServiceSlug: "custom-software",
    relatedServiceName: "Custom Software Development",
    interfaceMockupType: "dashboard-analytics",
  },
  {
    id: "ai-assistant-demo",
    slug: "ai-assistant-demo",
    title: "Customer Support & Knowledge Assistant",
    category: "AI & Workflow Automation",
    badge: "Concept Demonstration",
    summary:
      "An intelligent conversational assistant capable of answering customer questions about offerings, retrieving technical documentation, and routing qualified leads to staff.",
    problemStatement:
      "Prospective clients visiting outside working hours often have specific questions that, when left unanswered, cause them to leave the site and contact competitors.",
    proposedSolution:
      "A grounded Retrieval-Augmented Generation (RAG) assistant embedded as an accessible conversational widget, strictly bounded by verified company documentation.",
    technicalApproach:
      "Vector embeddings are pre-computed over company documentation. When a user asks a query, semantic similarity search retrieves relevant facts, and an LLM synthesizes an accurate answer with zero hallucination.",
    architectureOverview:
      "User Message → Vector Embeddings Search → Context Injection & Safety Guardrails → LLM Generation → Lead Qualification Check → Instant Team Alert.",
    keyFeatures: [
      "Grounded knowledge retrieval strictly limited to approved company facts",
      "Automated lead capture when user expresses commercial consultation intent",
      "Safety guardrails preventing hallucinations or off-topic responses",
      "Graceful fallback to direct contact form when complex human assistance is required",
    ],
    techStack: ["Python", "TypeScript", "Next.js", "OpenAI / Claude API", "Vector Database", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Customer Support & Knowledge Assistant — Concept Demonstration UI Preview",
    relatedServiceSlug: "ai-automation",
    relatedServiceName: "AI & Workflow Automation",
    interfaceMockupType: "ai-chat",
  },
  {
    id: "workflow-automation-demo",
    slug: "workflow-automation-demo",
    title: "Automated Lead Routing & Notification Pipeline",
    category: "AI & Workflow Automation",
    badge: "Concept Demonstration",
    summary:
      "An event-driven automated pipeline that connects incoming website inquiries with internal notification channels and CRM records without manual data re-entry.",
    problemStatement:
      "Manual data transfer between web inquiry forms, internal team inboxes, and scheduling systems causes hours of delay in customer response times.",
    proposedSolution:
      "An automated event-driven webhook pipeline that ingests submissions, runs validation and spam checks, dispatches email notifications, and confirms time slots instantaneously.",
    technicalApproach:
      "Built with dual-dispatch redundancy (FormSubmit + internal serverless endpoint) ensuring 100% notification delivery even under transient server failures or network latency.",
    architectureOverview:
      "Client Submit → Client Validation (Zod) → Parallel Dual-Dispatch (FormSubmit AJAX + Serverless API) → Database Log → Direct Inbox Delivery.",
    keyFeatures: [
      "Sub-second submission processing and reference ID generation",
      "Zero-backend resilience using FormSubmit AJAX combined with database logging",
      "Direct inbox notification with reply-to header configured for one-click response",
      "Honeypot and IP rate limiting protecting the pipeline against automated spam",
    ],
    techStack: ["TypeScript", "Next.js API", "FormSubmit.co", "Webhooks", "Zod", "Node.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Automated Lead Routing Pipeline — Concept Demonstration UI Preview",
    relatedServiceSlug: "ai-automation",
    relatedServiceName: "AI & Workflow Automation",
    interfaceMockupType: "automation-flow",
  },
];
