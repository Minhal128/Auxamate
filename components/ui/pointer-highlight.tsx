"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export const PointerHighlight = ({
  children,
  rectangleClassName = "bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600",
  pointerClassName = "text-yellow-500",
}: {
  children: React.ReactNode
  rectangleClassName?: string
  pointerClassName?: string
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isInside, setIsInside] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsInside(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsInside(false)
    setOpacity(0)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("mousemove", handleMouseMove as any)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove as any)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className={`absolute inset-0 rounded-md border ${rectangleClassName}`}
        style={{
          zIndex: 0,
        }}
        animate={{
          opacity: isInside ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      />
      <motion.div
        className={`absolute top-0 left-0 h-6 w-6 rounded-full ${pointerClassName}`}
        style={{
          zIndex: 20,
          pointerEvents: "none",
        }}
        animate={{
          opacity,
          x: position.x - 12,
          y: position.y - 12,
          scale: isInside ? 1 : 0.3,
        }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
      </motion.div>
    </div>
  )
}
