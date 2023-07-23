import React, { useState, useEffect } from "react";
import InfoCard from "../Reusable/InfoCard";
import wallet from "./../../assets/Images/User Profile/cryptowallet.png";
import profile from "./../../assets/Images/User Profile/profile.png";
import polygon from "./../../assets/Images/User Profile/polygon.svg";
import "./UserEarnings.css";
import UserInfo from "./UserInfo";
import { freelancerEarning } from "../../api/axios";
const UserEarnings = ({ freelancerId }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const apiCall = async () => {
      var response_data = await freelancerEarning(freelancerId);
      setData(response_data[0]);
    };
    apiCall();
  }, []);
  return (
    <>
      <div className="parentCard">
        <InfoCard
          amount={
            data?.totalAmount
              ? data.totalAmount
              : data?.totalAmount === 0
              ? 0
              : "N/A"
          }
          info="Total Amount"
        />
        <InfoCard
          amount={
            data?.availableForWithdrawl
              ? data.availableForWithdrawl
              : data?.availableForWithdrawl === 0
              ? 0
              : "N/A"
          }
          info="Available for withdrawl"
        />
        <InfoCard
          amount={
            data?.pending ? data.pending : data?.pending === 0 ? 0 : "N/A"
          }
          info="Pending Amount"
        />
        {/* <InfoCard amount="9.5" info="Paused" /> */}
      </div>
      <div className="userRecord">
        <div className="user_record_align">
          <p className="userRecordTitle">Earnings</p>
          <div className="user_earning">
            <div>
              <p>
                <span className="user_earn">
                  {data?.totalAmount
                    ? data.totalAmount
                    : data?.totalAmount === 0
                    ? 0
                    : "N/A"}
                </span>
                <span className="earning_currency">USD</span>
              </p>
              <p className="user_percent">
                <span className="user_percent_price">$2395</span>
                <span className="user_percent_percent">+8.1%</span>
              </p>
              <div className="user_currency_btn">
                <p>USD</p>
                <img src={polygon} alt="" />
              </div>
            </div>
            <div>
              <img className="wallet_img" src={wallet} alt="" />
            </div>
          </div>
        </div>
        {/* User Record */}
        {/* <div className="user_record_align">
          <p className="userRecordTitle">Record</p>
          <div className="user_record">
            <div className="user_record_border">
              <UserInfo
                img={profile}
                name="Shaheer Ahmed"
                email="huz@gmail.com"
              />
              <div>
                <p className="px">+25$</p>
                <div className="client_payment_status">
                  <div className="client_status"></div>
                  <div className="client_email">Recieved</div>
                </div>
              </div>
            </div>
            <div className="user_record_border">
              <UserInfo
                img={profile}
                name="Shaheer Ahmed"
                email="huz@gmail.com"
              />
              <div>
                <p className="px">+25$</p>
                <div className="client_payment_status">
                  <div className="client_status"></div>
                  <div className="client_email">Recieved</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Pending Payments */}
        {/* <div className="user_record_align">
          <div>
            <p className="userRecordTitle">Pending Payments</p>
          </div>
          <div className="user_pending_payments">
            <div className="pending_client">
              <UserInfo
                img={profile}
                name="Moto Mobiles"
                email="Huzi@gmail.com"
              />
              <div className="pending_amount">
                <span className="pending_amount_currency">$</span>
                <span className="pending_amount_amount">25</span>
              </div>
            </div>
            <div className="pending_detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus
              felis, facilisis non pellentesque i
            </div>
            <div className="btns_date">
              <p className="pending_detail">oct,16,2022</p>
              <div className="payment_btns">
                <div className="payment_pause_btn">
                  <p>Pause</p>
                </div>
                <div className="payment_release_btn">
                  <p>Release</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default UserEarnings;
