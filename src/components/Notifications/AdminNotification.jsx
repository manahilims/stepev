import React from "react";
import "./AdminNotification.css";
import Heading from "./../Reusable/Heading";
import NotificationItem from "./NotificationItem";

const AdminNotification = () => {
  return (
    <>
      <div className="adminNotif">
        <Heading title="Notifications" />
        <hr className="notificationLine" />
        <NotificationItem type="client" />
        <hr className="notificationLine2" />
        <NotificationItem type="pass" />
        <hr className="notificationLine2" />
        <NotificationItem type="email" />
        <hr className="notificationLine2" />
      </div>
    </>
  );
};

export default AdminNotification;
