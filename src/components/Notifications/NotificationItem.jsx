import React from "react";
import "./NotificationItem.css";
import bell from "./../../assets/Images/Notifications/bell.svg";
import lock from "./../../assets/Images/Notifications/lock.svg";
import email from "./../../assets/Images/Notifications/email.svg";
const NotificationItem = ({ type }) => {
  return (
    <>
      {type === "client" ? (
        <div className="notifParent">
          <div className="notifMsg">
            <img src={bell} alt="Client Notif" />
            <p>
              You have a new client. See <a>clients.</a>
            </p>
          </div>
          <div className="notifTime">12:00 PM</div>
        </div>
      ) : type === "pass" ? (
        <div className="notifParent">
          <div className="notifMsg">
            <img src={lock} alt="Client Notif" />
            <p>Password successfully changed.</p>
          </div>
          <div className="notifTime">12:00 PM</div>
        </div>
      ) : type === "email" ? (
        <div className="notifParent">
          <div className="notifMsg">
            <img src={email} alt="Client Notif" />
            <p>Email Success.</p>
          </div>
          <div className="notifTime">12:00 PM</div>
        </div>
      ) : null}
    </>
  );
};

export default NotificationItem;
