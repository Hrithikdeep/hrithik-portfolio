import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProofSection } from "@/components/ProofSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { SystemsBuiltSection } from "@/components/SystemsBuiltSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Hrithik — Full Stack Engineer | Real Systems, Shipped",
  description:
    "Hrithik is a full stack engineer building scalable web apps, ERP systems, and platforms used by 10,000+ users. React, Node.js, PostgreSQL, AWS.",
  openGraph: {
    title: "Hrithik — Full Stack Engineer",
    description:
      "Scalable web apps, ERP systems, and platforms shipped to production.",
    url: "https://hrithik.dev",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProofSection />
        <ProjectsSection />
        <SystemsBuiltSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
