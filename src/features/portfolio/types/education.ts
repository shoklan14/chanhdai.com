import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

export type Education = {
  id: string
  school: string
  degree?: string
  fieldOfStudy?: string
  period: {
    start: string
    end?: string
  }
  description?: string
  skills?: string[]
  isExpanded?: boolean
  views?: PortfolioView[]
}
