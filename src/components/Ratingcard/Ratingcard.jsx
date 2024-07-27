import React from 'react'
import './Ratingcard.css'
import activestar from '../../assests/home_page_active_star.png'
import deactivestar from '../../assests/home_page_deactive_star.png'

function Ratingcard(prop) {
const images = Array.from({ length:  5});
var ratingval = parseInt(prop.ratings);
  return (
    <div className={prop.className} id='rating_card'>
        <div className='food_rating_card'>
        <div ><img className='food_img' src={prop.image} alt='img'></img></div>
        <div className='food_description'>
            <span className='style_caption'>{prop.caption}</span>
            <div>
                {
                    images.map((img,index)=>(
                        index+1 <= ratingval ? <img className='star' src={activestar} alt='T'></img> : <img className='star' src={deactivestar} alt='F'></img>
                    ))

                }
            </div>
            <img className='price' src={prop.price} alt='price'></img>
        </div>
    </div>
    </div>
  )
}

export default Ratingcard
