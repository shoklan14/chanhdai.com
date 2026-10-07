import { TECH_STACK } from "../data/tech-stack"
import type { PortfolioView } from "../types/portfolio-view"
import type { TechStack as TechStackType } from "../types/tech-stack"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

const VIEW_CATEGORIES: Record<PortfolioView, string[]> = {
  software: [
    "Frontend",
    "Mobile",
    "Backend & Databases",
    "AI Engineering",
    "RAG & Vector Search",
    "Cloud & Infrastructure",
  ],
  medicine: [
    "Medical Sciences",
    "Genomics & Bioinformatics",
    "Medical Education",
    "Healthcare Technology",
  ],
  both: [
    "Healthcare & Medical",
    "AI & Genomics",
    "RAG & AI Agents",
    "Full-Stack & Backend",
    "Cloud & Infrastructure",
  ],
}

export function TechStack({ view = "both" }: { view?: PortfolioView }) {
  const activeItems = TECH_STACK.filter(
    (item) => !item.views || item.views.includes(view)
  )
  const categories = VIEW_CATEGORIES[view]

  const grouped = categories
    .map((category) => {
      const items = activeItems.filter((item) =>
        item.categories.includes(category)
      )
      return { category, items }
    })
    .filter(({ items }) => items.length > 0)

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative [--badge-height:--spacing(6)] [--col-left-width:--spacing(48)]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {grouped.map(({ category, items }, index) => {
          const categoryId = `${ID}-${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div id={categoryId} className="pl-4 text-sm/(--badge-height)">
                <span
                  className="mr-1.5 font-mono text-muted-foreground/80 select-none"
                  aria-hidden
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul
                aria-labelledby={categoryId}
                className="flex flex-wrap gap-1.5 px-4"
              >
                {items.map((item) => {
                  return (
                    <li key={item.key} className="flex">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="flex h-(--badge-height) items-center justify-center gap-1.25 rounded-full bg-zinc-50/80 px-2 font-mono text-xs text-foreground inset-ring-1 inset-ring-border dark:bg-zinc-900/80 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground/80"
                      >
                        {item.icon}
                        {item.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
