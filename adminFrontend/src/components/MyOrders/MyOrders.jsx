import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import toy from "../../Static/Img/Marketplace/toy.png";
import "./MyOrders.css";
import { getMyOrders } from "../../slices/user";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  const { orders } = useSelector(state => ({ ...state.user }));

  useEffect(() => {
    // dispatch(getMyOrders({ userId }));
  }, [dispatch]);

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
                    <h3 className="">My Orders</h3>
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
                {orders &&
                  orders.length > 0 &&
                  orders.map((order, index) => {
                    return (
                      <>
                        {order.items.map((products, idx) => {
                          return (
                            <>
                              <div className="col-6 mb-3" key={idx}>
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
                                      </div>
                                    </div>
                                    <div className="right-frame">
                                      <i class="fa-light fa-chevron-right"></i>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default MyOrders;
