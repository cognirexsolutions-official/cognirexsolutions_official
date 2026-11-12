import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { jsonLdOrganization } from "@/config/structuredData";
import { CmsContentProvider } from "@/context/CmsContentContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Cognirex Solutions is a premier technology consultancy in Kolhapur, Maharashtra. We engineer modern responsive web applications, enterprise cloud software, intelligent AI workflows, and scalable digital platforms.",
  keywords: [
    // Brand & Local SEO (Kolhapur & Maharashtra)
    "Cognirex Solutions",
    "Cognirex",
    "Cognirex Solutions Kolhapur",
    "Software Company in Kolhapur",
    "IT Company in Kolhapur",
    "Web Development Company in Kolhapur",
    "Software Development Agency Maharashtra",
    "AI Consulting India",
    // Core Engineering Capabilities
    "Next.js Development Agency",
    "React Web Application Development",
    "Custom Software Engineering",
    "Enterprise AI Solutions",
    "Agentic AI & LLM Integration",
    "Workflow Automation India",
    "E-Commerce Solutions",
    "Cloud Architecture & Serverless",
    "Full-Stack Web Engineering",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "We engineer modern web applications, scalable cloud software, and intelligent AI automation that accelerate your business growth.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/logo_main.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Intelligence Engineered`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "We engineer modern web applications, scalable cloud software, and intelligent AI automation that accelerate your business growth.",
    creator: "@cognirex",
    site: "@cognirex",
    images: [`${siteConfig.url}/images/logo_main.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "55aG1ui2FhHrXCuPinwuWp2BT-xoHUTi_VoQAw4LSRI",
  },
  other: {
    "google-site-verification": "55aG1ui2FhHrXCuPinwuWp2BT-xoHUTi_VoQAw4LSRI",
    "geo.region": "IN-MH",
    "geo.placename": "Kolhapur, Maharashtra, India",
    "geo.position": "16.7050;74.2433",
    "ICBM": "16.7050, 74.2433",
    "theme-color": "#7C3AED",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#F8F7FC] text-[#1F1B2E] antialiased"
        suppressHydrationWarning
      >
        <CmsContentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CmsContentProvider>
      </body>
    </html>
  );
}

