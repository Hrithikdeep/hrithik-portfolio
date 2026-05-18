"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    { label: "10,000+", desc: "Active users on systems I've built" },
    { label: "3+", desc: "Production platforms deployed" },
    { label: "Full Stack", desc: "Architecture to cloud deployment" },
    { label: "Scalable", desc: "Systems built for growth" }
  ];

  return (
    <section id="about" className="py-24 scroll-mt-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">About me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              I'm <span className="text-gradient-brand">Hrithik</span> — a full stack engineer building real systems.
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Hrithik — a full stack engineer focused on building real-world systems that businesses and users rely on daily.
              </p>
              <p>
                My work spans ERP platforms, digital identity systems, AI-powered applications, cloud infrastructure, and scalable web architectures.
              </p>
              <p>
                I care deeply about performance, clean architecture, system design, and building software that solves actual operational problems.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Core Expertise</p>
              <div className="flex flex-wrap gap-3">
                {["Full Stack Architecture", "System Design", "Cloud Deployment", "Database Optimization", "API Development", "Scalable Frontend", "Mobile Apps", "Real-time Systems"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg glass border border-white/10 text-sm font-medium hover:border-accent/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-accent/50 hover:bg-white/[0.06] transition group"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2 group-hover:scale-110 transition-transform origin-left">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-lg">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
