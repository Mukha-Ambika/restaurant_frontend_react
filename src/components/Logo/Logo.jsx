import React from 'react'
import './Logo.css'
import logo_2 from '../../assests/logo_part_2.png';
import logo_f from '../../assests/logo_part_1_f.png';

function Logo() {
  return (
    <div>
        <div id='logo_F'><img src={logo_f} /></div>
        <img id='logo_2' src={logo_2}></img>
    </div>
  )
}

export default Logo
