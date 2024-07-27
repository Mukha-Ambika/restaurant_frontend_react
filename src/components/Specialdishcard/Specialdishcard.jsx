import React from 'react'
import './Specialdishcard.css'

import like_background from '../../assests/special_dish_card_like_background.png'
import like_before_hover from '../../assests/special_dish_card_like.png'
import like_on_hover from '../../assests/special_dish_card_ like_onhover.png'
import ratingstar from '../../assests/home_page_active_star.png'

function Specialdishcard(prop) {
  return (
    <div id='specialdishcard'>
      <div id='special_dish_image_like'>
      
      <div id='special_dish_container'><img src = {prop.specialDishImg}></img></div>
      <div id='special_dish_like_background'><img id='special_dish_like_background_img' src={like_background}></img></div>
      <div id='special_dish_like_before_hover'><img id='special_dish_like_before_hover_img' src={like_before_hover}></img></div>
      </div>
      <div id='special_dish_card_content'>
      <p id='special_dish_caption'>{prop.standoutDishCaption}</p>
      <p id='special_dish_description'>{prop.description}</p>
      <div id='special_dish_price_rating'>
        <span>{prop.specialDishPrice}</span>
        <div id='special_dish_rating'> 
        <img id='special_dish_ratingstar' src={ratingstar}></img>
        <span>{prop.specialDishRating}</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Specialdishcard
