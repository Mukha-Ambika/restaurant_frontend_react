import React from 'react'
import './Clickfornext.css'

function ClickFornext(prop) {
  return (
    <div id='direction_background'>
      <img src={prop.direction} alt='left'></img>
    </div>
  )
}

export default ClickFornext
