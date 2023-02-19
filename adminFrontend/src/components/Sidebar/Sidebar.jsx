import React, { useEffect, useState } from "react";
// import SmallFooter from "../Footer/smallFooter";
import image from "../../Static/Img/Sidebar/Ellipse 1900.png";
import "./Sidebar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/auth";
import { useSelector } from "react-redux";

const Sidebar = props => {
  let [show, setShow] = useState();
  const { user } = useSelector(state => ({ ...state.auth }));
  const userSeed = user?.seed;
  //assigning location variable

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  // useEffect(() => {
  const showNavbar = (toggleId, navId, bodyId, headerId, sidebarImg) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId),
      sidebarpd = document.getElementById(sidebarImg);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd && sidebarpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show2");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");

        sidebarpd.classList.toggle("sidebar-img-wrap");
      });
    }
  };

  showNavbar(
    "header-toggle",
    "nav-bar",
    "body-pd",
    "header",
    "sidebar-img-wrap"
  );

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach(l => l.addEventListener("click", colorLink));
  // });

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="body-wrap background-light-grey">
        <div id="body-pd" className="body-pd">
          <header className="header" id="header">
            <div className="py-2" style={{ display: "flex" }}>
              <div className="header_toggle" onClick={showNavbar()}>
                {" "}
                <i className="bx bx-menu bx-x" id="header-toggle"></i>{" "}
              </div>
              <div className="ms-auto">
                <form className="d-flex">
                  <input
                    className="me-2 form-control footer-input input-icons"
                    type="search"
                    placeholder="&#xF002; Search for results... "
                    aria-label="Search"
                  />
                  <NavLink to="/notifications">
                    {" "}
                    <button className="btn blue-text top-bar-btn" type="button">
                      <i class="fa-regular fa-bell"></i>
                    </button>
                  </NavLink>
                  <NavLink to="/chat">
                    {" "}
                    <button className="btn blue-text top-bar-btn" type="button">
                      <i class="fa-regular fa-message"></i>
                    </button>
                  </NavLink>
                </form>
              </div>
            
              <div className="header_img ms-2">
                <button className="btn blue-background white rounded-btn" onClick={logoutHandler}><i className="fa-solid fa-power-off"></i></button>
              </div>
            </div>
          </header>
          <div className="l-navbar white-background show2" id="nav-bar">
            <nav className="nav">
              <div>
                {" "}
                <div className="px-2 my-2">
                  <div className="mt-5 sidebar-img-wrap" id="sidebar-img-wrap">
                    <img
                      className="sidebar-img mt-3 rounded-circle"
                      src={image}
                      alt=""
                      width="100"
                    />
                  </div>
                </div>
                <div className="nav_list">
                  <NavLink to='/devices-list' type="button" className="nav_link text-white">
                  <i class="fa-solid fa-microchip"></i>{" "}
                    <span className="nav_name">Devices</span>{" "}
                  </NavLink>

                 
                </div>
              </div>
            </nav>
          </div>

          <div className="height-100 bg-light mt-5">{props.element}</div>
        </div>
      </div>
      {/* <SmallFooter /> */}
    </>
  );
};

export default Sidebar;
