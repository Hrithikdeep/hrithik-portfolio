"use client";

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-widest text-accent mb-3">Get in touch</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5">
                Need a developer who builds <span className="text-gradient-brand">real systems?</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Let's work together. Drop a message — I usually reply within a day.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <a
                  href="https://wa.me/916201282783"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 hover:border-accent/40 transition"
                >
                  <span className="text-xl">💬</span>
                  <div>
                    <p className="text-sm font-medium">+91 6201282783</p>
                    <p className="text-xs text-muted-foreground">Fastest way to reach me</p>
                  </div>
                </a>
                <a
                  href="mailto:deephrithik012@gmail.com"
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 hover:border-accent/40 transition"
                >
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-sm font-medium">deephrithik012@gmail.com</p>
                    <p className="text-xs text-muted-foreground">For project inquiries</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 hover:border-accent/40 transition"
                >
                  <span className="text-xl">in</span>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Connect & chat</p>
                  </div>
                </a>
                <a
                  href="/hrithik-resume.pdf"
                  download
                  className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 hover:border-primary/50 transition"
                >
                  <span className="text-xl">📄</span>
                  <div>
                    <p className="text-sm font-medium">Download CV</p>
                    <p className="text-xs text-muted-foreground">PDF · Full resume</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  required
                  className="w-full glass rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  className="w-full glass rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full glass rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-brand px-6 py-3.5 font-medium text-white glow hover:scale-[1.01] transition"
              >
                {sent ? "Message sent ✓" : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
