import React from "react";
import "./WarningCompany.css";
const WarningCompany = ({ image, name, email }) => {
  return (
    <>
      <div className="warningCompany">
        <div className="warningCompanyImg">
          <img src={image} alt="User" />
        </div>
        <div>
          <p className="warningCompanyName">{name}</p>
          <p className="warningCompanyEmail">{email}</p>
        </div>
      </div>
    </>
  );
};

export default WarningCompany;
