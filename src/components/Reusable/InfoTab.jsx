import React from "react";
import "./InfoTab.css";

const InfoTab = ({ icon1, icon2, text1, text2 }) => {
  return (
    <>
      <div className="infoTabAlign">
        <div className="infoTab">
          <img src={icon1} alt="Email" />
          <p>{text1}</p>
        </div>
        <div className="infoTab">
          <img src={icon2} alt="gender" />
          <p>{text2}</p>
        </div>
      </div>
    </>
  );
};

export default InfoTab;
