import React, { useEffect , useState} from "react";
import { format } from 'timeago.js'
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { useLocation, NavLink } from 'react-router-dom';
import hardware from "../../Static/Img/Devices&channels/hardware.png";
import { download } from "./DeviceFunctions";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Dropdown from 'react-bootstrap/Dropdown';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};


const labels = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];



const Devices = () => {

 const location = useLocation();

    let [channels, setChannels] = useState([])
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
    }, []);

    useEffect(() => {
      const url = `${API_URL}/get-device-data/${location.state.deviceId}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          await setFile(json);
        } catch (error) {
          console.log("error", error);
        }
      };
   
          fetchData();
    }, []);

    const Body = (file) => {
      for (let i=0; i<file.length; i++) {
        const bodys = Object.values(file[i] ?? {});
        TableData.push(bodys)
      } 
    };
    Body(file)

  let arr = [];
  let colors = ["rgb(255, 20, 147)", "rgb(255, 165, 0)", "rgb(106, 90, 205)","rgb(50, 205, 50)","rgb(165, 42, 42)","rgb(255,0,255)"]
  const chartData = async(channels) =>{
    try {
        
        for (let i=0; i <channels.length; i++ ) {
            var firstCells = await document.querySelectorAll(`td:nth-child(${i+4})`);


            console.log("firstCells",firstCells)

            var cellValues = [];

            firstCells.forEach(element => { cellValues.push(element.innerText) });

           

          let obj =  {
            label: channels[i].channelDisplayName ? channels[i].channelDisplayName: channels[i].channelName,
            data: cellValues,
            borderColor: colors[i],
            backgroundColor: colors[i],
          }
          if (arr.length <= channels.length) {
              arr.push(obj)
          }
        }
      
    } catch (err) {
        console.log(err)
    }
  }
  chartData(channels)

  const data = {
    labels,
    datasets:arr,
  };


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
                    <h3 className="blue-text">Device Channels</h3>
                </div>
                <div className="col-6 mt-5">

                  <div className="ms-auto" style={{width:"fit-content"}}>

                <Dropdown style={{display:"inline-block"}} >
                <Dropdown.Toggle className="blue-background py-2 px-4 " style={{ border:"none"}} id="dropdown-basic">
                 Export
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e) => {download('tbl')}} >Export CSV</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Export PDF</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            <NavLink to="/device-settings/" state={{deviceId: location.state.deviceId}} className="ms-2" > <button
                 type="button"
                 style={{display:"inline-block"}}
                 className="btn blue-background white submit-btn py-2 px-4">
                Settings</button> </NavLink>
                  </div>

               

              



               </div> 
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
                        <div className="card p-2" style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px"}}>
                          <div className="row g-0">
                            <div className="col-md-4 m-auto">
                              <img src={hardware} style={{width:"70%", display:"block",margin:"auto"}} className="img-fluid rounded-start mt-2" alt="..."/>
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-text">{channel.channelDisplayName ? channel.channelDisplayName: channel.channelName }: {channel.channelData}</h5>
                                <p className="card-text"><small className="text-muted">Last Updated: {format(channel.updatedAt)}</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </>
                    );
                  })}
             
              </div>

              <div className="row">
                <div className="col-12 mb-5" >
                  <div className="py-4"style={{ borderRadius:"10px", boxShadow: "rgb(0 0 0 / 40%) 0px 0px 8px 0px", backgroundColor:"white"}}>
                    <div className="col-md-10 col-12 mx-auto">
                      <Line options={options} data={data} />
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
                          <th>Event Id</th>
                          <th>Device Id</th>
                          <th>Date</th>
                          {channels &&
                        channels.length > 0 &&
                        channels.map(channel => {
                          return (
                            <>
                                <th>{channel.channelDisplayName ? channel.channelDisplayName: channel.channelName }</th>
                          </>
                        );
                      })}

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

export default Devices;
