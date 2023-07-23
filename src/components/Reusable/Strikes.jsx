import React from "react";
import "./Strikes.css";
import warning from "./../../assets/Images/Dashboard/warning.svg";

const Strikes = ({ strike }) => {
  return (
    <>
      <div className="strikesContainer">
        <img src={warning} className="warning" />
        <p>{strike}</p>
      </div>
    </>
  );
};

export default Strikes;
