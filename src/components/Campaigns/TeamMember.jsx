import React from "react";
import "./TeamMember.css";
import dot from "./../../assets/Images/Campaign/dot.svg";
import chat from "./../../assets/Images/Campaign/chat.svg";
import lnkdn from "./../../assets/Images/Campaign/Linkedin.svg";
const TeamMember = ({ name, position, img }) => {
  return (
    <>
      <div className="teamMember">
        <img
          src={dot}
          alt="More options"
          className="teamMemberOption"
          align="right"
        />
        <div className="alignTeamMember">
          <div className="teamMemberImg">
            {img ? (
              <img crossOrigin="anonymous" src={img} alt="userImage" />
            ) : null}
          </div>
          <p className="memberName">{name}</p>
          <p className="memberPosition">{position}</p>
          <div className="memberSocialProfile">
            <img src={lnkdn} alt="LinkedIn profile" />
            <img src={chat} alt="ChatProfile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
