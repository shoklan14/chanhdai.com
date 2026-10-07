import {
  ActivityIcon,
  BotIcon,
  DnaIcon,
  GraduationCapIcon,
  SmartphoneIcon,
  UtensilsIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "ai-genomics",
    title: "AI Genomics — Variant Effect Prediction",
    period: {
      start: "2025",
    },
    link: "https://variant-analysis.vercel.app",
    skills: [
      "AI & Genomics",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Evo2",
      "Modal GPU",
      "ClinVar",
      "NCBI / UCSC APIs",
    ],
    description: `Full-stack application exploring AI-based prediction of the pathogenicity of single-nucleotide variants (SNVs) and benchmarking against established ClinVar classifications.
- Developed an interactive interface with Next.js, React, and TypeScript paired with a high-performance Python/FastAPI backend.
- Integrated the Evo2 biological foundation model with GPU-accelerated inference hosted on Modal.
- Connected real-time genomic data lookup from public NCBI and UCSC database resources for variant annotation.
- Directly demonstrates the intersection between computational biology, deep learning, and clinical genomic interpretation.`,
    icon: <DnaIcon />,
    isExpanded: true,
    views: ["both", "software", "medicine"],
    category: "both",
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionist & Appointment Automation Platform",
    period: {
      start: "2026",
    },
    link: "https://github.com/shoklan14",
    skills: [
      "Healthcare AI",
      "Full-Stack",
      "RAG",
      "pgvector",
      "AI Agents",
      "Tool Calling",
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Google Calendar API",
      "Docker",
    ],
    description: `Multi-tenant AI receptionist and scheduling platform built initially for healthcare providers and adaptable to appointment-based practices.
- Implemented Retrieval-Augmented Generation (RAG) using PostgreSQL pgvector embeddings and semantic search to ground responses in verified clinic knowledge.
- Designed structured knowledge handling where clinic-specific data (services, fees, clinician availability) strictly overrides generic model output.
- Developed an autonomous AI agent architecture with tool calling for checking availability, booking appointments, cancellations, and rescheduling.
- Integrated Google Calendar with deterministic scheduling logic to eliminate LLM date/time hallucination.
- Incorporated healthcare safeguards, sensitive data minimization, and emergency escalation workflows.
- Built full-stack with Next.js, React, TypeScript, FastAPI, PostgreSQL, Drizzle ORM, SQLAlchemy, Better Auth, and Redis/Upstash.`,
    icon: <BotIcon />,
    isExpanded: true,
    views: ["both", "software", "medicine"],
    category: "software",
  },
  {
    id: "anatomy-peer-education",
    title: "Anatomy Demonstrator & Clinical Education Modules",
    period: {
      start: "2025",
    },
    link: "https://en.uoa.gr",
    skills: [
      "Medical Education",
      "Gross Anatomy",
      "Curriculum Design",
      "Clinical Correlation",
      "Peer Teaching",
    ],
    description: `Educational initiative and anatomical study guides developed for preclinical medical students at NKUA.
- Created structured revision materials and anatomical prosection guides covering musculoskeletal, cardiovascular, and neuroanatomical systems.
- Facilitated practical laboratory sessions focusing on 3D spatial orientation and clinical anatomy correlations.`,
    icon: <GraduationCapIcon />,
    views: ["medicine", "both"],
    category: "medical",
  },
  {
    id: "outly-platform",
    title: "Outly — Social Dining & Discovery Platform",
    period: {
      start: "07.2025",
      end: "06.2026",
    },
    link: "https://outly.world",
    skills: [
      "Flutter",
      "Dart",
      "GetX",
      "React",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Docker",
      "Azure",
    ],
    description: `Production social restaurant-discovery and dining platform spanning cross-platform mobile, responsive web, and cloud services.
- Developed mobile features and state machines using Flutter and GetX; implemented web user flows in React.
- Engineered backend API endpoints, SQLAlchemy ORM models, and business logic with FastAPI.
- Configured Firebase Authentication and Storage, Redis caching, Docker microservices, and Azure cloud infrastructure.`,
    icon: <UtensilsIcon />,
    views: ["software", "both"],
    category: "software",
  },
  {
    id: "granoo-platform",
    title: "Granoo — Agritech Marketplace & Operations",
    period: {
      start: "02.2025",
      end: "04.2026",
    },
    link: "https://granoo.africa",
    skills: [
      "Agritech",
      "Flutter",
      "React",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "Azure",
    ],
    description: `Digital marketplace and operational platform connecting agricultural producers, buyers, and agribusinesses across Africa.
- Implemented mobile client workflows with Flutter/GetX and responsive web interfaces in React.
- Developed backend services with FastAPI and SQLAlchemy, including data models and transactional logic.
- Managed Firebase Auth/Storage, Redis, containerized Docker microservices, and Azure cloud hosting.`,
    icon: <SmartphoneIcon />,
    views: ["software"],
    category: "software",
  },
]
