import EZC from "./EZC.png";
import KanbanTask from "./Kanban-Task.png";
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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EZ Code",
    role: "Full-Stack Developer & AI Engineer",
    problem: "Developers lack instant feedback on code quality, structure, and learning direction.",
    solution: "Built an AI-powered code analysis tool using a custom-trained model fine-tuned with LoRA and PEFT. Integrated AST-based parsing for code visualization and Gemini API for structured learning roadmaps.",
    techStack: ["React", "Node.js", "Python", "Gemini API"],
    impact: "Reduced code review turnaround by 60% during internal testing with 50+ code submissions",
    quickTest: [
      "Paste any JavaScript function and view AST visualization",
      "Generate a learning roadmap from code quality analysis"
    ],
    image: EZC,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/EZC-Ext.git"
  },
  {
    id: 2,
    title: "Kanban Task Manager",
    role: "Full-Stack Developer",
    problem: "Teams need a lightweight, self-hosted task management solution without vendor lock-in.",
    solution: "Built a full-stack Kanban board with React.js, Spring Boot, and MySQL. Designed RESTful APIs with end-to-end data persistence and drag-and-drop task management.",
    techStack: ["React", "Spring Boot", "MySQL", "REST API"],
    impact: "Handled 200+ tasks across 3 boards with zero data loss during load testing",
    quickTest: [
      "Create a task and drag it across columns",
      "Verify task persistence after page refresh"
    ],
    image: KanbanTask,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/Task-Trailblazer.git"
  },
  {
    id: 3,
    title: "OneApp",
    role: "Frontend Developer",
    problem: "Users juggle multiple apps for basic productivity — alarms, reminders, and notes.",
    solution: "Developed a modular all-in-one productivity application with clean component architecture, supporting alarms, reminders, and notes in a unified interface.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    impact: "Consolidated 5 separate tools into 1 app with modular, reusable components",
    quickTest: [
      "Set an alarm and verify notification triggers",
      "Create a note and confirm it persists across sessions"
    ],
    image: OneApp,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/One-app.git"
  },
  {
    id: 4,
    title: "Campus Hub",
    role: "Full-Stack Developer",
    problem: "Campus communication and resource management is fragmented and inefficient.",
    solution: "Campus Hub\nCampus Hub is a centralized campus management platform that streamlines communication and operations within an educational institution. It provides role-based access for students and administrators to manage announcements, academic activities, and campus resources through structured dashboards.\nThe system features secure authentication, modular functionality, and organized data handling. Built with modern frontend frameworks, backend integration, and a database-driven architecture, it supports scalable and efficient institutional deployment.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "Provides streamlined campus operations and improved communication across roles",
    quickTest: [
      "Log in as a student and view announcements",
      "Switch to admin dashboard to post an announcement"
    ],
    image: CampusHub,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/single-campus-hub.git"
  },
  {
    id: 5,
    title: "DocAssist",
    role: "Full-Stack Developer",
    problem: "Interacting with and extracting insights from documents is time-consuming without intelligent tooling.",
    solution: "DocAssist\nDocAssist is a document management and interaction platform designed to improve productivity through structured document processing. Users can upload documents, analyze content, and extract key information through an intuitive interface.\nIt is built on a modern full-stack architecture that ensures reliable document parsing, backend processing, and responsive frontend interaction within a scalable web application.",
    techStack: ["React", "Node.js", "AI Services", "MongoDB"],
    impact: "Enables faster document insights and AI-driven interactions",
    quickTest: [
      "Upload a document and request a summary",
      "Ask context-aware questions about an uploaded document"
    ],
    image: DocAssist,
    liveDemo: "",
    github: "https://github.com/Vishalbharadwaj27/Doc.git"
  }
];
