import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const ContactUs =() => {
    return (
      <>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row my-5">
                <div className="col-md-6 me-auto">
                <form>
                <h2 className='' >Send Us a Message</h2>
                <p className='grey-text' >Please complete the form below to send a message to our team.</p>

                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control footer-input" placeholder="First name"/>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control footer-input" placeholder="Last name"/>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                    <input type="email" class="form-control footer-input" placeholder="Your Email"/>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control footer-input" placeholder="Phone Number"/>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                    <textarea
                    class="form-control footer-input"
                    id="about"
                    rows="5"
                    placeholder="Message..."
                    value={''}
                  ></textarea>
                    </div>
                </div>
                <button class="btn text-white py-2 slide learn-more my-5" type="submit">SEND MESSAGE</button>
            </form>
              </div>
              <div className="col-md-4 ms-auto">
              <div className="mt-5">
          <h4 className="text-uppercase">MORE WAYS TO CONNECT</h4>

          <ul className="list-unstyled mb-0">
          
            <li className='mt-4'>
              <span className="footer-list"><i class="fa-solid fa-location-dot orange-text"></i> 4850 Sugarloaf Parkway Suite 209-146, Lawrenceville, GA 30044</span>
            </li>
            <li className='mt-4'>
              <span  className="  footer-list"><i class="fa-solid fa-envelope orange-text"></i> info@breakingchainscoop.com</span>
            </li>
          </ul>

          <h4 className="text-uppercase mt-4">OPERATING HOURS</h4>
          <ul className="list-unstyled mb-0">
          
            <li className='mt-4'>
              <span className="footer-list"><i class="fa-regular fa-circle-dot orange-text"></i> Monday – Friday: 10am to 10pm EST</span>
            </li>
            <li className='mt-4'>
              <span  className="  footer-list"><i class="fa-regular fa-circle-dot orange-text"></i> Saturday: 10am to 2pm EST</span>
            </li>
            <li className='mt-4'>
              <span  className="  footer-list"><i class="fa-regular fa-circle-dot orange-text"></i> Sunday: Closed</span>
            </li>
          </ul>
        </div>
              </div>
              </div>
             </div>
            </div>
        </div>
        <Footer/>
      </>
    )
}

export default ContactUs