import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { API_URL } from "../../constants/urls";
import Swal from 'sweetalert2';

const AddDevice = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [deviceId, setDeviceId] = useState("");
  const [parameter, setParameter] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState(false)
  const { user } = useSelector(state => ({ ...state.auth }));
  const adminId = user?.id;

  const postDevice = async () =>{

    let deviceInfo = { deviceId, userId:location.state.userId, adminId, parameter };
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
      addDevice()
    }
    result = await result.json();
    setMessage(result.msg);
    
  }

  const addDevice = () => {
    Swal.fire({
      title: 'Device Added Successfully!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/devices-list")
      }
    })
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
                <input type="text" className="form-control" onChange={(e)=> setDeviceId(e.target.value)} id="floatingName" placeholder="Device Id"/>
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
  </>
  );
};

export default AddDevice;
