import React, { useEffect , useState} from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../Sidebar/Sidebar";
import {API_URL} from '../../../constants/urls';
import { NavLink, useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate()
    let [users,setUsers] = useState([])
    const [showAlert, setShowAlert] = useState(false);

    const { user } = useSelector(state => ({ ...state.auth }));
  const adminId = user?.id;
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
    }, []);

    const userDetails = (e) => {
      navigate('/devices-list', { state: {userId:e}})
    }

  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row  my-5">
                <div className="col-6 mt-5">
                    <h3 className="blue-text">Users</h3>
                </div>
                <div className="col-6 mt-5">
                 
                <NavLink to='/add-user' > <button
                type="button"
                style={{display:"block"}}
                className="btn ms-auto blue-background white submit-btn py-2 px-4"
               
              >
                Add User
              </button></NavLink> 
                
                  </div>
                </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap table-hover mb-0 text-center">
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
                       
                         <tr key={index} style={{cursor:"pointer"}}>
                          <td class="pl-4 grey-text" onClick={()=>{userDetails(user._id)}} >{index+1}</td>
                          <td onClick={()=>{userDetails(user._id)}}>
                              <span class="font-medium mb-0 grey-text">{user.name}</span>
                          </td>
                          <td onClick={()=>{userDetails(user._id)}}>
                              <span class="font-medium grey-text">{user.email}</span>
                          </td>
                          <td onClick={()=>{userDetails(user._id)}}>
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
