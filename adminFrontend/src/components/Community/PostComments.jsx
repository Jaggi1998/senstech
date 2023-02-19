import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePostComment } from "../../slices/community";
import communityTelegram from "../../Static/Img/Community/telegram.png";

function PostComments({ post, sender }) {
  const sender_id = sender;
  const post_id = post._id;
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const commentHandler = e => {
    e.preventDefault();

    const formData = {
      comment,
      sender_id,
      post_id
    };

    dispatch(savePostComment({ formData }))
      .unwrap()
      .then(() => {
        setComment("");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div class="mt-3 comments">
      <input
        id="writeComment"
        type="text"
        className="commentInput"
        placeholder="Write your comment...."
        value={comment}
        onChange={e => setComment(e.target.value)}
      ></input>
      <div className="icon-flex"></div>
      <div className="icon-flex">
        <img
          src={communityTelegram}
          alt="camera-icon"
          onClick={commentHandler}
        />
      </div>
    </div>
  );
}

export default PostComments;
