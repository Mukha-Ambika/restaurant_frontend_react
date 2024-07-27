import React from 'react'
import './Button.css'

function Button(value) {
  return (
    <div>
      <button id='button_style'>
            {value.button_text}
      </button>
    </div>
    )
}

export default Button
