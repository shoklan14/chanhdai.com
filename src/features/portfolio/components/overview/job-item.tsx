import { addQueryParams } from "@/utils/url"
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  LightbulbIcon,
  MicroscopeIcon,
} from "lucide-react"

import { UTM_PARAMS } from "@/config/site"

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

type JobItemProps = {
  title: string
  company: string
  website?: string
  experienceId?: string
}

export function JobItem({
  title,
  company,
  website,
  experienceId,
}: JobItemProps) {
  return (
    <IntroItem className="sm:col-span-2">
      <IntroItemIcon>{getJobIcon(title)}</IntroItemIcon>

      <IntroItemContent>
        {title} <span aria-label="at">@</span>
        {experienceId ? (
          <IntroItemLink
            className="ml-0.5 font-medium"
            href={`#experience-${experienceId}`}
            target="_self"
            rel=""
          >
            {company}
          </IntroItemLink>
        ) : website ? (
          <IntroItemLink
            className="ml-0.5 font-medium"
            href={addQueryParams(website, UTM_PARAMS)}
          >
            {company}
          </IntroItemLink>
        ) : (
          <span className="ml-0.5 font-medium text-foreground">{company}</span>
        )}
      </IntroItemContent>
    </IntroItem>
  )
}

function getJobIcon(title: string) {
  if (/(developer|engineer|builder)/i.test(title)) {
    return <CodeXmlIcon />
  }

  if (/(medicine|doctor|physician|md|anatomy)/i.test(title)) {
    return <MicroscopeIcon />
  }

  if (/(teacher|tutor|education)/i.test(title)) {
    return <GraduationCapIcon />
  }

  if (/(founder|co-founder)/i.test(title)) {
    return <LightbulbIcon />
  }

  return <BriefcaseBusinessIcon />
}
