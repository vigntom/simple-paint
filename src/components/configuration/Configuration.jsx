import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

export default function Configuration ({ points, updatePoints, color, updateColor }) {
  const [selectedColor, setSelectedColor] = useState(color)

  function changeColorHandler (color) {
    setSelectedColor(color.rgb)
  }

  function colorChangeCompleteHundler (color) {
    updateColor(color.rgb)
  }

  return (
    <aside className='configuration'>
      <input id='canvas-points' className='form-element canvas-points' type='number' value={points} onChange={updatePoints} />

      <div className='configuration-colors'>
        <SketchPicker
          color={selectedColor}
          onChange={changeColorHandler}
          onChangeComplete={colorChangeCompleteHundler}
        />
      </div>
    </aside>
  )
}
