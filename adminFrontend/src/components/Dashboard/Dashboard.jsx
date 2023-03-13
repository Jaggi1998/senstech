import React from "react";
import Sidebar from "../Sidebar/Sidebar";
// import videoImage from "../../Static/Img/Dashboard/videoImage.png";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useNavigate } from "react-router-dom";
// import SweetAlert from "react-bootstrap-sweetalert";
// import { API_URL } from "../../constants/urls";
import "./Dashboard.css";
import {PieChart} from './PieChart';
// import { useSelector } from "react-redux";
// import videoPlay from '../../Static/Img/Dashboard/videoPlay.png';
// import SmallFooter from '../Footer/smallFooter';
const Dashboard = () => {
  // const navigate = useNavigate();

  // // useEffect(() => {
  // //   if (user.seed === true) {
  // //     navigate("/dashboard-next");
  // //   }
  // // }, []);

  // const { user } = useSelector(state => state.auth);

  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mx-auto background-light-grey mt-5">
                  <div className="my-5">
                    <h3 className="">Dashboard</h3>
                  </div>
                </div>
              </div>
              <hr className="background-light-grey" />
              <div className="row">
              <div className="col-4">
              <PieChart/>
              </div>
              </div>
            </div>
            {/* <SmallFooter/> */}
          </>
        }
      />
    </>
  );
};

export default Dashboard;
