import React from 'react';
import $ from "jquery";
import "./menu.css"

import {GrInstagram} from "react-icons/gr";
import {ImWhatsapp} from "react-icons/im";
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoFacebookSquare} from "react-icons/bi";
function Menu() {
  $(".toggle").on("click", function () {
    $(".container").toggleClass("microsoft");
});
  return (
    <div>
    <div className='menubg'>
        <div className='menu'><h1> OUR MENU</h1>
        <img className="poor" src="images/dddd.png" alt="" />
        <p className='ven'>Our extensive food menus cater to the wide-ranging tastes and diversity of the Indian palate. Whether you desire an extravagant array of dishes or a simpler Indian wedding food menu, we’ve got you covered. If you’re working within a budget or seeking wedding food ideas, including finger food options, simply reach out to us. We’ll provide you with optimal choices spanning Indian, Mughlai, Persian, Middle Eastern, Continental, as well as authentic Pure religious and traditional south cuisines for Telugu Catering Events. Your culinary preferences are our top most priority.</p>
       <img className='bri' src="/images/bri.jpg" />
        </div>
        <div className='Arrangements'>
          <div className='opress'>
            <h2>Arrangement</h2>
<p className='ice'>Cooking has never been this simple!We Deliver What We Promise
Finest culinary art and skills in Hyderabad
Blend of rich food and excellent service
Stringent quality assurance
A wide range of exotic dishes and drinks
</p></div>
<div className='depress'>
  <img src='/images/close.jpg' />
</div>
        </div>
        </div>
        <div className='key'>
        <img className="roop" src="images/dd.png" alt="" />
            <h3>Key to success</h3>
           
            <div className='microsoft container'>       <marquee direction="up" className='marquee'>Talking of success, great taste and value for money are the other vital keys to our success. Customer feedback is of utmost importance to us, serving as a driving force for improvement and expansion.
Our motto is to ensure that each customer of Elite Caterers is left extremely happy and satisfied paving the way for repeat engagements in their future events.
At Elite Caterers, every team member recognizes their duty to be answerable to our customers. Consequently, they provide their services with integrity and unwavering dedication.
</marquee>  </div>

        </div>
      
<div className='feeter'>
                <ul>
                    <li>Contact : 8501973190 8143127246</li>
                    <li>Address : Plot no.5 Nacharam Hyderabad 500076 T.S</li>
                    <li>Email : admin@healthyfoodindia.com</li>

                </ul>
                <div className='scial'>                <GrInstagram size={14}/>
                <BiLogoFacebookSquare size={14} />
                <ImWhatsapp size={14}/>
                <AiOutlineMail size={14} />
                </div>

            </div>
 
 
 </div>
  )
}

export default Menu