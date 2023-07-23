import React from "react";
import money from "./../../assets/Images/Wallet/money.svg";
import wallet from "./../../assets/Images/User Profile/cryptowallet.png";
import dollar from "./../../assets/Images/Wallet/dollar.svg";
import AmountDetails from "./AmountDetails";
import "./UserWallet.css";
const UserWallet = ({ balance, profitPercent, withdrawnAmount, profit }) => {
  return (
    <>
      <div className="current_balance">
        <div className="currentBlnc">
          <p className="current_blnc_title">Current Balance</p>
          <div className="currentAmount">
            <p className="current_blnc_amount">${balance}</p>
            <p className="amount_percent">+{profitPercent}%</p>
          </div>
          <div className="walletStats">
            <div className="alignAmountDetails">
              <AmountDetails
                img={money}
                title="Withdrawal"
                amount={withdrawnAmount}
              />
            </div>
            <AmountDetails img={dollar} title="Profit" amount={profit} />
          </div>
        </div>
        <div className="walletImg">
          <img src={wallet} alt="Wallet" />
        </div>
      </div>
    </>
  );
};

export default UserWallet;
