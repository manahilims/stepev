import React from "react";
import "./InfoCard.css";
const InfoCard = ({ amount, info }) => {
  return (
    <>
      <div className="earningsCard">
        <div>
          <span className="amount">{amount} </span>
          <span className="currency">USD</span>
        </div>
        <div className="infoEarning">{info}</div>
      </div>
    </>
  );
};

export default InfoCard;
