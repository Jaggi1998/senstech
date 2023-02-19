import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component }) {
  const navigate = useNavigate();
  useEffect(() => {
    let loggedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {};
    const { isAuth } = loggedUser;
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
