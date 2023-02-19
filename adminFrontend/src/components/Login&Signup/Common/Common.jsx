import React from 'react';
import './Common.css';
import Back from '../../../Static/Img/Login&Signup/Vector.svg';
import {NavLink} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
const Common = (props) =>{
    return (<>
    <Navbar/>
        <div className="container">
            <div className="row ">
                <div className="login-wrap">
                    
                <img src={props.imgsrc} alt="" className='my-5 p-3 top-img' width="60"/>
             
                <h1 className='text-center' >{props.heading}</h1>
                <p className='text-center no-worrie-text' >{props.para}</p>
                
                    <button type="button" className="btn blue-background btn-border white my-5 py-2 slide login-btn">{props.btname}</button>

                    <p className='mb-5 mt-2 back-txt'><img src={Back} alt="back-img" width="15"/> Back to <NavLink to='/login'  className='link-text'><span className='pink-text' > Login </span></NavLink></p>
                    </div>
            </div>
        </div>
        </>
  
    
    )
}

export default Common