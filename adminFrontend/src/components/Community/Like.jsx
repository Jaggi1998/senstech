import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLike } from "../../slices/community";

function Like({ post }) {
  const { likes, _id: post_id } = post;
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({ ...state.auth }));
  const sender_id = user?.id;

  const likeHandler = () => {
    const formData = { post_id, sender_id };
    dispatch(postLike({ formData }))
      .unwrap()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <span class="small-text mx-1">
      <i class="fa-thin fa-heart" onClick={likeHandler}></i>
      {likes}{" "}
    </span>
  );
}

export default Like;
