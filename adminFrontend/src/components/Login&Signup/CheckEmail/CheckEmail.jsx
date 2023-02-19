import React from 'react';
import Common from '../Common/Common';
import Footer from '../../Footer/Footer';
import Email from '../../../Static/Img/Login&Signup/carbon_email.svg';
const CheckEmail = () => {
    return (<>
    <Common heading = 'Check Your Email'
            para='We sent a password reset link to example@gmail.com' 
            imgsrc={Email} 
            btname='OPEN YOUR EMAIL'/>
            <Footer/>
    </>)
}

export default CheckEmail;