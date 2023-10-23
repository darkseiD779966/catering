import React from 'react'
import "./aboutus.css";
import { Link, NavLink } from 'react-router-dom';
function Aboutus() {
  return (
    <section id="aboutus">
    <div className="love">
        <div className='opppo'>
        <img src='images/dd.png' ></img>
        <h1 data-text="AboutUs">AboutUs</h1>

        
        <p>Healthy Food India was established in December 2018 in Hyderabad, Telangana India and is the world’s biggest commercial center for Commercial corporates cooking.
Started with a bunch of eatery and cooking accomplices in Hyderabad. As our administration developed, we extended crosswise over Hyderabad and South India. Today, ‘Healthy Food India offers a curated rundown of the best business caterers for Sum urban communities and towns over Telangana.
We benefit new businesses. We benefit from office cooking and local gatherings.
</p>
<div className='irish'>
   <NavLink to="/about"> <span  className='lorry'>read more...</span></NavLink>
</div>

        </div>
        </div>
        </section>
  )
}

export default Aboutus