import React, { useState } from "react";
import "./TeamRoles.css";
import check from "./../../assets/Images/Campaign/check.svg";
import arrow from "./../../assets/Images/Campaign/arrow.svg";
const TeamRoles = ({ role, description }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="team_role_data">
        <div
          className="teamRolesTitle"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="alignTeamRoles">
            <img src={check} alt="" className="checkImg" />
            <p>{role}</p>
          </div>
          <img src={arrow} alt="" className="arrow" />
        </div>
        <hr />
        {show ? <p className="roleInfo">{description}</p> : null}
      </div>
    </>
  );
};

export default TeamRoles;
