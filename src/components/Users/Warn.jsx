import React from "react";
import warn from "./../../assets/Images/User Profile/warn.png";
import "./WarningCompany.css";
const Warn = ({ warnings }) => {
  return (
    <div className="strikes">
      <img src={warn} alt="" />
      <p>{warnings}</p>
    </div>
  );
};

export default Warn;
<></>;
