import React, { useEffect , useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { useLocation } from 'react-router-dom';
import hardware from "../../Static/Img/Devices&channels/hardware.png";
const Devices = () => {

 const location = useLocation();

console.log(location.state.deviceId)
    let [channels, setChannels] = useState([])
    useEffect(() => {
      const url = `${API_URL}/get-channels/${location.state.deviceId}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          await setChannels(json);
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
            <div className="container-fluid ms-md-2">
              <div className="row" style={{ marginTop: "7%" }}>
                <div className="col-md-12 mt-5">
                  <div className="my-5">
                    <h3 className="blue-text ms-4">Device Channels</h3>
                  </div>
                </div>
              
              </div>
              <div className="row">
            
                
              {channels &&
                  channels.length > 0 &&
                  channels.map((channel, index) => {
                    return (
                      <>
                      <div className="mb-4 col-12 col-md-4 col-lg-3">
                        <div class="card p-2" style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px"}}>
                          <div class="row g-0">
                            <div class="col-md-4 m-auto">
                              <img src={hardware} style={{width:"70%", display:"block",margin:"auto"}} class="img-fluid rounded-start mt-2" alt="..."/>
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h3 class="card-text">{channel.channelName}</h3>
                                <h5 class="card-text">{channel.channelData}</h5>
                                <p class="card-text"><small class="text-muted">Last uo</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                          
                      </>
                    );
                  })}
             
              </div>
             
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
