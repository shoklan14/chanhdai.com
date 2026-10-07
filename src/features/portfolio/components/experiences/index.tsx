import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import type { Experience } from "@/features/portfolio/types/experiences"
import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

import { ExperienceItem } from "./experience-item"

const ID = "experience"
const MAX_SINGLE_VIEW = 3

export function Experiences({ view = "both" }: { view?: PortfolioView }) {
  const medicalExperiences = EXPERIENCES.filter(
    (exp) => exp.category === "medicine"
  )
  const softwareExperiences = EXPERIENCES.filter(
    (exp) => exp.category === "software"
  )

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experience</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {view === "both" ? (
        <div>
          {/* Medical & Academic Subsection */}
          <div className="flex items-center gap-2 border-b border-line bg-muted/30 px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground uppercase select-none">
            <span className="font-semibold text-foreground/70">01</span>
            <span>Medical & Academic Experience</span>
          </div>
          <div className="px-4">
            <ExperienceList experiences={medicalExperiences} />
          </div>

          {/* Software Engineering & AI Subsection */}
          <div className="flex items-center gap-2 border-y border-line bg-muted/30 px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground uppercase select-none">
            <span className="font-semibold text-foreground/70">02</span>
            <span>Software Engineering & AI Experience</span>
          </div>
          <div className="px-4">
            <ExperienceList experiences={softwareExperiences} />
          </div>
        </div>
      ) : (
        <SingleViewExperiences
          experiences={
            view === "medicine" ? medicalExperiences : softwareExperiences
          }
        />
      )}
    </Panel>
  )
}

function SingleViewExperiences({ experiences }: { experiences: Experience[] }) {
  const initial = experiences.slice(0, MAX_SINGLE_VIEW)
  const remaining = experiences.slice(MAX_SINGLE_VIEW)

  return (
    <>
      <div className="px-4">
        <ExperienceList experiences={initial} />
      </div>

      {remaining.length > 0 && (
        <Collapsible className="group/collapsible">
          <CollapsibleContent render={<div className="px-4" />}>
            <ExperienceList experiences={remaining} />
          </CollapsibleContent>

          <div className="-mt-px flex items-center justify-center py-4">
            <CollapsibleTrigger
              render={
                <Button
                  className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
                  variant="secondary"
                  size="sm"
                >
                  <span className="hidden group-data-closed/collapsible:block">
                    Show more
                  </span>

                  <span className="hidden group-data-open/collapsible:block">
                    Show less
                  </span>

                  <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
                </Button>
              }
            />
          </div>
        </Collapsible>
      )}
    </>
  )
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </>
  )
}
