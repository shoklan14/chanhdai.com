import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { PROJECTS } from "@/features/portfolio/data/projects"
import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

import { ProjectItem } from "./project-item"

const ID = "projects"

export function Projects({ view = "both" }: { view?: PortfolioView }) {
  const filteredProjects = PROJECTS.filter(
    (project) => !project.views || project.views.includes(view)
  ).sort((a, b) => {
    if (view === "both") {
      const order = [
        "ai-genomics",
        "ai-receptionist",
        "anatomy-peer-education",
        "outly-platform",
      ]
      return order.indexOf(a.id) - order.indexOf(b.id)
    } else if (view === "medicine") {
      const order = ["anatomy-peer-education", "ai-genomics", "ai-receptionist"]
      return order.indexOf(a.id) - order.indexOf(b.id)
    } else {
      const order = [
        "ai-receptionist",
        "ai-genomics",
        "outly-platform",
        "granoo-platform",
      ]
      return order.indexOf(a.id) - order.indexOf(b.id)
    }
  })

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects</a>
          <PanelTitleSup>({filteredProjects.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={filteredProjects}
        max={4}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  )
}
