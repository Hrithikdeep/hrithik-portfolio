import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionDiv, MotionSection } from "@/components/Motion";
import { CWUBPremiumCaseStudy } from "@/components/CWUBPremiumCaseStudy";
import { getProject, projects } from "@/data/projects";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  Cloud,
  Database,
  FileText,
  Layers,
  Lock,
  Package,
  Receipt,
  Server,
  ShieldCheck,
  Sparkles,
  Warehouse,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} — Hrithik`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Hrithik`,
      description: project.tagline,
      images: [project.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Hrithik`,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const others = projects.filter((x) => x.slug !== project.slug);
  const cs = project.caseStudy;
  const demoVideoUrl = project.demoVideo;
  const isRetailErp = project.slug === "retail-erp";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← All projects
          </Link>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-4xl"
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-3">
              Featured Project
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-[1.05]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {cs?.subtitle ?? project.tagline}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative my-12 rounded-3xl overflow-hidden glass-strong glow"
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full aspect-[16/9] ${
                isRetailErp ? "object-contain bg-slate-100" : "object-cover"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </MotionDiv>

          {isRetailErp ? (
            <EnterpriseRetailErpCaseStudy demoVideoUrl={demoVideoUrl} />
          ) : slug === "welfare-platform" && cs ? (
            <CWUBPremiumCaseStudy 
              showcaseImages={cs.gallery || []}
              demoVideoUrl={demoVideoUrl}
            />
          ) : cs ? (
            <>
              <Section eyebrow="01 — Overview" title="Project Overview">
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="glass rounded-2xl p-7 md:col-span-3">
                    <p className="leading-relaxed text-base md:text-lg text-foreground/90">
                      {cs.overview}
                    </p>
                  </div>
                  <div className="md:col-span-2 rounded-2xl overflow-hidden glass">
                    <img
                      src={cs.overviewImage}
                      alt="Hero screenshot"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </Section>

              <Section eyebrow="02 — Problem" title="What wasn't working">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cs.problems.map((pr) => (
                    <MotionDiv
                      key={pr.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass rounded-2xl p-6 hover:border-primary/40 transition"
                    >
                      <div className="text-3xl mb-3">{pr.icon}</div>
                      <p className="font-medium leading-snug">{pr.title}</p>
                    </MotionDiv>
                  ))}
                </div>
              </Section>

              <Section eyebrow="03 — Solution" title="How I solved it">
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-2 rounded-2xl overflow-hidden glass order-2 md:order-1">
                    <img
                      src={cs.solutionImage}
                      alt="Solutions screenshot"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="glass rounded-2xl p-7 md:col-span-3 order-1 md:order-2">
                    <p className="leading-relaxed text-base md:text-lg text-foreground/90">
                      {cs.solutionText}
                    </p>
                  </div>
                </div>
              </Section>

              <Section eyebrow="04 — Features" title="Key Features">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cs.keyFeatures.map((f) => (
                      <div
                        key={f.title}
                        className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/40 transition"
                      >
                        <span className="text-2xl shrink-0">{f.icon}</span>
                        <span className="font-medium text-sm leading-snug">
                          {f.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl overflow-hidden glass">
                    <img
                      src={cs.featuresImage}
                      alt="Calculator screenshot"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </Section>

              <Section eyebrow="05 — Stack" title="Tech Stack">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cs.techGroups.map((g) => (
                    <div key={g.label} className="glass rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-wider text-accent mb-3">
                        {g.label}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-3 py-1 text-xs font-medium bg-gradient-brand text-white shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section eyebrow="06 — Impact" title="What it delivered">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cs.impact.map((it) => (
                    <MotionDiv
                      key={it.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass-strong rounded-2xl p-6 hover:-translate-y-1 transition"
                    >
                      <div className="text-3xl mb-3">{it.icon}</div>
                      <h3 className="font-semibold mb-2">{it.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {it.desc}
                      </p>
                    </MotionDiv>
                  ))}
                </div>
              </Section>

              <Section eyebrow="07 — My Role" title="What I owned">
                <div className="flex flex-wrap gap-3">
                  {cs.role.map((r) => (
                    <span
                      key={r}
                      className="glass rounded-full px-5 py-2 text-sm font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </Section>

              <Section eyebrow="08 — Gallery" title="Project Gallery">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cs.gallery.map((g, i) => (
                    <MotionDiv
                      key={i}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass rounded-2xl overflow-hidden group"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={g.src}
                          alt={g.caption}
                          className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground px-4 py-3">
                        {g.caption}
                      </p>
                    </MotionDiv>
                  ))}
                </div>
              </Section>

              {demoVideoUrl ? (
                <Section eyebrow="09 — Demo" title={cs.videoTitle}>
                  <p className="text-muted-foreground mb-5">{cs.videoDesc}</p>
                  <div className="glass-strong rounded-2xl overflow-hidden aspect-video glow-blue">
                    <iframe
                      className="w-full h-full"
                      src={demoVideoUrl}
                      title={`${project.title} demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Section>
              ) : null}

              <section className="my-20">
                <div className="relative overflow-hidden glass-strong rounded-3xl p-10 md:p-14 text-center">
                  <div className="absolute inset-0 bg-gradient-brand opacity-10 pointer-events-none" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
                    Looking to build scalable digital platforms or SaaS systems?
                  </h2>
                  <p className="text-muted-foreground mb-8 relative">
                    Let's turn your idea into a production-ready product.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center relative">
                    <Link
                      href="/#contact"
                      className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white glow hover:opacity-90 transition"
                    >
                      Hire Me
                    </Link>
                    <Link
                      href="/#projects"
                      className="rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-primary/50 transition"
                    >
                      View More Projects
                    </Link>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Problem
                  </h2>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Solution
                  </h2>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-5">Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-5">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <div
                      key={f}
                      className="glass rounded-xl px-5 py-4 flex items-start gap-3"
                    >
                      <span className="h-2 w-2 mt-2 rounded-full bg-gradient-brand shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-5">Screenshots</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((s, i) => (
                    <div key={i} className="glass rounded-2xl overflow-hidden">
                      <img
                        src={s}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full aspect-[16/10] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-5">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="glass rounded-full px-4 py-1.5 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              {demoVideoUrl ? (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-5">Demo Video</h2>
                  <div className="glass-strong rounded-2xl overflow-hidden aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={demoVideoUrl}
                      title={`${project.title} demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </section>
              ) : null}
            </>
          )}

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-5">More projects</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/projects/${o.slug}`}
                  className="group glass rounded-2xl p-6 hover:border-primary/50 transition"
                >
                  <h3 className="text-lg font-semibold mb-1.5">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.tagline}</p>
                  <p className="mt-4 text-sm text-accent group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    View case study →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function EnterpriseRetailErpCaseStudy({ demoVideoUrl }: { demoVideoUrl?: string }) {
  const badges = [
    "Full Stack System",
    "Admin Dashboard",
    "Inventory Management",
    "Billing & Analytics",
  ];

  const problems = [
    "Manual billing operations",
    "Inventory tracking issues",
    "Multi-store stock confusion",
    "No centralized analytics",
    "Difficult warehouse coordination",
  ];

  const solutions = [
    "Real-time ERP dashboard",
    "Automated inventory system",
    "Centralized stock management",
    "Analytics & reporting",
    "Multi-location operations support",
  ];

  const showcase = [
    {
      title: "ERP Dashboard",
      caption: "Real-time business insights with sales, stock, and revenue analytics.",
      image: "/erp-screenshots/dashboard.png",
    },
    {
      title: "Product Management",
      caption: "Centralized product catalog with pricing, SKU, barcode, and stock management.",
      image: "/erp-screenshots/products.png",
    },
    {
      title: "Billing System",
      caption: "Fast POS-style billing interface with GST, discounts, and invoice generation.",
      image: "/erp-screenshots/billing.png",
    },
    {
      title: "Inventory Management",
      caption: "Track warehouse stock movement, transfers, and low-stock alerts.",
      image: "/erp-screenshots/inventory.png",
    },
    {
      title: "Sales Analytics",
      caption: "Business performance dashboards with operational insights.",
      image: "/erp-screenshots/reports.png",
    },
    {
      title: "Multi-location Operations",
      caption: "Support for multiple warehouses and retail showrooms.",
      image: "/erp-screenshots/locations.png",
    },
  ];

  const features = [
    { title: "Multi-Location Inventory", icon: Building2 },
    { title: "Billing & Invoice Generation", icon: Receipt },
    { title: "Warehouse Transfer System", icon: Warehouse },
    { title: "Product & SKU Management", icon: Package },
    { title: "Role-Based Access Control", icon: Lock },
    { title: "Real-Time Analytics Dashboard", icon: BarChart3 },
    { title: "GST & Tax Handling", icon: FileText },
    { title: "Low Stock Monitoring", icon: Boxes },
  ];

  const architecture = [
    { label: "Frontend", icon: Layers, items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
    { label: "Backend", icon: Server, items: ["Supabase", "REST APIs", "Authentication System"] },
    { label: "Database", icon: Database, items: ["PostgreSQL"] },
    { label: "Cloud & Infra", icon: Cloud, items: ["AWS", "Vercel", "CDN Optimization"] },
  ];

  const role = [
    "Designed complete ERP architecture",
    "Developed frontend dashboards & billing interfaces",
    "Built scalable inventory & warehouse management logic",
    "Implemented authentication & admin access control",
    "Integrated analytics & reporting workflows",
    "Managed deployment & cloud infrastructure",
  ];

  const impact = [
    "10+ showroom scalable architecture",
    "Real-time inventory synchronization",
    "Faster billing operations",
    "Reduced manual stock management effort",
    "Improved operational visibility",
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "AWS",
    "REST APIs",
  ];

  return (
    <div className="relative -mx-6 mt-10 overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto max-w-6xl pb-16 pt-8 md:pb-24"
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-7 flex flex-wrap justify-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-foreground/90 shadow-2xl backdrop-blur-xl"
              >
                {badge}
              </span>
            ))}
          </div>
          <h2 className="text-5xl font-bold leading-[0.95] md:text-7xl">
            Enterprise Retail <span className="text-gradient-brand">ERP Platform</span>
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A scalable retail management system built for billing, inventory,
            warehouse operations, analytics, and multi-location business management.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#erp-demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white glow transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Watch Live Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#erp-architecture"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              View Architecture <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-cyan-400/10 p-3 shadow-2xl backdrop-blur-2xl">
          <div className="absolute inset-0 animate-shimmer opacity-40" />
          <div className="relative rounded-2xl border border-white/10 bg-background/70 p-4">
            <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-white/10 bg-card/70 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold">Operations Command Center</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
                    Live Sync
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Revenue", "Invoices", "Stock"].map((metric, index) => (
                    <div key={metric} className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-muted-foreground">{metric}</p>
                      <p className="mt-2 text-xl font-bold">
                        {index === 0 ? "₹24.8L" : index === 1 ? "1,284" : "38.6K"}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-40 rounded-xl bg-[linear-gradient(135deg,rgba(124,58,237,.28),rgba(6,182,212,.18)),linear-gradient(to_top,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[length:100%_100%,100%_28px]" />
              </div>
              <div className="grid gap-3">
                {["Warehouse transfer queued", "Low stock alert resolved", "GST invoice generated"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <PremiumSection eyebrow="01 — Problem & Solution" title="Built for real retail complexity">
        <div className="grid gap-5 md:grid-cols-2">
          <PremiumListCard title="Problems" tone="from-rose-500/20" items={problems} />
          <PremiumListCard title="Solutions" tone="from-emerald-400/20" items={solutions} />
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="02 — Product Showcase" title="Production-grade modules">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/10] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-3 pb-3 pt-4">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.caption}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="03 — Core Features" title="Everything a retail operation expects">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.09]"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand shadow-lg shadow-primary/20">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-sm font-semibold leading-snug">{feature.title}</h3>
              </MotionDiv>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="04 — System Architecture" title="Clean SaaS architecture" id="erp-architecture">
        <div className="grid gap-5 lg:grid-cols-4">
          {architecture.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.label} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 backdrop-blur-xl">
                <Icon className="mb-5 h-6 w-6 text-accent" />
                <h3 className="mb-4 font-semibold">{group.label}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="05 — My Role" title="Owned from architecture to deployment">
        <div className="grid gap-3 md:grid-cols-2">
          {role.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand">
                <ShieldCheck className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="06 — Business Impact" title="Operational outcomes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impact.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-xl">
              <Sparkles className="mx-auto mb-4 h-5 w-5 text-accent" />
              <p className="text-sm font-semibold leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </PremiumSection>

      <PremiumSection eyebrow="07 — Technologies Used" title="Modern full-stack toolkit">
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-5 py-2.5 text-sm font-semibold shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </PremiumSection>

      {demoVideoUrl ? (
        <PremiumSection eyebrow="08 — Live Demo" title="Watch the platform in motion" id="erp-demo">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
              <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl" />
              <iframe
                className="relative aspect-video w-full rounded-2xl"
                src={demoVideoUrl}
                title="Enterprise Retail ERP System demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </PremiumSection>
      ) : null}

      <section className="relative mx-auto my-20 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/[0.06] to-cyan-400/10 p-9 text-center shadow-2xl backdrop-blur-2xl md:p-14">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Building scalable business systems for modern operations.
          </h2>
          <Link
            href="/#contact"
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white glow transition hover:-translate-y-0.5"
          >
            Let's Build Something Powerful <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative mx-auto my-16 max-w-6xl scroll-mt-28 md:my-24"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mx-auto mb-9 mt-3 max-w-3xl text-center text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      {children}
    </MotionSection>
  );
}

function PremiumListCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: string;
  items: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${tone} to-transparent`} />
      <h3 className="relative mb-5 text-xl font-semibold">{title}</h3>
      <div className="relative space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background/35 p-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_20px_rgba(103,232,249,.7)]" />
            <span className="text-sm font-medium text-foreground/90">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="my-16 md:my-20"
    >
      <p className="text-xs uppercase tracking-widest text-accent mb-3 font-semibold">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
      {children}
    </MotionSection>
  );
}
