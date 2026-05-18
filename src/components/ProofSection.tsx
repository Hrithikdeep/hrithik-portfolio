"use client";

import { motion } from "framer-motion";

const proofs = [
  {
    title: "ERP for Multi-Location Businesses",
    desc: "Built end-to-end ERP handling billing, inventory & stock across multiple stores.",
    icon: "🏢",
  },
  {
    title: "10,000+ Active Users",
    desc: "Shipped a welfare platform with QR verification and admin dashboards.",
    icon: "👥",
  },
  {
    title: "Full Stack + Cloud",
    desc: "From React UIs to Node APIs, PostgreSQL, AWS & Docker deployments.",
    icon: "☁️",
  },
];

export function ProofSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {proofs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
