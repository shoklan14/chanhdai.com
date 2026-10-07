import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { RECOGNITION } from "@/features/portfolio/data/recognition"
import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

import { RecognitionItem } from "./recognition-item"

const ID = "recognition"

export function Recognition({ view = "both" }: { view?: PortfolioView }) {
  const filteredRecognition = RECOGNITION.filter((entry) => {
    if (entry.kind === "award" && entry.award.views) {
      return entry.award.views.includes(view)
    }
    return true
  })

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Recognition</a>
          <PanelTitleSup>({filteredRecognition.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={filteredRecognition}
        max={6}
        keyExtractor={(entry) => entry.key}
        renderItem={(entry) => <RecognitionItem entry={entry} />}
      />
    </Panel>
  )
}
