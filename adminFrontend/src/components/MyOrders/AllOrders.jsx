import React, { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import toy from "../../Static/Img/Marketplace/toy.png";
import Modal from "react-bootstrap/Modal";
import "./MyOrders.css";
import SweetAlert from "react-bootstrap-sweetalert";
import { getMyOrders } from "../../slices/user";
import {API_URL} from '../../constants/urls';
import { Link } from "react-router-dom";

const Orders = () => {
    let [orders,setOrders] = useState([])
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
      const url = `${API_URL}/all-orders`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log("json", json)
          await setOrders(json.data);
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
                <div className="col-md-9 mt-5">
                  <div className="my-5">
                    <h3 className="">All Orders</h3>
                  </div>
                </div>
                <div className="col-md-3 my-5">
                  <select name="cars" id="select" className="select-options">
                    <option value="All">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Transaction Id</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Status</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Amount</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Action</th>
                    
                    </tr>
                  </thead>
              <tbody>
                {orders &&
                  orders.length > 0 &&
                  orders.map((order, index) => {
                    return (
                      <>
                       

                          <tr key={index}>
                          <td class="pl-4">{index+1}</td>
                          <td>
                         
                              <span class="font-medium mb-0">{order.transactionId}</span>
                          </td>
                          <td>
                              <span class="text-muted">{order.status===1 ? "Accepted": order.status=== 2? "Shipped": order.status===3 ? "Delivered":"Cancelled"}</span>
                          </td>
                          <td>
                              <span class="text-muted">${order.subtotals}</span>
                          </td>
                          <td>
                          
                            <button type="button" class="btn btn-primary btn-lg btn-border" onClick={()=> {handleShow(order._id)}} > Update Status </button>
                          </td>
                        </tr>

                       

                              {/* <div className="col-6 mb-3" key={idx}>
                                <Link
                                  to={`/order-details/${order._id}/${products._id}`}
                                >
                                  <div class="outer-frame p-3">
                                    <div class="left-frame">
                                      <img
                                        src={products.productId[0].image}
                                        alt="toy"
                                      />
                                      <div className="content-frame">
                                        <span className="content-name">
                                          {products.productId[0].name}
                                        </span>
                                        <span className="content-disc">
                                          Kids Toy
                                        </span>
                                        <span className="content-status accepted">
                                          <i class="fa-sharp fa-solid fa-circle"></i>{" "}
                                          Accepted
                                        </span>
                                        <span>From: {order.userId?.name}</span>
                                      </div>
                                    </div>
                                    <div className="right-frame">
                                      <i class="fa-light fa-chevron-right"></i>
                                    </div>
                                  </div>
                                </Link>
                              </div> */}
                           
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

export default Orders;
