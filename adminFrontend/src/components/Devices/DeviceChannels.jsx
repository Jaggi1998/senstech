import React, { useEffect , useState} from "react";
import { format } from 'timeago.js'
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { useLocation } from 'react-router-dom';
import hardware from "../../Static/Img/Devices&channels/hardware.png";
import exportFromJSON from 'export-from-json'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

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


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



const Devices = () => {

 const location = useLocation();

    let [channels, setChannels] = useState([])
    let [file, setFile] = useState([])
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
        setInterval(() => {
          fetchData();
        }, 5000);
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
        setInterval(() => {
          fetchData();
        }, 5000);
    }, []);
const fileName = 'Device Logs'
const exportType =  exportFromJSON.types.csv

const download = () => {
  try {
    exportFromJSON({ data: file, fileName, exportType })
  } catch (err) {
    console.log(err)
  }
}


   const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [5, 26, 14, 42, 58,39,29],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [0, 10, 50, 20, 40,36,18],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
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
               <button
                 type="button"
                 style={{display:"block"}}
                 onClick={download}
                 className="btn ms-auto blue-background white submit-btn py-2 px-4"
                
               >
                 Download
               </button>
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
                                <h3 className="card-text">Name: {channel.channelName}</h3>
                                <h5 className="card-text">Value: {channel.channelData}</h5>
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
            </div>
          </>
        }
      />
    </>
  );
};

export default Devices;
