import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/60 border border-border px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm text-muted-foreground">Open to entry-level SDE roles</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4">
          Vishal M Bharadwaj
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
          Full-Stack Developer specializing in React, Node.js, and scalable backends.
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
          Built real-time collaboration platforms and production-ready systems.<br />
          Open to entry-level SDE opportunities.
        </p>


        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/Vishalbharadwaj27"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/60 border border-border text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-secondary"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-m-bharadwaj-059b5a353/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/60 border border-border text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-secondary"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=vishallbharadwaj27@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/60 border border-border text-muted-foreground transition-all hover:text-foreground hover:border-primary/50 hover:bg-secondary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
