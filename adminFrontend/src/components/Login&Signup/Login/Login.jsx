import React, { useState, useEffect } from "react";
import { login } from "../../../slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { clearMessage } from "../../../slices/message";
import SigninImg from '../../../Static/Img/Login&Signup/signin.svg'

const Login = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: ""
  };

  const [formValue, setFormValue] = useState(initialValues);
  const [errMsg, setErrMsg] = useState(false);
  
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handlePassword = event => {
    let password = event.target.value;
    setFormValue({ ...formValue, password: password });
  };

  const handleEmail = event => {
    let email = event.target.value;
    console.log(email);
    setFormValue({ ...formValue, email: email });
  };

  const handleLogin = () => {
    const { email, password } = formValue;

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/devices-list");
      })
      .catch(err => {
        setErrMsg(true);
        console.log(err)
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/devices-list" />;
  }

  return (
    <>
      <div className="container-fluid" style={{ backgroundImage:`url(${SigninImg})`, backgroundSize:"100%", backgroundRepeat:"no-repeat", backgroundColor:"#f5f8fb" }}>
        <div className="row">

<div className="col-md-10 col-lg-5 mx-auto my-5">
  
<form className="mt-5 p-5 btn-border " style={{border:"1px solid #A3A3A3", backgroundColor:"#ffffff"}} >
  <h1 className="light-text text-center mb-4 grey-text" >Sign in to our platform</h1>
        {errMsg === true ? (
              <div
                class="alert alert-danger py-2 mt-4 text-center"
                role="alert"
              >
               
                {message}
              </div>
            ) : (
              ""
            )}
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" value={formValue.email}
              onChange={handleEmail}  />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>

       
        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control"  value={formValue.password}
              onChange={handlePassword}/>
          <label class="form-label" for="form2Example2">Password</label>
        </div>

      
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
          
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div class="col">
        
            <a href="#!" className="">Forgot password?</a>
          </div>
        </div>

    
        <button type="button" class="btn blue-background text-white btn-block mb-4 mx-auto " style={{display:"block", width:"100%"}} onClick={() => handleLogin()}>Sign in</button>

    
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
</div>
        </div>
      </div>
    </>
  );
};

export default Login;
