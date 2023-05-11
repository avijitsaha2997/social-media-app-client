import React from "react";
import "./Profile.css";
import ProfileLeft from "../components/ProfileLeft";
import ProfileCard from "../components/ProfileCard";
import PostSide from "../components/PostSide";
import RightSide from "../components/RightSide";
function Profile() {
  return (
    <div className="profile">
      <ProfileLeft />

      <div className="profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
}

export default Profile;
