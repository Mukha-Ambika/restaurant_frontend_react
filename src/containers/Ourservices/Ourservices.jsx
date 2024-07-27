import React from 'react';
import './Ourservices.css';
import {Button,Servicescard} from '../../components'
import services_img_1 from '../../assests/services_img_1.png';
import services_img_2 from '../../assests/services_img_2.png';
import services_img_3 from '../../assests/services_img_3.png';
import services_img_4 from '../../assests/services_img_4.png';

function Ourservices() {
  return (
    <div id='ourservices'>
      <div id='ourservices_content'>
          <p>Our Story & Services</p>
          <p id='ourservices_heading'>Our Culinary Journey <br/> And Services</p>
          <p id='ourservices_description'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
          <Button button_text="Explore"/> 
      </div>
      <div id='ourservices_cards'>
         <Servicescard serviceImg={services_img_1} serviceCaption='Catering' serviceDescription='Delight your guests with our flavors and  presentation'/>
         <Servicescard serviceImg={services_img_2} serviceCaption='Fast delivery' serviceDescription='We deliver your order promptly to your door'/>
         <Servicescard serviceImg={services_img_3} serviceCaption='Online Ordering' serviceDescription='Explore menu & order with ease using our Online Ordering '/>
         <Servicescard serviceImg={services_img_4} serviceCaption='Gift Cards' serviceDescription='Give the gift of exceptional dining with Foodi Gift Cards'/>
      </div>
    </div>
  )
}

export default Ourservices
