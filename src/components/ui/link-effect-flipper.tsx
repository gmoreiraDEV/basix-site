"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const MotionLink = motion(Link)
const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: string
  href: string
}

export function FlipLink({ children, href }: FlipLinkProps) {
  return (
    <MotionLink
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </MotionLink>
  )
}
