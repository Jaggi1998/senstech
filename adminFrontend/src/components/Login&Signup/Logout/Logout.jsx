import React, { useEffect } from "react";
import "../Common/Common.css";
import { logout } from "../../../slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { clearMessage } from "../../../slices/message";

const Logout = () => {
  let navigate = useNavigate();

  const { isLoggedIn } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  dispatch(logout())
    .unwrap()
    .then(() => {
      navigate("/login");
    })
    .catch(err => {
      console.log(err);
    });

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <></>;
};

export default Logout;
