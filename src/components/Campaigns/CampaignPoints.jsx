import React from "react";
import "./CampaignPoints.css";
const CampaignPoints = ({ title, type }) => {
  return (
    <>
      <div
        className={
          type === "bg"
            ? "bgBlackBox blackBox"
            : type === "xl"
            ? "xlBox blackBox"
            : type === "md"
            ? "mdBox blackBox"
            : "blackBox"
        }
      >
        <div></div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default CampaignPoints;
