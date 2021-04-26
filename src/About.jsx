import React from 'react';
import './index.css';
import himg from '../src/images/about.jpg';

const About=()=> {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
         <div className="row">
           <div className="col-10 mx-auto">
           <div className="row">
           <div className="col-md-6 pt-10 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1> Grow your business with 
               <strong className="brand-name">TechnoSpark</strong> 
               </h1> 
               <h2 className="my-10 pt-lg-5">
                   We are talented developer organisation that develop and manage websites
               </h2>
               <div className="mt-10 pt-lg-5" >
                  <a href="/contact" className="btn-get-started ">Contact us</a>
               </div>
           </div>
           <div className="pt-10 pt-lg-5 col-lg-6 order-1 order-lg-2 header-img">
            <img src={himg} className="img-fluid animated"/>
           </div>
           </div>
           </div>
     </div>
     </div>
    </section>
    </>
  );
}

export default About;
