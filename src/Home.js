import React from 'react'
import "./home.css";
import "animate.css";
import "./page1.css";

import {GrInstagram} from "react-icons/gr";
import {ImWhatsapp} from "react-icons/im";
import {AiOutlineMail} from 'react-icons/ai';
import {BiLogoFacebookSquare} from "react-icons/bi"
import "./aboutus.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import { Link } from 'react-router-dom';

import "./contact.css";
import What from "./what.png";
import { BsWhatsapp } from 'react-icons/bs';
const initialValues = {
  name: "",
  email: "",
tel: "",
  message: "",
};

function Home() {
  





  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <>  <section id="home">
        <div className='cont'>
           <div className='contain'>
               <h3 className='animate__animated animate__fadeInDown'>
               A Perfect Blend of Sensational Food, Inspiring Ideas and Professional Staff</h3> <p className='animate_animated animate__fadeInUpBig'>2018 – Silver service is oriented for a right-handed waiter. Thus to serve the food, the waiter stands behind the guest and to the guest’s left, holds or supports the platter with their left hand, and serves the food with their right hand. It is common for the waiter to hold the serving-fork above the serving-spoon both in the right hand, and use the fingers to manipulate the two as a pincer for picking up and transferring the food.</p>
                <a href="#contactus" className='kitty animate__animated animate__zoomIn'>Contact Us</a>
            </div>
        </div>
        <a href={"https://wa.me/9848066866"} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp size={40} />
      </a>
      
      
        </section>
            <section id="page">
            <div className='conti'>
              <div className='what'>
                <h2>What We Do</h2>
                <img src="images/dddd.png" alt="" />
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='cards col-xl-4 col-md-12 col-sm-12'>
                    <div className="card-content">
                      <div className='image-container'>               <img className="hover-image" src="/images/kot.jpg" alt="Card" /> </div>
                      <h4>Freshfood</h4>
                      </div>
       
                      <div className='last'>             <span className='animate__animated animate__zoomIn'>learn more</span>
                    </div>
                  </div>
                  <div className='cards col-xl-4 col-md-12 col-sm-12'>
      
                    <div className="card-content">
                    <div className='image-container'>                <img className="hover-image" src="/images/kot1.jpg" alt="Card" /> </div>
                      <h4>Quality-catering</h4>
                    </div>
                   
                    
                    <div className='last'>             <span className='animate__animated animate__zoomIn'>learn more</span>
                    </div>
                  </div>
                  <div className='cards col-xl-4 col-md-12 col-sm-12'>
                    <div className="card-content">
                    <div className="image-container">
        <img src="/images/kot2.jpg" alt="Image" className="hover-image" />
      </div>
      
                    
                      <h4>Exceptional-service</h4>
                    </div>
                    <div className='last'>             <span className='animate__animated animate__zoomIn'>learn more</span>
                    </div>
       
                  </div>
                </div>
              </div>
              <div>
                <p className='ott'>Our catering planner serves as your initial connection. You can provide event specific such as event type, guest count, and  event venue. Our planner will guide you selecting the best and optimal catering Ideas. They’ll offer suggestions on food and services that align perfectly with your event.
      Our catering planner will help with his extensive expertise in understanding customer needs. As a result, meticulous planning and flawless execution are guaranteed, ensuring the success of your event.
      </p>
              </div>
            </div>
          </section>
          
    <section id="aboutus">
    <div className="love">
        <div className='opppo'>
        <img src='images/dd.png' ></img>
        <h1 data-text="AboutUs">AboutUs</h1>

        
        <p>Healthy Food India was established in December 2018 in Hyderabad, Telangana India and is the world’s biggest commercial center for Commercial corporates cooking.
Started with a bunch of eatery and cooking accomplices in Hyderabad. As our administration developed, we extended crosswise over Hyderabad and South India. Today, ‘Healthy Food India offers a curated rundown of the best business caterers for Sum urban communities and towns over Telangana.
We benefit new businesses. We benefit from office cooking and local gatherings.
</p>

<span  className='lorry animate__animated animate__zoomIn'>read more...</span>
  
        </div>
        </div>
        </section>

        <section id="contactus">
        <div className='pick'>
        <form onSubmit={handleSubmit} className="text-center border border-light p-5" action="#!">
        <p className="carnage h4 mb-4">Contact us</p>
        <img className="karma" src="images/dddd.png" alt="" />

        <input
          type="name"
          id="name"
          autoComplete='off'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-4"
          placeholder="Name"
        />

{errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
        <input
          type="email"
          id="email"
          value={values.email}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-4"
          placeholder="E-mail"
        />
        
        {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
<input
          type="tel"
          id="tel"
          className="form-control mb-4"
          placeholder="Phone-Number"
          value={values.tel}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        {errors.tel && touched.tel ? (
                      <p className="form-error">{errors.tel}</p>
                    ) : null}
        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            id="message"
            value={values.message}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            rows="3"
            placeholder="Message"
          ></textarea>
          
          {errors.message && touched.message ? (
                      <p className="form-error1">{errors.message}</p>
                    ) : null}
        </div>

<div className='power'>
        <button className=" animate__animated animate__zoomIn car " type="submit">Send Now</button>
        </div>
      </form>
      <div className='feeter'>
                <ul>
                    <li>Contact : 8501973190 8143127246</li>
                    <li>Address : Plot no.5 Nacharam Hyderabad 500076 T.S</li>
                    <li>Email : admin@healthyfoodindia.com</li>

                </ul>
                <div className='sicial'>                <GrInstagram id="pakka"  size={14}/>
                <BiLogoFacebookSquare id="pakka" size={14} />
                <ImWhatsapp id="pakka"  size={14}/>
                <AiOutlineMail  id="pakka"  size={14} />
                </div>

            </div>
        </div>
    </section>
          </>
          
  
  )
}

export default Home