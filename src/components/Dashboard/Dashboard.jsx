import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
import Navbar from "./../Sidebar/Navbar";

import Routing from "../Routes/Routing";

const Dashboard = ({ name, image }) => {
  return (
    <>
      <div className="dashboardContainer">
        <div className="dashboardChild1">
          <Sidebar />
        </div>
        <div className="dashboardChild2">
          <div className="fixNavbar">
            <Navbar name={name} image={image} />
          </div>
          <Routing />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
