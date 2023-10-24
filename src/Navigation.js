import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navigation.css";
import lottery from "./foodlogo2.png"
import { Link } from 'react-router-dom';

function Navigation() {

  const[navbar,setNavbar]=useState(false);
  function clicked(){
    console.log("button is clicked");
  }
  useEffect(() => {
    function changeBackground() {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
      console.log("Navbar state:", navbar); 
    }

    // Attach the event listener
    window.addEventListener("scroll", changeBackground);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []); // Empty dependency array to run this effect only once
  return (
    <section id="navigation">
    <nav className={`${navbar ? "navbar react" : "navbar"} navbar-expand-lg bg-body-tertiary`}>
  {/* Rest of your navigation code */}


        <div className="container-fluid " >
          <a className="brand" href="/"><img src={lottery} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" onClick={clicked} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
       <Link to="/">       <a className="nav-link active" >Home</a></Link>
       <Link to="/menu"> <a className="nav-link active" href="">Menu</a></Link>
          <Link to="/about">    <a className="nav-link active" >AboutUs</a></Link>
           
              <a className="nav-link active" href="#page1">Services</a>
              <a className="nav-link active" href="#contactus">ContactUs</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navigation;
