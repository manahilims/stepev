import React from "react";
import "./TeamRemoval.css";
import Heading from "./../Reusable/Heading";
import Notification from "../Reusable/Notification";
import SearchBox from "../Reusable/SearchBox";
import warn from "./../../assets/Images/Warning/warning.svg";
import profile from "./../../assets/Images/Warning/profile.png";
import dots from "./../../assets/Images/Warning/dots.svg";
const TeamRemoval = () => {
  return (
    <>
      <div className="teamHeader">
        <Heading title={"Team Removal Requests"} />
        <Notification notification={5} />
      </div>
      <div className="teamRemovalSearchBox">
        <SearchBox />
      </div>
      {/* Table */}
      {/* Warning Table */}
      <table className="warningTable">
        <thead>
          <tr align="center">
            <th align="left">Name</th>
            <th>Admin</th>
            <th>Campaign</th>
            <th>Last Warning</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center">
            <td align="left">
              <div className="warningUser">
                <img className="warningProfile" src={profile} alt="User" />
                <p className="warnUserName">Shaheer Ahmed</p>
                <div className="warningAlign">
                  <img src={warn} alt="Warning" className="warningWarn" />
                  <p className="warnAmount">2</p>
                </div>
              </div>
            </td>
            <td className="warningAdmin">Huzayfah Hanif</td>
            <td className="warningDetails">Moto</td>
            <td className="warningDetails">12,Oct,2022</td>
            <td>
              <div className="warningBtns">
                <div className="warning_btns_align">
                  <div className="warningBtn warningBtn1">
                    <p>View Profile</p>
                  </div>
                  <div className="warningBtn warningBtn2">
                    <p>Reason</p>
                  </div>
                </div>
                <img src={dots} alt="" className="warningMore" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TeamRemoval;
