import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"
import type { Education as EducationType } from "@/features/portfolio/types/education"
import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

import { EducationItem } from "./education-item"

const ID = "education"

export function Education({ view = "both" }: { view?: PortfolioView }) {
  const sortedEducation = [...EDUCATION].sort((a, b) => {
    if (view === "software") {
      if (a.id === "self-directed") return -1
      if (b.id === "self-directed") return 1
      if (a.id === "nkua") return -1
      if (b.id === "nkua") return 1
    } else if (view === "medicine") {
      if (a.id === "nkua") return -1
      if (b.id === "nkua") return 1
      if (a.id === "sandon") return -1
      if (b.id === "sandon") return 1
    } else {
      // both: nkua, then self-directed, then sandon
      const order = ["nkua", "self-directed", "sandon"]
      return order.indexOf(a.id) - order.indexOf(b.id)
    }
    return 0
  })

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {sortedEducation.map((item) => (
        <div
          key={item.id}
          id={`education-${item.id}`}
          className="screen-line-bottom scroll-mt-14 p-4"
        >
          <EducationItem key={item.id} item={item} />
        </div>
      ))}
    </Panel>
  )
}
