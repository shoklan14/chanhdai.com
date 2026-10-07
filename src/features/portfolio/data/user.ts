import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Mufarowashe",
  lastName: "Mashoko",
  displayName: "Mufarowashe Mashoko",
  username: "shoklan14",
  gender: "male",
  pronouns: "he/him",
  bio: "Medical student & self-taught software developer building at the intersection of medicine, software, and AI.",
  bioByView: {
    both: "Medical student & self-taught software developer building at the intersection of medicine, software, and AI.",
    medicine:
      "Preclinical MD candidate and Anatomy Demonstrator at NKUA with interests in anatomy, medical education, and healthcare AI.",
    software:
      "Self-taught software developer and AI engineer building full-stack applications with Next.js, Python/FastAPI, RAG, and AI agents.",
  },
  flipSentences: [
    "Medical student at NKUA, Athens.",
    "Self-taught software developer & AI builder.",
    "Building AI genomics & healthcare systems.",
    "Outstanding Cambridge Learner Award winner.",
  ],
  address: "Athens, Greece",
  phoneNumberB64: "KzMwNjk0Mzk3MTEyMw==", // +306943971123 base64 encoded
  emailB64: "bXVmYXJvbWFzaG9rb0BvdXRsb29rLmNvbQ==", // mufaromashoko@outlook.com base64 encoded
  website: "https://chanhdai.com",
  jobTitle: "Medical Student & Software/AI Developer",
  jobTitleByView: {
    both: "Medical Student & Software/AI Developer",
    medicine: "Medical Student & Anatomy Demonstrator",
    software: "Software Developer & AI Engineer",
  },
  jobs: [
    {
      title: "Doctor of Medicine (MD) Student",
      company: "NKUA",
      website: "https://en.uoa.gr",
      experienceId: "nkua",
      view: ["both", "medicine"],
    },
    {
      title: "Anatomy Demonstrator",
      company: "NKUA",
      website: "https://en.uoa.gr",
      experienceId: "nkua",
      view: ["medicine"],
    },
    {
      title: "Software Developer",
      company: "Outly",
      website: "https://outly.world",
      experienceId: "outly",
      view: ["both", "software"],
    },
    {
      title: "Software Developer",
      company: "Granoo",
      website: "https://granoo.africa",
      experienceId: "granoo",
      view: ["software"],
    },
    {
      title: "Full-Stack & AI Engineer",
      company: "AI Receptionist & Genomics",
      website: "https://variant-analysis.vercel.app",
      experienceId: "independent-ai",
      view: ["both", "software"],
    },
    {
      title: "Former Biology & Chemistry Teacher",
      company: "Blackwood High School",
      experienceId: "blackwood",
      view: ["medicine"],
    },
  ],
  about: `- Medical student at the National and Kapodistrian University of Athens (English-taught MD programme, preclinical stage, GPA 8.56/10) and self-taught software developer & AI builder.
- Working at the intersection of medicine, software engineering, and artificial intelligence to build practical healthcare and genomics systems.
- Developed [AI Genomics](https://variant-analysis.vercel.app), a full-stack platform leveraging the Evo2 biological foundation model and Modal GPU inference for predicting variant effect pathogenicity and benchmarking against ClinVar classifications.
- Architecting a multi-tenant [AI Receptionist & Appointment Automation Platform](https://github.com/shoklan14) using Next.js, Python/FastAPI, PostgreSQL pgvector (RAG), and Google Calendar with deterministic validation guardrails.
- Experienced in cross-platform mobile and web engineering (Flutter, React, Next.js, FastAPI, Docker, Azure) through developer roles at Outly and Granoo.
- Experienced as an anatomy demonstrator and natural sciences educator (Cambridge Outstanding Learner Awards 2023).
`,
  avatar: "/images/avatar.jpg",
  avatarSketch: "/images/avatar-sketch.jpg",
  // avatarVariants: {
  //   lightOff: "https://assets.chanhdai.com/images/avatar-light-off.webp",
  //   lightOn: "https://assets.chanhdai.com/images/avatar-light-on.webp",
  //   darkOff: "https://assets.chanhdai.com/images/avatar-dark-off.webp",
  //   darkOn: "https://assets.chanhdai.com/images/avatar-dark-on.webp",
  // },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  timeZone: "Europe/Athens",
  keywords: [
    "Mufarowashe Mashoko",
    "Mufaro Mashoko",
    "Mashoko",
    "shoklan",
    "shoklan14",
    "Medical Student",
    "Anatomy Demonstrator",
    "Software Developer",
    "AI Engineer",
    "AI Genomics",
    "NKUA",
    "National and Kapodistrian University of Athens",
    "FastAPI",
    "Next.js",
    "RAG",
    "pgvector",
  ],
  dateCreated: "2024-09-01",
}
