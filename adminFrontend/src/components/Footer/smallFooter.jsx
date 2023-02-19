import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
const Footer = () =>{
return (
<>
<footer className="text-left text-white main-footer small-footer">
  
<div className="text-center py-2 copyright" style={{backgroundColor: "#303030"}}>
  © Copyright 2022 Breaking Chains Enterprises, LLC - All Rights Reserved |<NavLink to="/privacy-policy" className="text-white"> Privacy Policy</NavLink> | <NavLink to="/terms" className="text-white"> Terms and Conditions</NavLink> 
  </div>
  
</footer>

</>
)
}

export default Footer