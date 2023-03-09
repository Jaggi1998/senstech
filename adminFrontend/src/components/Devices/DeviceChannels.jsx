import React, { useEffect , useState} from "react";
import { format } from 'timeago.js'
import Sidebar from "../Sidebar/Sidebar";
import {API_URL} from '../../constants/urls';
import { useLocation, NavLink } from 'react-router-dom';
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
          // Header(file)
    }, []);

const fileName = 'Device Logs'
const exportType =  exportFromJSON.types.csv

// const download = () => {
//   try {
//     exportFromJSON({ data: file, fileName, exportType })
//   } catch (err) {
//     console.log(err)
//   }
// }
 // Quick and simple export target #table_id into a csv
   const download = (table_id, separator = ',') => {
    
        try {
          var rows = document.querySelectorAll('table#' + table_id + ' tr');
          var csv = [];
          for (var i = 0; i < rows.length; i++) {
              var row = [], cols = rows[i].querySelectorAll('td, th');
              for (var j = 0; j < cols.length; j++) {
                  var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
                  data = data.replace(/"/g, '""');
              
                  row.push('"' + data + '"');
              }
              csv.push(row.join(separator));
          }
          var csv_string = csv.join('\n');
          var filename = 'Data_Log_' + new Date().toLocaleDateString() + '.csv';
          var link = document.createElement('a');
          link.style.display = 'none';
          link.setAttribute('target', '_blank');
          link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
       catch (err) {
        console.log(err)
       }
      }

   const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [5, 26, 14, 42, 58,undefined,29],
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

    const Body = (file) => {
      for (let i=0; i<file.length; i++) {
        const bodys = Object.values(file[i] ?? {});
        TableData.push(bodys)
      } 
    };
    Body(file)

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
               <button
                 type="button"
                 style={{display:"inline-block"}}
                 onClick={(e) => {download('tbl')}}
                 className="btn blue-background white submit-btn py-2 px-4">
                Download</button>
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
