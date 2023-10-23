import React from 'react';
import './page1.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Page1() {
  return (
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
                <h4>sdsd</h4>
                </div>
 
                <div className='last'>             <span>learn more</span>
              </div>
            </div>
            <div className='cards col-xl-4 col-md-12 col-sm-12'>

              <div className="card-content">
              <div className='image-container'>                <img className="hover-image" src="/images/kot1.jpg" alt="Card" /> </div>
                <h4>sdsd</h4>
              </div>
             
              
              <div className='last'>             <span>learn more</span>
              </div>
            </div>
            <div className='cards col-xl-4 col-md-12 col-sm-12'>
              <div className="card-content">
              <div className="image-container">
  <img src="/images/kot2.jpg" alt="Image" className="hover-image" />
</div>

              
                <h4>sdsd</h4>
              </div>
              <div className='last'>             <span>learn more</span>
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
  );
}

export default Page1;
