import EZC from "./EZC.png";
import SyncSpace from "./SyncSpace.png";
import OneApp from "./One-app.png";
import CampusHub from "./Campus-hub.png";
import DocAssist from "./Doc-Assist.png";

export interface Project {
  id: number;
  title: string;
  role: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  quickTest: [string, string];
  image: string;
  liveDemo: string;
  github: string;
  category: string;
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SynsSpace",
    role: "Full-Stack Developer",
    problem: "Teams need real-time collaboration for chat, tasks, and file sharing.",
    solution: "Built full-stack platform with React, Node.js, Express.js, MySQL, Socket.IO. Features: real-time updates, JWT auth, RBAC, team workspaces.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Socket.IO"],
    impact: "Supports 100+ concurrent users with zero data loss",
    quickTest: [
      "Real-time messaging updates",
      "Live task synchronization"
    ],
    image: SyncSpace,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/SynsSpace.git",
    category: "Real-time Systems",
    keyFeatures: ["Socket.IO Updates", "JWT & RBAC Auth", "Workspace Synchronization"]
  },
  {
    id: 2,
    title: "Doc Assist",
    role: "Full-Stack Developer",
    problem: "Healthcare professionals need centralized patient record management.",
    solution: "Built full-stack healthcare app with React, Express, offline support. Features: patient records, appointment scheduling, PDF reports.",
    techStack: ["React", "Vite", "Express.js", "PDF Generation", "IndexedDB"],
    impact: "Offline-first architecture enables 24/7 accessibility",
    quickTest: [
      "Create and save patient record",
      "Generate PDF report"
    ],
    image: DocAssist,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/Doc.git",
    category: "Healthcare IT",
    keyFeatures: ["Offline-first Storage", "PDF Generation", "Appointment Scheduling"]
  },
  {
    id: 3,
    title: "One App Dashboard",
    role: "Full-Stack Developer",
    problem: "Users juggle multiple apps for productivity tasks.",
    solution: "Built unified dashboard combining tasks, notes, reminders, expenses. Modular widget architecture with persistent storage.",
    techStack: ["React", "Express.js", "SQLite", "Context API", "Tailwind CSS"],
    impact: "Consolidated 5 tools into modular, reusable component system",
    quickTest: [
      "Create task and verify persistence",
      "Switch between widgets"
    ],
    image: OneApp,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/One-App-Premium-Dashboard.git",
    category: "Productivity Tools",
    keyFeatures: ["Modular Widget Grid", "State Persistence", "Expense Tracking"]
  },
  {
    id: 4,
    title: "Campus Hub",
    role: "Full-Stack Developer",
    problem: "Campus communication fragmented across multiple platforms.",
    solution: "Centralized platform with role-based access for students/admins. Features: announcements, resource management, secure auth.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "Streamlined campus operations with improved inter-role communication",
    quickTest: [
      "Login as student, view announcements",
      "Admin: post announcement"
    ],
    image: CampusHub,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/Campus-Management-App.git",
    category: "Management Platforms",
    keyFeatures: ["Role-Based Access", "Announcements System", "Resource Allocation"]
  },
  {
    id: 5,
    title: "EZ Code",
    role: "Full-Stack Developer & AI Engineer",
    problem: "Developers lack instant feedback on code quality and structure.",
    solution: "AI-powered analysis tool using fine-tuned models (LoRA/PEFT). AST visualization + Gemini API for learning roadmaps.",
    techStack: ["React", "Node.js", "Python", "Gemini API", "LoRA/PEFT"],
    impact: "60% reduction in code review time during beta testing",
    quickTest: [
      "Paste JS function, view AST",
      "Generate learning roadmap"
    ],
    image: EZC,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/EZC-Ext.git",
    category: "AI & Developer Tools",
    keyFeatures: ["AST Visualization", "LoRA/PEFT Code Tuning", "Learning Roadmaps"]
  }
];
