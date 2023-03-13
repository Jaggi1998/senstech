import React, { useEffect , useState} from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { NavLink, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const Devices = () => {
    let [devices,setDevices] = useState([])
    let [refreshDevice, setRefreshDevice] = useState(false)
    let Location = useLocation()

    const { user } = useSelector(state => ({ ...state.auth }));
  const userIds = user?.id;

    
    useEffect(() => {

      let userId = Location.state ? Location.state.userId : userIds

      const url = `${API_URL}/get-devices/${userId}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          await setDevices(json);
          console.log("devices",devices)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, [refreshDevice,Location.state]);



    const deleteDevice = (deviceId) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then( async (result) => {
        if (result.isConfirmed) {
         try {
           const response = await fetch(`${API_URL}/delete-device/${deviceId}`);
           if (response.status === 200) {
             Swal.fire(
               'Deleted!',
               'Device has been deleted.',
               'success'
             )
             setRefreshDevice(true)
           }
         } catch (error) {
           console.log("error", error);
         }
       
         
        }
      })
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
                    <h3 className="blue-text">Devices</h3>
                </div>
               {user?.role==='admin'&& user?.level <= 2 && Location.state ?  <div className="col-6 mt-5">
                 
                 <NavLink to='/add-device' state={{userId:Location.state.userId}}> 
                 <button type="button" style={{display:"block"}}
                 className="btn ms-auto blue-background white submit-btn py-2 px-4">Add Device
               </button>
               </NavLink> 
                 
                   </div> : "" } 
               
              
                </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Id</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Channels</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Action</th>
                    
                    </tr>
                  </thead>
              <tbody>
              
                {devices &&
                  devices.length > 0 &&
                  devices.map((device, index) => {
                    return (
                      <>
                       
                          <tr key={index}>
                          <td class="pl-4 grey-text">{index+1}</td>
                          <td>
                              <span class="font-medium mb-0 grey-text">{device.deviceId}</span>
                          </td>
                          <td>
                              <span class="font-medium grey-text">{device.parameter}</span>
                          </td>
                          <td>

                          <button type="button" class="btn blue-background text-white" onClick={() => {deleteDevice(device._id)}} ><i class="fa-solid fa-trash"></i></button>
            
                          <NavLink to="/device-channels/" state={{deviceId: device.deviceId}} className="ms-2" >
                            <button type="button" class="btn blue-background text-white" >View</button>
            </NavLink>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              {devices.length <= 0 ? <div className="text-center mt-5" ><h1>No Device Added</h1></div> : ""}
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
