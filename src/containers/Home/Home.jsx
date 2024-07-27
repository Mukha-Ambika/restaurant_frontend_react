import React from 'react'
import './Home.css'
import { Button,Ratingcard } from '../../components'

import play from '../../assests/play.png'
import girl from '../../assests/home_page_girl.png'
import circleBehindGirl from '../../assests/circle_behind_girl.png'
import tag from '../../assests/home_page_tag.png'
import fooditem1 from '../../assests/home_page_food1.png'
import fooditem2 from '../../assests/home_page_food2.png'
import price1 from '../../assests/home_page_price_1.png'
import price2 from '../../assests/home_page_price_2.png'


function Home() {
  return (
    <div id='home_page'>
      <div id='home_page_content'>
      <p id='tag_line'>Dive into Delights <br/> Of Delectable <span>Food</span></p>
      <p id='secondary_text'>Where Each Plate Weaves a Story of Culinary <br/> Mastery and Passionate Craftsmanship</p>
      <div id='order_vedio'>
        <Button button_text="Order Now"/>
        <p>Watch Video</p>
        <div id='play_button'>
        <a  href='#Home' ><img src={play} /></a>
        </div>
      </div>
      </div>
      <div id='images_part'>
      <img id='cirlce_behind_girl' src={circleBehindGirl} />
      <img id="girl_image" src={girl}/>
      <img id='food_tag' src={tag} />
      <Ratingcard className = 'rating_food_1' ratings = '3' image = {fooditem1} caption='Spicy noodles' price={price1}/>
      <Ratingcard className = 'rating_food_2' ratings = '4' image = {fooditem2} caption='Vegertarian salad' price={price2}/>
      </div>
    </div>
  )
}

export default Home
