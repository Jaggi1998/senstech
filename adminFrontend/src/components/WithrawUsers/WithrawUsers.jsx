import React, { useEffect,useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import SweetAlert from 'react-bootstrap-sweetalert';
const WithdrawUsersList = () => {
    let [withdrawList,setWithdrawList] = useState([])
    const [showAlert, setShowAlert] = useState(false);
    let [phase, setPhase] = useState("gathering")
    useEffect(() => {
    console.log("phase",phase)
    const url = `${API_URL}/withdraw-payment/${phase}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        await setWithdrawList(json);
        console.log("withdrawList",withdrawList)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [showAlert, phase]);

  const updateWithdraw = async (e) =>{
    console.log("this is zero", e)
    try {
        const url = `${API_URL}/update-withdraw/${phase}/${e}`;
  
            const response = await fetch(url);
            const json = await response.json();
           console.log("json",response)
           if (response.status === 200) {
            setShowAlert(true)
           }
         
    } catch (err) {
        console.log(err)
    }
  }
  function cancel () {
    setShowAlert(false)
   
  }
  return (
    <>
      <Sidebar
        element={
          <>
            <div className="container-fluid">
              <div className="row my-5">
              <div class="col-md-12">
        <div class="card">
            <div class="card-body mt-5">
                <h5 class="card-title text-uppercase mb-0" style={{float:"left"}} >{phase} Payments</h5>
                <select class="form-select btn-border ms-auto" style={{width:"fit-content"}} aria-label="Default select example" onChange={e=> setPhase(e.target.value)}>
              <option selected value="gathering">Gathering</option>
              <option value="gate">Gate</option>
              <option value="garden">Garden</option>
            </select>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">User Name</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Amount</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Action</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                  
                     {withdrawList &&
                         withdrawList.length > 0 &&
                         withdrawList.map((user, index) => (
                          <tr key={user._id}>
                          <td class="pl-4">{index+1}</td>
                          <td>
                              <h5 class="font-medium mb-0">{user.userId?.name}</h5>
                          </td>
                          <td>
                              <span class="text-muted">{user.userId.email}</span>
                          </td>
                          <td>
                              <span class="text-muted">${user.amount}</span>
                          </td>
                          <td>
                            {user.paid === true ?  <button type="button" class="btn btn-primary btn-lg btn-border disabled"><i class="fa-solid fa-dollar"></i> Paid </button> :
                            <button type="button" class="btn btn-primary btn-lg btn-border" onClick={(e)=> updateWithdraw(user._id)}><i class="fa-solid fa-dollar"></i> Pay </button>
                            }
                          </td>
                        </tr>
                         ))}
                  </tbody>
                </table>
                     {withdrawList && withdrawList.length < 1 ? <div className="mt-5 text-center" ><h1>No one eligable yet!</h1></div>:"" }
                   <SweetAlert success title="Status Updated Successfully!!" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
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

export default WithdrawUsersList;