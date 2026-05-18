import solarHero from "@/assets/solar/hero.png";
import solarSolutions from "@/assets/solar/solutions.png";
import solarTrust from "@/assets/solar/trust.png";
import solarCalculator from "@/assets/solar/calculator.png";
import solarFooter from "@/assets/solar/footer.png";

const solarHeroSrc = solarHero.src;
const solarSolutionsSrc = solarSolutions.src;
const solarTrustSrc = solarTrust.src;
const solarCalculatorSrc = solarCalculator.src;
const solarFooterSrc = solarFooter.src;
const cwubPortalImage =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80";
const cwubDashboardImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80";
const cwubMobileImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";
const cwubReportsImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";
const cwubIdentityImage =
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80";

export type CaseStudy = {
  subtitle: string;
  overview: string;
  overviewImage: string;
  problems: { title: string; icon: string }[];
  solutionText: string;
  solutionImage: string;
  keyFeatures: { title: string; icon: string }[];
  featuresImage: string;
  techGroups: { label: string; items: string[] }[];
  impact: { title: string; desc: string; icon: string }[];
  role: string[];
  gallery: { src: string; caption: string }[];
  videoTitle: string;
  videoDesc: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  screenshots: string[];
  demoVideo?: string;
  accent: "purple" | "blue" | "mix";
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "retail-erp",
    title: "Enterprise Retail ERP System",
    tagline: "Full Stack SaaS / Business Management Platform",
    description:
      "A scalable retail management system built for billing, inventory, warehouse operations, analytics, and multi-location business management.",
    features: [
      "POS billing with GST & receipts",
      "Real-time inventory across stores",
      "Stock transfer & low-stock alerts",
      "Role-based admin dashboards",
    ],
    problem:
      "Multi-location retailers were juggling spreadsheets and disconnected tools, causing stock mismatches and revenue loss.",
    solution:
      "I designed a centralized ERP with role-based access, real-time sync, and offline-tolerant POS — deployed on cloud for instant scaling.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "AWS", "REST APIs"],
    image: "/erp-screenshots/login.png",
    demoVideo: "https://www.youtube.com/embed/eJadyCnBV2c",
    screenshots: [
      "/erp-screenshots/login.png",
      "/erp-screenshots/dashboard.png",
      "/erp-screenshots/products.png",
      "/erp-screenshots/billing.png",
      "/erp-screenshots/inventory.png",
      "/erp-screenshots/reports.png",
      "/erp-screenshots/locations.png",
    ],
    accent: "purple",
  },
  {
    slug: "welfare-platform",
    title: "Labour Welfare Management System",
    tagline: "Complete digital platform for worker registration, verification & management",
    description:
      "A full-stack digital platform serving 10,000+ construction workers across Bihar with QR-based identity verification, mobile app, admin dashboard, and real-time analytics.",
    features: [
      "10,000+ scalable workers system",
      "QR-based digital identity verification",
      "Mobile & web applications",
      "Real-time admin analytics dashboard",
      "Multi-language interface",
      "Agent registration system",
    ],
    problem:
      "Construction workers in Bihar faced manual registration processes, rampant fake IDs, no digital proof of identity, and no oversight system for welfare distribution at scale.",
    solution:
      "I architected and built a complete digital ecosystem: responsive web portal, Flutter mobile app, powerful admin dashboard, and QR-based verification system — reducing manual work by 80% while adding security and transparency.",
    tech: ["React", "Node.js", "Express", "Flutter", "MongoDB", "PostgreSQL", "Docker", "AWS"],
    image: cwubPortalImage,
    screenshots: [
      cwubPortalImage,
      cwubDashboardImage,
    ],
    accent: "blue",
    caseStudy: {
      subtitle:
        "A comprehensive digital welfare platform serving 10,000+ construction workers with QR verification, mobile app, and real-time admin control.",
      overview:
        "Designed and developed a production-grade full-stack system for Construction Worker Union Bihar (CWUB). The platform enables worker registration, digital identity verification via QR codes, mobile-first access, and centralized admin management. Built to handle 10,000+ concurrent users with real-time analytics and audit trails.",
      overviewImage: cwubPortalImage,
      problems: [
        { title: "Manual paper-based registration", icon: "📄" },
        { title: "Rampant fraud & fake IDs", icon: "🚫" },
        { title: "No digital identity system", icon: "❌" },
        { title: "Impossible audit & tracking", icon: "🔍" },
      ],
      solutionText:
        "Built a complete digital ecosystem with online registration, QR-based verification, mobile app for workers, and a comprehensive admin dashboard. Implemented secure authentication, role-based access control, real-time analytics, and automated approval workflows. The system is scalable to 10,000+ users and optimized for low-bandwidth regions.",
      solutionImage: cwubDashboardImage,
      keyFeatures: [
        { title: "QR Digital ID Card", icon: "🆔" },
        { title: "Online Registration", icon: "📝" },
        { title: "Mobile App", icon: "📱" },
        { title: "Admin Dashboard", icon: "📊" },
        { title: "Real-time Analytics", icon: "📈" },
        { title: "Agent Management", icon: "👥" },
      ],
      featuresImage: cwubDashboardImage,
      techGroups: [
        { label: "Frontend", items: ["React", "Tailwind CSS", "Vite"] },
        { label: "Backend", items: ["Node.js", "Express", "REST API"] },
        { label: "Mobile", items: ["Flutter", "Dart"] },
        { label: "Database", items: ["MongoDB", "PostgreSQL", "Redis"] },
        { label: "Deployment", items: ["Docker", "AWS", "CI/CD"] },
        { label: "Security", items: ["JWT Auth", "QR Codes", "Encryption"] },
      ],
      impact: [
        { title: "10,000+ Workers Support", desc: "Scalable system serving full worker population with real-time sync.", icon: "👥" },
        { title: "80% Faster Verification", desc: "Reduced manual verification time from days to minutes via QR codes.", icon: "⚡" },
        { title: "99.8% System Uptime", desc: "Reliable platform handling critical welfare operations 24/7.", icon: "✅" },
        { title: "Complete Transparency", desc: "Audit logs and real-time analytics for full system oversight.", icon: "🔍" },
      ],
      role: [
        "Full-stack architecture design & implementation",
        "Frontend development (React + Tailwind)",
        "Backend API development (Node.js + Express)",
        "Mobile app development (Flutter)",
        "Database design (MongoDB & PostgreSQL)",
        "Admin dashboard with real-time analytics",
        "QR code generation & verification system",
        "Authentication & authorization (JWT)",
        "Cloud deployment (Docker + AWS)",
        "Performance optimization for 10,000+ users",
      ],
      gallery: [
        { src: cwubPortalImage, caption: "Public Website Homepage\nPublic-facing registration and verification portal for labour welfare services." },
        { src: cwubDashboardImage, caption: "Registration Forms Section\nMultiple onboarding methods including online registration, PDF forms, and agent-assisted workflows." },
        { src: cwubMobileImage, caption: "Verification System\nSecure labour identity verification with searchable registration records." },
        { src: cwubDashboardImage, caption: "Admin Dashboard\nCentralized monitoring dashboard with worker analytics and approval workflows." },
        { src: cwubPortalImage, caption: "Worker Registration Panel\nAdmin-controlled onboarding system for worker profile management." },
        { src: cwubReportsImage, caption: "Reports & Analytics\nOperational insights with weekly, monthly, and yearly reporting." },
        { src: cwubMobileImage, caption: "Flutter Mobile App Dashboard\nMobile-first workforce management application for field agents." },
        { src: cwubIdentityImage, caption: "Digital QR Identity Card\nQR-enabled labour identity card for instant digital verification." },
      ],
      videoTitle: "System Demo",
      videoDesc: "Complete walkthrough of registration, verification, and admin dashboard.",
    },
  },
  {
    slug: "solar-startup",
    title: "Solar Startup Website",
    tagline: "A modern marketing site with built-in solar calculator",
    description:
      "A high-converting marketing website for a solar startup featuring an interactive savings calculator, headless CMS, and a sleek modern UI.",
    features: [
      "Interactive solar savings calculator",
      "Headless CMS for content team",
      "SEO-optimized & blazing fast",
      "Lead capture & CRM integration",
    ],
    problem:
      "The startup had no online presence and was losing leads to competitors with polished websites.",
    solution:
      "I designed and shipped a high-converting site with a custom calculator that captures qualified leads automatically.",
    tech: ["Next.js", "React", "Tailwind", "Sanity CMS", "Vercel", "Cloudflare"],
    image: solarHeroSrc,
    demoVideo: "https://www.youtube.com/embed/e_e45h8rpzk",
    screenshots: [
      solarHeroSrc,
      solarSolutionsSrc,
      solarTrustSrc,
      solarCalculatorSrc,
      solarFooterSrc,
    ],
    accent: "mix",
    caseStudy: {
      subtitle:
        "High-conversion solar website built for residential, commercial, and industrial clients with real-time savings estimation.",
      overview:
        "Designed and developed a production-ready solar platform focused on lead generation, user education, and real-time solar savings calculation. Built for a Bihar-based solar EPC company targeting homes, businesses, and industries.",
      overviewImage: solarHeroSrc,
      problems: [
        { title: "No digital lead generation system", icon: "📉" },
        { title: "Users unaware of solar savings & subsidies", icon: "❓" },
        { title: "No pricing transparency", icon: "💸" },
        { title: "No structured service pages", icon: "🗂️" },
        { title: "No regional language support", icon: "🌐" },
      ],
      solutionText:
        "Built a scalable, SEO-optimized platform with strong UI/UX and conversion-focused structure. Implemented solar calculator, WhatsApp lead system, CMS integration, and multilingual support.",
      solutionImage: solarSolutionsSrc,
      keyFeatures: [
        { title: "Solar Savings Calculator", icon: "🧮" },
        { title: "WhatsApp Lead Integration", icon: "💬" },
        { title: "Multi-language (EN + HI)", icon: "🌏" },
        { title: "Residential / Commercial / Industrial pages", icon: "🏠" },
        { title: "Blog / FAQ system", icon: "📝" },
        { title: "Fast performance (low network optimized)", icon: "⚡" },
      ],
      featuresImage: solarCalculatorSrc,
      techGroups: [
        { label: "Frontend", items: ["Next.js", "React", "Tailwind"] },
        { label: "CMS", items: ["Sanity.io"] },
        { label: "Backend", items: ["REST API", "Google Sheets", "CRM"] },
        { label: "Deployment", items: ["Vercel", "GCP"] },
        { label: "Performance", items: ["Cloudflare"] },
      ],
      impact: [
        { title: "Improved Lead Generation", desc: "Calculator + WhatsApp flow turning visitors into qualified leads.", icon: "📈" },
        { title: "Real-time User Engagement", desc: "Interactive savings estimator keeps users on page longer.", icon: "⚡" },
        { title: "Strong Brand Presence", desc: "Premium UI positions the company as the regional category leader.", icon: "✨" },
        { title: "Scalable for Growth", desc: "CMS-driven content + modular routes ready for expansion.", icon: "🚀" },
      ],
      role: [
        "Full Stack Development",
        "UI/UX Implementation",
        "System Design",
        "Deployment & Optimization",
      ],
      gallery: [
        { src: solarHeroSrc, caption: "Hero Section" },
        { src: solarSolutionsSrc, caption: "Solutions Cards" },
        { src: solarTrustSrc, caption: "Trust Section" },
        { src: solarCalculatorSrc, caption: "Savings Calculator" },
        { src: solarFooterSrc, caption: "Footer" },
      ],
      videoTitle: "Live Demo",
      videoDesc: "Walkthrough of homepage, calculator, and lead flow.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
