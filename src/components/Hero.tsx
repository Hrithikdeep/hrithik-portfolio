"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, MessageCircle, Radio, Sparkles } from "lucide-react";

export function Hero() {
  const focusAreas = [
    "ERP Platforms",
    "Cloud Systems",
    "AI Applications",
    "Flutter Apps",
    "Backend Architecture",
  ];

  const trustCards = [
    { label: "Based in India", icon: MapPin },
    { label: "Remote Worldwide", icon: Radio },
    { label: "Replies within 24h", icon: MessageCircle },
  ];

  const techTags = [
    { label: "Next.js", className: "-left-3 top-14" },
    { label: "Node.js", className: "right-0 top-8" },
    { label: "PostgreSQL", className: "-right-8 top-44" },
    { label: "Flutter", className: "bottom-16 -left-5" },
    { label: "AWS", className: "bottom-5 right-16" },
    { label: "AI Systems", className: "left-28 -bottom-3" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-28 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute right-10 top-32 h-[34rem] w-[34rem] rounded-full bg-accent/12 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-10 blur-3xl" />
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/25"
            style={{
              left: `${8 + ((i * 17) % 84)}%`,
              top: `${18 + ((i * 23) % 66)}%`,
            }}
            animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -10, 0] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[42rem]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted-foreground mb-7"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Available for freelance & remote roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-[38rem] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] mb-6"
            >
              Building{" "}
              <span className="text-gradient-brand">production-grade</span>
              <br />
              software systems
              <br />
              for{" "}
              <span className="text-gradient-brand">real-world scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground max-w-[35rem] mb-8 leading-relaxed"
            >
              Full Stack Engineer focused on scalable backend systems, ERP platforms,
              cloud infrastructure, and modern digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {focusAreas.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-foreground/85 shadow-[0_12px_40px_-24px_rgba(103,232,249,.6)] backdrop-blur-xl"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid max-w-[38rem] gap-3 sm:grid-cols-3 mb-10"
            >
              {trustCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85 shadow-[0_18px_60px_-35px_rgba(124,58,237,.7)]"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {card.label}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-brand px-8 py-3.5 font-semibold text-white shadow-[0_0_80px_-12px_rgba(124,58,237,.85)] hover:scale-[1.03] transition-all flex items-center gap-2"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="rounded-full glass px-7 py-3.5 font-medium hover:bg-white/[0.08] hover:border-accent/50 transition border border-white/10"
              >
                Hire Me
              </a>
              <a
                href="/hrithik-resume.pdf"
                download
                className="rounded-full glass px-7 py-3.5 font-medium hover:bg-white/[0.08] transition border border-white/10 flex items-center gap-2"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden h-[520px] lg:block"
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative h-[26rem] w-[26rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-brand blur-3xl opacity-45 animate-blob" />
                <div className="absolute inset-10 rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:-4s]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-5 rounded-full border border-dashed border-white/15"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border border-white/10"
                />
                <div className="absolute inset-0 rounded-full glass-strong animate-float overflow-hidden border border-white/10 shadow-[0_30px_120px_-35px_rgba(6,182,212,.65)]">
                  <div className="absolute inset-0 grid-bg opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
                  <div className="absolute inset-8 rounded-full border border-white/10 bg-background/35" />
                  <div className="absolute inset-20 rounded-full bg-gradient-brand opacity-20 blur-xl" />
                  <div className="relative z-10 grid h-full place-items-center">
                    <div className="text-center">
                      <Sparkles className="mx-auto mb-4 h-8 w-8 text-accent" />
                      <div className="text-5xl font-display font-bold text-gradient-brand">Core</div>
                      <div className="mt-3 text-xs text-muted-foreground tracking-widest uppercase">
                        Systems Architecture
                      </div>
                    </div>
                  </div>
                </div>
                {techTags.map((tag, i) => (
                  <motion.div
                    key={tag.label}
                    className={`absolute ${tag.className} rounded-full border border-white/10 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground/90 shadow-2xl backdrop-blur-xl`}
                    animate={{ y: [0, i % 2 === 0 ? -9 : 9, 0], opacity: [0.82, 1, 0.82] }}
                    transition={{ duration: 4 + i * 0.35, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {tag.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
