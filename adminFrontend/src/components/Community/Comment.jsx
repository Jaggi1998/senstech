import React from "react";

function Comments({ post }) {
  const { comments } = post;
  return (
    <span class="small-text mx-1">
      <i class="fa-thin fa-message"></i>{" "}
      {comments.length > 0 && comments.length}
    </span>
  );
}

export default Comments;
