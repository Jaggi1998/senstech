import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart } from "../../slices/cart";
import Sidebar from "../Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { API_URL } from "../../constants/urls";
import SweetAlert from "react-bootstrap-sweetalert";
import line from "../../Static/Img/Marketplace/line.png";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [number, setNumber] = useState(null);
  const [expYear, setExpYear] = useState(null);
  const [expMonth, setExpMonth] = useState(null);
  const [message, setMessage] = useState("");
  const [cvc, setCvc] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setErrMsg(false);
    setShow(true);
  };
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  const { cartItems } = useSelector(state => ({ ...state.cart }));

  useEffect(() => {
    dispatch(getCart({ userId }));
  }, [dispatch]);

  const deposit = async () => {
    let userInfo = {
      number,
      expYear,
      expMonth,
      cvc,
      userId: userId,
      amount: cartItems.subTotal,
      isOrder: true
    };

    let result = await fetch(`${API_URL}/pay`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    if (result.status === 400 || result.status === 500) {
      result = await result.json();
      console.log(result);
      setMessage(result.msg);
      setErrMsg(true);
    }
    if (result.status === 200) {
      dispatch(getCart({ userId }));
      setShow(false);
      setShowAlert(true);
    }
  };

  const incrementQty = product => {
    const productData = {
      productId: product.productId,
      quantity: product.qty + 1,
      userId
    };
    dispatch(addToCart({ productData }));
  };

  const decrementQty = product => {
    const productData = {
      productId: product.productId,
      quantity: product.qty - 1,
      userId
    };
    dispatch(addToCart({ productData }));
  };

  const deleteItemToCart = productId => {
    const productData = {
      productId,
      quantity: 0,
      userId
    };
    dispatch(addToCart({ productData }))
      .unwrap()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };
  function cancel() {
    setShowAlert(false);
  }
  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 my-5">
                  <div className="my-5">
                    <h3 className="">My Orders</h3>
                  </div>
                </div>
                <div className="col-md-3 my-5">
                  <select
                    name="cars"
                    id="select"
                    className="select-options my-5"
                  >
                    <option value="All">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              {cartItems && cartItems.items.length > 0 && (
                <div className="outer-flex">
                  <div className="main-frame-left mb-3 p-3">
                    {cartItems &&
                      cartItems.items.length > 0 &&
                      cartItems.items.map(item => (
                        <div>
                          <div class="in-frame p-3">
                            <div class="left-frame">
                              <img src={item.productId.image} alt="toy" />
                              <div className="content-frame">
                                <span className="content-name">
                                  {item.productId.name}
                                </span>
                                <span className="content-disc-s accepted">
                                  {item.productId.stock > 0
                                    ? "In Stock"
                                    : "Out of Stock"}
                                </span>
                                <span className="content-disc-s">
                                  {item.productId.stock > 0}
                                  Quantity{" "}
                                  <span
                                    type="button"
                                    onClick={() =>
                                      decrementQty({
                                        qty: item.quantity,
                                        productId: item.productId.id
                                      })
                                    }
                                  >
                                    {" "}
                                    -{" "}
                                  </span>{" "}
                                  {item.quantity}{" "}
                                  <span
                                    type="button"
                                    onClick={() =>
                                      incrementQty({
                                        qty: item.quantity,
                                        productId: item.productId.id
                                      })
                                    }
                                  >
                                    {" "}
                                    +{" "}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="right-frame">
                              <span className="content-name">
                                ${item.total}
                              </span>
                              <span className="content-delete">
                                <a
                                  type="button"
                                  onClick={() =>
                                    deleteItemToCart(item.productId.id)
                                  }
                                >
                                  <i class="fa-light fa-trash-can"></i> Delete
                                </a>
                              </span>
                            </div>
                          </div>
                          <hr />
                        </div>
                      ))}
                  </div>
                  <div className="main-frame-right mb-3 p-3">
                    {cartItems && (
                      <div className="subtotal">
                        <div className="sub-head">
                          <div className="head-left">Subtotal</div>
                          <div className="head-right">
                            ${cartItems && cartItems.subTotal}
                          </div>
                        </div>
                        <div className="sub-content">
                          <div className="content-left">Delivery</div>
                          <div className="content-left">$0.00</div>
                        </div>
                        <div className="sub-content">
                          <div className="content-left">Tax</div>
                          <div className="content-left">$14.00</div>
                        </div>
                        <img src={line} alt="line"></img>
                        <div className="sub-head">
                          <div className="head-left">Total</div>
                          <div className="head-right">
                            ${cartItems && cartItems.subTotal}
                          </div>
                        </div>
                        <button
                          onClick={handleShow}
                          className={`btn ${
                            cartItems.items.length === 0 ? "disabled" : ""
                          } blue-background white btn-border light-text me-2`}
                        >
                          Proceed To Checkout
                        </button>
                        <Link
                          to={`/marketplace`}
                          className="btn btn-white btn-border light-text me-2"
                        >
                          Contiune Shopping
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {cartItems && cartItems.items == 0 && (
                <Link
                  to={`/marketplace`}
                  className="btn btn-white btn-border light-text me-2"
                >
                  Contiune Shopping
                </Link>
              )}
            </div>
            <SweetAlert
              success
              title="Order Placed Successfully"
              show={showAlert}
              onConfirm={cancel}
              onCancel={cancel}
            ></SweetAlert>
            <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
              <Modal.Header closeButton>
                <Modal.Title>Enter your card details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="card-header">
                  <strong></strong>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mb-4">
                        {errMsg === true ? (
                          <div
                            class="alert alert-danger text-center"
                            role="alert"
                          >
                            {" "}
                            {message}{" "}
                          </div>
                        ) : (
                          ""
                        )}

                        <label for="name">Name</label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mb-4">
                        <label for="ccnumber">Credit Card Number</label>

                        <div className="input-group">
                          <input
                            className="form-control"
                            name="number"
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9\s]{13,19}"
                            autocomplete="cc-number"
                            maxlength="16"
                            onChange={e => setNumber(e.target.value)}
                            placeholder="0000 0000 0000 0000"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fa-light fa-credit-card py-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-sm-4">
                      <label for="ccmonth">Month</label>
                      <input
                        className="form-control"
                        name="expMonth"
                        onChange={e => setExpMonth(e.target.value)}
                        placeholder="09"
                        type="number"
                        min={1}
                        max={12}
                      />
                    </div>
                    <div className="form-group col-sm-4">
                      <label for="ccyear">Year</label>
                      <input
                        className="form-control"
                        name="expYear"
                        onChange={e => setExpYear(e.target.value)}
                        placeholder="2014"
                        type="number"
                      />
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label for="cvv">CVV/CVC</label>
                        <input
                          className="form-control"
                          name="cvc"
                          onChange={e => setCvc(e.target.value)}
                          id="cvv"
                          type="text"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-sm btn-danger"
                  type="reset"
                  onClick={handleClose}
                >
                  <i className="mdi mdi-lock-reset"></i> Reset
                </button>

                <button
                  className="btn btn-sm btn-success float-right"
                  onClick={deposit}
                  type="submit"
                >
                  <i className="mdi mdi-gamepad-circle"></i> Continue
                </button>
              </Modal.Footer>
            </Modal>
          </>
        }
      />
    </>
  );
};

export default ShoppingCart;
