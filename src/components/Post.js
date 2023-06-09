import React, { useState } from "react";
import "./Post.css";
import Comment from "../img/comment.png";
import Share from "../img/share.png";
import NotLike from "../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../api/PostRequests";

function Post({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    <div className="post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          className="like"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
          src={
            liked
              ? "https://cdn3.emoji.gg/emojis/3717_light_blue_heartpulse.png"
              : NotLike
          }
          alt=""
        />
        <img src={Comment} alt="" style={{ cursor: "pointer" }} />
        <img src={Share} alt="" style={{ cursor: "pointer" }} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
