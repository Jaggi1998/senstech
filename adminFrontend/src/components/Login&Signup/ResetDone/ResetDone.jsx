import React from 'react';
import Common from '../Common/Common';
import Done from '../../../Static/Img/Login&Signup/bx_check.svg';
import Footer from '../../Footer/Footer';
const ResetDone = () => {
    return (<>
    <Common heading = 'Password Reset'
            para='Your Password has been successfully rest' 
            imgsrc={Done} 
            btname='CONTINUE'/>
            <Footer/>
    </>)
}

export default ResetDone;