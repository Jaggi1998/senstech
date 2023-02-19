import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { API_URL } from "../../constants/urls";
import TrainingVideosComponent from "./TrainingVideosComponent";
import { getAllVideos, getCategoryVideos } from "../../slices/trainingVideos";
import Modal from 'react-bootstrap/Modal';
import SweetAlert from 'react-bootstrap-sweetalert';
import {useNavigate} from 'react-router-dom';
import { uploadPostMedia } from "../../slices/community";
const TrainingVideos = () => {
  const [videoList, setVideoList] = useState([]);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [message, setMessage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState(false)
  const [sucMsg, setSucMsg] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    const url = `${API_URL}/get-Videos`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        await setVideoList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const postVideo = async () =>{
    let videoInfo = { title, video, thumbnail, category };
    let result = await fetch(`${API_URL}/upload-Video`, {
      method: "POST",
      body: JSON.stringify(videoInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (result.status === 400) {
      setErrMsg(true);
    }
    if (result.status=== 200) {
      setShow(false)
      setShowAlert(true)
    }
    result = await result.json();
    setMessage(result.message);
    
  }
  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => {
     setShow(true)
     setErrMsg(false)
    };
    const imageUploadHandler = e => {
      setMessage("Please Wait...")
      setErrMsg(false)
      setSucMsg(true)
      e.preventDefault();
      const img = e.target.files[0];
      const formData = new FormData();
      formData.append("file", img);
      dispatch(uploadPostMedia({ formData }))
        .unwrap()
        .then(response => {
          console.log("this is response", response.urls[0].url)
          setThumbnail(response.urls[0].url);
          setSucMsg(false)
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    const videoUploadHandler = e => {
      setMessage("Please Wait...")
      setErrMsg(false)
      setSucMsg(true)
      e.preventDefault();
      const vid = e.target.files[0];
      const formData = new FormData();
      formData.append("file", vid);
      dispatch(uploadPostMedia({ formData }))
        .unwrap()
        .then(response => {
          setVideo(response.urls[0].url);
          setSucMsg(false)
        })
        .catch(err => {
          console.log(err);
          setSucMsg(false)
        });
    };
  const trainingVideosHandler = category => {
    if (category === "") {
      dispatch(getAllVideos())
        .unwrap()
        .then(response => {
          setVideoList(response);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dispatch(getCategoryVideos({category}))
        .unwrap()
        .then(response => {
          setVideoList(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // const filteredVideos = videoList.filter(video => video.category._id === e);
    // setVideoList(filteredVideos);
  };
  function cancel () {
    setShowAlert(false)
    navigate("/training-videos")
  }
  return (
    <>
      <Sidebar
        element={
          <>
            {" "}
            <div className="container-fluid">
              
              <hr className="background-light-grey" />
              <div className="col-md-12 mx-auto mt-5 background-light-grey">
                <div className="row">
                <div className="container-fluid">
              <div className="row my-5">
              <div class="col-md-12">
              <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-2" role="group" aria-label="First group">
                <button className='btn ms-auto blue-background btn-border white submit-btn my-5 py-2 px-5 slide'
                    type="button"
                    onClick={() => trainingVideosHandler("")}
                  >
                    All Videos{" "}
                  </button>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button className='btn ms-2 blue-background btn-border white submit-btn my-5 py-2 px-5 slide'
                    type="button"
                    onClick={() =>
                      trainingVideosHandler("63870c2d6bc87c1904c5e957")
                    }
                  >
                    Gaming{" "}
                  </button>
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                <button className='btn ms-2 blue-background btn-border white submit-btn my-5 py-2 px-5 slide'
                    type="button"
                    onClick={() =>
                      trainingVideosHandler("63870c716bc87c1904c5e95b")
                    }
                  >
                    Fashion & Beauty{" "}
                  </button>
                </div>
                <div class="btn-group" role="group" aria-label="fourth group">
                
                <button className='btn ms-2 blue-background btn-border white submit-btn my-5 py-2 px-5 slide'
                    type="button"
                    onClick={() =>
                      trainingVideosHandler("63870c1d6bc87c1904c5e955")
                    }
                  >
                    Learning{" "}
                  </button>
                </div>
                <div class="btn-group" role="group" aria-label="fifth group">
                
                <button className='btn ms-2 blue-background btn-border white submit-btn my-5 py-2 px-5 slide'
                    type="button"
                    onClick={() =>
                      trainingVideosHandler("63870b706bc87c1904c5e953")
                    }
                  >
                    Sport
                    {""}
                  </button>
                </div>
                <div class="btn-group" role="group" aria-label="sixth group">
                
                <button type='button' onClick={handleShow} className='btn ms-5 blue-background btn-border white submit-btn my-5 py-2 px-5 slide'>Add Video</button>

                </div>
              </div>
                            
                  <TrainingVideosComponent videoList={videoList} />
                  <SweetAlert success title="Video Added" show={showAlert} onConfirm={cancel} onCancel={cancel} ></SweetAlert>
                  <Modal show={show} onHide={handleClose} style={{width:"100%"}}>
                          <Modal.Header closeButton>
                            <Modal.Title>Enter your card details</Modal.Title> 
                          </Modal.Header>
                          <Modal.Body>
                  <div className="card-header">
                  <strong></strong>

                  </div>
                  <div className="card-body">
                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                      
                  { errMsg === true ? <div class="alert alert-danger text-center" role="alert"> {message} </div> : ""}
                  { sucMsg === true ? <div class="alert alert-success text-center" role="alert"> {message} </div> : ""}
                      
                  <label for="name">Video Title</label>
                  <input className="form-control footer-input" id="name" type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Title"/>
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="ccnumber">Video Category</label>


                  <div className="input-group">
                  <select class="form-select footer-input" onChange={(e)=>setCategory(e.target.value)} aria-label="Default select example">
                    <option selected value="63870b706bc87c1904c5e953">Sports</option>
                    <option value="63870c1d6bc87c1904c5e955">Learning</option>
                    <option value="63870c2d6bc87c1904c5e957">Gaming</option>
                    <option value="63870c716bc87c1904c5e95b">Fashion & Beauty</option>
                  </select>
                  </div> 
                  </div>
                  </div>
                  </div>

                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="formFile" class="form-label">Video Thumbnail</label>
                
                  <div className="input-group">
                  <input class="form-control footer-input" type="file" name='thumbnail' id="formFile" onChange={imageUploadHandler} placeholder="Thumbnail"/>
                  </div> 
                  </div>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-12">
                  <div className="form-group mb-4">
                  <label for="ccnumber">Video</label>

                  <div className="input-group">
                  <input className="form-control footer-input" type="file" name="video" onChange={videoUploadHandler} placeholder="Category"/>
                  </div> 
                  </div>
                  </div>
                  </div>

                  </div>
                  </Modal.Body>
                          <Modal.Footer>
                            <button className="btn btn-sm btn-danger btn-border" type="reset"onClick={handleClose}>
                  <i className="mdi mdi-lock-reset"></i> Reset</button>
                            
                            <button className="btn btn-sm btn-blue btn-border float-right"onClick={postVideo} type="submit">
                  <i className="mdi mdi-gamepad-circle"></i> Continue</button>
                          
                          </Modal.Footer>
                        </Modal>
                  </div>
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

export default TrainingVideos