import { AwardIcon, GraduationCapIcon, TrophyIcon } from "lucide-react"

import type { Award } from "../types/awards"

export const AWARDS: Award[] = [
  {
    id: "cambridge-chemistry-2023",
    prize: "Highest Mark in Zimbabwe",
    title: "Cambridge International A Level Chemistry",
    date: "2023-11",
    grade: "Outstanding Cambridge Learner Awards",
    icon: <TrophyIcon />,
    description: `- Awarded by Cambridge Assessment International Education
- Achieved the highest mark in the entire nation of Zimbabwe for Cambridge International A Level Chemistry in the November examination series.`,
    views: ["both", "medicine", "software"],
    category: "academic",
  },
  {
    id: "cambridge-best-three-2023",
    prize: "1st Place in Zimbabwe",
    title: "Best Across Three Cambridge International A Levels",
    date: "2023-11",
    grade: "Outstanding Cambridge Learner Awards",
    icon: <TrophyIcon />,
    description: `- Awarded by Cambridge Assessment International Education
- Ranked 1st place in Zimbabwe for cumulative performance across three Cambridge International A Levels (Chemistry, Biology, Physics/Maths).`,
    views: ["both", "medicine", "software"],
    category: "academic",
  },
  {
    id: "presidential-award-2023",
    prize: "Top 3 High Achieving Students",
    title: "Presidential Award for Academic Excellence",
    date: "2023-12",
    grade: "State House, Harare, Zimbabwe",
    icon: <AwardIcon />,
    description: `- Recognized at State House as one of the top 3 high-achieving high school students in Zimbabwe.
- Conferred by the President of Zimbabwe in recognition of outstanding national academic achievement.`,
    views: ["both", "medicine", "software"],
    category: "academic",
  },
  {
    id: "nkua-preclinical-distinction",
    prize: "GPA 8.56 / 10",
    title: "Preclinical Academic Distinction — NKUA School of Medicine",
    date: "2025-06",
    grade: "National and Kapodistrian University of Athens",
    icon: <GraduationCapIcon />,
    description: `- Maintained a cumulative GPA of 8.56/10 across preclinical medical curriculum coursework, laboratory practicals, and examinations.`,
    views: ["both", "medicine"],
    category: "medical",
  },
]
