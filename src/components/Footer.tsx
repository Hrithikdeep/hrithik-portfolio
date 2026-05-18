import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-12 mt-20 sm:mt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left side - Credit */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <p className="mb-1">© {new Date().getFullYear()} Hrithik</p>
            <p className="text-xs">Built with Next.js, TypeScript & TailwindCSS</p>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a
              href="mailto:deephrithik012@gmail.com"
              className="group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg glass border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 transition text-xs sm:text-sm"
              title="Email"
            >
              <Mail className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hrithikdeep/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg glass border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 transition text-xs sm:text-sm"
              title="LinkedIn"
            >
              <Linkedin className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Hrithikdeep"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg glass border border-white/10 text-muted-foreground hover:text-accent hover:border-accent/50 transition text-xs sm:text-sm"
              title="GitHub"
            >
              <Github className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
