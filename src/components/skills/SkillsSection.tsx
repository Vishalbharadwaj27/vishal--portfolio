import { Code, Server, Database, Brain, Wrench, Sparkles, Layout } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["JavaScript", "TypeScript", "Java"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express.js", "Spring Boot"],
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "MySQL", "SQLite"],
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    title: "Core Competencies",
    icon: <Brain className="h-5 w-5" />,
    skills: ["REST APIs", "JWT Auth", "Real-Time Systems (Socket.IO)", "State Management", "Responsive UI"],
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git", "VS Code", "Postman"],
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    title: "AI & Machine Learning",
    icon: <Sparkles className="h-5 w-5" />,
    skills: ["Gemini API", "Fine-tuned Models (LoRA, PEFT)"],
    color: "from-amber-500/20 to-amber-600/10",
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full px-4 py-20 sm:px-6 lg:px-8 bg-secondary/20"
      aria-label="Skills"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {category.icon}
                  </span>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary/80 border border-border/50 px-3 py-1 text-sm font-medium text-foreground/80 transition-colors group-hover:bg-secondary group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
