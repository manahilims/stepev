import React, { useState, useEffect } from "react";
import "./UserWarning.css";
import WarningCompany from "./WarningCompany";
import Warn from "./Warn";
import company from "./../../assets/Images/User Profile/company.png";
import { freelancerWarning } from "../../api/axios";

const UserWarning = ({ freelancerId }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const apiCall = async () => {
      var response_data = await freelancerWarning(freelancerId);
      setData(response_data);
      console.log(response_data);
    };
    apiCall();
  }, []);
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
      <table className="userWarningTable">
        <thead>
          <tr align="center">
            <th align="left" className="userWarningTableChild">
              Name
            </th>
            <th>Warnings</th>
            <th>Last Warning</th>
            <th>Warned By</th>
            <th className="user_warning_btn_title">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr align="center" className="user_Warning_Row">
            <td align="left">
              <WarningCompany
                image={company}
                name="Moto Mobiles"
                email="huz@gmail.com"
              />
            </td>
            <td>
              <Warn warnings={2} />
            </td>
            <td className="user_warning_data">Oct,16,2022</td>
            <td className="user_warning_data">Shaheer Ahmed</td>
            <td>
              <div className="user_warning_action">
                <div className="user_action_btn1">
                  <p>Reason</p>
                </div>
                <div className="user_action_btn2">
                  <p>Suspend</p>
                </div>
              </div>
            </td>
          </tr> */}
          {data?.map((item, index) => (
            <tr align="center" className="user_Warning_Row" key={index}>
              <td align="left">
                <WarningCompany
                  image={item.sartupLogo ? item.sartupLogo : company}
                  name={item.startupName ? item.startupName : "N/A"}
                  email={item.email ? item.email : "N/A"}
                />
              </td>
              <td>
                <Warn
                  warnings={item.warningCount ? item.warningCount : "N/A"}
                />
              </td>
              <td className="user_warning_data">
                {item.lastWarnedOn ? date(item.lastWarnedOn) : "N/A"}
              </td>
              <td className="user_warning_data">
                {item.warnedBy ? item.warnedBy : "N/A"}
              </td>
              <td>
                <div className="user_warning_action">
                  <div className="user_action_btn1">
                    <p>Reason</p>
                  </div>
                  <div className="user_action_btn2">
                    <p>Suspend</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserWarning;
