import React from 'react'
import './Footer.css'
import { Logo } from '../../components'
import facebook_icon from '../../assests/facebook_icon.png';
import insta_icon from '../../assests/insta_icon.png';
import twitter_icon from '../../assests/twitter_logo.png';
import youtube_icon from '../../assests/youtube_logo.png';

function Footer() {
  return (
    <div id='footer'>
      <div id='footer_links'>
      <div id='footer_logo_section'>
      <Logo/>
      <p>Savor the artistry where <br/> every dish is a culinary <br/>masterpiece</p>
      </div>
      <div id='footer_usefull_links'>
        <h3>Useful links</h3>
        <a href='#'>About us</a>
        <a href='#'>Events</a>
        <a href='#'>Blogs</a>
        <a href='#'>FAQ</a>
      </div>
      <div id='footer_mainmenu'>
      <h3>Main Menu</h3>
      <a href='#'>Home</a>
      <a href='#'>Offers</a>
      <a href='#'>Menus</a>
      <a href='#'>Reservation</a>
      </div>
      <div id='footer_contactUs'>
      <h3>Contact Us</h3>
      <p>example@email.com</p>
      <p>+64 958 248 966</p>
      <p>Social media</p>
      </div>
      </div>
      <div id='footer_socialmedia_copyright'>
        <div id='footer_socialmedia'>
        <a><img src={facebook_icon}></img></a>
        <a><img src={insta_icon}></img></a>
        <a><img src={twitter_icon}></img></a>
        <a><img src={youtube_icon}></img></a>
        </div>
        <p>Copyright       2023 Dscode | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
