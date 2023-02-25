import React, { useEffect , useState} from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../Sidebar/Sidebar";
import {API_URL} from '../../../constants/urls';
import { NavLink } from "react-router-dom";

const Users = () => {
    let [users,setUsers] = useState([])
    let [show,setShow] = useState(false)
    let [orderId,setOrderId] = useState("")
    let [orderStatus,setOrderStatus] = useState("")
    const [showAlert, setShowAlert] = useState(false);

    const { user } = useSelector(state => ({ ...state.auth }));
  const adminId = user?.id;
    const handleShow = (e) => {
      setOrderId(e)
      setShow(true);
    };
    useEffect(() => {
      const url = `${API_URL}/get-users/${adminId}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          await setUsers(json);
       
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
                    <h3 className="blue-text ms-4">Users</h3>
                  </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Name</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Phone no.</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Action</th>
                    
                    </tr>
                  </thead>
              <tbody>
              
                {users &&
                  users.length > 0 &&
                  users.map((user, index) => {
                    return (
                      <>
                       
                          <tr key={index}>
                          <td class="pl-4 grey-text">{index+1}</td>
                          <td>
                              <span class="font-medium mb-0 grey-text">{user.name}</span>
                          </td>
                          <td>
                              <span class="font-medium grey-text">{user.email}</span>
                          </td>
                          <td>
                              <span class="font-medium grey-text">{user.phone_no}</span>
                          </td>
                          <td>
                        
                            <button type="button" class="btn blue-background text-white" ><i class="fa-solid fa-trash"></i></button>
            
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              {users.length <= 0 ? <div className="text-center mt-5" ><h1>No User Added</h1></div> : ""}
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Users;
