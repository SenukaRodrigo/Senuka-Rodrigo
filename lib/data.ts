/**
 * Single source of truth for every piece of CV content on the site.
 * Edit here — the sections read from this file and never hardcode copy.
 */

export const profile = {
  name: "Senuka Rodrigo",
  firstName: "Senuka",
  lastName: "Rodrigo",
  role: "Computer Science Undergraduate",
  tagline: "Full Stack Enthusiast",
  location: "Kaluthara, Sri Lanka",
  email: "senukarrodrigo.07@gmail.com",
  // Public site: phone intentionally omitted. Add it back here if you want it shown.
  github: "https://github.com/Kei774",
  linkedin: "https://www.linkedin.com/in/senuka-rodrigo",
  summary:
    "Computer Science undergraduate at the University of Westminster, currently seeking a software engineering internship. I build and deploy full stack applications with Next.js, TypeScript, Firebase and Java, and I'm currently developing a cross-platform mobile app with Flutter.",
  // Rotating words in the hero headline.
  rotatingWords: ["Full Stack", "Next.js", "Flutter", "TypeScript", "Firebase"],
} as const;

export type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  status?: string;
  team?: string;
  accent: "cyan" | "violet" | "amber" | "emerald" | "rose";
};

export const projects: Project[] = [
  {
    id: "revivex",
    name: "ReViveX",
    blurb:
      "Full stack rehabilitation platform enabling doctors to assign and monitor patient exercise plans in real time.",
    description:
      "A neuro-rehabilitation platform for Parkinson's and post-stroke patients. Therapists monitor real-time adherence, assign exercise plans, and receive AI-driven insights. Patients track sessions, streaks, and progress via a gamified dashboard.",
    stack: ["JavaScript", "TypeScript", "Next.js", "Firebase", "Firestore", "HTML"],
    highlights: [
      "Developed the patient dashboard including session tracking, weekly adherence score, and XP progress system",
      "Integrated Firebase Firestore for real-time data sync between doctor and patient portals",
      "Built role-based UI for therapists, patients, caregivers, and admin user types",
      "Collaborated in a team of 6 using Git branching, pull requests, and code reviews",
    ],
    github: "https://github.com/Kei774",
    live: "#",
    team: "Team of 6",
    accent: "cyan",
  },
  {
    id: "inkflow",
    name: "InkFlow",
    blurb: "Cross-platform blog application for Android, iOS and web.",
    description:
      "A cross-platform blogging app built in a team of 2. Users publish Markdown posts with cover images, follow authors, and engage through likes and comment threads backed by real-time Firestore updates.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Storage", "go_router"],
    highlights: [
      "Architecting the app using Flutter's recommended MVVM layered structure (views, view models, repositories, services)",
      "Implementing authentication and post CRUD flows with Firebase Auth and Firestore real-time listeners",
      "Building declarative, deep-linkable navigation with go_router and responsive layouts for mobile, tablet and web",
      "Collaborating via Git feature branches and pull-request reviews; unit and widget tests planned per feature",
    ],
    github: "https://github.com/Kei774",
    status: "In progress · expected Sept 2026",
    team: "Team of 2",
    accent: "violet",
  },
  {
    id: "ai-chat-bot",
    name: "AI Chat Bot",
    blurb: "An AI chat bot exploring how to integrate AI models with APIs.",
    description:
      "Built to learn AI model and API integration in depth. Implemented in Next.js with a well-organised frontend structure, style management and an interactive user interface. Emphasised API integration, API key security and a seamless interaction flow.",
    stack: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    highlights: [
      "Focused on secure API key handling and server-side model calls",
      "Interactive streaming-style chat interface with managed styles",
    ],
    github: "https://github.com/Kei774",
    accent: "emerald",
  },
  {
    id: "estate-agent",
    name: "Estate-Agent",
    blurb: "React frontend web application built with Vite.",
    description:
      "A React based frontend built using Vite for fast development and optimised builds. Focused on a modular, scalable user interface using reusable components, clean folder organisation and a structured component-based architecture.",
    stack: ["React.js", "JavaScript", "Vite", "HTML", "CSS"],
    highlights: [
      "Reusable component library with a clean, scalable folder structure",
      "Demonstrates modern component-based frontend practices",
    ],
    github: "https://github.com/Kei774",
    accent: "amber",
  },
  {
    id: "post-office",
    name: "Post Office Management System",
    blurb: "Spring Boot REST API simulating a postal office management system.",
    description:
      "Manages post offices, parcels and parcel history using a layered architecture, database integration, Maven project management and structured error handling.",
    stack: ["Java", "Spring Boot", "SQL", "XML", "Maven"],
    highlights: [
      "Layered architecture with clear separation of controller, service and repository",
      "Structured error handling and relational database integration",
    ],
    github: "https://github.com/Kei774",
    accent: "rose",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "Dart", "TypeScript", "JavaScript", "SQL", "HTML", "CSS", "XML"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React.js", "Flutter", "Tailwind CSS", "Spring Boot"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Firebase Auth", "Firestore", "Firebase Storage", "Figma", "Notion", "Microsoft Office"],
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Debugging",
      "Accountability",
      "Collaboration",
      "Fast Learner",
      "Time Management",
      "Adaptability",
    ],
  },
] as const;

export const education = [
  {
    school: "University of Westminster, UK",
    note: "Affiliated with Informatics Institute of Technology",
    qualification: "BSc (Hons) in Computer Science",
    period: "Sept 2024 — Present",
    current: true,
  },
  {
    school: "Informatics Institute of Technology (IIT)",
    note: "Sri Lanka",
    qualification: "Foundation in Information Technology (Merit)",
    period: "Sept 2023 — May 2024",
    current: false,
  },
  {
    school: "Lyceum International School",
    note: "Panadura",
    qualification: "Primary Education — Ordinary Level",
    period: "Jan 2009 — May 2024",
    current: false,
  },
] as const;

export const achievements = [
  {
    title: "Java Programming Professional Certificate",
    detail: "Distinction · IIT Professional Development Unit",
  },
  {
    title: "Foundation Certificate in Higher Education",
    detail: "Merit · Informatics Institute of Technology",
  },
  {
    title: "Finalist — University Category",
    detail: "SLIOT Challengers",
  },
] as const;

export const interests = ["Swimming", "Chess", "Football"] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
