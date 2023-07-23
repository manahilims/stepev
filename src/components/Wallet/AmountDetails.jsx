import React from "react";
import "./AmountDetails.css";
const AmountDetails = ({ img, amount, title }) => {
  return (
    <>
      <div>
        <div className="withdrawalAmount">
          <div className="withdrawalAmountImg">
            <img src={img} alt="Money" />
          </div>
          <p>{title}</p>
        </div>
        <p className="detailAmount">${amount}</p>
      </div>
    </>
  );
};

export default AmountDetails;
