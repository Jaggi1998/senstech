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
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
      console.log("this is ee==========", e)
      setOrderId(e)
      setShow(true);
    };
    useEffect(() => {
      const url = `${API_URL}/get-devices`;
  
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
    function cancel () {
      setShowAlert(false)
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
              </div>
              <SweetAlert success title="Video Added" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
              <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
                          <Modal.Header closeButton>
                            <Modal.Title>Update Status</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="card-header">
                              <strong></strong>
                            </div>
                            <div className="card-body">
                              <div className="row">
                              <div className=" col-sm-12 justify-center">
                                <div className="mt-2">

                              <input class="form-check-input" type="radio"  onChange={(e) =>{setOrderStatus(e.target.value)}} value={2} name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label class="form-check-label light-text ms-2" for="flexRadioDefault1">Shipped</label>
                                </div>
                                <hr />
                                <div className="mt-2">

                              <input class="form-check-input" type="radio" onChange={(e) =>{setOrderStatus(e.target.value)}} value={3} name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label class="form-check-label light-text ms-2" for="flexRadioDefault1">Delivered</label>
                                </div>
                                <hr />
                                <div className="mt-2">

                              <input class="form-check-input" type="radio" onChange={(e) =>{setOrderStatus(e.target.value)}}  value={0}  name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label class="form-check-label light-text ms-2" for="flexRadioDefault1">Cancel</label>
                                </div>

                              </div>
                              </div>

                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <button
                              className="btn btn-sm btn-danger btn-border"
                              type="reset"
                              onClick={handleClose}
                            >
                              <i className="mdi mdi-lock-reset"></i> Cancel
                            </button>

                            <button
                              className="btn btn-sm btn-success float-right btn-border btn-blue"
                             onClick={updateStatus}
                              type="submit"
                            >
                              <i className="mdi mdi-gamepad-circle "></i> Continue
                            </button>
                          </Modal.Footer>
                        </Modal>
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
