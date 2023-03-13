import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { API_URL } from "../../../constants/urls";
import Swal from 'sweetalert2';

const AddUser = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState(false)
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user.id;


  const postUser = async () =>{
    let userInfo = { name, email, password, confirmPassword, address, role:"user", level: 4, phone_no:phone, adminId:userId };
    let result = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (result.status === 400) {
      setErrMsg(true);
    }
    if (result.status=== 200) {
      addUser()
    }
    result = await result.json();
    setMessage(result.msg);
    
  }

  const addUser = () => {
    Swal.fire({
      title: 'User Added Successfully!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/users-list")
      }
    })
  }

  return (
    <>
    <Sidebar element={

                <div className="container-fluid">
                <div className="row" style={{ marginTop: "7%" }}>
                <div className="col-md-12 mt-5">
                    <div className="my-5">
                    <h3 className="blue-text ms-4">Add User</h3>
                    </div>
                </div>

                </div>
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
        <form className="p-3 p-md-5" style={{border:"1px solid", borderRadius: "20px" , borderColor:"lightgray"}} >
        { errMsg === true ? <div class="alert alert-danger text-center" role="alert"> {message} </div> : ""}
            <div className=" mb-4">
                <label for="floatingName">Name</label>
                <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)} id="floatingName" placeholder="Name"/>
            </div>
            <div className=" mb-4">
                <label for="floatingEmail">Email</label>
                <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} id="floatingEmail" placeholder="name@example.com"/>
            </div>
            <div className=" mb-4">
                <label for="floatingPhone">Phone No.</label>
                <input type="number" className="form-control" onChange={(e)=> setPhone(e.target.value)} id="floatingPhone" placeholder="9999999999"/>
            </div>
            <div className=" mb-4">
                <label for="floatingAddress">Address</label>
                <input type="text" className="form-control"onChange={(e)=> setAddress(e.target.value)} id="floatingAddress" placeholder="Example address"/>
            </div>
            <div className=" mb-4">
                <label for="floatingPassword">Password</label>
                <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
            </div>
            <div className="">
                <label for="floatingConfPassword">Confirm Password</label>
                <input type="password" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)} id="floatingConfPassword" placeholder="Confirm password"/>
            </div>
            <div className="">
              <button
                type="button"
                style={{display:"block"}}
                className="btn ms-auto blue-background white submit-btn my-5 py-2 px-5"
                onClick={postUser}
              >
                Add
              </button>
            </div>
            </form>
          </div>
               
         </div>
       </div>
                
   }/>
    </>
  );
};

export default AddUser;
