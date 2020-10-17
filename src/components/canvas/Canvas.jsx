import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

function drawPoint (ctx, x, y) {
  const pointSize = 10
  const color = '#ff2626'

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true)
  ctx.fill()
}

function drawLine (ctx, point1, point2) {
  const color = '#bada55'
  const lineWidth = 3

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.moveTo(point1.x, point1.y)
  ctx.lineTo(point2.x, point2.y)
  ctx.stroke()
}

export default function Canvas (params) {
  const canvasRef = useRef(null)
  const points = []

  function clickHandler (event) {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    drawPoint(context, x, y)

    points.forEach(point => {
      drawLine(context, { x, y }, point)
    })

    points.push({ x, y })

    if (points.length > 2) {
      points.shift()
    }
  }

  return <canvas ref={canvasRef} {...params} onClick={clickHandler} />
}
