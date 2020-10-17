import React, { useRef, useEffect } from 'react'
import draw from './draw'
import { createPointQueue } from './point-queue'
import './style.scss'

export default function Canvas (params) {
  const canvasRef = useRef(null)
  const points = useRef(createPointQueue())
  let canvas, context, rect

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    rect = canvas.getBoundingClientRect()
    points.current.setLength(params.points)
  }, [params.points])

  function clickHandler (event) {
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const point = [x, y]

    draw.point(context, point)

    points.current.forEach(prevPoint => {
      draw.line(context, point, prevPoint)
    })

    points.current.push(point)
  }

  return <canvas ref={canvasRef} {...params} onClick={clickHandler} />
}
