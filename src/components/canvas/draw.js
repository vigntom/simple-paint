function point (ctx, point) {
  const pointSize = 10
  const color = '#ff2626'

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(...point, pointSize, 0, Math.PI * 2, true)
  ctx.fill()
}

function line (ctx, point1, point2) {
  const color = '#bada55'
  const lineWidth = 3

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.moveTo(...point1)
  ctx.lineTo(...point2)
  ctx.stroke()
}

export default {
  point,
  line
}
