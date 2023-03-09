import React, { useEffect , useState} from "react";
import { format } from 'timeago.js'
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { useLocation } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import hardware from "../../Static/Img/Devices&channels/hardware.png";


const DeviceSttings = () => {

 const location = useLocation();

    let [channels, setChannels] = useState([])
    let [channelDisplayName, setChannelDisplayName] = useState(null)
    let [prefix, setPrefix] = useState(null)
    let [postfix, setPostfix] = useState(null)
    let [min, setMin] = useState(null)
    let [max, setMax] = useState(null)
    let [showAlert,setShowAlert] = useState(false)

    

    let [file, setFile] = useState([])
    let TableData = []

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
    }, [showAlert]);

    const updateChannel = async (e) =>{

        console.log("this is e", e)

        let channelInfo = {channelDisplayName, prefix, postfix, min, max };
        try {
            let result = await fetch(`${API_URL}/update-channel/${e}`, {
              method: "POST",
              body: JSON.stringify(channelInfo),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            });
            if (result.status=== 200) {
              setShowAlert(true)
            }
            result = await result.json();
            console.log("result",result)
        } catch (err) {
            console.log(err)
        }

      }

    const Header = ({ array }) => {
      let counter = 0;
      const headers = Object.keys(array[0] ?? {});
      return headers.map((x) => {
        ++counter;
        return (
          <th style={{}} key={counter}>
            {x}
          </th>
        );
      });
    };
    const Body = (file) => {
      for (let i=0; i<file.length; i++) {
        const bodys = Object.values(file[i] ?? {});
        TableData.push(bodys)
      } 
    };
    Body(file)

    function cancel () {
        setShowAlert(false)
      }

  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid ms-md-2">
            <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row  my-5">
                <div className="col-6 mt-5">
                    <h3 className="blue-text">Device Settings</h3>
                </div>
                <div className="col-6 mt-5">
               
               </div> 
              </div>
            </div>    
          </div>
            <div className="row">
            <SweetAlert success title="Channel Updated Successfully!" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
            <div className="col-12 mb-5" >
        <div className="py-4"style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px", backgroundColor:"white"}}>
            <div className="col-md-10 col-12 mx-auto">
                <h4>Edit Device</h4>
                <div className="">
                <div className=" mb-4">
                <label for="floatingName">Name</label>
                <input type="text" className="form-control" onChange={{}} id="floatingName" placeholder=""/>
            </div>
            <div className=" mb-4">
                <label for="floatingEmail">Location</label>
                <input type="email" className="form-control" onChange={{}} id="floatingEmail" placeholder=""/>
            </div>
            <div className=" mb-4">
                <label for="floatingPhone">Lat</label>
                <input type="number" className="form-control" onChange={{}} id="floatingPhone" placeholder=""/>
            </div>
            <div className=" mb-4">
                <label for="floatingAddress">Lng</label>
                <input type="text" className="form-control"onChange={{}} id="floatingAddress" placeholder=""/>
            </div>
            <div className="">
            <button type="button" style={{display:"block"}} onClick={{}}
                    className="btn ms-auto blue-background white submit-btn  px-4">
                    Update
            </button>
            </div>
                </div>
             </div>
            </div>
        </div>
        </div>
              <div className="row">
                <div className="col-12 mb-5" >
                  <div className="py-4"style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px", backgroundColor:"white"}}>
                    <div className="col-md-10 col-12 mx-auto">
                        <h4>Edit Channel</h4>
                    <table class="table text-center">
                    <thead>
                        <tr>
                        <th scope="col">Channel</th>
                        <th scope="col">Name</th>
                        <th scope="col">Prefix</th>
                        <th scope="col">Postfix</th>
                        <th scope="col">Min Threshold</th>
                        <th scope="col">Max Threshold</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                        <tbody>
                        {channels &&
                            channels.length > 0 &&
                            channels.map((channel, index) => {

                                console.log("channel",channel)

                                return (
                                <>
                                <tr>
                                
                                    <td>{channel.channelName}</td>
                                    <td> <input type="text" class="form-control" aria-label="displayName" onChange={(e)=> setChannelDisplayName(e.target.value)} defaultValue={channel.channelDisplayName} /></td>
                                    <td><input type="text" class="form-control" aria-label="prefix" onChange={(e)=> setPrefix(e.target.value)}  defaultValue={channel.prefix} /></td>
                                    <td><input type="text" class="form-control" aria-label="postfix" onChange={(e)=> setPostfix(e.target.value)} defaultValue={channel.postfix} /></td>
                                    <td><input type="number" class="form-control" aria-label="min" onChange={(e)=> setMin(e.target.value)} defaultValue={channel.min} /></td>
                                    <td><input type="number" class="form-control" aria-label="max" onChange={(e)=> setMax(e.target.value)} defaultValue={channel.max} /></td>
        
                                    <td><button
                                    type="button"
                                    style={{display:"block"}}
                                    onClick={(e) => {updateChannel(channel._id)}}
                                    className="btn ms-auto blue-background white submit-btn  px-4">
                                    Update</button>
                                    </td>
                                </tr>
                                </>
                                );
                            })}
                        </tbody>
                        </table>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-5" >
                  <div className="py-4"style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px", backgroundColor:"white"}}>
                    <div className=" table-responsive col-md-10 col-12 mx-auto">
                      <h3 className="mb-5 text-center">Device Logs</h3>
                    <table class="table table-striped mb-0 text-center" id="tbl">
                      <thead>
                        <tr>
                          <Header array={file} />
                        </tr>
                      </thead>
                      <tbody>
                      {
              TableData.map((numList,i) =>(
                   <tr key={i}>
                    {
                      numList.map((num,j)=> {
                        return(<>
                        <td key={j}>{num}</td>
                        
                        </>)
                      }
                      )
                    }
                   </tr>
                ))
           }
                      </tbody>
                    </table>
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

export default DeviceSttings;
