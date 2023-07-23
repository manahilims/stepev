import React from "react";
import "./Notification.css";
const Notification = ({ notification }) => {
  return (
    <>
      <div className="u_notification">
        <p>{notification} New</p>
      </div>
    </>
  );
};

export default Notification;
