import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

export type TechStack = {
  key: string
  title: string
  href: string
  icon: React.ReactElement
  categories: string[]
  views?: PortfolioView[]
}
