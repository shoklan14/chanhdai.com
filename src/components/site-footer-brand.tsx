"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1250

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1250 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33 65H161V97H33V65ZM1 97H33V161H1V97ZM1 129H161V161H1V129ZM129 161H161V225H129V161ZM1 225H129V257H1V225ZM1 193H33V225H1V193ZM193 1H225V65H321V97H225V257H193V1ZM321 97H353V257H321V97ZM417 65H513V97H417V65ZM385 97H417V225H385V97ZM513 97H545V225H513V97ZM417 225H513V257H417V225ZM577 1H609V257H577V1ZM609 129H641V161H609V129ZM641 97H673V129H641V97ZM673 65H737V97H673V65ZM641 161H673V193H641V161ZM673 193H737V257H705V225H673V193ZM769 1H801V225H769V1ZM769 225H865V257H769V225ZM833 193H865V225H833V193ZM929 65H1057V257H1025V225H993V193H1025V97H929V65ZM929 225H897V97H929V225ZM929 225V257H993V225H929ZM1089 65H1217V97H1121V257H1089V65ZM1217 97H1249V257H1217V97Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d="M33 65H161V97H33V65ZM1 97H33V161H1V97ZM1 129H161V161H1V129ZM129 161H161V225H129V161ZM1 225H129V257H1V225ZM1 193H33V225H1V193ZM193 1H225V65H321V97H225V257H193V1ZM321 97H353V257H321V97ZM417 65H513V97H417V65ZM385 97H417V225H385V97ZM513 97H545V225H513V97ZM417 225H513V257H417V225ZM577 1H609V257H577V1ZM609 129H641V161H609V129ZM641 97H673V129H641V97ZM673 65H737V97H673V65ZM641 161H673V193H641V161ZM673 193H737V257H705V225H673V193ZM769 1H801V225H769V1ZM769 225H865V257H769V225ZM833 193H865V225H833V193ZM929 65H1057V257H1025V225H993V193H1025V97H929V65ZM929 225H897V97H929V225ZM929 225V257H993V225H929ZM1089 65H1217V97H1121V257H1089V65ZM1217 97H1249V257H1217V97Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="625"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
