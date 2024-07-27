import React from 'react'
import './Standoutdishes.css';
import {ClickFornext,Specialdishcard} from '../../components'

import right from '../../assests/move_right.png'
import left from '../../assests/move_left.png'
import Standoutdish1 from '../../assests/standout_dish_1.png'
import Standoutdish2 from '../../assests/stand_dish_2.png'
import Standoutdish3 from '../../assests/stand_out_dish_3.png'

function Standoutdishes() {
  return (
    <div id='special_dish_section'>
      <div> <p id='special_dish'>SPECIAL DISHES</p> </div>
      <div id='style_subheading_line'>
        <span id='standout_dish_subtext'>Standout Dishes <br/>From Our Menu</span>
        <div id='direction_button_allign'>
         <ClickFornext direction={left}/>
         <ClickFornext direction={right}/>
        </div>
      </div>
      <div id='special_dishes_cards'>
      <Specialdishcard specialDishImg={Standoutdish1} standoutDishCaption='Fattoush' description='description for the content' specialDishPrice='$24.00' specialDishRating='4.9' />
      <Specialdishcard specialDishImg={Standoutdish2} standoutDishCaption='Vegetable salad' description='description for the content' specialDishPrice='$26.00' specialDishRating='4.6' />
      <Specialdishcard specialDishImg={Standoutdish3} standoutDishCaption='Egg vegi salad' description='description for the content' specialDishPrice='$23.00' specialDishRating='4.5' />
      </div>
    </div>
  )
}

export default Standoutdishes
