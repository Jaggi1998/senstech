import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import "./Marketplace.css";
import Product from "./Product";
import { getAllProducts } from "../../slices/products";

const Marketplace = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { products } = productList ? productList : [];

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mx-auto mt-5">
                  <div className="my-5">
                    <h3 className="">Marketplace</h3>
                  </div>
                  <div className="row">
                    {products &&
                      products.map(product => <Product product={product} />)}
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

export default Marketplace;
