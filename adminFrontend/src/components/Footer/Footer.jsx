import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import clock from '../../Static/Img/Footer/clock.svg';
import location from '../../Static/Img/Footer/location.svg';
import mail from '../../Static/Img/Footer/mail.svg';
import phone from '../../Static/Img/Footer/phone.svg';
const Footer = () =>{
return (
<>
<footer className="text-left text-white main-footer">

  <div className="container-fluid p-4">
 
   

   <div className="col-lg-10 col-md-12 mx-auto">
    <section className="mb-4 p-4 top-section">
        <div className="row">

        <div className="col-md-6 text-black"><p className='footer-p'>Let's Rebuild Black Wall Street Not Across City Blocks, But Across Nations</p></div>
        <div className="col-md-6">
            <div className="row">

            <div className="col-4 me-auto"><img className='footer-img'  src={phone} alt="" /></div>
             <div className="col-4">
                <span className='footer-list call-us' > Call Us Today</span>
                <p className='footer-p'>8100-546-845</p>
            </div>
            <div className="col-4">
                <button type="button" className="btn blue-background btn-border text-white px-3 me-2 py-2 slide" >JOIN US TODAY</button></div>
            </div>
            </div>
        </div>
    
    </section>
    </div>

<div className="col-lg-10 col-md-12 mx-auto">
    <section className="">
   
      <div className="row">
     
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h4 className="text-uppercase">INFORMATION</h4>

          <ul className="list-unstyled mb-0 footer-list">
            <li>
              <NavLink to="/" className="text-white footer-list">Home</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white footer-list">About BCE</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white footer-list">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white footer-list">Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-white footer-list">Contact Us</NavLink>
            </li>
          </ul>
        </div>
       



        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h4 className="text-uppercase">ADDRESS</h4>

          <ul className="list-unstyled mb-0">
          
            <li className='mt-4'>
                <img src={location} alt="" />
              <span className="text-white ms-2 footer-list"> 4850 Sugarloaf Parkway Suite 209-146, Lawrenceville, GA 30044</span>
            </li>
            <li className='mt-4'>
                <img src={mail} alt="" />
              <span  className="text-white  ms-2 footer-list">info@breakingchainscoop.com</span>
            </li>
            <li className='mt-4' >
            <img src={clock} alt="" />
              <span  className="text-white ms-2 footer-list">Monday – Friday: 10am to 10pm EST<br/>Saturday - 10am to 2pm EST<br/>Sunday - Closed</span>
            </li>
          </ul>
        </div>
    
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">NEWSLETTER SIGN UP!</h5>

          <ul className="list-unstyled mb-0">
            <li>
            <input type="email" class="form-control footer-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Address"/>
            </li>
            <li className='mt-3'>
            <button type="button" className="btn blue-background btn-border text-white px-3 me-2 py-2 slide">SUBSCRIBE NOW</button>
            </li>

          </ul>
        </div>
       
      
      
      </div>
    
    </section>
    </div>
  </div>
 

  
  <div className="text-center py-2 copyright" style={{backgroundColor: "#303030"}}>
  © Copyright 2022 Breaking Chains Enterprises, LLC - All Rights Reserved |<NavLink to="/privacy-policy" className="text-white"> Privacy Policy</NavLink> | <NavLink to="/terms" className="text-white"> Terms and Conditions</NavLink> 
  </div>
  
</footer>

</>
)
}

export default Footer