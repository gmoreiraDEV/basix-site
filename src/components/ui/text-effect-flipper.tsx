'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const DURATION = 0.5
const STAGGER = 0.025
const PAUSE = 1000 // pausa entre flips (ms)

const FLIP_WORDS = ["Basix", "Funciona", "Basix", "É simples", "Basix"]

export function TextEffectFlipper() {
    const [index, setIndex] = useState(0)
    const [isFlipping, setIsFlipping] = useState(false)

    const current = FLIP_WORDS[index % FLIP_WORDS.length].split("")
    const next = FLIP_WORDS[(index + 1) % FLIP_WORDS.length].split("")

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true)
            setTimeout(() => {
                setIndex((i) => (i + 1) % FLIP_WORDS.length)
                setIsFlipping(false)
            }, DURATION * 1000 + STAGGER * 1000 * current.length)
        }, DURATION * 1000 + STAGGER * 1000 * current.length + PAUSE)

        return () => clearInterval(interval)
    }, [current.length])

    return (
        <div className="relative overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl leading-none h-[1em]">
            {/* Palavra atual (sai para cima) */}
            <div>
                {current.map((char, i) => (
                    <motion.span
                        key={`curr-${i}-${index}`}
                        className="inline-block"
                        animate={isFlipping ? { y: "-100%" } : { y: "0%" }}
                        initial={{ y: "0%" }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>

            {/* Próxima palavra (entra de baixo) */}
            <div className="absolute inset-0">
                {next.map((char, i) => (
                    <motion.span
                        key={`next-${i}-${index}`}
                        className="inline-block"
                        animate={isFlipping ? { y: "0%" } : { y: "100%" }}
                        initial={{ y: "100%" }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}
