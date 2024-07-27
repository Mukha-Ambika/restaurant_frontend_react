import React from 'react'
import './Popularcatagories.css'
import Catagorycard from '../../components/CategoryCard/Categorcard.jsx'
import popularDish1Image from '../../assests/popular_dish_1.png'
import popularDish2Image from '../../assests/popular_dish_2.png'
import popularDish3Image from '../../assests/popular_dish_3.png'
import popularDish4Image from '../../assests/popular_dish_4.png'


function Popularcatagories() {
  return (
    <div>
      <div id='section_title'>
       <p>Popular Catagories</p>
      </div>
      <div id='Catagorycards'>
        <Catagorycard dishImage={popularDish1Image} dishesCategory='Main Dish' noOfDishes='(86 dishes)' />
        <Catagorycard dishImage={popularDish2Image} dishesCategory='Break Fast' noOfDishes='(12 break fast)'/>
        <Catagorycard dishImage={popularDish3Image} dishesCategory='Dessert' noOfDishes='(48 dessert)'/>
        <Catagorycard dishImage={popularDish4Image} dishesCategory='Browse All' noOfDishes='(255 Items)'/>
      </div>
    </div>
  )
}

export default Popularcatagories
