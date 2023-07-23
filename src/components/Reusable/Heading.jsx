import React from "react";
import "./Heading.css";
const Heading = ({ title }) => {
  return (
    <>
      <p className="headingText">{title}</p>
    </>
  );
};

export default Heading;
