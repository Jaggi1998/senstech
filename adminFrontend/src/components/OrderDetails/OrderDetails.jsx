import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import shoe from "../../Static/Img/Marketplace/shoe.png";
import toy from "../../Static/Img/Marketplace/toy.png";
import shirts from "../../Static/Img/Marketplace/shirts.png";
import rope from "../../Static/Img/Marketplace/rope.png";
import image from "../../Static/Img/Home/Rectangle-165.png";
import "./OrderDetails.css";
import { useParams } from "react-router-dom";
const OrderDetails = () => {
  const { orderId, itemId } = useParams();
  const { orders } = useSelector(state => ({ ...state.user }));
  const orderDetails = orders.filter(order => order._id === orderId);
  const itemDetails = orderDetails[0].items.filter(item => item._id === itemId);
  console.log("itemDetails", itemDetails);
  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 my-5">
                  <div className="mt-5">
                    <h3 className="">My Orders</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="top-pink-bar p-3">
                    <div className="order-place1">
                      <p>
                        Order 1 <i class="fa-solid fa-chevron-right"></i>
                      </p>
                    </div>
                    <div className="order-place">
                      <p>Order Placed</p>
                      <span>10 September 2022</span>
                    </div>
                    <div className="order-place">
                      <p>Total</p>
                      <span>$94.00</span>
                    </div>
                    <div className="order-place">
                      <p>Order Id</p>
                      <span># 407-1543992-4137101</span>
                    </div>
                  </div>
                  <div className="order-frame p-3">
                    <div className="middle-details">
                      <div className="left-mid">
                        <table>
                          <tr>
                            <th colSpan={2} className="ship-add">
                              Shipping Address
                            </th>
                          </tr>
                          <tr>
                            <td colSpan={2} className="ship-name">
                              John David
                            </td>
                          </tr>
                          <tr>
                            <td className="td1">Street Address :</td>
                            <td className="td2">1769 Lake Forest Drive</td>
                          </tr>
                          <tr>
                            <td className="td1">City :</td>
                            <td className="td2">White Plains</td>
                          </tr>
                          <tr>
                            <td className="td1">State :</td>
                            <td className="td2">New York</td>
                          </tr>
                          <tr>
                            <td className="td1">Zipcode :</td>
                            <td className="td2">10601</td>
                          </tr>
                          <tr>
                            <td className="td1">Phone Number :</td>
                            <td className="td2">914-445-6387</td>
                          </tr>
                        </table>
                      </div>
                      <div className="mid">
                        <table>
                          <tr>
                            <th colSpan={2} className="ship-add">
                              Payment Method
                            </th>
                          </tr>
                          <tr>
                            <td className="td1">Net Banking : </td>
                            <td className="td2"> Bank of New York</td>
                          </tr>
                        </table>
                      </div>
                      <div className="right-mid">
                        <table>
                          <tr>
                            <th colSpan={2} className="ship-add">
                              Order Summary
                            </th>
                          </tr>
                          <tr>
                            <td className="td1">Subtotal : </td>
                            <td className="td2">$80.00</td>
                          </tr>
                          <tr>
                            <td className="td1">Delivery : </td>
                            <td className="td2">$0.00</td>
                          </tr>
                          <tr>
                            <td className="td1">Tax : </td>
                            <td className="td2">$14.00</td>
                          </tr>
                          <tr>
                            <td className="td1">
                              <strong>Total :</strong>{" "}
                            </td>
                            <td className="td2">
                              <strong>$94.00</strong>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="bottom-details">
                      <div class="left-frame">
                        <img src={toy} alt="toy" />
                        <div className="content-frame">
                          <span className="content-name">
                            Manhattan Toy WRT
                          </span>
                          <span className="content-disc">Kids Toy</span>
                          <span className="content-status accepted">
                            <i class="fa-sharp fa-solid fa-circle"></i> Accepted
                          </span>
                        </div>
                      </div>
                      <div className="right-frame">
                        <div className="content-frame">
                          <span className="content-comp">
                            Expected Completion
                          </span>
                          <span className="content-comp">Oct 25, 2022</span>
                          <span className="content-days">7 Days</span>
                        </div>
                      </div>
                    </div>
                    <div class="progress mb-5">
                      <div class="progress-bar">
                        <div class="progress-bar-fill-area"></div>
                        <div class="progress-indicator"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="row mb-5">
                  <div className="col-md-12 mx-auto mt-5">
                    <div className="row">
                      <div className="col-6 mb-3">
                        <h3>More Products Like</h3>
                      </div>
                      <div className="col-6 mb-3">
                        <button
                          class="carousel-control-prev carousel-btn-style blue-background me-5 "
                          style={{ position: "initial", marginLeft: "auto" }}
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next carousel-btn-style blue-background"
                          style={{
                            position: "initial",
                            marginLeft: "auto",
                            marginTop: "-40px"
                          }}
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-3 clearfix d-none d-md-block">
                              <div class="card mb-2 ">
                                <div className="card ">
                                  <img
                                    className="card-img-top p-3"
                                    src={shoe}
                                    alt="Card"
                                  />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-7">
                                        <h5 className="card-text">Shoe</h5>
                                        <p className="small-text light-text mx-1">
                                          Shoe Description
                                        </p>
                                      </div>
                                      <div className="col-5 right-text">
                                        <h5 className="">$45</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default OrderDetails;
