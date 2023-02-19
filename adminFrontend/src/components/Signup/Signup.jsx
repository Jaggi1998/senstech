import React, { useState } from 'react';
import '../Common/Common.css';
import Footer from '../../Footer/Footer';
import {NavLink, useNavigate} from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errMsg, setErrMsg] = useState(false)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
   
    const signup = async () => {
        let userInfo = {email, password, confirmPassword}
      let result = await fetch('http://localhost:8081/api/signup',{
            method:'POST',
            body: JSON.stringify(userInfo),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        if(result.status === 400) {
            setErrMsg(true)
        }
        if (result.status === 200) {
            navigate('/login')
        }
        result = await result.json()
        setMessage(result.message)
        
    }

    return (
        <>
        <div className="container">
            <div className="row ">
                <div className="login-wrap">
                <p className='text-center blue-text' >SIGN UP</p>
                <h1 className='text-center' >Welcome to</h1>
                <h1 className='text-center' >Breaking Chains Enterprises</h1>

                { errMsg === true ? <div class="alert alert-danger mt-5 btn-border text-center" role="alert"> {message} </div> : ""}

                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control footer-input mt-5 input-icons" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf003; Enter Email Address"/>
                <input type="password" value= {password} onChange={(e)=>setPassword(e.target.value)} className="form-control footer-input mt-4 input-icons" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf30d; Create a Password"/>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control footer-input mt-4 input-icons" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf30d; Confirm a Password"/>
                
                <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" for="flexCheckChecked">
                I have accepted<span className='pink-text' > terms & conditions </span> and <span className='pink-text'>privacy policy </span>
                </label>
                </div>

                <button type="button" onClick={signup} className="btn learn-more my-5 py-2 slide login-btn">SIGNUP</button>

                <p className='mb-5 mt-2 text-center'>Already have an account ?<NavLink to='/login'  className='link-text'><span className='pink-text' > Login </span></NavLink></p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Signup