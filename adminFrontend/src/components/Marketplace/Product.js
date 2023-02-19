import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cart";
import SweetAlert from 'react-bootstrap-sweetalert';

function Product({ product }) {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  const addItemToCart = productId => {
    const productData = {
      productId,
      quantity: 1,
      userId
    };
    dispatch(addToCart({ productData }))
      .unwrap()
      .then(() => {
        setShow(true)
      })
      .catch(err => {
        console.log(err);
      });
  };

  function cancel () {
    setShow(false)
  }
  return (
    <div className="col-3 mb-3">
      <div class="outer-frame-m p-3">
        <div className="image-container">
          <img src={product.image} alt="shoe" />
          <div class="overlay"></div>
          <div class="button-flex">
          
            <a
              type="button"
              className="add"
              onClick={() => addItemToCart(product.id)}
            >
              {" "}
              Add to Cart{" "}
            </a>
            <a href="#" className="view">
              {" "}
              Quick View{" "}
            </a>
          </div>
        </div>
        <div className="inner-text">
          <div className="inner-left">
            <span className="inner-name">{product.name}</span>
            <span className="inner-disc">{product.description}</span>
          </div>
          <div>
            <span className="inner-price">${product.price}</span>
          </div>
        </div>
      </div>
      <SweetAlert success title=" Product Added To Cart" show={show} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
    </div>
  );
}

export default Product;
