import React from "react";
import { useSelector } from "react-redux";
import communityComment from "../../Static/Img/Community/comment.png";
import Like from "./Like";
import Comments from "./Comment";
import PostComments from "./PostComments";
import PostDocument from "./PostDocument";

function Post({ communityData }) {
  const { user } = useSelector(state => ({ ...state.auth }));
  const senderId = user?.id;

  return (
    <>
      {communityData &&
        communityData.map(communityPost => (
          <div class="form-group-border p-3">
            <div className="small-flex">
              <div className="small-profile-icon">
                <img
                  className="rounded-circle my-3 col-sm-2 small-profile"
                  src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                  alt=""
                />
                <div class="mt-3">
                  <p className="community-text-s">
                    {communityPost.sender_id.name}{" "}
                  </p>
                  <span>@{communityPost.sender_id.username} - 14 Sep 2022</span>
                </div>
              </div>
              <img src={communityComment} alt="comment" className="col-sm-1" />
            </div>

            <div className="main-content">
              <p>{communityPost.title}</p>
              {communityPost.media &&
                communityPost.media &&
                communityPost.media.map(postMedia => (
                  <div className="community-flex">
                    {postMedia.image &&
                      postMedia.image.length > 0 &&
                      postMedia.image.map(mediaImage => (
                        <div className="communityLeft">
                          <img src={mediaImage.url} alt="Image" />
                        </div>
                      ))}
                    {postMedia.video &&
                      postMedia.video.length > 0 &&
                      postMedia.video.map(mediaVideo => {
                        return (
                          <div className="communityLeft">
                            <video width="320" height="240" controls>
                              <source src={mediaVideo.url} type="video/mp4" />
                            </video>
                          </div>
                        );
                      })}
                    {postMedia.doc &&
                      postMedia.doc.length > 0 &&
                      postMedia.doc.map(mediaDoc => (
                        <PostDocument mediaDoc={mediaDoc} />
                      ))}
                  </div>
                ))}
              <div>
                <div class="row">
                  <div class="col-7">
                    <Like post={communityPost} />
                    <Comments post={communityPost} />
                  </div>

                  <div class="col-5 right-text">
                    <span class=" small-text">
                      <span class="light-text">
                        <i class="fa-thin fa-share-nodes"></i>{" "}
                      </span>
                      450
                    </span>
                  </div>
                </div>
              </div>
              <div className="large-flex">
                <img
                  className="rounded-circle my-3 small-profile"
                  src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                  alt=""
                />
                <PostComments post={communityPost} sender={senderId} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Post;
