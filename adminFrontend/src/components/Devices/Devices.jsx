import React, { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import toy from "../../Static/Img/Marketplace/toy.png";
import Modal from "react-bootstrap/Modal";
// import "./Devices.css";
import SweetAlert from "react-bootstrap-sweetalert";
import { getMyOrders } from "../../slices/user";
import {API_URL} from '../../constants/urls';
import { Link } from "react-router-dom";

const Devices = () => {
    let [devices,setDevices] = useState([])
    let [show,setShow] = useState(false)
    let [orderId,setOrderId] = useState("")
    let [orderStatus,setOrderStatus] = useState("")
    const [showAlert, setShowAlert] = useState(false);

    const { user } = useSelector(state => ({ ...state.auth }));
    const  userid2 = useSelector(state => ({ ...state }));
  const userId = user?.id;


  console.log("userid2",userid2)

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
              <div className="row" style={{ marginTop: "7%" }}>
                <div className="col-md-12 mt-5">
                  <div className="my-5">
                    <h3 className="blue-text ms-4">Devices</h3>
                  </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Id</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Parameters</th>
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
                            <button type="button" class="btn blue-background text-white " onClick={()=> {handleShow(device._id)}} >Usage</button>
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
