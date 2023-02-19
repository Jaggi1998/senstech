import React, { useState } from "react";
import "../Common/Common.css";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Back from "../../../Static/Img/Login&Signup/Vector.svg";
import Key from "../../../Static/Img/Login&Signup/et_key.svg";
import Navbar from "../../Navbar/Navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { setNewPassword } from "../../../slices/user";

const NewPassword = () => {
  let navigate = useNavigate();

  const { user } = useSelector(state => ({ ...state.auth }));
  let { token } = useParams();
  const accessToken = token ? token : user?.accessToken;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleNewPassword = () => {
    if (!accessToken) {
      return;
    }
    const formData = {
      password,
      confirm
    };

    // dispatch(setNewPassword({formData, accessToken}))
    //   .unwrap()
    //   .then((res) => {

    //     if (!token) {
    //       navigate("/my-profile");
    //     }
    //     if (res.user.status === false) {
    //       setErrMsg(true)
    //       setMessage(res.user.message)
    //     } else {
    //       navigate("/login");
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row ">
          <div className="login-wrap">
            <img src={Key} alt="" className="my-5 p-3 top-img" width="60" />

            <h1 className="text-center">Set New Password</h1>
            <p className="text-center no-worrie-text">
              Your new passowrd must be different to previously used passwords
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
              type="password"
              class="form-control footer-input mt-4 input-icons"
              id="password"
              aria-describedby="emailHelp"
              placeholder="&#xf30d; Enter New Password"
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="password"
              class="form-control footer-input mt-4 input-icons"
              id="confirm-password"
              aria-describedby="emailHelp"
              placeholder="&#xf30d; Confirm New Password"
              onChange={e => setConfirm(e.target.value)}
            />

            <button
              type="button"
              className="btn blue-background btn-border white my-5 py-2 slide login-btn"
              onClick={handleNewPassword}
            >
              RESET PASSWORD
            </button>

            <p className="mb-5 mt-2 back-txt">
              <img src={Back} alt="back-img" width="15" /> Back to{" "}
              <NavLink to="/login" className="link-text">
                {" "}
                <span className="pink-text"> Login </span>{" "}
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewPassword;
