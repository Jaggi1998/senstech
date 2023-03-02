import React, { useEffect , useState} from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { NavLink } from "react-router-dom";

const Devices = () => {
    let [devices,setDevices] = useState([])
    let [show,setShow] = useState(false)
    let [orderId,setOrderId] = useState("")
    let [orderStatus,setOrderStatus] = useState("")
    const [showAlert, setShowAlert] = useState(false);

    const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;

    const handleShow = (e) => {
      setOrderId(e)
      setShow(true);
    };
    useEffect(() => {
      const url = `${API_URL}/get-devices/${userId}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          await setDevices(json);
          console.log("devices",devices)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, [showAlert]);


    const updateStatus = async () =>{
      let orderInfo = { orderId, orderStatus };
      console.log("orderInfo", orderInfo)
      let result = await fetch(`${API_URL}/update-orders`, {
        method: "POST",
        body: JSON.stringify(orderInfo),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
     
      if (result.status=== 200) {
        setShow(false)
        setShowAlert(true)
      }
      result = await result.json();
      
    }

  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row  my-5">
                <div className="col-6 mt-5">
                    <h3 className="blue-text">Devices</h3>
                </div>
               {user?.role==='admin'&& user?.level <= 2 ?  <div className="col-6 mt-5">
                 
                 <NavLink to='/add-device' > <button
                 type="button"
                 style={{display:"block"}}
                 className="btn ms-auto blue-background white submit-btn py-2 px-4"
                
               >
                 Add Device
               </button></NavLink> 
                 
                   </div> : "" } 
               
              
                </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Id</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Channels</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Action</th>
                    
                    </tr>
                  </thead>
              <tbody>
              
                {devices &&
                  devices.length > 0 &&
                  devices.map((device, index) => {
                    return (
                      <>
                       
                          <tr key={index}>
                          <td class="pl-4 grey-text">{index+1}</td>
                          <td>
                              <span class="font-medium mb-0 grey-text">{device.deviceId}</span>
                          </td>
                          <td>
                              <span class="font-medium grey-text">{device.parameter}</span>
                          </td>
                          <td>
                          <NavLink to="/device-channels/" state={{deviceId: device.deviceId}}>
                            <button type="button" class="btn blue-background text-white" >View</button>
            </NavLink>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              {devices.length <= 0 ? <div className="text-center mt-5" ><h1>No Device Added</h1></div> : ""}
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
