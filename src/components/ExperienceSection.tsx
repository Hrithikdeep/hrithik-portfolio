"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MSPJ (Private Company)",
    meta: "On-site",
    points: [
      "Architected Labour Welfare Platform serving 10,000+ active users with real-time QR verification system",
      "Designed and built multi-store Enterprise Retail ERP system with billing, inventory, and analytics dashboards",
      "Developed QR-based digital identity verification system for worker authentication and tracking",
      "Built cross-platform Flutter mobile application for workforce management and real-time updates",
      "Created comprehensive admin dashboards and reporting systems for business intelligence",
      "Deployed and maintained cloud-hosted scalable applications with high availability requirements",
    ],
  },
  {
    role: "Data Automation Intern",
    company: "Springer Capital",
    meta: "Remote · 6 months",
    points: [
      "Developed web scraping solutions using BeautifulSoup and Selenium for data collection",
      "Automated data extraction workflows processing hundreds of data points daily",
      "Built data cleaning and transformation pipelines using Pandas for analytics-ready datasets",
      "Created reporting systems converting raw data into actionable business insights",
      "Structured and validated datasets maintaining data quality standards",
      "Collaborated with analytics team to ensure data requirements were met",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've built <span className="text-gradient-brand">real systems</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                <div className="absolute left-0 top-1 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full glass border border-primary/40">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                </div>

                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {exp.meta}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-5">{exp.company}</p>
                  <ul className="space-y-2.5">
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
