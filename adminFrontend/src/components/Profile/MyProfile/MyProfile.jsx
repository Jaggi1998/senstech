import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../ProfileCommon/ProfileCommon.css";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../../slices/user";
const MyProfile = () => {
  let isLoading = false;
  const userDetail = useSelector(state => state.user.userDetail);
  const {
    name,
    date_of_birth,
    gender,
    phone,
    username,
    about,
    referralCode,
    referralUrl
  } = userDetail ? userDetail : {};
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      // dispatch(getUserDetails({ userId }));
      isLoading = true;
    }
  }, [dispatch, userId]);
  const notify = () =>
    toast.success("Link Copied!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
  return (
    <>
      <Sidebar
        element={
          <>
            <div className="container-fluid">
              <div className="row my-5">
                <div className="col-10 mx-auto my-5">
                  <p className="text-center blue-text my-5">User Profile</p>
                  <h1 className="text-center">My Account Profile</h1>

                  <div className="myprofile-main">
                    <div className="myprofile-head">
                      <div className="myprofile-left-head">
                        <img
                          className="rounded-circle my-3"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt=""
                        />
                        <h4>
                          {name} <br />
                          <span>@ {username}</span>
                        </h4>
                      </div>
                      <div className="myprofile-right-head">
                        <Link
                          to={`/edit-profile`}
                          className="btn blue-background white btn-border mx-3"
                        >
                          Edit Profile
                        </Link>
                        <Link
                          to="/change-password"
                          className="btn btn-outline-dark btn-border"
                        >
                          Change Password
                        </Link>
                      </div>
                    </div>
                    <div className="myprofile-content">
                      <h6 className="my-4">
                        <i class="fa-regular fa-user"></i> About Me
                      </h6>
                      <p>{about}</p>
                    </div>
                    <div className="myprofile-content">
                      <h6 className="my-4">
                        <i class="fa-regular fa-phone"></i> Contact Infomation
                      </h6>
                      <div class="form-group row">
                        <label for="username" class="col-sm-3 label-txt">
                          Name
                        </label>
                        <label for="username" class="col-sm-3 label-txt light">
                          {name}
                        </label>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-sm-3 label-txt">
                          Phone Number
                        </label>
                        <a for="username" class="col-sm-3 label-txt">
                          {phone}
                        </a>
                      </div>
                    </div>
                    <div className="myprofile-content">
                      <h6 className="my-4">
                        <i class="fa-regular fa-circle-exclamation"></i> Basic
                        Infomation
                      </h6>
                      <div class="form-group row">
                        <label for="username" class="col-sm-3 label-txt">
                          Birthday
                        </label>
                        <label for="username" class="col-sm-3 label-txt light">
                          {date_of_birth}
                        </label>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-sm-3 label-txt">
                          Gender
                        </label>
                        <label for="username" class="col-sm-3 label-txt light">
                          {gender}
                        </label>
                      </div>
                      <div class="form-group row">
                        <label for="username" class="col-sm-3 label-txt">
                          Referral Code
                        </label>
                        <label for="username" class="col-sm-3 label-txt light">
                          {referralCode}
                        </label>
                      </div>
                      <div class="form-group row mb-5">
                        <label for="username" class="col-sm-3 label-txt">
                          Referral URL
                        </label>
                        <label for="username" class="col-sm-4 label-txt light">
                          {referralUrl}
                        </label>
                        <button
                          className="btn col-sm-3 orange-background white btn-border "
                          onClick={() => {
                            navigator.clipboard.writeText(referralUrl);
                            notify();
                          }}
                        >
                          Copy Link{" "}
                          <i class="fa-sharp fa-solid fa-link-simple"></i>
                        </button>
                        <ToastContainer
                          position="bottom-right"
                          autoClose={1000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default MyProfile;
