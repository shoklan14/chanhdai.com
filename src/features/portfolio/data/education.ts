import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "nkua",
    school: "National and Kapodistrian University of Athens",
    degree: "Doctor of Medicine (MD)",
    fieldOfStudy: "Medicine (English-taught MD Programme)",
    period: {
      start: "09.2024",
    },
    description: `- Enrolled in the 6-year English-taught MD program at the School of Medicine.
- Currently in preclinical medical studies with a cumulative GPA of 8.56/10.
- Rigorous preclinical coursework and practical laboratory sessions in human gross anatomy, medical physiology, biochemistry, histology, pathology, and medical genetics.
- Serves as an Anatomy Demonstrator, facilitating small-group peer instruction, prosection demonstrations, and structural identification in the anatomy laboratory.
- Academic and research interests focused on healthcare technology, artificial intelligence, genomics, and medical education.`,
    skills: [
      "Human Gross Anatomy",
      "Medical Physiology",
      "Pathology",
      "Histology",
      "Medical Genetics",
      "Genomics",
      "Clinical Fundamentals",
      "Medical Education",
    ],
    isExpanded: true,
    views: ["both", "medicine", "software"],
  },
  {
    id: "self-directed",
    school: "Self-Directed Software Engineering & AI",
    degree: "Independent Technical Curriculum & Systems Engineering",
    fieldOfStudy: "Full-Stack Web, Cross-Platform Mobile & AI Applications",
    period: {
      start: "2023",
    },
    description: `- Self-taught software developer with hands-on experience across web (React, Next.js, TypeScript), mobile (Flutter, React Native), and backend engineering (Python, FastAPI, PostgreSQL, SQLAlchemy).
- Specialized in modern AI application engineering: Retrieval-Augmented Generation (RAG with pgvector), autonomous agent architectures with structured tool calling, and biological foundation models (Evo2 with Modal GPU inference).
- Contributed to production software at Outly and Granoo, and engineered full-stack healthcare technology and AI platforms.`,
    skills: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "AI Agents",
      "Docker",
      "Azure",
    ],
    isExpanded: true,
    views: ["both", "software", "medicine"],
  },
  {
    id: "sandon",
    school: "Sandon Academy & Cambridge International",
    degree: "Cambridge International A Levels",
    fieldOfStudy: "Chemistry, Biology, Physics / Mathematics",
    period: {
      start: "01.2021",
      end: "11.2022",
    },
    description: `- Awarded Cambridge Outstanding Learner Award: Highest Mark in Zimbabwe for Cambridge International A Level Chemistry (2023).
- Awarded Cambridge Outstanding Learner Award: 1st Place in Zimbabwe for Best across three Cambridge International A Levels (2023).
- Conferred the Presidential Award for Academic Excellence (Top 3 High Achieving High School Students in Zimbabwe, 2023).
- Rigorous laboratory training in chemistry and biology practicals, experimental design, and quantitative analysis.`,
    skills: [
      "A-Level Chemistry",
      "A-Level Biology",
      "A-Level Physics",
      "Scientific Research",
      "Laboratory Practicals",
    ],
    isExpanded: false,
    views: ["both", "medicine", "software"],
  },
]
