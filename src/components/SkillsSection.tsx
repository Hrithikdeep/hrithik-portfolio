"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Core Engineering Fundamentals",
    description:
      "Strong foundation in designing scalable, production-ready systems from architecture to deployment.",
    skills: [
      "Backend Fundamentals",
      "Database Design",
      "System Design",
      "API Design",
      "Cloud Architecture",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Building fast, modern, and responsive user interfaces with focus on performance and UX.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable backend services and APIs for real-world applications.",
    skills: ["Node.js", "NestJS / Express", "REST API", "GraphQL API"],
  },
  {
    title: "Databases",
    description:
      "Efficient data modeling, querying, and caching for high-performance applications.",
    skills: ["PostgreSQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    description:
      "Deploying, scaling, and maintaining production-grade systems in cloud environments.",
    skills: [
      "AWS",
      "Docker",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "CI/CD Pipelines",
      "CDN (Cloudflare)",
    ],
  },
  {
    title: "Programming Language",
    description: "",
    skills: ["Python"],
  },
  {
    title: "AI / Machine Learning Frameworks",
    description:
      "Working with modern ML frameworks for AI model development and experimentation.",
    skills: ["PyTorch", "TensorFlow", "JAX", "Transformers"],
  },
  {
    title: "AI Systems & Vector Databases",
    description:
      "Building intelligent systems using embeddings, vector search, and retrieval-based architectures.",
    skills: [
      "RAG Systems",
      "Semantic Search",
      "AI Memory",
      "Pinecone",
      "Weaviate",
      "Qdrant",
      "Milvus",
    ],
  },
  {
    title: "Backend for AI Applications",
    description: "",
    skills: ["FastAPI (Python)", "Node.js Gateway", "Ray"],
  },
  {
    title: "AI Infrastructure",
    description:
      "Understanding of large-scale AI system deployment and infrastructure.",
    skills: ["Kubernetes", "GPU Clusters", "Distributed Training Systems"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-brand">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured overview of my engineering capabilities across full-stack, cloud, and AI
            systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card Background with Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              {/* Card Content */}
              <div className="relative glass rounded-2xl p-6 border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Category Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  {category.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-blue-500/30 hover:border-purple-500/50 transition-all duration-200 whitespace-nowrap"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
