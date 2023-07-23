import React from "react";
import "./SidebarItems.css";
import { HashLink as NavLink } from "react-router-hash-link";

const SidebarItems = ({ icon, label, active, notification, number, route }) => {
  return (
    <>
      <div>
        <NavLink
          className={active ? "sidebarItem active link" : "sidebarItem link"}
          to={route}
        >
          <div className="purpleDot"></div>
          <img src={icon} alt="Menu icon" />
          <p>{label}</p>
          {notification ? <div className="alert">{number}</div> : null}
        </NavLink>
      </div>
    </>
  );
};

export default SidebarItems;
