import React, { useEffect , useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';


const Devices = () => {
    let [deviceUsage,setDevicesUsage] = useState([])
    useEffect(() => {
      const url = `${API_URL}/get-devices`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          await setDevicesUsage(json);
          console.log("devices",deviceUsage)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);


  
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
                    <h3 className="blue-text ms-4">Devices</h3>
                  </div>
                </div>
              
              </div>
              <div className="row">
              <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Id</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Device Parameters</th>
                      <th scope="col" class="border-0 text-uppercase font-medium blue-text">Action</th>
                    
                    </tr>
                  </thead>
              <tbody>
                {deviceUsage &&
                  deviceUsage.length > 0 &&
                  deviceUsage.map((device, index) => {
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
                            <button type="button" class="btn blue-background text-white " onClick={{}} >Usage</button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              </div>
             
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
