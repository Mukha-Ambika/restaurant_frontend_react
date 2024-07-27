import React from 'react'
import './Ourbestchef.css'
import bestchefimg from '../../assests/our_best_chef.png'
import reviewCustomers from '../../assests/Our_best_chef_review_customers_img.png'
import {Our_best_chef_resturant_rating,Our_best_chef_resturant_reviews} from '../../Constants/constants.jsx'
import rating_star from '../../assests/home_page_active_star.png'

function Ourbestchef() {
  return (
    <div id='Our_best_chef'>
      <div id='Our_best_chef_img_section'>
          <img id='Our_best_chef_img' src={bestchefimg} alt='best_chef'/>
      </div>
      <div id='Our_best_chef_content'>
        <p id='Our_best_chef_content_heading'>Testimonials</p>
        <p id='Our_best_chef_content_heading_major'>What Our Customers<br/> Say About Us</p>
        <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        <div id='review_section'>
            <img id='review_customers_profile' src={reviewCustomers} alt='customers_img'></img>
            <div id='Our_best_chef_feedback_content'>
                <p>Customer Feedback</p>
                <div id='Customer_Feedback_review'>
                    <div><img src={rating_star} alt='rating_star'></img></div>
                    <p>{Our_best_chef_resturant_rating}</p>
                    <p><span>(</span>{Our_best_chef_resturant_reviews}<span> Reviews)</span></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ourbestchef
