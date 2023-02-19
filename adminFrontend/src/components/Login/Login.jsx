import React, { useState, useEffect } from "react";
import "./Login.css";
import Navbar from '../Navbar/Navbar';
import { login } from "../../slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { clearMessage } from "../slices/message";

const Login = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: "",
    password: ""
  };

  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState(initialValues);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handlePassword = event => {
    let password = event.target.value;
    setFormValue({ password: password });
  };

  const handleEmail = event => {
    let email = event.target.value;
    setFormValue({ email: email });
  };

  const handleLogin = () => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
    {/* <Navbar/> */}
      <div className="container">
        <div className="row ">
          <div className="login-wrap">
            <p className="text-center blue-text">SIGN IN</p>
            <h1 className="text-center">Welcome to</h1>
            <h1 className="text-center">Breaking Chains Enterprises</h1>
            <input
              type="email"
              class="form-control footer-input mt-5"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address"
              value={formValue.email}
              onchange={handleEmail}
            />
            <input
              type="password"
              class="form-control footer-input mt-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email Address"
              value={formValue.password}
              onchange={handlePassword}
            />
            <div class="form-check mb-2 mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Keep Me Logged In
              </label>
              <span className="forget-pass pink-text ">forget password ?</span>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                I have accepted
                <span className="pink-text"> terms & conditions </span> and{" "}
                <span className="pink-text">privacy policy </span>
              </label>
            </div>

            <button
              type="button"
              className="btn blue-background btn-border my-5 py-2 slide login-btn"
              onClick={() => handleLogin}
            >
              LOGIN
            </button>

            <p className="mb-5 mt-2 text-center">
              Don't have an account yet ?
              <span className="pink-text"> Sign Up </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
