import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cart";
import SweetAlert from 'react-bootstrap-sweetalert';
import { API_URL } from "../../constants/urls";
function Product({ product, index }) {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  
 
  

  const deleteProduct = async(e)  =>{
    try {
      console.log("This is e",e)
      const url = `${API_URL}/delete-product/${e}`;
      
          const response = await fetch(url);
          const json = await response.json();
     
    } catch (err) {
      console.log(err)
    }
  }
  function cancel () {
    setShow(false)
  }
  return (
    <tr key={product.id}>
            <td class="pl-4">{index+1}</td>
            <td>
              <img src={product.image} className="rounded" width="70" alt="" />
                <span class="font-20 font-medium mb-0 ms-1">{product.name}</span>
            </td>
            <td>
                <span class="text-muted">{product.description}</span>
            </td>
            <td>
                <span class="text-muted">${product.price}</span>
            </td>
            
            <td>
              <button type="button" class="btn btn-primary btn-circle btn-lg btn-circle"><i class="fa-solid fa-pen-to-square"></i> </button>
              <button type="button" class="btn btn-danger btn-circle btn-lg btn-circle ms-2"  onClick={(e)=> deleteProduct(product._id)}><i class="fa-solid fa-trash"></i> </button>
            </td>
          </tr>
          
    // <div className="col-3 mb-3">
    //   <div class="outer-frame-m p-3">
    //     <div className="image-container">
    //       <img src={product.image} alt="shoe" />
    //       <div class="overlay"></div>
    //       <div class="button-flex">
          
    //         <a
    //           type="button"
    //           className="add"
    //           onClick={() => addItemToCart(product.id)}
    //         >
    //           {" "}
    //           Add to Cart{" "}
    //         </a>
    //         <a href="#" className="view">
    //           {" "}
    //           Quick View{" "}
    //         </a>
    //       </div>
    //     </div>
    //     <div className="inner-text">
    //       <div className="inner-left">
    //         <span className="inner-name">{product.name}</span>
    //         <span className="inner-disc">{product.description}</span>
    //       </div>
    //       <div>
    //         <span className="inner-price">${product.price}</span>
    //       </div>
    //     </div>
    //   </div>
    //   <SweetAlert success title=" Product Added To Cart" show={show} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
    // </div>
    
  );
}

export default Product;
