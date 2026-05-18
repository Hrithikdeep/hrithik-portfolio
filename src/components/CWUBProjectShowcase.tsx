"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Users, Smartphone } from "lucide-react";

export function CWUBProjectShowcase() {
  const tagVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <div className="space-y-32 py-24">
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent rounded-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <div className="mb-6 flex justify-center gap-2 flex-wrap">
            {["Web App", "Admin Dashboard", "Mobile App"].map((tag, i) => (
              <motion.span
                key={tag}
                custom={i}
                variants={tagVariants}
                initial="initial"
                animate="animate"
                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            Labour Welfare <span className="text-gradient-brand">Management System</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A full-stack digital platform for worker registration, verification, and welfare management serving 10,000+ workers across Bihar
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105">
              View Live Demo
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 transition">
              View Repo
            </button>
          </motion.div>
        </motion.div>

        {/* Gradient background animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full -z-10" />
      </section>

      {/* ===== 2. PROBLEM & SOLUTION ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Challenge & Approach</p>
          <h2 className="text-4xl md:text-5xl font-bold">The Problem We Solved</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {/* Left: Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Before: Manual & Fragmented</h3>
            {[
              "❌ Manual registration with paper forms",
              "❌ Rampant fraud and fake IDs",
              "❌ No digital tracking system",
              "❌ Workers had no proof of identity",
              "❌ Admin oversight impossible at scale",
            ].map((problem, i) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 glass rounded-lg p-4"
              >
                <span className="text-xl shrink-0">⚠️</span>
                <p className="text-muted-foreground">{problem}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">After: Digital & Verified</h3>
            {[
              "✅ Online registration with QR identity",
              "✅ Digital verification system",
              "✅ Real-time tracking & audit logs",
              "✅ Mobile app for worker verification",
              "✅ Admin dashboard with analytics",
            ].map((solution, i) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 glass rounded-lg p-4 border border-green-500/20 bg-green-500/5"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-foreground">{solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 3. PRODUCT SHOWCASE (GALLERY) ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Visual Tour</p>
          <h2 className="text-4xl md:text-5xl font-bold">Product in Action</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            {
              id: 1,
              title: "Website Homepage",
              description: "Public portal for worker registration and verification with intuitive navigation",
              icon: "🏠",
            },
            {
              id: 2,
              title: "Registration Forms",
              description: "Multiple registration options - online forms, PDF download, or agent-assisted",
              icon: "📋",
            },
            {
              id: 3,
              title: "Admin Dashboard",
              description: "Real-time analytics showing workers, agents, approvals, and registrations today",
              icon: "📊",
            },
            {
              id: 4,
              title: "Worker Management",
              description: "Complete worker database with approval workflow and status tracking",
              icon: "👥",
            },
            {
              id: 5,
              title: "Reports Section",
              description: "Weekly, monthly, and yearly insights with downloadable reports",
              icon: "📈",
            },
            {
              id: 6,
              title: "Digital ID Card",
              description: "QR-based digital labour identity card for instant worker verification",
              icon: "🆔",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group"
            >
              {/* Image Placeholder with gradient */}
              <div className="relative rounded-2xl overflow-hidden glass mb-4 aspect-video bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-background border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 4. FEATURES GRID ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Core Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold">Key Features</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            {
              icon: Users,
              title: "Digital Worker Registration",
              description: "Streamlined online registration with multi-step verification and document upload",
            },
            {
              icon: Shield,
              title: "QR-Based Identity Verification",
              description: "Secure QR code generation for instant worker authentication and verification",
            },
            {
              icon: BarChart3,
              title: "Admin Dashboard Analytics",
              description: "Real-time dashboards with worker stats, agent performance, and system insights",
            },
            {
              icon: Zap,
              title: "Multi-Language Support",
              description: "Hindi, English, and regional language support for accessibility across regions",
            },
            {
              icon: Smartphone,
              title: "Mobile App Integration",
              description: "Flutter-based mobile app for workers to manage accounts and verify identities",
            },
            {
              icon: Shield,
              title: "Secure Data Management",
              description: "End-to-end encryption, role-based access control, and comprehensive audit logs",
            },
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 group cursor-pointer transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 5. TECH STACK ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Technology Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold">Built With Modern Tech</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 px-6 max-w-6xl mx-auto">
          {[
            { category: "Frontend", items: ["React", "Tailwind CSS"] },
            { category: "Backend", items: ["Node.js", "Express"] },
            { category: "Mobile", items: ["Flutter"] },
            { category: "Database", items: ["MongoDB", "PostgreSQL"] },
            { category: "Other", items: ["REST API", "QR Code", "JWT Auth"] },
          ].map((stack, idx) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-5 border border-white/10"
            >
              <p className="text-xs uppercase tracking-wider text-accent mb-3 font-semibold">
                {stack.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-500/30 hover:from-purple-500/40 hover:to-blue-500/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 6. MY ROLE ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Contribution</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Role</h2>
        </div>

        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/10 space-y-4"
          >
            {[
              "👨‍💻 Built full-stack architecture from scratch",
              "🎨 Designed and implemented responsive frontend (React + Tailwind)",
              "⚙️ Developed scalable backend services (Node.js + Express)",
              "📱 Created Flutter mobile app for worker interactions",
              "🔐 Implemented authentication, authorization, and QR verification system",
              "📊 Built comprehensive admin dashboard with real-time analytics",
              "☁️ Deployed on cloud infrastructure with Docker and CI/CD pipelines",
              "📈 Optimized for 10,000+ concurrent users and scalability",
            ].map((role, idx) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="text-xl shrink-0">{role.split(" ")[0]}</span>
                <p className="text-muted-foreground pt-1">{role.substring(role.indexOf(" ") + 1)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 7. IMPACT METRICS ===== */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Real-World Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold">By The Numbers</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {[
            { metric: "10,000+", label: "Workers Supported", icon: "👥" },
            { metric: "1,245", label: "Active Agents", icon: "🤝" },
            { metric: "99.8%", label: "Uptime", icon: "✅" },
            { metric: "80%", label: "Faster Verification", icon: "⚡" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-purple-500/30 transition-all group cursor-pointer"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.metric}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== 8. CALL TO ACTION ===== */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 glass rounded-3xl border border-white/10 p-12 text-center max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking to build scalable digital systems like this?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project. I specialize in full-stack development, system design, and building production-grade applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105 flex items-center justify-center gap-2">
              Hire Me <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 transition">
              View Other Projects
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
