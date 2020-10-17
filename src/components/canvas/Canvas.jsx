import React, { useRef, useEffect } from 'react'
import draw from './draw'
import { createPointQueue } from './point-queue'
import './style.scss'

export default function Canvas (params) {
  const canvasRef = useRef(null)
  const points = createPointQueue()
  let canvas, context, rect

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    rect = canvas.getBoundingClientRect()
  }, [])

  function clickHandler (event) {
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const point = [x, y]

    draw.point(context, point)

    points.forEach(prevPoint => {
      draw.line(context, point, prevPoint)
    })

    points.push(point)
  }

  return <canvas ref={canvasRef} {...params} onClick={clickHandler} />
}
