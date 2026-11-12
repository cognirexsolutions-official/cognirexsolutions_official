export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DetailedServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  heroVisual: string;
  businessChallenges: {
    title: string;
    description: string;
  }[];
  proposedSolutions: {
    title: string;
    description: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  techStack: string[];
  methodologySteps: {
    number: string;
    title: string;
    description: string;
  }[];
  demonstrationSlug?: string;
  demonstrationTitle?: string;
  faqs: ServiceFAQ[];
}

export const servicesData: DetailedServiceData[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    tagline: "High-performance marketing websites, brand experiences, and digital portals engineered for credibility and conversion.",
    badge: "Core Engineering Pillar",
    shortDescription:
      "We design and build clean, responsive, fast websites that articulate your value proposition, engage visitors, and turn traffic into qualified inquiries.",
    longDescription:
      "A company website is often the first impression a client, partner, or investor has of your business. We engineer modern websites using modern component-driven architectures like Next.js and Tailwind CSS. Every site we build is optimized for fast load times, semantic SEO, accessibility (WCAG AA), and effortless content updates without ongoing technical overhead.",
    icon: "Globe",
    heroVisual: "code-browser",
    businessChallenges: [
      {
        title: "Slow Performance & High Bounce Rates",
        description: "Legacy websites burdened by monolithic CMSs or heavy plugins frustrate visitors and hurt organic search rankings.",
      },
      {
        title: "Fragmented Mobile Experiences",
        description: "Desktop-centric layouts that don't scale cleanly to modern mobile devices cause immediate abandonment.",
      },
      {
        title: "Weak Inbound Lead Generation",
        description: "Unclear calls to action and friction-filled enquiry forms result in lost opportunities despite existing visitor traffic.",
      },
      {
        title: "Difficult Content Updating",
        description: "Teams get blocked when simple text, case studies, or service adjustments require expensive developer interventions.",
      },
    ],
    proposedSolutions: [
      {
        title: "Sub-Second Static & Edge Delivery",
        description: "We deploy modern Next.js static and edge architectures that load virtually instantaneously worldwide.",
      },
      {
        title: "Responsive-First Design Systems",
        description: "Every component is meticulously tested across screen sizes from 360px mobile viewports to large 4K monitors.",
      },
      {
        title: "Conversion-Focused Form Architecture",
        description: "Clean, frictionless enquiry pathways with real-time validation, honeypot spam protection, and instant inbox delivery.",
      },
      {
        title: "Modular Content Management",
        description: "Structured content layers that allow non-technical team members to manage offerings, legal terms, and messaging reliably.",
      },
    ],
    capabilities: [
      {
        title: "Corporate & Brand Websites",
        description: "Tailored brand platforms that communicate engineering authority, corporate vision, and commercial reliability.",
        deliverables: ["Custom UI design", "Interactive typography system", "Multi-page information architecture", "Brand alignment"],
      },
      {
        title: "Technical Web Applications",
        description: "Complex customer-facing portals, service hubs, and interactive calculation or configuration tools.",
        deliverables: ["Component-driven architecture", "API integration", "State management", "Cross-browser testing"],
      },
      {
        title: "Technical SEO & Core Web Vitals",
        description: "Full programmatic SEO setup, JSON-LD structured data, clean metadata hierarchy, and high performance scores.",
        deliverables: ["Schema.org markup", "Automated XML sitemaps", "Canonical URL management", "Lighthouse optimization"],
      },
      {
        title: "Accessibility (WCAG 2.2 AA)",
        description: "Compliant markup with semantic headings, visible keyboard focus indicators, screen reader labels, and high-contrast color systems.",
        deliverables: ["Keyboard navigation", "Accessible form inputs", "ARIA labels", "Color contrast auditing"],
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel / Cloudflare", "Node.js", "Schema.org"],
    methodologySteps: [
      { number: "01", title: "Information Architecture", description: "Mapping user journeys, sitemaps, and core content hierarchies." },
      { number: "02", title: "UI/UX Engineering", description: "Crafting wireframes and production-ready designs adhering to brand tokens." },
      { number: "03", title: "Full-Stack Development", description: "Building accessible components with Next.js, TypeScript, and clean code." },
      { number: "04", title: "Performance & SEO Audit", description: "Validating Core Web Vitals, metadata, structured data, and security headers." },
      { number: "05", title: "Production Deployment", description: "Deploying to edge infrastructure with continuous delivery and uptime monitoring." },
    ],
    demonstrationSlug: "business-website-demo",
    demonstrationTitle: "Modern Brand Experience & Service Hub",
    faqs: [
      {
        question: "How long does a custom website project typically take?",
        answer: "Most custom corporate websites take between 3 to 6 weeks from initial architecture and design through development, quality audits, and deployment, depending on content volume and custom workflows.",
      },
      {
        question: "Will our website be optimized for mobile and search engines from day one?",
        answer: "Yes. Every website is built mobile-first and includes comprehensive technical SEO: structured JSON-LD schemas, automated sitemaps, canonical tags, Open Graph cards, and optimized Core Web Vitals.",
      },
      {
        question: "Can we manage content updates ourselves without coding?",
        answer: "Yes. We configure clean content architectures and provide intuitive CMS portals so your team can edit service descriptions, announcements, and company details without touching the source code.",
      },
      {
        question: "Where will our website be hosted?",
        answer: "We typically deploy to high-availability global edge platforms such as Cloudflare or Vercel, ensuring high security, automatic HTTPS, and low latency across international regions.",
      },
    ],
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    tagline: "Custom digital storefronts, structured product catalogs, and secure ordering workflows that scale.",
    badge: "Commercial Commerce Pillar",
    shortDescription:
      "We build tailored online shopping and B2B ordering experiences that help customers explore products, configure selections, and complete transactions smoothly.",
    longDescription:
      "Modern e-commerce requires far more than pre-made generic templates. We build custom commerce architectures that integrate catalog management, dynamic attribute filtering, shopping carts, quotation requests, and payment workflows. Whether you sell directly to consumers or manage wholesale and B2B orders with specialized terms, we create digital storefronts built to scale.",
    icon: "ShoppingCart",
    heroVisual: "cart-dashboard",
    businessChallenges: [
      {
        title: "High Checkout Abandonment",
        description: "Clunky multi-step checkouts and slow payment gateways lead to lost revenue at the critical final step.",
      },
      {
        title: "Inefficient Product Browsing",
        description: "Static catalogs without instantaneous filtering make it frustrating for buyers to find what they need.",
      },
      {
        title: "B2B Ordering Friction",
        description: "Businesses handling customized orders struggle when standard off-the-shelf platforms cannot accommodate quotation-based sales.",
      },
      {
        title: "Inventory & Order Blind Spots",
        description: "Disconnected order management leads to communication delays and manual errors between customers and operations.",
      },
    ],
    proposedSolutions: [
      {
        title: "Streamlined Payment & Invoicing",
        description: "Seamless integrations with trusted payment processors like Stripe and Razorpay, supporting cards, UPI, net banking, and wire transfers.",
      },
      {
        title: "Instant Multi-Attribute Filtering",
        description: "Faceted search that lets buyers narrow down products by category, specifications, pricing, and availability in real time.",
      },
      {
        title: "Dual B2C & B2B Inquiry Flows",
        description: "Support for direct credit card transactions as well as structured 'Request a Quote' and wholesale inquiries.",
      },
      {
        title: "Automated Order Notifications",
        description: "Instant email and webhook notifications to your operations team whenever an order or quotation request is submitted.",
      },
    ],
    capabilities: [
      {
        title: "Custom Digital Storefronts",
        description: "Tailored e-commerce experiences reflecting your brand aesthetic with smooth responsive navigation.",
        deliverables: ["Product page layouts", "Cart drawers", "Secure checkout", "Search & filtering"],
      },
      {
        title: "B2B Wholesale & Quote Portals",
        description: "Specialized workflows for business-to-business commerce, custom pricing tiers, and formal quotation generation.",
        deliverables: ["Request for quotation", "Custom volume tiers", "Direct inquiry forms", "Downloadable spec sheets"],
      },
      {
        title: "Payment Gateway Integration",
        description: "PCI-compliant payment processing supporting credit cards, debit cards, net banking, UPI, and international currencies.",
        deliverables: ["Stripe / Razorpay setups", "Webhook handling", "Payment confirmation emails", "Receipt generation"],
      },
      {
        title: "Inventory & Catalog Architecture",
        description: "Organized database schemas for product variants, SKU management, stock status, and categorization.",
        deliverables: ["Relational schemas", "Media asset management", "Variant handling", "Export/import capabilities"],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Razorpay", "PostgreSQL", "MongoDB", "Node.js"],
    methodologySteps: [
      { number: "01", title: "Commerce Discovery", description: "Auditing product catalogs, fulfillment workflows, and payment requirements." },
      { number: "02", title: "Catalog & Data Modeling", description: "Structuring variants, pricing logic, categories, and inventory states." },
      { number: "03", title: "Storefront & Cart Engineering", description: "Developing responsive product grids, search, cart, and checkout workflows." },
      { number: "04", title: "Payment & Security Integration", description: "Implementing tokenized checkout, SSL encryption, and webhook endpoints." },
      { number: "05", title: "Load Testing & Launch", description: "Testing simulated traffic, high-concurrency order placement, and analytics tracking." },
    ],
    demonstrationSlug: "digital-storefront-demo",
    demonstrationTitle: "Interactive Product Catalog & Ordering",
    faqs: [
      {
        question: "Can we support both online card payments and quote requests?",
        answer: "Yes. We frequently build hybrid platforms where retail buyers can pay directly via card/UPI, while enterprise or wholesale buyers can select items and submit a formal 'Request for Quotation'.",
      },
      {
        question: "What payment gateways do you support?",
        answer: "We integrate Stripe, Razorpay, PayPal, and custom bank transfer verification workflows, supporting multi-currency transactions and local payment rails.",
      },
      {
        question: "How do you ensure payment security and customer data protection?",
        answer: "All payment transactions utilize tokenized integrations (such as Stripe Elements or Razorpay Checkout) where sensitive card data never touches your application server, ensuring full PCI-DSS compliance.",
      },
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software Development",
    tagline: "Tailored web applications, internal business tools, and operational dashboards built to fit your exact workflows.",
    badge: "Enterprise Engineering Pillar",
    shortDescription:
      "We engineer reliable web software, central management systems, and operational dashboards that organize business data and eliminate manual bottlenecks.",
    longDescription:
      "When generic SaaS tools and disconnected spreadsheets cannot keep pace with your operational complexity, custom software provides the foundation for sustainable growth. We build bespoke web applications, customer portals, administrative hubs, and operational dashboards tailored to how your business actually works.",
    icon: "Code2",
    heroVisual: "dashboard-analytics",
    businessChallenges: [
      {
        title: "Scattered Spreadsheets & Data Silos",
        description: "Critical business data spread across fragmented Excel files, emails, and isolated desktop software leads to errors.",
      },
      {
        title: "Excessive Manual Repetition",
        description: "Teams spending hours copying information between systems instead of focusing on high-value business activities.",
      },
      {
        title: "Lack of Real-Time Operational Visibility",
        description: "Leadership teams operating without clear, live metrics on project progress, revenue, or customer inquiries.",
      },
      {
        title: "Generic SaaS Bloat & Subscription Fatigue",
        description: "Paying for complex third-party platforms that only meet 40% of company needs while locking data into closed ecosystems.",
      },
    ],
    proposedSolutions: [
      {
        title: "Centralized Web Management Systems",
        description: "Single-source-of-truth web platforms uniting your inquiries, customer communications, and operational records.",
      },
      {
        title: "Role-Based Access & Team Permissions",
        description: "Granular authorization ensuring team members, administrators, and clients only access data relevant to their role.",
      },
      {
        title: "Interactive Analytics & Dashboards",
        description: "Clear data visualizations, status indicators, and tracking metrics that turn raw numbers into actionable insight.",
      },
      {
        title: "Interconnected REST & Webhook APIs",
        description: "Custom APIs connecting your web application seamlessly with external CRMs, notification services, and databases.",
      },
    ],
    capabilities: [
      {
        title: "Operational & Metrics Dashboards",
        description: "Real-time visibility tools tracking inquiry volumes, response times, active workflows, and operational KPIs.",
        deliverables: ["Interactive chart interfaces", "Filterable data tables", "Exportable CSV/PDF summaries", "Live status badges"],
      },
      {
        title: "Customer & Partner Portals",
        description: "Secure authenticated environments where clients can check project statuses, review documents, and communicate.",
        deliverables: ["JWT & session authentication", "Role-based views", "Document repositories", "Activity audit logs"],
      },
      {
        title: "Custom API & Webhook Services",
        description: "Resilient backend services engineered with TypeScript and Node.js for reliable system-to-system communication.",
        deliverables: ["RESTful API architecture", "Webhook dispatchers", "Rate limiting & validation", "API documentation"],
      },
      {
        title: "Database Architecture & Optimization",
        description: "Robust relational and document database designs with safe migrations, indexing, and persistent data safety.",
        deliverables: ["PostgreSQL / MongoDB models", "Query optimization", "Automated backups", "Data sanitization"],
      },
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Tailwind CSS"],
    methodologySteps: [
      { number: "01", title: "Domain & Workflow Mapping", description: "Documenting user roles, data entities, business rules, and permissions." },
      { number: "02", title: "Architecture & Schema Design", description: "Designing database models, API contracts, and security boundaries." },
      { number: "03", title: "Iterative Feature Sprints", description: "Building tested frontend and backend modules with continuous staging access." },
      { number: "04", title: "Integration & Stress Testing", description: "Simulating edge cases, permission checks, concurrency, and validation." },
      { number: "05", title: "Deployment & Documentation", description: "Deploying with automated CI/CD, database backups, and operational guides." },
    ],
    demonstrationSlug: "business-dashboard-demo",
    demonstrationTitle: "Operational Activity & Metrics Dashboard",
    faqs: [
      {
        question: "Do we own the source code and database of custom software built by Cognirex?",
        answer: "Yes, 100%. All custom code, database schemas, and intellectual property developed for your project are owned by your organization with no proprietary lock-in.",
      },
      {
        question: "Can custom software integrate with our existing tools?",
        answer: "Yes. We build custom API connectors, webhooks, and data sync bridges to integrate with external tools like Google Workspace, Slack, CRMs, and accounting platforms.",
      },
      {
        question: "How do you handle security and user authentication?",
        answer: "We implement industry-standard authentication (OAuth 2.0, secure JWTs, salted password hashing with bcrypt) combined with strict role-based access control (RBAC) and input validation.",
      },
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    tagline: "Production-grade conversational AI, RAG knowledge systems, and event-driven automation pipelines.",
    badge: "Advanced Intelligence Pillar",
    shortDescription:
      "We build intelligent AI assistants and automated workflow pipelines that process customer queries, extract data, and eliminate manual busywork.",
    longDescription:
      "Artificial Intelligence is most valuable when applied directly to operational bottlenecks. We help businesses integrate practical, secure AI solutions: from conversational assistants grounded in company documentation to automated pipelines that route leads, sync CRM records, and trigger notifications without manual intervention.",
    icon: "Sparkles",
    heroVisual: "ai-nodes-flow",
    businessChallenges: [
      {
        title: "Slow Inquiry Response Times",
        description: "Prospects inquiring outside business hours wait hours for basic answers, leading them to contact competitors.",
      },
      {
        title: "Information Trapped in Silos",
        description: "Product documentation, service terms, and FAQs scattered across PDFs and spreadsheets take staff excessive time to retrieve.",
      },
      {
        title: "Manual Cross-System Data Re-entry",
        description: "Employees copying incoming form data into spreadsheets, sending manual email alerts, and manually updating CRM tools.",
      },
      {
        title: "Skepticism Over AI Hallucinations",
        description: "Concerns that public generic chatbots will make up facts or reveal sensitive internal information to customers.",
      },
    ],
    proposedSolutions: [
      {
        title: "Ground-Truth RAG Knowledge Bases",
        description: "AI assistants grounded strictly in your verified documentation and service catalogs using vector search.",
      },
      {
        title: "Instant 24/7 Intelligent First-Line Support",
        description: "Conversational assistants that answer questions immediately and gracefully escalate complex requests to human team members.",
      },
      {
        title: "Event-Driven Automation Pipelines",
        description: "Automated event hooks that route incoming web inquiries directly to team chat channels, email inboxes, and databases instantly.",
      },
      {
        title: "Safety Guardrails & Privacy First",
        description: "Strict prompt fences and API configurations ensuring customer data is never used to train public foundational models.",
      },
    ],
    capabilities: [
      {
        title: "Retrieval-Augmented (RAG) Assistants",
        description: "Intelligent conversational interfaces that retrieve accurate answers directly from your approved manuals, PDFs, and catalogs.",
        deliverables: ["Vector database setup", "Document ingestion pipeline", "Hallucination guardrails", "Chat interface widget"],
      },
      {
        title: "Automated Lead & Notification Pipelines",
        description: "Pipelines that capture website form data, validate contact details, and notify internal teams via email or team channels.",
        deliverables: ["FormSubmit & webhook endpoints", "Team alert triggers", "CRM synchronization", "Reference ID tracking"],
      },
      {
        title: "Intelligent Document Processing",
        description: "Automated extraction and classification of incoming inquiries, resumes, and project scopes into structured database fields.",
        deliverables: ["Entity extraction models", "Resume text parsers", "Scope classification", "Structured JSON output"],
      },
      {
        title: "AI Integration Consulting",
        description: "Clear architectural guidance on where AI adds genuine commercial value versus where deterministic software is superior.",
        deliverables: ["Feasibility assessment", "Model selection evaluation", "Cost & latency modeling", "Proof-of-concept roadmap"],
      },
    ],
    techStack: ["Python", "TypeScript", "LangChain", "OpenAI / Claude / Gemini API", "Pinecone / pgvector", "Next.js", "Webhooks"],
    methodologySteps: [
      { number: "01", title: "Bottleneck Identification", description: "Mapping repetitive communication and data transfer tasks in your operations." },
      { number: "02", title: "Knowledge Ingestion & Guardrails", description: "Curating verified documents, chunking text, and setting strict answer bounds." },
      { number: "03", title: "Pipeline & Agent Engineering", description: "Developing API connectors, vector embeddings, and fallback handoffs." },
      { number: "04", title: "Evaluation & Testing", description: "Running automated question-answer benchmarks to verify precision and safety." },
      { number: "05", title: "Integration & Monitoring", description: "Embedding into the live website or software with real-time response telemetry." },
    ],
    demonstrationSlug: "ai-assistant-demo",
    demonstrationTitle: "Customer Support & Knowledge Assistant",
    faqs: [
      {
        question: "How do you prevent the AI assistant from providing false information?",
        answer: "We use Retrieval-Augmented Generation (RAG). The model is strictly instructed to only answer questions using information retrieved from your approved documentation, and to politely state when it cannot verify an answer rather than guessing.",
      },
      {
        question: "Is our business data secure when using your AI solutions?",
        answer: "Yes. We configure enterprise API agreements where inputs are encrypted in transit and at rest, and your proprietary data is never retained or used to train foundational AI models.",
      },
      {
        question: "Can an AI assistant route leads to our team if a client wants human support?",
        answer: "Yes. Every conversational system includes seamless escalation triggers: if a user expresses purchase intent or asks for human consultation, the assistant collects contact details and routes the inquiry directly to your inbox.",
      },
    ],
  },
];
