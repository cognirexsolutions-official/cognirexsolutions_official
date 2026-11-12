export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: string;
  businessProblem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  ourSolution: {
    title: string;
    description: string;
    benefits: string[];
  };
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  technologyApproach: {
    title: string;
    description: string;
    stack: string[];
  };
  developmentProcess: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  "website-development": {
    slug: "website-development",
    title: "Website & Digital Presence Engineering",
    shortTitle: "Website Development",
    shortDescription: "High-performance, search-optimized web applications and company storefronts engineered with Next.js, TypeScript, and modern accessibility standards.",
    heroBadge: "Digital Presence Engineering",
    heroHeadline: "Modern Web Experiences Engineered for Speed and Conversion",
    heroSubheadline: "We build fast, accessible, responsive websites that articulate your value proposition, engage prospective clients, and streamline customer conversion pathways.",
    icon: "Globe",
    businessProblem: {
      title: "The Pitfalls of Generic, Outdated Websites",
      description: "Slow load times, unresponsive mobile design, poor SEO structure, and confusing navigation cause prospective clients to abandon your site before understanding your value.",
      painPoints: [
        "Sluggish page speeds hurting Google search visibility and user retention",
        "Rigid template limitations that fail to reflect modern brand credibility",
        "Cluttered layouts lacking friction-free enquiry and lead conversion pathways",
        "Fragile codebases vulnerable to security issues and maintenance headaches"
      ]
    },
    ourSolution: {
      title: "Engineered Architecture, Purposeful User Journeys",
      description: "We craft custom web applications utilizing modern component architectures (Next.js App Router, Tailwind CSS, TypeScript) focused on sub-second load times, intuitive information architecture, and structured schema.",
      benefits: [
        "Blazing fast performance with optimized Core Web Vitals",
        "Semantic, accessible HTML adhering to WCAG standards",
        "Modern responsive layouts designed specifically for mobile, tablet, and ultra-wide screens",
        "Built-in structured data and SEO architecture to maximize organic discovery"
      ]
    },
    capabilities: [
      {
        title: "Enterprise Brand Platforms",
        description: "B2B and corporate websites engineered to communicate complex services with clarity and authority.",
        deliverables: ["Custom Information Architecture", "Interactive Component Systems", "Multi-Page Workflows", "Brand Storytelling"]
      },
      {
        title: "High-Conversion Service Pages",
        description: "Dedicated conversion landing pages built to turn traffic into qualified inquiries.",
        deliverables: ["A/B Testing Readiness", "Frictionless Forms", "Micro-Interactions", "Dynamic Inquiry Routing"]
      },
      {
        title: "Technical Documentation & Resource Portals",
        description: "Structured content portals providing clients with searchable guides, specifications, and whitepapers.",
        deliverables: ["Fast Client-Side Filtering", "Markdown/CMS Integration", "Algolia/Full-Text Search", "Download Gateways"]
      }
    ],
    technologyApproach: {
      title: "Our Modern Frontend Stack",
      description: "We steer clear of bloated legacy frameworks in favor of clean, maintainable, scalable web technologies.",
      stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenNext / Vercel Edge", "Semantic HTML5"]
    },
    developmentProcess: [
      { step: "01", title: "Information Architecture", desc: "Mapping user personas, primary conversion paths, and site structure." },
      { step: "02", title: "Interactive Prototyping", desc: "Crafting polished component hierarchies and responsive wireframes." },
      { step: "03", title: "Type-Safe Engineering", desc: "Implementing clean React 19 components with strict TypeScript types." },
      { step: "04", title: "Performance & SEO Audit", desc: "Rigorous verification of Core Web Vitals, contrast, and structured JSON-LD." },
      { step: "05", title: "Production Deployment", desc: "Automated CI/CD pipelines deploying to edge CDNs with sub-second TTFB." }
    ],
    faqs: [
      {
        question: "How long does a custom website build usually take?",
        answer: "A focused corporate or service website typically takes 2 to 4 weeks from discovery to production deployment, depending on content depth and custom functional requirements."
      },
      {
        question: "Can we update content without needing a developer each time?",
        answer: "Yes. We configure flexible CMS integrations or structured content models allowing your team to update copy, services, and assets seamlessly."
      },
      {
        question: "Will our website be optimized for mobile devices and search engines?",
        answer: "Every single page is engineered mobile-first with responsive breakpoints from 360px up to 1920px. We integrate canonical tags, Open Graph tags, JSON-LD schema, and sitemaps out of the box."
      }
    ]
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    title: "E-Commerce & Digital Storefront Platforms",
    shortTitle: "E-Commerce Development",
    shortDescription: "Custom online storefronts, digital product catalogs, seamless checkout experiences, and payment integrations built for scalability.",
    heroBadge: "Digital Commerce Architecture",
    heroHeadline: "Scalable E-Commerce Engineered for Smooth Transactions",
    heroSubheadline: "From structured product catalogs to friction-free checkout pipelines, we engineer digital storefronts that turn visitors into loyal buyers.",
    icon: "ShoppingCart",
    businessProblem: {
      title: "High Abandonment & Clunky Checkout Workflows",
      description: "Cluttered catalog navigation, sluggish product filtering, and cumbersome multi-step checkouts drive prospective customers away to competitors.",
      painPoints: [
        "High cart abandonment rates from complicated checkout steps",
        "Slow product search and filter lag during peak traffic events",
        "Disconnected inventory and payment notification bottlenecks",
        "Poor mobile storefront experiences causing dropped orders"
      ]
    },
    ourSolution: {
      title: "Frictionless Catalogs, Resilient Checkout Pipelines",
      description: "We build intuitive commerce interfaces with sub-second product filtering, clear variant pickers, transparent cart states, and resilient payment gateway integrations.",
      benefits: [
        "Instant client-side catalog filtering and faceted search",
        "Streamlined single-page or progressive checkouts",
        "Secure payment integrations with automated customer notifications",
        "Modular architecture ready for ERP and CRM syncing"
      ]
    },
    capabilities: [
      {
        title: "B2C & B2B Storefronts",
        description: "Engaging consumer shops and robust wholesale order portals with custom pricing tiers.",
        deliverables: ["Dynamic Catalogs", "Tiered Pricing", "Inventory Sync", "Order History"]
      },
      {
        title: "Custom Cart & Checkout Architecture",
        description: "Frictionless checkout flows designed to maximize transaction completion rates.",
        deliverables: ["One-Page Checkout", "Payment Webhooks", "Auto Address Validation", "Abandoned Cart Logging"]
      },
      {
        title: "Order & Inventory Management Integration",
        description: "Connecting your storefront with payment providers, fulfillment logistics, and accounting tools.",
        deliverables: ["Stripe / Razorpay / PayPal", "Webhook Pipelines", "Automated Invoicing", "Real-Time Tracking"]
      }
    ],
    technologyApproach: {
      title: "Commerce & API Integrations",
      description: "We integrate proven, secure payment processors and headless commerce backends with our frontend architectures.",
      stack: ["Next.js Commerce", "TypeScript", "Stripe / Razorpay APIs", "Tailwind CSS", "Zod Validation", "PostgreSQL / MongoDB"]
    },
    developmentProcess: [
      { step: "01", title: "Catalog & Checkout Scoping", desc: "Defining product attributes, payment gateways, and shipping rules." },
      { step: "02", title: "UI/UX Storefront Design", desc: "Creating intuitive product discovery and cart interaction flows." },
      { step: "03", title: "Gateway Integration", desc: "Implementing PCI-compliant checkout sessions and webhook handling." },
      { step: "04", title: "Order Pipeline Testing", desc: "End-to-end sandbox testing of transactions, failed payment recovery, and notifications." },
      { step: "05", title: "Launch & Monitoring", desc: "Deploying storefront with analytics tracking and real-time inventory hooks." }
    ],
    faqs: [
      {
        question: "Which payment gateways can be integrated?",
        answer: "We support Stripe, Razorpay, PayPal, Cashfree, and custom bank gateways with webhooks for automated order confirmation."
      },
      {
        question: "Can we support custom B2B bulk orders and inquiries?",
        answer: "Yes, we frequently build hybrid storefronts allowing direct purchases as well as structured RFQ (Request for Quote) flows for wholesale buyers."
      }
    ]
  },

  "custom-software": {
    slug: "custom-software",
    title: "Custom Software & Internal Business Applications",
    shortTitle: "Custom Software",
    shortDescription: "Tailored operational dashboards, client portals, workflow management systems, and secure API microservices engineered for business efficiency.",
    heroBadge: "Enterprise Software Engineering",
    heroHeadline: "Software Engineered Around Your Exact Business Workflows",
    heroSubheadline: "Eliminate repetitive spreadsheets and manual bottlenecks with custom web applications, executive dashboards, and secure role-based portals.",
    icon: "Code2",
    businessProblem: {
      title: "The Chaos of Disconnected Spreadsheets & Rigid Tools",
      description: "Generic off-the-shelf software rarely fits proprietary business processes, forcing teams into tedious double-entry, version conflicts, and blind spots.",
      painPoints: [
        "Critical operational data scattered across fragile spreadsheets",
        "Lack of real-time visibility into active customer orders and project milestones",
        "No granular role-based permissions to safeguard sensitive business data",
        "Excessive manual effort copying data between disconnected systems"
      ]
    },
    ourSolution: {
      title: "Centralized Applications Built for Operational Clarity",
      description: "We engineer purpose-built software platforms with intuitive dashboards, strict validation rules, audit logging, and granular user roles.",
      benefits: [
        "Single source of truth for business metrics and daily operations",
        "Role-based access control (RBAC) ensuring security and compliance",
        "Automated notifications and status transitions across departments",
        "Clean REST & GraphQL APIs to bridge third-party tools"
      ]
    },
    capabilities: [
      {
        title: "Executive & Operational Dashboards",
        description: "Interactive data visualizations and KPI trackers giving leadership instant clarity on business performance.",
        deliverables: ["Real-Time Charts", "Activity Feeds", "Exportable Reports (CSV/PDF)", "Filterable Data Grids"]
      },
      {
        title: "Client & Vendor Portals",
        description: "Secure, authenticated customer gateways for tracking projects, viewing invoices, and approving deliverables.",
        deliverables: ["Magic Link / OAuth Login", "Document Sharing", "Status Timelines", "Secure Messaging"]
      },
      {
        title: "Custom Workflow & Inventory Tools",
        description: "Internal tools tailored to your operational lifecycle, from quotation generation to fulfillment tracking.",
        deliverables: ["State Machine Logic", "Multi-Step Approvals", "Audit Logging", "Automated Reminders"]
      }
    ],
    technologyApproach: {
      title: "Enterprise Web Architecture",
      description: "We utilize proven full-stack patterns ensuring long-term maintainability, security, and effortless scaling.",
      stack: ["Next.js Fullstack", "Node.js / Express", "TypeScript", "PostgreSQL / Prisma / MongoDB", "Tailwind CSS", "JWT / NextAuth"]
    },
    developmentProcess: [
      { step: "01", title: "Workflow Mapping", desc: "Detailed analysis of your team's existing manual procedures and data models." },
      { step: "02", title: "Database & Schema Design", desc: "Structuring relational models, access permissions, and API contracts." },
      { step: "03", title: "Iterative Sprint Builds", desc: "Bi-weekly functional releases with continuous stakeholder review." },
      { step: "04", title: "Security & Role Testing", desc: "Penetration testing, rate limiting, and permission boundary validation." },
      { step: "05", title: "Onboarding & Handover", desc: "User training, comprehensive API documentation, and SLA maintenance." }
    ],
    faqs: [
      {
        question: "Can our existing database or spreadsheets be migrated?",
        answer: "Yes. We regularly design data migration scripts to cleanly import legacy records into structured SQL or NoSQL databases."
      },
      {
        question: "How do you ensure data security in custom web applications?",
        answer: "We implement industry standard encryption (TLS/HTTPS, salted bcrypt hashing), JWT authentication, strict input sanitation, and scoped role permissions."
      }
    ]
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI, Automation & Intelligent Systems",
    shortTitle: "AI & Automation",
    shortDescription: "Custom AI assistants, RAG knowledge bases, intelligent document processing, and event-driven automation pipelines built for high reliability.",
    heroBadge: "Intelligent Systems Engineering",
    heroHeadline: "Practical Artificial Intelligence & Automation for Real-World Workflows",
    heroSubheadline: "We engineer AI assistants, RAG knowledge retrieval systems, and event-driven pipelines that automate repetitive tasks and empower your team.",
    icon: "Sparkles",
    businessProblem: {
      title: "Operational Drag & Repetitive Knowledge Bottlenecks",
      description: "Support teams spend hours answering the exact same questions, while engineers and staff lose time manually parsing documents and re-keying data.",
      painPoints: [
        "Delayed customer support response times outside business hours",
        "Valuable institutional knowledge trapped in disorganized PDFs and documents",
        "Hours wasted on manual data entry and routine status updates",
        "Fear of unreliable AI hallucinations in business-critical conversations"
      ]
    },
    ourSolution: {
      title: "Grounded AI Systems with Human-in-the-Loop Safeguards",
      description: "We engineer domain-specific AI workflows utilizing Retrieval-Augmented Generation (RAG). The assistant only answers using verified company documents, cites its sources, and gracefully hands off complex inquiries to your staff.",
      benefits: [
        "Instant, 24/7 client query responses grounded strictly in your documentation",
        "Automated lead qualification and triage without human delay",
        "Zero data hallucinations through deterministic guardrails",
        "Seamless webhook connections linking forms, CRMs, and email inboxes"
      ]
    },
    capabilities: [
      {
        title: "Domain Knowledge Assistants (RAG)",
        description: "Intelligent conversational interfaces that retrieve verified answers from your product manuals, FAQs, and policies.",
        deliverables: ["Vector Embeddings", "Document Ingestion", "Source Citations", "Human Escalation Triggers"]
      },
      {
        title: "Event-Driven Automation Pipelines",
        description: "Automated event workflows connecting lead capture, CRM updates, internal Slack alerts, and calendar scheduling.",
        deliverables: ["Webhook Integrations", "Error Recovery Logic", "Multi-App Orchestration", "Async Job Queues"]
      },
      {
        title: "Intelligent Document Parsing",
        description: "Extracting structured data from invoices, applications, or resumes and delivering it directly into your database.",
        deliverables: ["OCR & Text Extraction", "JSON Normalization", "Automated Validation", "Confidence Scoring"]
      }
    ],
    technologyApproach: {
      title: "AI & Orchestration Stack",
      description: "We combine leading foundation models with deterministic software engineering and vector databases.",
      stack: ["OpenAI / Gemini APIs", "Pinecone / pgvector", "LangChain / LlamaIndex", "Node.js / Python", "Next.js", "Zod Structured Outputs"]
    },
    developmentProcess: [
      { step: "01", title: "Feasibility & Use-Case Scoping", desc: "Pinpointing the high-ROI repetitive workflows suitable for automation." },
      { step: "02", title: "Knowledge Ingestion & Chunking", desc: "Structuring and embedding your documentation into a secure vector store." },
      { step: "03", title: "Prompt & Guardrail Engineering", desc: "Setting boundary rules, output schemas, and fallback conditions." },
      { step: "04", title: "Evaluation & Rigorous Testing", desc: "Stress-testing accuracy against 100+ simulated edge cases." },
      { step: "05", title: "Deployment & Telemetry", desc: "Production rollout with logging, latency monitoring, and continuous tuning." }
    ],
    faqs: [
      {
        question: "How do you prevent the AI from making up inaccurate answers (hallucinations)?",
        answer: "We use Retrieval-Augmented Generation (RAG). The model is strictly instructed to answer ONLY from retrieved reference chunks. If the answer is not in the source documents, it states so and routes the user to human support."
      },
      {
        question: "Is our proprietary business data used to train public AI models?",
        answer: "No. Enterprise API agreements explicitly guarantee that customer data sent via APIs is never used for foundation model training or retained beyond the request lifecycle."
      }
    ]
  }
};

