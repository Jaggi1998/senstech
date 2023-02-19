import React from 'react';
import '../Common/Common.css';
import Sidebar from '../../Sidebar/Sidebar';
import Back from '../../../Static/Img/Login&Signup/Vector.svg';
import Key from '../../../Static/Img/Login&Signup/et_key.svg';
import {NavLink} from 'react-router-dom';
const ChangePassword = () => {
    return (<>
    <Sidebar element ={<> 
        <div className="container">
            <div className="row ">
                <div className="login-wrap">
                <img src={Key} alt="" className='my-5 p-3 top-img' width="60"/>
                
                <h1 className='text-center' >Change Account Password</h1>
                <p className='text-center no-worrie-text' >Your new passowrd must be different to previously used passwords</p>
                <input type="password" class="form-control footer-input mt-4 input-icons" id="current-password" aria-describedby="emailHelp" placeholder="&#xf30d; Enter Current Password"/>
                <input type="password" class="form-control footer-input mt-4 input-icons" id="password" aria-describedby="emailHelp" placeholder="&#xf30d; Enter New Password"/>
                <input type="password" class="form-control footer-input mt-4 input-icons" id="confirm-password" aria-describedby="emailHelp" placeholder="&#xf30d; Confirm New Password"/>
         

<button type="button" className="btn blue-background btn-border white my-5 py-2 slide login-btn">SUBMIT</button>


</div>
            </div>
        </div>
        </>} />  
        </>
    )
}

export default ChangePassword