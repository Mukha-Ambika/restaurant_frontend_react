import React from 'react'
import './Categorycard.css'
function Categorcard(prop) {
  return (
    <div id='catagory_card'>
        <div id='food_background'>
            <img id='food_image' src={prop.dishImage} alt='Food_Category_Image'></img>
        </div>
        <span id='dish_catagory'>{prop.dishesCategory}</span>
        <span id='no_of_dishes'>{prop.noOfDishes}</span>
    </div>
  )
}

export default Categorcard
