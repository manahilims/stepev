import React from "react";
import "./Stats.css";
import background from "./../../assets/Images/Dashboard/back.png";
import campaign from "./../../assets/Images/Dashboard/campaign.svg";
const Stats = ({ icon, number, heading }) => {
  return (
    <>
      <div
        className="backGroundImg"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="alignStats">
          <img src={icon} alt="" className="iconStats" />
          <p>{number}</p>
        </div>
        <p className="statsSlogan">{heading}</p>
      </div>
    </>
  );
};

export default Stats;
