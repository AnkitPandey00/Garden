import React from "react";
import "./Admin.css";
const Profile = () => {
  const data = JSON.parse(localStorage.getItem("Garden")).savedUser;

  const firstChar = data.name.charAt(0).toUpperCase();

  return (
    <div className="Prfile_main">
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="profile_logo">
          <h1>{firstChar}</h1>
        </div>
        <div className="profile_name">
          <h1>{data.userName}</h1>
        </div>
      </div>
      <div className="profile_details">
        <h1>Details :-</h1>
        <div className="profile_fullname">
          <p>Name : {data.name}</p>
        </div>
        <div className="profile_email">
          <p>Email :{data.email}</p>
        </div>
        <div className="profile_country">
          <p> Country :{data.country}</p>
        </div>
        <div className="profile_state">
          <p>State : {data.state}</p>
        </div>
        <div className="profile_dis">
          <p>Pincode : {data.pincode}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
