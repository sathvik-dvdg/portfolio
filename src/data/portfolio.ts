import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BrainCircuit,
  CheckSquare,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Hospital,
  Linkedin,
  LockKeyhole,
  Mail,
  Network,
  Phone,
  Server,
  Shield,
  Terminal,
  Trophy
} from "lucide-react";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  note: string;
  skills: string[];
};

export type Project = {
  name: string;
  meta: string;
  icon: LucideIcon;
  description: string;
  metrics: string[];
  stack: string[];
  href: string;
  visual: "graph" | "health" | "vision" | "tasks";
};

export type Achievement = {
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  score: string;
  icon: LucideIcon;
};

export type ContactLink = {
  label: string;
  text: string;
  href: string;
  icon: LucideIcon;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const heroChips = [
  "Cloud Infrastructure",
  "Cyber Defense",
  "Machine Learning",
  "Graph Neural Networks",
  "Open Source"
];

export const heroStats = [
  "4+ Projects",
  "5+ Open Source PRs",
  "88%+ ML Accuracy",
  "SIH 2025"
];

export const aboutParagraphs = [
  "I am a Computer Science & Engineering student at Canara Engineering College, Mangalore (VTU), focused on cloud infrastructure, network security, and applied machine learning. I build systems at the intersection of intelligence and resilience, from graph-based intrusion detection to real-time biometric monitoring.",
  "My backend work spans RESTful microservices in Node.js and Flask, deployed on AWS EC2, S3, and VPC, with hands-on experience integrating ML models into production API pipelines. I approach engineering problems with a production-first mindset: reliability, scalability, and security are first-class concerns.",
  "Beyond academics, I am actively involved in open-source contribution and competitive problem-solving in Java. I am currently exploring full-time and internship opportunities in backend engineering, cloud systems, and ML infrastructure."
];

export const stats = [
  { value: "8.14", label: "SGPA - 5th Semester" },
  { value: "4+", label: "Engineering Projects" },
  { value: "5+", label: "Open Source PRs Merged" },
  { value: "SIH 2025", label: "Smart India Hackathon" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    note: "Java for problem-solving, Python for ML and backend services, JavaScript for full-stack products.",
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    title: "Backend",
    icon: Server,
    note: "API design across task workflows, healthcare systems, and ML inference services.",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "REST API Design", "WebSocket", "Microservices"]
  },
  {
    title: "Cloud & Infra",
    icon: Cloud,
    note: "Cloud deployment, containerization, and Linux-oriented operations.",
    skills: ["AWS EC2", "AWS S3", "AWS VPC", "MongoDB Atlas", "Docker", "Linux Admin", "CI/CD Pipelines"]
  },
  {
    title: "Databases",
    icon: Database,
    note: "Relational modeling for clinical workflows and document storage for threat reports.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Database Schema Design"]
  },
  {
    title: "Frontend & Mobile",
    icon: Terminal,
    note: "Interfaces for dashboards, mobile-first healthcare flows, and admin tools.",
    skills: ["React.js", "React Native", "Redux", "Tailwind CSS"]
  },
  {
    title: "ML & AI",
    icon: BrainCircuit,
    note: "Computer vision, tabular ML, graph learning, and LLM-enabled workflows.",
    skills: ["Scikit-learn", "OpenCV", "Random Forest", "SVM", "GraphSAGE", "PyTorch Geometric", "LLM Integration"]
  },
  {
    title: "Security",
    icon: LockKeyhole,
    note: "Threat modeling, graph-based IDS concepts, and production auth patterns.",
    skills: ["Network Intrusion Detection", "Graph-based Threat Analysis", "JWT Authentication", "VPN/VPC Design"]
  },
  {
    title: "DevOps & Tools",
    icon: Github,
    note: "Practical developer workflow and automation across local and cloud environments.",
    skills: ["Git/GitHub", "Docker", "n8n", "Bash/Shell Scripting"]
  }
];

