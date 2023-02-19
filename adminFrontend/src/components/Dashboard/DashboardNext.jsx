import React, {useEffect, useState} from 'react';
import {Navigate , useNavigate} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import imgBlue from '../../Static/Img/Dashboard/info-box-blue.png';
import imgPeach from '../../Static/Img/Dashboard/info-box-peach.png';
import imgYellow from '../../Static/Img/Dashboard/info-box-yellow.png';
import service1 from '../../Static/Img/Dashboard/service-1.png';
import service2 from '../../Static/Img/Dashboard/service-2.png';
import service3 from '../../Static/Img/Dashboard/service-3.png';
import service4 from '../../Static/Img/Dashboard/service-4.png';
import { API_URL } from "../../constants/urls";
import { useSelector } from 'react-redux';
import './Dashboard.css'
const DashboardNext = () =>{
  let [tree, setTree] =  useState([])
  const { user } = useSelector(state => state.auth );
  
  useEffect(() => {
    
    const url = `${API_URL}/get-tree/${user.id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
         setTree(json.tree);
      
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }
 
    return(<>

    <Sidebar element ={<> <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 mx-auto background-light-grey my-5">
            <div className="my-5">
                    <h3 className=''>Community</h3>
                </div>
                <div className="row">
                <div className='col-12 m-3 dash-h3'>
                  <h3>Welcome {user.name} !</h3>
                  <h4>You have {tree.length} support systems running.</h4>
                </div>
                <div className="col-12 info-boxes">
                  <div className='info-box-1 box-blue'>
                    <img src={imgBlue} alt="blue image"></img>
                    <h5>Money Deposit</h5>
                    <h2>$60</h2>
                  </div>
                  <div className='info-box-1 box-peach'>
                    <img src={imgPeach} alt="peach image"></img>
                    <h5>Money Harvested</h5>
                    <h2>$960</h2>
                  </div>
                  <div className='info-box-1 box-yellow'>
                    <img src={imgYellow} alt="Yellow image"></img>
                    <h5>Available to Withdraw</h5>
                    <h2>{tree[0]?.payOut=== false ? "$0":"$180"}</h2>
                  </div>
                </div>
                <hr></hr>

                <div className="col-12 mb-3 service-boxes">

                  {tree?.map((trees,index) =>{
                    return(<>
                    <div className='service-outer' key={index}>
                  <div className='service-box-1 border-orange'>
                    <img src={trees.stage === 1 ? service1 : trees.stage === 2 ? service2: service3} alt="blue image"></img>
                    <div className='service-main-content'>
                      <div className='service-content'>
                        <div className='service-left'>Current Stage:</div>
                        <div className='service-right'>{trees.name}</div>
                      </div>                      
                      <div className='service-content'>
                        <div className='service-left'>Next Stage :</div>
                        <div className='service-right'>{trees.name === "Gathering" ? "Gate" : trees.name==="Gate" ? "Garden" : "None"}</div>
                      </div>     
                      <div className='service-content'>
                        <div className='service-left'>Days Hill Next Stage:</div>
                        <div className='service-right'>7</div>
                      </div>     
                    </div>
                    <div className='progress-container'>
                      <progress id="file" value="80" max="100"> 32% </progress>
                    </div>
                  </div>
                  <h4>Seed {trees.stage}</h4>
                  </div>
                    </>)
                  })}

    
                </div>
              </div>
            
            </div>
        </div>
        <hr className='background-light-grey'/>
    </div></>} />

   
    
    </>)
}

export default DashboardNext