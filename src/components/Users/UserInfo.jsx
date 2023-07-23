import React from "react";

import "./UserInfo.css";
const UserInfo = ({ img, name, email }) => {
  return (
    <>
      <div className="client_info">
        <div>
          <img className="profile_picture" src={img} alt="" />
        </div>
        <div>
          <p className="client_name">{name}</p>
          <p className="client_email">{email}</p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
