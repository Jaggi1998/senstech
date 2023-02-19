import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../TrainingVideos/Card";
import demoData from "../TrainingVideos/demoData";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../Loader/Loader";
import image from "../../Static/Img/Home/Rectangle-165.png";
import Fire from "../../Static/Img/TrainingVideos/emojione_fire.svg";
import communityCamera from "../../Static/Img/Community/camera.png";
import communityVideo from "../../Static/Img/Community/video.png";
import communityWrite from "../../Static/Img/Community/write.png";
import communityComment from "../../Static/Img/Community/comment.png";
import communityTelegram from "../../Static/Img/Community/telegram.png";
// import communitySide from "../../Static/Img/Community/side-pic.png";
// import communityTop from "../../Static/Img/Community/meeting.png";
// import communityBottom from "../../Static/Img/Community/keyboard.png";
import { getAllPost, uploadPostMedia, sendPost } from "../../slices/community";
import "./Community.css";
import Like from "./Like";
import Comments from "./Comment";
import PostComments from "./PostComments";
import PostDocument from "./PostDocument";
import Post from "./PostComponent";

const Community = () => {
  let navigate = useNavigate();
  const communityInfo = useSelector(state => state.community);
  const communityData = communityInfo.communityData;
  const { user } = useSelector(state => ({ ...state.auth }));
  const senderId = user?.id;
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [doc, setDoc] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const imageUploadHandler = e => {
    setLoading(true);
    e.preventDefault();
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    dispatch(uploadPostMedia({ formData }))
      .unwrap()
      .then(response => {
        setImage(response.urls);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const videoUploadHandler = e => {
    setLoading(true);
    e.preventDefault();
    const vid = e.target.files[0];
    const formData = new FormData();
    formData.append("file", vid);
    dispatch(uploadPostMedia({ formData }))
      .unwrap()
      .then(response => {
        setVideo(response.urls);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const docUploadHandler = e => {
    setLoading(true);
    e.preventDefault();
    const document = e.target.files[0];
    const formData = new FormData();
    formData.append("file", document);
    dispatch(uploadPostMedia({ formData }))
      .unwrap()
      .then(response => {
        setDoc(response.urls);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendPostHandler = e => {
    e.preventDefault();
    const finalFormData = {
      title,
      sender_id: senderId,
      media: [
        {
          image,
          video,
          doc
        }
      ]
    };
    dispatch(sendPost({ finalFormData }))
      .unwrap()
      .then(() => {
        dispatch(getAllPost());
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      {loading === true ? <Loader /> : ""}
      <Sidebar
        element={
          <>
            {""}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mx-auto background-light-grey mt-5">
                  <div className="my-5">
                    <h3 className="">Community</h3>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <div class="form-group-border p-3">
                        <h6 className="col-sm-12 m-3">Post Something</h6>
                        <div className="post-flex">
                          <img
                            className="rounded-circle my-3 col-sm-2 profile-img"
                            src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                            alt=""
                            width="100"
                          />
                          <div class="col-sm-10 mt-4">
                            <input
                              style={{ border: "none" }}
                              type="text"
                              class="form-control"
                              id="status"
                              placeholder="What's on your mind ? "
                              onChange={e => setTitle(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="content-flex mt-4">
                          <div className="icon-flex">
                            <img src={communityCamera} alt="camera-icon" />{" "}
                            <label for="photo" class="btn">
                              Add Photo
                            </label>
                            <input
                              id="photo"
                              name="photo"
                              style={{ display: "none" }}
                              onChange={imageUploadHandler}
                              type="file"
                            />
                          </div>
                          <div className="icon-flex">
                            <img src={communityVideo} alt="camera-icon" />{" "}
                            <label for="video" class="btn">
                              Add Video
                            </label>
                            <input
                              id="video"
                              name="video"
                              style={{ display: "none" }}
                              type="file"
                              onChange={videoUploadHandler}
                            />
                          </div>
                          <div className="icon-flex">
                            <img src={communityWrite} alt="camera-icon" />
                            <label for="pdf" class="btn">
                              Write Article
                            </label>
                            <input
                              id="pdf"
                              name="pdf"
                              style={{ display: "none" }}
                              type="file"
                              onChange={docUploadHandler}
                            />
                          </div>
                          <div className="icon-flex"></div>
                          <div className="icon-flex">
                            <img
                              style={{ cursor: "pointer" }}
                              src={communityTelegram}
                              alt="camera-icon"
                              onClick={sendPostHandler}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <Post communityData={communityData} />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="background-light-grey" />
            </div>
          </>
        }
      />
    </>
  );
};

export default Community;
