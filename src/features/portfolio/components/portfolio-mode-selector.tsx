"use client"

import * as React from "react"
import type { Route } from "next"
import { useRouter } from "next/navigation"

import {
  Tabs,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import type { PortfolioView } from "@/features/portfolio/types/portfolio-view"

export function PortfolioModeSelector({
  currentView = "both",
}: {
  currentView?: PortfolioView
}) {
  const router = useRouter()
  const [selectedView, setSelectedView] =
    React.useState<PortfolioView>(currentView)

  React.useEffect(() => {
    setSelectedView(currentView)
  }, [currentView])

  const handleValueChange = (val: string | null) => {
    if (!val) return
    const nextView = val as PortfolioView
    setSelectedView(nextView)
    const target = (nextView === "both" ? "/" : `/?view=${nextView}`) as Route
    router.replace(target, { scroll: false })
  }

  return (
    <div className="relative flex flex-col gap-2.5 p-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-2.5">
      <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase select-none sm:text-sm sm:font-medium sm:tracking-normal sm:text-foreground/80 sm:normal-case">
        Which side of me are you interested in?
      </span>

      <div className="relative">
        <Tabs
          value={selectedView}
          onValueChange={handleValueChange}
          className="w-full sm:w-auto"
        >
          <TabsList className="h-8.5 w-full justify-between p-0.75 sm:w-auto sm:justify-start">
            <TabsTrigger
              value="medicine"
              className="flex-1 px-3 py-1 text-xs sm:flex-none sm:px-3.5 sm:text-sm"
            >
              Medicine
            </TabsTrigger>
            <TabsTrigger
              value="software"
              className="flex-1 px-3 py-1 text-xs sm:flex-none sm:px-3.5 sm:text-sm"
            >
              Software
            </TabsTrigger>
            <TabsTrigger
              value="both"
              className="flex-1 px-3 py-1 text-xs sm:flex-none sm:px-3.5 sm:text-sm"
            >
              Both
            </TabsTrigger>
            <TabsIndicator />
          </TabsList>
        </Tabs>

        {/* Handwritten note pointing to the segmented control in the desktop gutter */}
        <HandwrittenNote
          className="top-1/2 left-full ml-4 hidden -translate-y-1/2 flex-col items-start pointer-fine:xl:flex"
          aria-hidden
        >
          <div className="flex items-center gap-1">
            <HandwrittenArrow className="size-7 -rotate-12" />
            <span className="-rotate-6 whitespace-nowrap">pick your view</span>
          </div>
        </HandwrittenNote>
      </div>
    </div>
  )
}
