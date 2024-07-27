import React from 'react'
import './Nav.css'
import { Logo } from '../../components';
import dropdown from '../../assests/dropdown.png';
import search from '../../assests/search.png';
import bag from '../../assests/bag.png';
import call from '../../assests/phone-call.png';

function Nav() {
  return (
    <div id='navbar'>
      <div id='logo'>
        <Logo/>
      </div>
      <div id='list_links'>
        <p id='#home'>Home</p>
        <div className='link_dropdown'><span id='#home'>Menu</span><img src={dropdown}/></div>
        <div className='link_dropdown'><span id='#home'>Services</span><img src={dropdown}/></div>
        <p id='#home'>Offers</p>
      </div>
      <div id='nav_last_elements'>
        <img src={search}></img>
        <img src={bag}></img>
        <button id='nav_contact_button'>
          <img src={call}></img>
          <span>Contact</span>
        </button>

        
      </div>
    </div>
  )
}

export default Nav
