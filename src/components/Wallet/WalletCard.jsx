import React from "react";
import "./WalletCard.css";
const WalletCard = ({ amount, info }) => {
  return (
    <>
      <div className="walletCard">
        <p className="wallet_amount">${amount}</p>
        <p className="amount_info">{info}</p>
      </div>
    </>
  );
};

export default WalletCard;
