import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { API_URL } from "../../constants/urls";
import SweetAlert from 'react-bootstrap-sweetalert';
// import { editProfile } from "../../../slices/user"
// import "./ProfileCommon.css";

const AddDevice = () => {
  let navigate = useNavigate();
  const [deviceId, setDeviceId] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([])
  const [parameter, setParameter] = useState("");
//   const [dealerId, setDealerId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState(false)
  const { user } = useSelector(state => ({ ...state.auth }));
  const adminId = user.id;

  useEffect(() => {
    const url = `${API_URL}/get-users/${adminId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        await setUsers(json);
     
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  const postDevice = async () =>{

    let deviceInfo = { deviceId, userId, adminId, parameter };
    let result = await fetch(`${API_URL}/add-device`, {
      method: "POST",
      body: JSON.stringify(deviceInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (result.status === 400) {
      setErrMsg(true);
    }
    if (result.status === 200) {
      setShowAlert(true)
    }
    result = await result.json();
    setMessage(result.msg);
    
  }
  function cancel () {
    setShowAlert(false)
    navigate("/devices-list")
  }
  return (
    <>
    <Sidebar element={

                <div className="container-fluid">
                <div className="row" style={{ marginTop: "7%" }}>
                <div className="col-md-12 mt-5">
                    <div className="my-5">
                    <h3 className="blue-text ms-4">Add Device</h3>
                    </div>
                </div>

                </div>
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
        <form className="p-3 p-md-5" style={{border:"1px solid", borderRadius: "20px" , borderColor:"lightgray"}} >
        { errMsg === true ? <div class="alert alert-danger text-center" role="alert"> {message} </div> : ""}
            <div className=" mb-4">
                <label for="floatingName">Device ID</label>
                <input type="text" className="form-control" onChange={(e)=> setDeviceId(e.target.value)} id="floatingName" placeholder="Name"/>
            </div>
            <div className=" mb-4">
                <label for="floatingName">Users</label>
                <select onChange={(e)=> setUserId(e.target.value)} class="form-select" aria-label="Default select example">
                    <option selected disabled>Select a user</option>
                {users?.map(user => 
        <option  value={user._id} >{user.email}</option>
    )}
                    </select>
            </div>
            <div className=" mb-4">
                <label for="floatingPhone">Channels</label>
                <input type="number" className="form-control" onChange={(e)=> setParameter(e.target.value)} id="floatingPhone" placeholder="4"/>
            </div>
            <div className="">
              <button
                type="button"
                style={{display:"block"}}
                className="btn ms-auto blue-background white submit-btn my-5 py-2 px-5"
                onClick={postDevice}
              >
                Add
              </button>
            </div>
            </form>
                    </div>
               
                </div>
                </div>
                
   }/>
       <SweetAlert success title="Device Added Successfully!" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
    </>
  );
};

export default AddDevice;
