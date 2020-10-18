function createRgbaColor (color) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}

function createPoint (ctx, point, pointSize, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(...point, pointSize, 0, Math.PI * 2, true)
  ctx.fill()
}

function point (ctx, point, colorOption) {
  const pointSize = 10
  const duration = 300
  const startTime = new Date()
  const color = createRgbaColor(colorOption) // '#ff2626'
  let animationFrameId

  function render () {
    const currentTime = new Date()
    const delta = currentTime - startTime

    if (delta > duration) {
      createPoint(ctx, point, pointSize, color)
      return window.cancelAnimationFrame(animationFrameId)
    }

    const size = delta * pointSize / duration

    createPoint(ctx, point, size, color)

    animationFrameId = window.requestAnimationFrame(render)
  }

  render()
}

function createLine (ctx, point1, point2) {
  const lineWidth = 3
  const color = '#bada55'

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.moveTo(...point1)
  ctx.lineTo(...point2)
  ctx.stroke()
}

function line (ctx, point1, point2) {
  const duration = 500
  const startTime = new Date()
  const dX = point2[0] - point1[0]
  const dY = point2[1] - point1[1]
  const xDelta = dX / duration
  const yDelta = dY / duration
  let animationFrameId

  function render () {
    const currentTime = new Date()
    const delta = currentTime - startTime

    if (delta > duration) {
      createLine(ctx, point1, point2)
      return window.cancelAnimationFrame(animationFrameId)
    }

    const newPoint = [point1[0] + xDelta * delta, point1[1] + yDelta * delta]

    createLine(ctx, point1, newPoint)

    animationFrameId = window.requestAnimationFrame(render)
  }

  return render()
}

export default {
  point,
  line
}
