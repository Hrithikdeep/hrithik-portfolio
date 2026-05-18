"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 scroll-mt-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real systems, <span className="text-gradient-brand">real impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Production-grade applications serving real businesses and real users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-brand text-white font-medium hover:scale-105 transition-transform"
                    >
                      View Case <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-brand transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="py-4 border-t border-white/10 mb-4">
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 3 && (
                        <span className="px-2.5 py-1 text-xs text-muted-foreground">
                          +{p.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 group/link transition-all"
                    >
                      Explore Project
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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
