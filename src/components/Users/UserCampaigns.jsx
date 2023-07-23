import React, { useState, useEffect } from "react";
import FormButton from "../Reusable/FormButton";
import "./UserCampaigns.css";
import { freelancerCampaigns } from "../../api/axios";

const UserCampaigns = ({ freelancerId }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const apiCall = async () => {
      var response_data = await freelancerCampaigns(freelancerId);
      console.log(response_data);
      setData(response_data.data);
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
      <table className="userCampaignTable">
        <thead>
          <tr className="campaignsThead">
            <th align="left">Name</th>
            <th align="center">Date Created</th>
            <th align="center" className="emailTd">
              Admin
            </th>
            <th align="center">Role</th>
            <th align="center">Action</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
            <td className="user_name">Moto Mobiles</td>
            <td className="user_light" align="center">
              20/11/2022
            </td>
            <td className="user_bold" align="center">
              Shaheer Ahmed
            </td>
            <td className="user_light" align="center">
              Freelancer
            </td>
            <td align="center">
              <div className="viewCampaignsBtn">
                <a href="/">View Campaigns</a>
              </div>
            </td>
          </tr> */}
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="user_name">
                {/* <div className="startupownerImage"></div> */}
                <img
                  className="startupownerImage"
                  src={item.startupAvatar}
                  alt="startup"
                />
                {item.startupOwnerName}
              </td>
              <td className="user_light" align="center">
                {date(item.startupCreatetionDate)}
              </td>
              <td className="user_bold" align="center">
                Shaheer Ahmed
              </td>
              <td className="user_light" align="center">
                {item.freelancerRole}
              </td>
              <td align="center">
                <div className="viewCampaignsBtn">
                  <a href="/">View Campaigns</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserCampaigns;
