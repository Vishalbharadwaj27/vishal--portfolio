import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  const certifications = [
    "Career Essentials in Generative AI — Microsoft & LinkedIn",
    "Cloud Computing & Distributed Systems — NPTEL",
    "DevOps Professional Certificate — PagerDuty & LinkedIn",
    "Introduction to Web Development — IBM",
  ];

  return (
    <section
      id="about"
      className="w-full px-4 py-20 sm:px-6 lg:px-8"
      aria-label="About"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            A passionate developer focused on building reliable software solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </span>
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">
                  Acharya Institute of Technology, Bengaluru
                </p>
                <p className="text-muted-foreground">
                  Bachelor of Engineering — Information Science and Engineering
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Aug 2022 – Jun 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Bengaluru, India
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  CGPA: 7.9 / 10
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Career Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Information Science and Engineering graduate with a strong foundation in
                software development, data structures, and backend systems. Seeking an
                entry-level engineering role where I can contribute to building reliable
                and scalable software systems with strong emphasis on code quality and
                performance.
              </p>
            </div>
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Experience</h3>
                <div>
                  <p className="font-semibold text-foreground">Full Stack Developer Intern</p>
                  <p className="text-sm text-muted-foreground">Qugates Technologies</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                    <span>January 2026 – Present</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Working on full-stack web development projects involving frontend development, backend integration, API handling, and deployment workflows. Contributing to real-world production systems and collaborating within a professional development environment.
                  </p>
                </div>
              </div>
          </div>

          {/* Right: Certifications */}
          <div className="rounded-2xl border border-border bg-card/50 p-6 h-fit">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </span>
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground/90">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
