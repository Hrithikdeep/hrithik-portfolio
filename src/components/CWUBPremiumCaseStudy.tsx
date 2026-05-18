"use client";

import { motion, MotionProps } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Users,
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  QrCode,
  Lock,
  Database,
  Globe,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const MotionDiv = motion.div;
const MotionSection = motion.section;

interface CWUBCaseStudyProps {
  showcaseImages: Array<{ src: string; caption: string }>;
  demoVideoUrl?: string;
}

export function CWUBPremiumCaseStudy({
  showcaseImages,
  demoVideoUrl,
}: CWUBCaseStudyProps) {
  // ===== SECTION 1: HERO =====
  const HeroSection = () => (
    <MotionSection
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Premium Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex justify-center gap-2 flex-wrap"
        >
          {[
            "GovTech Platform",
            "Full Stack System",
            "Mobile App",
            "Admin Dashboard",
            "Digital Identity System",
          ].map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Labour Welfare & Digital Identity Platform
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          A scalable digital ecosystem for worker registration, verification, welfare management, and QR-based identity systems serving 10,000+ construction workers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white glow transition hover:-translate-y-1 hover:opacity-90">
            Watch Live Demo <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#architecture" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/50">
            Explore System Architecture <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </MotionSection>
  );

  // ===== SECTION 2: PROBLEM & SOLUTION =====
  const ProblemSolutionSection = () => (
    <PremiumSection
      eyebrow="01 — Challenge & Approach"
      title="What needed to change"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problems */}
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20">
              ⚠️
            </span>
            The Problems
          </h3>
          <ProblemItem icon="📄" title="Manual labour registration workflows" desc="Paper-based processes prone to delays and errors" />
          <ProblemItem icon="🚫" title="Fake identity & verification fraud" desc="No mechanism to verify authentic worker identities" />
          <ProblemItem icon="❌" title="Poor welfare scheme accessibility" desc="Workers couldn't easily access available benefits" />
          <ProblemItem icon="🔍" title="Lack of centralized worker records" desc="Fragmented data across multiple systems" />
          <ProblemItem icon="📍" title="Difficult field-level verification" desc="Agent operations were inefficient and untracked" />
        </MotionDiv>

        {/* Solutions */}
        <MotionDiv
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
              ✅
            </span>
            The Solutions
          </h3>
          <SolutionItem icon="🌐" title="Digital registration platform" desc="Online portal + mobile + agent-assisted workflows" />
          <SolutionItem icon="🆔" title="QR-based labour identity system" desc="Instant verification with scannable digital IDs" />
          <SolutionItem icon="✔️" title="Centralized admin verification" desc="Single source of truth for worker records" />
          <SolutionItem icon="📱" title="Mobile onboarding for field agents" desc="Real-time registration & verification in the field" />
          <SolutionItem icon="🔐" title="Secure data & approval workflows" desc="Role-based access with complete audit trails" />
        </MotionDiv>
      </div>
    </PremiumSection>
  );

  // ===== SECTION 3: PRODUCT SHOWCASE =====
  const ProductShowcaseSection = () => (
    <PremiumSection
      eyebrow="02 — Product Showcase"
      title="Premium platform interfaces"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {showcaseImages.map((item, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-lg border border-white/5 bg-slate-950">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full aspect-[9/12] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition" />
            </div>
            <p className="text-xs text-muted-foreground px-3 py-3 leading-snug font-medium">
              {item.caption}
            </p>
          </MotionDiv>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 4: CORE FEATURES =====
  const CoreFeaturesSection = () => (
    <PremiumSection
      eyebrow="03 — Core Features"
      title="Complete feature set for modern labour management"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { icon: "📝", label: "Digital Worker Registration" },
          { icon: "🆔", label: "QR-Based Identity Verification" },
          { icon: "✔️", label: "Admin Approval Workflow" },
          { icon: "👥", label: "Multi-Agent Registration" },
          { icon: "💼", label: "Welfare Scheme Management" },
          { icon: "📊", label: "Reports & Analytics" },
          { icon: "📱", label: "Mobile App Integration" },
          { icon: "🔐", label: "Secure Authentication" },
          { icon: "⚡", label: "Real-Time Verification" },
          { icon: "🗄️", label: "Centralized Database" },
        ].map((feature, index) => (
          <MotionDiv
            key={feature.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/50 hover:from-white/[0.12]"
          >
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-sm font-semibold leading-tight">{feature.label}</h3>
          </MotionDiv>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 5: SYSTEM ARCHITECTURE =====
  const ArchitectureSection = () => (
    <PremiumSection
      eyebrow="04 — System Architecture"
      title="Enterprise-grade infrastructure"
      id="architecture"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ArchitectureCard
          label="Frontend"
          items={["React.js", "Next.js", "Tailwind CSS", "TypeScript"]}
          icon="🎨"
        />
        <ArchitectureCard
          label="Backend"
          items={["Node.js", "REST APIs", "Authentication", "Business Logic"]}
          icon="⚙️"
        />
        <ArchitectureCard
          label="Mobile"
          items={["Flutter", "Dart", "Native Performance", "Offline Support"]}
          icon="📱"
        />
        <ArchitectureCard
          label="Infrastructure"
          items={["AWS", "PostgreSQL", "Cloud Deployment", "CI/CD Pipelines"]}
          icon="☁️"
        />
      </div>
    </PremiumSection>
  );

  // ===== SECTION 6: MY ROLE =====
  const MyRoleSection = () => (
    <PremiumSection
      eyebrow="05 — My Role"
      title="End-to-end ownership and execution"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          "Designed and developed the complete full-stack system architecture",
          "Built responsive public welfare portal with modern UX",
          "Developed admin dashboard for workforce verification",
          "Built Flutter mobile application for field operations",
          "Implemented QR-based digital identity system",
          "Developed reporting and analytics workflows",
          "Managed API integrations, authentication, and deployment",
        ].map((item, index) => (
          <MotionDiv
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl hover:border-accent/30"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand mt-0.5">
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-medium leading-relaxed">{item}</span>
          </MotionDiv>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 7: IMPACT & SCALE =====
  const ImpactSection = () => (
    <PremiumSection
      eyebrow="06 — Impact & Scale"
      title="Real-world outcomes"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { metric: "10,000+", label: "Worker Scalable Architecture", icon: "👥" },
          { metric: "80%", label: "Faster Registration & Approvals", icon: "⚡" },
          { metric: "99.8%", label: "System Uptime Reliability", icon: "✅" },
          { metric: "100%", label: "Reduced Identity Fraud Risk", icon: "🛡️" },
        ].map((item, index) => (
          <MotionDiv
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.05] to-white/[0.02] p-7 backdrop-blur-xl group hover:-translate-y-1 transition"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-3xl font-bold mb-2 text-gradient-brand">
                {item.metric}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.label}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 8: TECHNOLOGIES =====
  const TechnologiesSection = () => (
    <PremiumSection
      eyebrow="07 — Technologies Used"
      title="Modern tech stack"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "React.js",
          "Next.js",
          "Flutter",
          "Node.js",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "AWS",
          "REST APIs",
        ].map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="rounded-full border border-white/10 bg-gradient-to-r from-white/[0.10] to-white/[0.05] px-6 py-3 text-sm font-semibold shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/50 hover:from-white/[0.15]"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 9: DESIGN HIGHLIGHTS =====
  const DesignHighlightsSection = () => (
    <PremiumSection
      eyebrow="08 — Design Philosophy"
      title="Premium user experience"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          {
            icon: "📱",
            title: "Mobile-First Architecture",
            desc: "Optimized for field agents with offline-first capabilities",
          },
          {
            icon: "🏢",
            title: "Enterprise-Grade Admin",
            desc: "Professional workflows with real-time monitoring and approval",
          },
          {
            icon: "🔐",
            title: "Secure Digital Identity",
            desc: "QR-based verification with cryptographic security",
          },
          {
            icon: "📈",
            title: "Scalable Infrastructure",
            desc: "Built to handle 10,000+ concurrent users seamlessly",
          },
          {
            icon: "🎨",
            title: "Clean Modern UI",
            desc: "Intuitive interfaces for diverse user groups",
          },
          {
            icon: "⚡",
            title: "High Performance",
            desc: "Optimized for speed in low-bandwidth environments",
          },
        ].map((highlight, index) => (
          <MotionDiv
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl hover:border-accent/30 transition"
          >
            <div className="text-3xl mb-4">{highlight.icon}</div>
            <h3 className="font-semibold mb-2">{highlight.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {highlight.desc}
            </p>
          </MotionDiv>
        ))}
      </div>
    </PremiumSection>
  );

  // ===== SECTION 10: FINAL CTA =====
  const FinalCTASection = () => (
    <section className="relative my-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent rounded-3xl" />
      </div>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-12 md:p-20 text-center shadow-2xl backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-brand opacity-5" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building <span className="text-gradient-brand">scalable digital systems</span> for real-world impact.
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            From government platforms to enterprise SaaS, let's create solutions that serve millions.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-10 py-4 text-base font-semibold text-white glow transition hover:-translate-y-1"
          >
            Let's Build Together <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </MotionDiv>
    </section>
  );

  // ===== DEMO VIDEO =====
  const DemoVideoSection = () => demoVideoUrl ? (
    <PremiumSection
      eyebrow="09 — Live System Demo"
      title="Watch the platform in action"
      id="demo"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl" />
          <iframe
            className="relative aspect-video w-full rounded-2xl"
            src={demoVideoUrl}
            title="CWUB Labour Welfare Platform demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </PremiumSection>
  ) : null;

  return (
    <div className="relative -mx-6 overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />

      <HeroSection />
      <ProblemSolutionSection />
      <ProductShowcaseSection />
      <CoreFeaturesSection />
      <ArchitectureSection />
      <MyRoleSection />
      <ImpactSection />
      <TechnologiesSection />
      <DesignHighlightsSection />
      <DemoVideoSection />
      <FinalCTASection />
    </div>
  );
}

// ===== HELPER COMPONENTS =====

function PremiumSection({
  eyebrow,
  title,
  id,
  children,
}: {
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <MotionSection
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto max-w-6xl my-16 md:my-24 scroll-mt-28"
    >
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
        {eyebrow}
      </p>
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight max-w-4xl mx-auto">
        {title}
      </h2>
      {children}
    </MotionSection>
  );
}

function ProblemItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:border-rose-500/30 transition">
      <span className="text-2xl shrink-0">{icon}</span>
      <div>
        <p className="font-semibold text-sm leading-snug">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}

function SolutionItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:border-emerald-500/30 transition">
      <span className="text-2xl shrink-0">{icon}</span>
      <div>
        <p className="font-semibold text-sm leading-snug">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}

function ArchitectureCard({
  label,
  items,
  icon,
}: {
  label: string;
  items: string[];
  icon: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 backdrop-blur-xl hover:border-accent/40 transition"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold mb-5 text-lg">{label}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-muted-foreground">{item}</span>
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
