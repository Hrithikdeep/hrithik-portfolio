"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all ${
            scrolled 
              ? "glass-strong backdrop-blur-xl border border-white/10 shadow-lg" 
              : "hover:glass-strong"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 sm:gap-3 font-display font-bold text-base sm:text-lg group hover:opacity-80 transition">
            <span className="h-8 sm:h-9 w-8 sm:w-9 rounded-lg bg-gradient-brand grid place-items-center text-xs sm:text-sm font-bold group-hover:scale-110 transition">
              H
            </span>
            <span className="hidden sm:inline text-sm sm:text-base">Hrithik</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1 text-xs sm:text-sm">
            <a href="/#projects" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition">Projects</a>
            <a href="/#skills" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition">Skills</a>
            <a href="/#experience" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition">Experience</a>
            <a href="/#about" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition">About</a>
            <a href="/#contact" className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition">Contact</a>
          </div>
          
          <a
            href="/#contact"
            className="rounded-full bg-gradient-brand px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white hover:opacity-90 transition glow hover:shadow-lg hover:scale-105 whitespace-nowrap"
          >
            Hire
          </a>
        </nav>
      </div>
    </header>
  );
}
