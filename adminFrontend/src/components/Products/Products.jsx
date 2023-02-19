import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import "./Products.css";
import Product from "./Product";
import { getAllProducts } from "../../slices/products";
import Modal from 'react-bootstrap/Modal';
import { API_URL } from "../../constants/urls";
import SweetAlert from 'react-bootstrap-sweetalert';
import { uploadPostMedia } from "../../slices/community";
const Products = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [errMsg, setErrMsg] = useState(false)
  const [sucMsg, setSucMsg] = useState(false)
  const productList = useSelector(state => state.productList);
  const { products } = productList ? productList : [];

  const postProduct = async () =>{
    let productInfo = { name, image, price, description, stock };
    let result = await fetch(`${API_URL}/add-product`, {
      method: "POST",
      body: JSON.stringify(productInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (result.status === 400) {
      setErrMsg(true);
    }
    if (result.status=== 200) {
      setShow(false)
      setShowAlert(true)
    }
    result = await result.json();
    setMessage(result.message);
    
  }

  const editProduct = async () =>{
    let videoInfo = { name, image, description, price };
    let result = await fetch(`${API_URL}/upload-Video`, {
      method: "POST",
      body: JSON.stringify(videoInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (result.status === 400) {
      setErrMsg(true);
    }
    if (result.status=== 200) {
      setShow(false)
      setShowAlert(true)
    }
    result = await result.json();
    setMessage(result.message);
    
  }

  const imageUploadHandler = e => {
    setMessage("Please Wait...")
    setErrMsg(false)
    setSucMsg(true)
    e.preventDefault();
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    dispatch(uploadPostMedia({ formData }))
      .unwrap()
      .then(response => {
        setImage(response.urls[0].url);
        setSucMsg(false)
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch, showAlert]);

  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => {
     setShow(true)
     setErrMsg(false)
    };
  function cancel () {
    setShowAlert(false)
   
  }

  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div class="card">
            <div class="card-body mt-5">
                <h5 class="card-title text-uppercase mb-0 mt-5">Manage Products</h5>
                <button type='button' onClick={handleShow} className='btn ms-auto blue-background btn-border white submit-btn my-5 py-2 px-5 slide'>Add Product</button>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0 text-left">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Product</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Price</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Action</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((product, index) => <Product product={product} index={index}/>)}
                  </tbody>
                  </table>
              </div>
            </div>
            <SweetAlert success title="Product Added" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
                  <Modal show={show} onHide={handleClose} style={{width:"100%"}}>
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
                      
                  { errMsg === true ? <div class="alert alert-danger text-center" role="alert"> {message} </div> : ""}
                  { sucMsg === true ? <div class="alert alert-success text-center" role="alert"> {message} </div> : ""}
                      
                  <label for="name">Name</label>
                  <input className="form-control footer-input" id="name" type="text" name="name" onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="formFile" class="form-label">Image</label>
                
                  <div className="input-group">
                  <input class="form-control footer-input" type="file" name='thumbnail' id="formFile" onChange={imageUploadHandler} placeholder="Thumbnail"/>
                  </div> 
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="name">Price</label>
                  <input className="form-control footer-input" id="name" type="number" name="price" onChange={(e)=> setPrice(e.target.value)} placeholder="Price"/>
                 
                  </div>
                  </div>
                  </div>
                  
                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="name">Description</label>
                  <input className="form-control footer-input" id="name" type="text" name="description" onChange={(e)=> setDescription(e.target.value)} placeholder="Description"/>
                 
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="name">Stock</label>
                  <input className="form-control footer-input" id="name" type="Number" name="stock" min={1} max={99999} onChange={(e)=> setStock(e.target.value)} placeholder="Stock"/>
                 
                  </div>
                  </div>
                  </div>

                  
                  
                  </div>
                  </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-sm btn-danger btn-border" type="reset"onClick={handleClose}>
                  <i className="mdi mdi-lock-reset"></i> Reset</button>
                            
                            <button className="btn btn-sm btn-border btn-blue float-right"onClick={postProduct} type="submit">
                  <i className="mdi mdi-gamepad-circle"></i> Continue</button>
                          
                          </Modal.Footer>
                        </Modal>
          </>
        }
      />
    </>
  );
};

export default Products;
