"use client"

import { useRef, useEffect } from "react"

export const CanvasRevealEffect = ({
  colors = [[255, 255, 255]],
  dotSize = 1,
  animationSpeed = 1,
  containerClassName = "",
}: {
  colors?: number[][]
  dotSize?: number
  animationSpeed?: number
  containerClassName?: string
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const dots = useRef<
    {
      x: number
      y: number
      vx: number
      vy: number
      color: number[]
      size: number
    }[]
  >([])
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const handleResize = () => {
      if (canvas && container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
        initDots()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (container) {
        const rect = container.getBoundingClientRect()
        mousePosition.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }
    }

    const initDots = () => {
      if (!canvas) return
      dots.current = []
      const numberOfDots = Math.floor((canvas.width * canvas.height) / 800)
      for (let i = 0; i < numberOfDots; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        dots.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
          color,
          size: dotSize,
        })
      }
    }

    const drawDots = () => {
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off walls
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, 0.8)`
        ctx.fill()

        // Draw connections
        const mouseDistance = Math.hypot(dot.x - mousePosition.current.x, dot.y - mousePosition.current.y)
        if (mouseDistance < 100) {
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
          ctx.strokeStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${
            0.2 * (1 - mouseDistance / 100)
          })`
          ctx.stroke()
        }
      })

      animationFrameId.current = requestAnimationFrame(drawDots)
    }

    window.addEventListener("resize", handleResize)
    container.addEventListener("mousemove", handleMouseMove)

    handleResize()
    drawDots()

    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [colors, dotSize, animationSpeed])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${containerClassName}`}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
