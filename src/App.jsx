import React, { useState } from 'react'
import Canvas from './components/canvas'
import Configuration from './components/configuration'
import './components/form-element'
import './App.scss'

export default function App () {
  const [points, setPoints] = useState(2)
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 1 })

  function updatePoints (event) {
    const number = parseInt(event.target.value, 10)

    if (!Number.isNaN(number)) {
      setPoints(number)
    }
  }

  function updateColor (color) {
    setColor(color)
  }

  return (
    <React.StrictMode>
      <main className='page-main'>
        <article className='canvas-editor'>
          <h1 className='visually-hidden'>Редактор</h1>

          <div className='canvas-container'>
            <Canvas
              className='canvas'
              width='500'
              height='500'
              points={points}
              color={color}
            />
          </div>
        </article>

        <Configuration
          points={points}
          color={color}
          updatePoints={updatePoints}
          updateColor={updateColor}
        />
      </main>
    </React.StrictMode>
  )
}
