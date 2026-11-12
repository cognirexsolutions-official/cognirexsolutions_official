export interface DetailedProject {
  slug: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  image: string;
  overview: string;
  problemStatement: string;
  solutionBreakdown: string;
  keyFeatures: string[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  architectureSummary: string;
  demoAvailability: {
    isLive: boolean;
    label: string;
    ctaHref: string;
  };
}

export const detailedProjectsData: Record<string, DetailedProject> = {
  "business-website-demo": {
    slug: "business-website-demo",
    title: "Modern Brand Experience & Service Hub",
    category: "Business Website",
    badge: "Concept Demonstration",
    shortDescription: "A fast, responsive web application designed to showcase enterprise offerings, explain complex technical services, and provide friction-free customer conversion pathways.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    overview: "This project demonstration models how modern B2B technology agencies and professional services firms can structure their online presence. Built with Next.js App Router and Tailwind CSS, it prioritizes clear value articulation, sub-second TTFB, and an interactive conversion funnel.",
    problemStatement: "Traditional corporate websites are often heavy, bloated with slow WordPress plugins, and fail to clearly explain technical services to busy decision-makers. Mobile bounce rates are exceptionally high due to poor responsive scaling.",
    solutionBreakdown: "We architected a component-driven, statically pre-rendered platform. Service pillars are decomposed into clear modular components, complemented by interactive timelines and accessible forms that automatically adapt to visitor viewports.",
    keyFeatures: [
      "Sub-second initial page load with pre-rendered static routes",
      "Interactive multi-step engineering process visualization",
      "Dynamic inquiry form with client-side Zod validation",
      "WCAG 2.2 AA compliant focus indicators and semantic navigation"
    ],
    techStack: [
      { category: "Frontend Framework", technologies: ["Next.js (App Router)", "React 19", "TypeScript"] },
      { category: "Styling & UI", technologies: ["Tailwind CSS", "Framer Motion", "Lucide Icons"] },
      { category: "SEO & Architecture", technologies: ["JSON-LD Structured Data", "Semantic HTML5", "OpenGraph Protocol"] }
    ],
    architectureSummary: "Static pre-rendering with incremental revalidation, served via edge CDN distribution with zero database bottlenecks on marketing pages.",
    demoAvailability: {
      isLive: true,
      label: "Experience Interactive Demo",
      ctaHref: "/contact?service=Website+Development"
    }
  },

  "digital-storefront-demo": {
    slug: "digital-storefront-demo",
    title: "Interactive Product Catalog & Ordering System",
    category: "Digital Storefront",
    badge: "Concept Demonstration",
    shortDescription: "An intuitive commerce experience allowing customers to browse structured product catalogs, filter by multidimensional attributes, and place orders seamlessly.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    overview: "This concept demonstration illustrates a headless commerce storefront built for fast catalog browsing and seamless purchasing. It eliminates the traditional multi-page reload cycle, keeping buyers engaged and maximizing transaction velocity.",
    problemStatement: "Standard e-commerce templates often suffer from sluggish catalog filters and multi-step checkouts that cause customers to abandon their cart midway through purchase.",
    solutionBreakdown: "By adopting client-side state management for the product matrix and optimistic UI updates for the cart drawer, buyers experience zero visual lag. The checkout pipeline handles payment gateway sessions with robust error recovery.",
    keyFeatures: [
      "Instant faceted filtering by category, price, and specifications",
      "Slide-out persistent shopping cart with live price recalculation",
      "Resilient webhook architecture for order confirmation and inventory sync",
      "Mobile-optimized one-thumb purchasing layout"
    ],
    techStack: [
      { category: "Frontend Architecture", technologies: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "State & Validation", technologies: ["React Context", "Zod", "React Hook Form"] },
      { category: "Commerce Pipeline", technologies: ["Stripe / Razorpay Webhooks", "Headless REST APIs"] }
    ],
    architectureSummary: "Decoupled frontend consuming headless commerce endpoints with localized caching for high-speed catalog exploration.",
    demoAvailability: {
      isLive: true,
      label: "Explore Storefront Concepts",
      ctaHref: "/contact?service=E-Commerce+Development"
    }
  },

  "business-dashboard-demo": {
    slug: "business-dashboard-demo",
    title: "Operational Activity & Metrics Dashboard",
    category: "Business Dashboard",
    badge: "Concept Demonstration",
    shortDescription: "A centralized internal application providing business operators with real-time visibility into customer enquiries, team tasks, and key operational metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    overview: "This software concept demonstrates an enterprise operations portal. It synthesizes incoming leads, active client projects, and revenue metrics into an interactive, role-based dashboard.",
    problemStatement: "Operations teams routinely struggle with data silos—tracking leads in emails, tasks in spreadsheets, and billing in accounting software with no unified operational view.",
    solutionBreakdown: "We designed a unified web application dashboard with role-based access control, real-time activity streams, and customizable chart widgets that reflect business health at a glance.",
    keyFeatures: [
      "Interactive data grids with sorting, search, and CSV export",
      "Role-Based Access Control (RBAC) separating Admin, Manager, and Staff views",
      "Real-time status transition workflows for customer inquiries",
      "Clean dark/light theme tokens and responsive data tables"
    ],
    techStack: [
      { category: "Frontend & Charts", technologies: ["Next.js", "Tailwind CSS", "Lucide React"] },
      { category: "Backend & Storage", technologies: ["Node.js API Routes", "MongoDB / Mongoose", "JWT Auth"] },
      { category: "Data Validation", technologies: ["Zod Type Schemas", "TypeScript Strict Mode"] }
    ],
    architectureSummary: "Serverless Next.js API routes with connection pooling to MongoDB, delivering low-latency aggregated metrics with JWT session verification.",
    demoAvailability: {
      isLive: true,
      label: "Request Dashboard Consultation",
      ctaHref: "/contact?service=Custom+Software"
    }
  },

  "ai-assistant-demo": {
    slug: "ai-assistant-demo",
    title: "Customer Support & Knowledge Assistant",
    category: "AI Assistant",
    badge: "Concept Demonstration",
    shortDescription: "An intelligent conversational assistant capable of answering customer questions using verified company documentation with strict anti-hallucination guardrails.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    overview: "This concept demonstration highlights how modern enterprises deploy Retrieval-Augmented Generation (RAG) to automate first-line support. The assistant queries a private vector database and answers inquiries strictly from verified documentation.",
    problemStatement: "Generic AI chatbots frequently invent inaccurate answers (hallucinate), confusing customers and exposing businesses to reputational risk. Meanwhile, manual support queues take hours to respond.",
    solutionBreakdown: "We engineered a deterministic RAG pipeline. When a user asks a question, semantic vector search finds the most relevant document passages. The AI generates a concise answer backed by exact citations, offering an automatic hand-off to human support whenever confidence is low.",
    keyFeatures: [
      "Grounded answers with direct source citations from verified docs",
      "Deterministic boundary prompt engineering with strict guardrails",
      "Graceful human escalation trigger when query requires staff intervention",
      "Streaming chat interface with instant response rendering"
    ],
    techStack: [
      { category: "AI & Vector Search", technologies: ["OpenAI / Gemini Embeddings", "Vector Database (Pinecone / pgvector)"] },
      { category: "Orchestration", technologies: ["LangChain / Custom RAG Pipeline", "Zod Structured Outputs"] },
      { category: "Interface", technologies: ["Next.js Streaming", "Tailwind CSS", "Framer Motion"] }
    ],
    architectureSummary: "Streaming Server-Sent Events (SSE) from Next.js route handlers connected to vector embeddings with sub-second retrieval latency.",
    demoAvailability: {
      isLive: true,
      label: "Discuss AI Integration",
      ctaHref: "/contact?service=AI+%26+Automation"
    }
  },

  "workflow-automation-demo": {
    slug: "workflow-automation-demo",
    title: "Automated Lead Routing & Notification Pipeline",
    category: "Workflow Automation",
    badge: "Concept Demonstration",
    shortDescription: "An event-driven automated pipeline that connects incoming website enquiries with team communication channels and CRM records without manual data re-entry.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    overview: "This project models an asynchronous automation pipeline. When a client submits a project inquiry, the system normalizes the data, sends instant alerts to team communication channels, dispatches confirmation emails, and creates a CRM record.",
    problemStatement: "Manual lead triage is notoriously slow. Inquiries sit in inboxes for hours, leading to delayed follow-ups and lost conversion opportunities.",
    solutionBreakdown: "We architected an event-driven webhook pipeline that executes parallel asynchronous jobs upon form receipt. With FormSubmit integration and internal database persistence, every lead is acknowledged in seconds.",
    keyFeatures: [
      "Asynchronous parallel dispatch to email, database, and notification webhooks",
      "Zero-latency response to visitor with background task execution",
      "Automatic reference tracking ID generation for auditability",
      "Failover error handling with non-fatal logging"
    ],
    techStack: [
      { category: "Workflow Orchestration", technologies: ["Event-Driven Webhooks", "FormSubmit.co API", "REST Endpoints"] },
      { category: "Data Ingestion", technologies: ["Zod Schema Validation", "TypeScript", "Next.js Edge Handlers"] },
      { category: "Monitoring & Reliability", technologies: ["Async Try-Catch Fallbacks", "Structured Error Logging"] }
    ],
    architectureSummary: "Resilient serverless micro-pipeline with dual-dispatch redundancy: FormSubmit for instant inbox delivery and local storage for operational record-keeping.",
    demoAvailability: {
      isLive: true,
      label: "Automate Your Workflows",
      ctaHref: "/contact?service=AI+%26+Automation"
    }
  }
};

