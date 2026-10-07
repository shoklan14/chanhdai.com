import {
  ActivityIcon,
  BookOpenIcon,
  CodeXmlIcon,
  FlaskConicalIcon,
  GraduationCapIcon,
  MicroscopeIcon,
  SparklesIcon,
} from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "nkua",
    companyName: "National and Kapodistrian University of Athens",
    location: "Athens, Greece",
    locationType: "On-site",
    companyWebsite: "https://en.uoa.gr",
    category: "medicine",
    isCurrentEmployer: true,
    positions: [
      {
        id: "nkua-md",
        title: "Doctor of Medicine (MD) Student",
        employmentPeriod: {
          start: "09.2024",
        },
        employmentType: "Full-time Programme",
        icon: <GraduationCapIcon />,
        description: `- Enrolled in the 6-year English-taught MD program at the School of Medicine.
- Currently in preclinical medical studies with a cumulative GPA of 8.56/10.
- Academic training across human gross anatomy, medical physiology, biochemistry, histology, pathology, and medical genetics.
- Research and academic interests in healthcare technology, clinical AI applications, and genomic medicine.`,
        skills: [
          "Clinical Medicine",
          "Human Gross Anatomy",
          "Medical Physiology",
          "Pathology",
          "Histology",
          "Medical Genetics",
          "Preclinical MD",
        ],
        isExpanded: true,
      },
      {
        id: "nkua-anatomy",
        title: "Anatomy Demonstrator",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Academic Teaching Role",
        icon: <MicroscopeIcon />,
        description: `- Demonstrator assisting junior medical students with human gross anatomy prosections and laboratory sessions.
- Facilitates small-group peer instruction, structural identification, and topographical orientation.
- Correlates anatomical structures with clinical pathology and diagnostic imaging principles.`,
        skills: [
          "Anatomy Demonstrator",
          "Gross Anatomy",
          "Peer Teaching",
          "Laboratory Dissections",
          "Medical Education",
          "Topographical Anatomy",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "independent-ai",
    companyName: "Independent AI & Software Engineering",
    location: "Remote",
    locationType: "Remote",
    category: "software",
    isCurrentEmployer: true,
    positions: [
      {
        id: "independent-builder",
        title: "Full-Stack AI Builder & Engineer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Independent Projects",
        icon: <SparklesIcon />,
        description: `- Built [AI Genomics](https://variant-analysis.vercel.app), a variant effect prediction application exploring biological foundation models (Evo2 with Modal GPU inference) and ClinVar comparisons.
- Architected a multi-tenant AI Receptionist & Appointment Automation Platform using Next.js, FastAPI, PostgreSQL pgvector (RAG), and Google Calendar with deterministic validation logic.
- Implemented healthcare safeguards, data-minimization practices, and emergency escalation workflows.`,
        skills: [
          "RAG",
          "pgvector",
          "Vector Search",
          "AI Agents",
          "Tool Calling",
          "Next.js",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Docker",
          "Better Auth",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "outly",
    companyName: "Outly",
    location: "Remote",
    locationType: "Remote",
    companyWebsite: "https://outly.world",
    category: "software",
    positions: [
      {
        id: "outly-dev",
        title: "Software Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "06.2026",
        },
        employmentType: "Contract",
        icon: <CodeXmlIcon />,
        description: `- Contributed to the development of a social restaurant-discovery and dining platform spanning a Flutter mobile client, React web interface, and FastAPI backend.
- Developed application features and user flows across the frontend and mobile clients, integrating them with REST APIs and backend services.
- Worked with Flutter/GetX for mobile application state management and React for responsive web interfaces.
- Built and integrated backend functionality using FastAPI, Python, and SQLAlchemy, working with database models, business logic, and API endpoints.
- Worked with Firebase Authentication and Storage, Redis caching, Docker containerization, and Azure cloud infrastructure.`,
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
          "REST APIs",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "granoo",
    companyName: "Granoo",
    location: "Remote",
    locationType: "Remote",
    companyWebsite: "https://granoo.africa",
    category: "software",
    positions: [
      {
        id: "granoo-dev",
        title: "Software Developer",
        employmentPeriod: {
          start: "02.2025",
          end: "04.2026",
        },
        employmentType: "Contract",
        icon: <CodeXmlIcon />,
        description: `- Contributed to an early-stage agritech platform connecting farmers, buyers, and agribusinesses through a digital marketplace and operational tools.
- Worked across the Flutter mobile application, React web platform, and FastAPI backend, translating product requirements into functional multi-tier features.
- Implemented mobile interfaces and workflows using Flutter/GetX, integrating frontend state and user interactions with backend APIs.
- Developed backend services with FastAPI and SQLAlchemy, including API endpoints, data models, and transactional logic.
- Worked with Firebase Authentication and Storage, Redis, Docker containerized services, and Azure cloud infrastructure.`,
        skills: [
          "Flutter",
          "React",
          "Python",
          "FastAPI",
          "SQLAlchemy",
          "Firebase",
          "Redis",
          "Docker",
          "Azure",
          "Mobile Development",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "blackwood",
    companyName: "Blackwood High School",
    location: "Harare, Zimbabwe",
    locationType: "On-site",
    category: "medicine",
    positions: [
      {
        id: "blackwood-teacher",
        title: "A-Level Biology & Chemistry Teacher",
        employmentPeriod: {
          start: "01.2024",
          end: "09.2024",
        },
        employmentType: "Full-time",
        icon: <FlaskConicalIcon />,
        description: `- Taught Cambridge International A-Level Biology and Chemistry, delivering syllabus lessons, practical laboratory sessions, and examination preparation.
- Explained complex scientific concepts to students with varied academic backgrounds and adapted teaching to individual learning needs.
- Supervised laboratory practicals and maintained safe, structured working environments.`,
        skills: [
          "Biology Instruction",
          "Chemistry Instruction",
          "Laboratory Practicals",
          "Curriculum Delivery",
          "Pedagogy",
        ],
      },
    ],
  },
  {
    id: "hatcliffe",
    companyName: "Hatcliffe High School",
    location: "Harare, Zimbabwe",
    locationType: "On-site",
    category: "medicine",
    positions: [
      {
        id: "hatcliffe-teacher",
        title: "O- & A-Level Science Teacher",
        employmentPeriod: {
          start: "05.2023",
          end: "11.2023",
        },
        employmentType: "Full-time",
        icon: <BookOpenIcon />,
        description: `- Taught IGCSE Chemistry and Physics and Cambridge A-Level Biology to examination classes.
- Organised laboratory practicals and prepared students for practical examinations.
- Supported students across different academic levels, contributing to a 100% pass rate in the 2023 examination session.`,
        skills: [
          "A-Level Biology",
          "IGCSE Chemistry",
          "IGCSE Physics",
          "Laboratory Practicals",
        ],
      },
    ],
  },
  {
    id: "hudson-partners",
    companyName: "Hudson & Partners",
    location: "Harare, Zimbabwe",
    locationType: "On-site",
    category: "medicine",
    positions: [
      {
        id: "hudson-shadowing",
        title: "Clinical Shadowing & Orthodontic Assistant",
        employmentPeriod: {
          start: "03.2023",
          end: "06.2023",
        },
        employmentType: "Clinical Observership",
        icon: <ActivityIcon />,
        description: `- Shadowed Dr F Maisva (Specialist Orthodontist), observing clinical consultations, patient examinations, diagnostic imaging reviews, and treatment procedures.
- Gained early exposure to clinical workflows, patient communication, clinical documentation, and sterile operating protocols.`,
        skills: [
          "Clinical Shadowing",
          "Patient Observation",
          "Clinical Practice",
          "Healthcare Communication",
        ],
      },
    ],
  },
]
