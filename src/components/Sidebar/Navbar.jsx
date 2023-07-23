import React from "react";
import "./Navbar.css";
import bell from "./../../assets/Images/Navbar/bell.svg";
import date from "./../../assets/Images/Navbar/date.svg";
import profile from "./../../assets/Images/Navbar/profile.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ name, image }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const navigate = useNavigate();
  const d = new Date();
  const todayDate = d.getDate() + " " + monthNames[d.getMonth()];
  const handleNavigation = () => {
    navigate("/notifications");
  };
  return (
    <>
      <div className="containerNavbar">
        <div className="alighNavData">
          <div className="alighNavData">
            <img className="date" src={date} alt="Today's date" />
            <p className="dateDay">{todayDate}</p>
          </div>
          <div className="vl"></div>
          <div className="adminText">
            <p>Hi, {name}!</p>
          </div>
          <div className="vl"></div>
          <div>
            <input
              type="text"
              placeholder="Search campaigns, users..."
              className="searchBar"
            />
          </div>
        </div>
        <div className="alighNavData">
          <div className="bellIcon" onClick={handleNavigation}>
            <img src={bell} alt="Notification icons" />
            {/* <div className="notif"></div> */}
          </div>
          <img src={image} alt="Profile picture" className="profilePicture" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
