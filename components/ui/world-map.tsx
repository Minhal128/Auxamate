"use client"

import { useEffect, useRef, useState } from "react"

type Coordinate = {
  lat: number
  lng: number
}

type Dot = {
  start: Coordinate
  end: Coordinate
}

const WorldMap = ({ dots }: { dots: Dot[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 })
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const animationRef = useRef<number | null>(null)
  const dotsRef = useRef<
    {
      start: Coordinate
      end: Coordinate
      current: Coordinate
      progress: number
      speed: number
    }[]
  >([])

  // Convert lat/lng to x/y coordinates on the canvas
  const latLngToXY = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * dimensions.width
    const y = ((90 - lat) / 180) * dimensions.height
    return { x, y }
  }

  // Initialize the canvas and context
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      // Set canvas dimensions
      const handleResize = () => {
        const container = canvas.parentElement
        if (container) {
          const newWidth = container.clientWidth
          const newHeight = newWidth * 0.5 // 2:1 aspect ratio
          setDimensions({ width: newWidth, height: newHeight })
          canvas.width = newWidth
          canvas.height = newHeight
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      if (context) {
        setCtx(context)
      }

      return () => {
        window.removeEventListener("resize", handleResize)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [])

  // Initialize the dots
  useEffect(() => {
    if (dots && dots.length > 0) {
      dotsRef.current = dots.map((dot) => ({
        start: dot.start,
        end: dot.end,
        current: { ...dot.start },
        progress: 0,
        speed: 0.001 + Math.random() * 0.002, // Random speed for each dot
      }))
    }
  }, [dots])

  // Draw the world map
  useEffect(() => {
    if (!ctx || !canvasRef.current) return

    const drawMap = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw the world map grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.5

      // Draw latitude lines
      for (let lat = -90; lat <= 90; lat += 15) {
        ctx.beginPath()
        const start = latLngToXY(lat, -180)
        const end = latLngToXY(lat, 180)
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      }

      // Draw longitude lines
      for (let lng = -180; lng <= 180; lng += 15) {
        ctx.beginPath()
        const start = latLngToXY(-90, lng)
        const end = latLngToXY(90, lng)
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      }

      // Draw dots and connections
      dotsRef.current.forEach((dot) => {
        // Update dot position
        dot.progress += dot.speed
        if (dot.progress >= 1) {
          dot.progress = 0
        }

        // Interpolate between start and end
        dot.current.lat = dot.start.lat + (dot.end.lat - dot.start.lat) * dot.progress
        dot.current.lng = dot.start.lng + (dot.end.lng - dot.start.lng) * dot.progress

        // Draw the connection line
        const startPos = latLngToXY(dot.start.lat, dot.start.lng)
        const endPos = latLngToXY(dot.end.lat, dot.end.lng)
        const currentPos = latLngToXY(dot.current.lat, dot.current.lng)

        // Draw the static connection line
        ctx.beginPath()
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.moveTo(startPos.x, startPos.y)

        // Create a curved line
        const controlX = (startPos.x + endPos.x) / 2
        const controlY = Math.min(startPos.y, endPos.y) - 50
        ctx.quadraticCurveTo(controlX, controlY, endPos.x, endPos.y)
        ctx.stroke()

        // Draw the moving dot
        ctx.beginPath()
        ctx.fillStyle = "#ec4899"
        ctx.arc(currentPos.x, currentPos.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw a glow around the dot
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(currentPos.x, currentPos.y, 0, currentPos.x, currentPos.y, 10)
        gradient.addColorStop(0, "rgba(236, 72, 153, 0.6)")
        gradient.addColorStop(1, "rgba(236, 72, 153, 0)")
        ctx.fillStyle = gradient
        ctx.arc(currentPos.x, currentPos.y, 10, 0, Math.PI * 2)
        ctx.fill()

        // Draw the start and end points
        ctx.beginPath()
        ctx.fillStyle = "rgba(168, 85, 247, 0.8)"
        ctx.arc(startPos.x, startPos.y, 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = "rgba(168, 85, 247, 0.8)"
        ctx.arc(endPos.x, endPos.y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(drawMap)
    }

    drawMap()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [ctx, dimensions])

  return (
    <div className="w-full h-full relative overflow-hidden">
      <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="w-full h-auto" />
    </div>
  )
}

export default WorldMap
