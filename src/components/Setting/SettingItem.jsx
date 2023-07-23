import React from "react";
import "./SettingItem.css";
const SettingItem = ({ icon, title }) => {
  return (
    <>
      <div className="alignSettingItem">
        <p>{title}</p>
        <img src={icon} alt="password" />
      </div>
    </>
  );
};

export default SettingItem;
