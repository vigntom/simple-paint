function createPoint (ctx, point, pointSize) {
  const color = '#ff2626'

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(...point, pointSize, 0, Math.PI * 2, true)
  ctx.fill()
}

function point (ctx, point) {
  const pointSize = 10
  const duration = 300
  const startTime = new Date()
  let animationFrameId

  function render () {
    const currentTime = new Date()
    const delta = currentTime - startTime

    if (delta >= duration) {
      return window.cancelAnimationFrame(animationFrameId)
    }

    const size = delta * pointSize / duration

    createPoint(ctx, point, size)

    animationFrameId = window.requestAnimationFrame(render)
  }

  render()
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
