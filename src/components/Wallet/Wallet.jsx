import React, { useState, useEffect } from "react";
import "./Wallet.css";
import WalletCard from "./WalletCard";
import Heading from "./../Reusable/Heading";
import UserWallet from "./UserWallet";
import { adminWalletDetails } from "../../api/axios";

const Wallet = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const apiCall = async () => {
      var response_data = await adminWalletDetails();
      setData(response_data);
    };
    apiCall();
  }, []);
  const limitLength = (amount) => {
    var x = amount;
    x = Math.floor(x * 100) / 100;
    return x;
  };
  const date = (d) => {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <>
      <div className="wallet">
        <div className="walletChild1">
          <div className="walletCards">
            <WalletCard
              amount={limitLength(data?.wallet.netIncome)}
              info="Total Amount"
            />
            <WalletCard
              amount={limitLength(data?.wallet.availableBalance)}
              info="Available for Withdrawal"
            />
            <WalletCard
              amount={limitLength(data?.wallet.withdrawn)}
              info="Withdrawn"
            />
          </div>
          <div className="walletTitle">
            <Heading title="Wallet" />
          </div>
          <div className="walletDetails">
            <UserWallet
              balance={limitLength(data?.wallet.netIncome)}
              profitPercent={data?.increasePercentage}
              withdrawnAmount={limitLength(data?.wallet.withdrawn)}
              profit="131,000.53"
            />
            <div className="withdraw_amount">
              <p className="withdrawAmountTitle">Withdraw Amount</p>
              <div className="alignWithdraw">
                <div className="withdrawSettings">
                  <div className="setting_child">
                    <p>Amount</p>
                  </div>
                  <div className="setting_child">
                    <p>Other Amount</p>
                  </div>
                </div>
                <div className="withdrawBtn">
                  <p>Withdraw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="walletChild2">
          <Heading title="Withdrawal History" />
          <table className="walletTable">
            <thead>
              <tr align="center">
                <th>ID</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody align="center">
              {/* <tr>
                <td className="withdrawId">#ID-001</td>
                <td className="withdrawAmount">$2400</td>
                <td className="withdrawDate">20/Aug/2022</td>
              </tr> */}

              {data?.thisMonthAppEarning.map((item, index) => (
                <tr key={index}>
                  <td className="withdrawId">#ID-0{index}</td>
                  <td className="withdrawAmount">${item.appEarning}</td>
                  <td className="withdrawDate">{date(item.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wallet;
