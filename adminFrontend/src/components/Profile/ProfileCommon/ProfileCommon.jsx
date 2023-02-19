import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../../slices/user";
import "./ProfileCommon.css";

const ProfileCommon = props => {
  let navigate = useNavigate();
  const userDetail = useSelector(state => ({ ...state.user.userDetail }));
  const [name, setName] = useState(userDetail?.name);
  const [username, setUsername] = useState(userDetail?.username);
  const [DOB, setDOB] = useState(userDetail?.date_of_birth);
  const [gender, setGender] = useState(userDetail?.gender);
  const [phone, setPhone] = useState(userDetail?.phone);
  const [about, setAbout] = useState(userDetail?.about);
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user.id;

  const dispatch = useDispatch();

  const submitEditHandler = e => {
    e.preventDefault();

    const formData = {
      name,
      username,
      date_of_birth: DOB,
      gender,
      phone,
      about
    };

    // dispatch(editProfile({ formData, userId }))
    //   .unwrap()
    //   .then(() => {
    //     navigate("/my-profile");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-10 mx-auto">
            <p className="text-center blue-text mt-5">{props.blueText}</p>
            <h1 className="text-center">{props.heading}</h1>
            <p className="text-center no-worrie-text">{props.para}</p>
            <form className="pb-5">
              <div class="form-group row">
                <img
                  className="rounded-circle my-5 col-sm-2 profile-img"
                  src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                  alt=""
                  width="100"
                />
                <div class="col-sm-10 profile-div">
                  <p className="profile-text">Upload Profile Image</p>
                  <button type="button" className="btn learn-more px-5 py-2">
                    Choose file...
                  </button>{" "}
                  <label className="profile-label">Png, Gif, Jpeg</label>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName" class="col-sm-4 col-form-label">
                  Name
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control footer-input input-icons"
                    id="inputName"
                    placeholder="&#xf2c0; e.g. Devid John"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
              <hr className="my-5 hr-style" />
              <div class="form-group row">
                <label for="username" class="col-sm-4 col-form-label">
                  Username
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control footer-input input-icons"
                    id="username"
                    placeholder="&#xf2c0; e.g. @devid_john"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <hr className="my-5 hr-style" />
              <div class="form-group row">
                <label for="dob" class="col-sm-4 col-form-label">
                  Date of Birth
                </label>
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control footer-input input-icons"
                    id="dob"
                    placeholder="&#xf073; MM / DD / YYYY"
                    value={DOB}
                    onChange={e => setDOB(e.target.value)}
                  />
                </div>
              </div>
              <hr className="my-5 hr-style" />
              <div class="form-group row">
                <label for="dob" class="col-sm-4 col-form-label">
                  Gender
                </label>
                <div class="col-sm-8">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={"male"}
                      checked={gender === "male"}
                      onChange={e => setGender(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value={"female"}
                      checked={gender === "female"}
                      onChange={e => setGender(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Female
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value={"other"}
                      checked={gender === "other"}
                      onChange={e => setGender(e.target.value)}
                    />
                    <label class="form-check-label" for="inlineRadio3">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <hr className="my-5 hr-style" />
              <div class="form-group row">
                <label for="phone" class="col-sm-4 col-form-label">
                  Phone Number
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control footer-input input-icons"
                    id="phone"
                    placeholder="&#xf095; Enter Your Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <hr className="my-5 hr-style" />
              <div class="form-group row">
                <label for="about" class="col-sm-4 col-form-label">
                  About
                </label>
                <div class="col-sm-8">
                  <textarea
                    class="form-control footer-input input-icons"
                    id="about"
                    rows="5"
                    placeholder="Add a short bio..."
                    value={about}
                    onChange={e => setAbout(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                type="button"
                className="btn ms-auto blue-background btn-border white submit-btn my-5 py-2 px-5 slide"
                onClick={submitEditHandler}
              >
                SUBIMT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCommon;
