"use client";

import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch How I <span className="text-gradient-brand">Build Real Systems</span>
          </h2>
          <p className="text-muted-foreground">
            A walkthrough of how I architect, build, and ship production-grade applications
            from scratch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-2xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/e_e45h8rpzk"
              title="ETT Solar project demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
