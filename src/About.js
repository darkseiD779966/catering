import React from 'react'
import "./about.css";
import {GrInstagram} from "react-icons/gr";
import {ImWhatsapp} from "react-icons/im";
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoFacebookSquare} from "react-icons/bi"
function About() {
  return (
    <div>    <div className="story">
        <h1>ABOUTUS</h1>
        <img className="cat" src="/images/ODY4731.png" />
        <img src="/images/arishem.jpg" />
        <h2>our-story</h2>
        </div>

       <div className='lion'>
        <div className='pet'>
            <p>
Food catering Service In Hyderabad
If you’re looking for outstanding caterers in Hyderabad, you’ve come to the right place. At Select Caterers, we pride ourselves on providing exceptional catering services for all occasions. We have a wide range of menu options to choose from, and our team of experienced and certified chefs will work with you to create the perfect meal for your event. We’re dedicated to providing outstanding customer service, and we’ll work with you to ensure that your event is a success. Contact us today to learn more about our catering services.Are you planning to organize a perfect food affair to compliment your special event? Let Aadhya Caterers offer an extravagant food itinerary to meet your each & every catering need in Uppal,Miyapur, Mehadipatnam and all other areas in Hyderabad. Whether it’s a large, mid or small-sized event, we offer comprehensive indoor and outdoor catering service in Uppal,Miyapur, Mehdipatnam of Hyderabad for both formal & informal gatherings.With a wide range of food items to select from, we bring food menus to suit every event, taste and most importantly pocket. You just leave your food worried to us, and enjoy spending time with your guests and special invitees. From birthday galas, business seminars to weddings and any other special celebration, we offer you an extensive list of food items to select for your special occasion or event
</p>
            </div>
            <div className='left'>            <img src="/images/pest.jpg" /></div>

          </div>
          <div className="promoters">
            
            <div className='poriki'>
            <img className="sari" src='/images/dd.png ' />

                <h2>Promoters</h2>
            </div>
            <div className='row'>
                
                <div className='cupps col-md-6 col-xl-4 col-sm-12'>
                    <img className='kinder' src="/images/faceframe.png" />
                    <h4>Mohammed Fazal Ahmed </h4>
                </div>
                
                <div className='cupps col-md-6 col-xl-4 col-sm-12'>
                    <img className="kinder" src="/images/faceframe.png" />
                    <h4>Mohammed Abdul Hameed</h4>
                </div>
                
                <div className='cupps col-md-6 col-xl-4 col-sm-12'>
                    <img className="kinder" src="/images/faceframe.png" />
                    <h4>Mohammed KhajaMohinuddin</h4>
                </div>
            </div>
            
            <div className='team'>
                <p className='jimmy'>
We all know, food carries the energy of the person who prepares it. As a matter of fact, our staff is adept at cooking with care and positivity which reflects in the end result. Each dish we craft is infused with a blend of love and creativity.
Beyond the delightful food, You will also experience excellent service that matches the taste and visual appeal of our presentation.
</p>
            </div>
            </div>
            <div className='footer'>
                <ul>
                    <li>Contact : 8501973190 8143127246</li>
                    <li>Address : Plot no.5 Nacharam Hyderabad 500076 T.S</li>
                    <li>Email : admin@healthyfoodindia.com</li>

                </ul>
                <div className='social'>                <GrInstagram size={14}/>
                <BiLogoFacebookSquare size={14} />
                <ImWhatsapp size={14}/>
                <AiOutlineMail size={14} />
                </div>

            </div>
          </div>
  
  )
}

export default About