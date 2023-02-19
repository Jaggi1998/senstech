import React, { useState, useEffect } from "react";
import "../Common/Common.css";
import Lock from "../../../Static/Img/Login&Signup/carbon_email.svg";
import Back from "../../../Static/Img/Login&Signup/Vector.svg";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, NavLink } from "react-router-dom";
import "../Common/Common.css";
import { forgotPassword, user } from "../../../slices/user";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../../slices/message";

const ResetPassword = () => {
  const initialValues = {
    email: ""
  };
  let navigate = useNavigate();

  const [formValue, setFormValue] = useState(initialValues);
  const [errMsg, setErrMsg] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleEmail = event => {
    let email = event.target.value;
    setFormValue({ ...formValue, email: email });
  };

  const handleForgotPassword = () => {
    const { email } = formValue;

    // dispatch(forgotPassword({ email }))
    //   .unwrap()
    //   .then(res => {
    //     let response = res.user;
    //     console.log("msg", res.user);
    //     if (response.success === false) {
    //       setErrMsg(true);
    //       setMessage(response.message);
    //     } else {
    //       navigate("/check-email");
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row ">
          <div className="login-wrap">
            <img src={Lock} alt="" className="my-5 p-3 top-img" width="60" />

            <h1 className="text-center">Reset Your Password</h1>
            <p className="text-center no-worrie-text">
              No worries, We'll send you reset instructions
            </p>
            {errMsg === true ? (
              <div
                class="alert alert-danger mt-5 btn-border text-center"
                role="alert"
              >
                {" "}
                {message}{" "}
              </div>
            ) : (
              ""
            )}
            <input
              type="email"
              class="form-control footer-input mt-5 input-icons"
              id="email"
              aria-describedby="emailHelp"
              placeholder="&#xf003; Enter Email Address"
              value={formValue.email}
              onChange={handleEmail}
            />

            <button
              type="button"
              className="btn blue-background btn-border white my-5 py-2 slide login-btn"
              onClick={() => handleForgotPassword()}
            >
              RESET YOUR PASSWORD
            </button>

            <p className="mb-5 mt-2 back-txt">
              <img src={Back} alt="back-img" width="15" /> Back to{" "}
              <NavLink to="/login" className="link-text">
                <span className="pink-text"> Login </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