export const projects: Project[] = [
  {
    name: "GraphSentinel",
    meta: "Feb 2026 - Cyber Defense - Python, GNN, FastAPI",
    icon: Shield,
    description:
      "Architected a network intrusion detection system using GraphSAGE to model attack propagation paths across a simulated topology. Trained against CICIDS-2017 records and packaged the model as a containerized FastAPI inference service. Hosts become graph nodes and traffic flow vectors become edge features, allowing the system to reason about lateral movement that signature-based IDS tools often miss.",
    metrics: ["GNN Inference", "CICIDS-2017 Dataset", "Graph-based IDS", "Containerized"],
    stack: ["Python", "GraphSAGE", "PyTorch Geometric", "FastAPI", "MongoDB Atlas", "Docker", "CICIDS-2017"],
    href: "https://github.com/sathvik-dvdg",
    visual: "graph"
  },
  {
    name: "HVSApp - Healthcare Hand-Off Validation",
    meta: "Healthcare - Full-Stack - React Native, FastAPI, PostgreSQL",
    icon: Hospital,
    description:
      "Built a mobile-first coordination platform to reduce communication gaps in clinical patient hand-off workflows. The architecture separates a Node.js patient lifecycle API from a FastAPI notification service using WebSocket alerts. PostgreSQL constraints and transaction-level isolation protect the transfer record during concurrent department updates.",
    metrics: ["100% Data Consistency", "Real-Time Alerts", "Clinical Workflow"],
    stack: ["React Native", "Node.js", "FastAPI", "PostgreSQL", "Redis", "WebSocket", "JWT"],
    href: "https://github.com/sathvik-dvdg",
    visual: "health"
  },
  {
    name: "Real-Time Stress Monitoring Engine",
    meta: "Computer Vision - ML - Flask, Scikit-learn, OpenCV",
    icon: Activity,
    description:
      "Built a real-time stress classification system using facial landmark analysis as a proxy for autonomic state. A Random Forest model classifies webcam frames from normalized facial geometry features, while Flask exposes inference through a predict endpoint. The pipeline achieved 88%+ validation accuracy with response latency under 400ms per frame.",
    metrics: ["88%+ Accuracy", "<400ms Latency", "Real-Time"],
    stack: ["Python", "Flask", "OpenCV", "Scikit-learn", "Random Forest", "MediaPipe"],
    href: "https://github.com/sathvik-dvdg",
    visual: "vision"
  },
  {
    name: "Task Manager Web Application",
    meta: "Full-Stack - React.js, Node.js, MongoDB",
    icon: CheckSquare,
    description:
      "Developed a full-stack task manager with JWT authentication, role-based access control, and CRUD workflows for prioritized tasks. The REST API uses OpenAPI-style status codes, rate limiting, and Joi validation. MongoDB Atlas stores user-scoped task records to prevent cross-user data access.",
    metrics: ["JWT Auth", "RBAC", "100 req/min Rate Limit"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    href: "https://github.com/sathvik-dvdg",
    visual: "tasks"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon 2025 - Team Cipher Squad",
    organization: "LAVIS - Loan Asset Verification & Information System",
    date: "Oct 2025",
    badge: "Hackathon - Selection Round",
    description:
      "Designed and presented an ML-based solution for automating collateral asset verification in the SIH selection round. Contributed to backend architecture with emphasis on reliability, data validation, and scalable processing workflows."
  },
  {
    title: "Open Source Contributor - Social Networking Platform",
    organization: "Ongoing - Active Contributor",
    date: "Ongoing",
    badge: "5+ PRs Merged",
    description:
      "Optimized user communication workflows by refactoring redundant API endpoints, reducing backend payload size by 22%. Merged high-impact PRs related to secure event discovery and JWT-based session management."
  }
];

export const education: Education[] = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "Canara Engineering College, Mangalore - VTU",
    year: "Expected 2026",
    score: "SGPA: 8.14",
    icon: GraduationCap
  },
  {
    degree: "HSC - Pre-University (Science)",
    institution: "KSEAB - Karnataka State Board",
    year: "Class XII",
    score: "88.96%",
    icon: GraduationCap
  },
  {
    degree: "SSC - Secondary School",
    institution: "KSEAB - Karnataka State Board",
    year: "Class X",
    score: "92.96%",
    icon: GraduationCap
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    text: "gmail.com",
    href: "mailto:devadigasathwik88@gmail.com",
    icon: Mail
  },
  {
    label: "LinkedIn",
    text: "linkedin.com",
    href: "https://www.linkedin.com/in/sathwik-devadiga-a86a9b2a4/",
    icon: Linkedin
  },
  {
    label: "GitHub",
    text: "github.com",
    href: "https://github.com/sathvik-dvdg",
    icon: Github
  },
  {
    label: "Phone",
    text: "+91 88675 98749",
    href: "tel:+918867598749",
    icon: Phone
  }
];

export const openSourceHighlights = [
  {
    value: "5+",
    label: "Merged PRs"
  },
  {
    value: "22%",
    label: "Payload Reduction"
  },
  {
    value: "JWT",
    label: "Session Security"
  }
];

export const footerLinks = [
  { label: "GitHub", href: "https://github.com/sathvik-dvdg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathwik-devadiga-a86a9b2a4/" },
  { label: "Email", href: "mailto:devadigasathwik88@gmail.com" }
];

export const resumeHref = "/sathvik-devadiga-resume-2026.pdf";

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sathvik T Devadiga",
  url: "https://sathvik.dev",
  email: "mailto:devadigasathwik88@gmail.com",
  jobTitle: "Software Engineering Student",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressCountry: "India"
  },
  sameAs: ["https://github.com/sathvik-dvdg", "https://linkedin.com/in/sathvik-t-devadiga"],
  knowsAbout: [
    "Backend Engineering",
    "Cloud Infrastructure",
    "Machine Learning",
    "Cybersecurity",
    "Graph Neural Networks"
  ]
};

export const sectionIcons = {
  trophy: Trophy,
  network: Network
};
