import React from 'react'
import './Servicescard.css'  

function Servicescard(prop) {
  return (
    <div id='services_card'>
      <img src={prop.serviceImg} alt='service image'></img>
      <p>{prop.serviceCaption}</p>
      <p>{prop.serviceDescription}</p>
    </div>
  )
}

export default Servicescard
