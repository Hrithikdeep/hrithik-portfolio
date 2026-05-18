"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function SystemsBuiltSection() {
  const systems = [
    {
      title: "Enterprise Retail ERP",
      description: "Multi-store business management system with billing, inventory, sales tracking, analytics, and admin dashboards.",
      tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      impact: "10+ retail locations",
      slug: "retail-erp",
      metrics: { users: "Multiple stores", uptime: "99.8%", transactions: "10,000+" }
    },
    {
      title: "Labour Welfare Platform",
      description: "Large-scale digital identity and worker verification platform with QR verification, admin management, reports, and Flutter mobile app.",
      tech: ["React", "Flutter", "Node.js", "PostgreSQL"],
      impact: "10,000+ workers",
      slug: "welfare-platform",
      metrics: { workers: "10,000+", verification: "Real-time", regions: "Multiple" }
    },
    {
      title: "Solar EPC Startup Platform",
      description: "Modern solar company website with lead generation, solar calculator, CMS integration, and scalable frontend architecture.",
      tech: ["Next.js", "TypeScript", "Sanity CMS", "TailwindCSS"],
      impact: "High-performance lead system",
      slug: "solar-startup",
      metrics: { conversion: "Optimized", pageload: "Fast", leads: "Automated" }
    }
  ];

  return (
    <section id="systems" className="py-24 scroll-mt-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">Systems in Production</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Systems built for
            <br />
            <span className="text-gradient-brand">real users & real scale</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Production-grade systems I've architected and deployed serving thousands of concurrent users.
          </p>
        </motion.div>

        <div className="space-y-6">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 hover:border-accent/50 transition-all overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-brand/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{system.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-2xl">
                        {system.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-white/5">
                        {Object.entries(system.metrics).map(([key, value]) => (
                          <div key={key}>
                            <p className="text-xs uppercase tracking-widest text-accent mb-1 font-semibold">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="text-lg font-semibold">{value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {system.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-white/10 group-hover:border-accent/30 transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/projects/${system.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-brand text-white font-medium hover:scale-105 transition-transform group/btn"
                        >
                          View Case Study
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-white/10 font-medium hover:border-accent/50 transition"
                        >
                          Discuss
                        </a>
                      </div>
                    </div>

                    {/* Impact badge */}
                    <div className="glass rounded-xl p-4 border border-white/10 text-center md:text-left whitespace-nowrap h-fit">
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">Impact</p>
                      <p className="text-lg font-bold text-gradient-brand">{system.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
