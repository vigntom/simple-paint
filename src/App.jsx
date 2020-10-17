import React, { useState } from 'react'
import Canvas from './components/canvas'

// function draw (context, frameCount) {
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
//   context.fillStyle = '#fc213b'
//   context.beginPath()
//   context.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
//   context.fill()
// }

const options = {
  width: '500px',
  height: '500px'
}

export default function App () {
  const [points, setPoints] = useState(2)

  function updatePoints (event) {
    const number = parseInt(event.target.value, 10)

    if (!Number.isNaN(number)) {
      setPoints(number)
    }
  }

  return (
    <React.StrictMode>
      <main className='page-main'>
        <article className='canvas-editor'>
          <h1 className='visually-hidden'>Редактор</h1>

          <div className='canvas-container' style={options}>
            <Canvas className='canvas' width='500' height='500' points={points} />
          </div>

          <div className='canvas-configuration'>
            <input id='canvas-points' className='canvas-points' type='number' value={points} onChange={updatePoints} />
          </div>
        </article>
      </main>
    </React.StrictMode>
  )
}
