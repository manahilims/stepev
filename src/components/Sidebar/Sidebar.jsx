import React, { useState } from "react";
import "./Sidebar.css";
import campaign from "./../../assets/Images/campaign.svg";
import cash from "./../../assets/Images/cash.svg";
import logo from "./../../assets/Images/logo.png";
import overview from "./../../assets/Images/overview.svg";
import wallet from "./../../assets/Images/wallet.svg";
import warn from "./../../assets/Images/warn.svg";
import user from "./../../assets/Images/User.svg";
import logout from "./../../assets/Images/logout.svg";
import profile from "./../../assets/Images/profile.svg";
import skills from "./../../assets/Images/skill.svg";
import settings from "./../../assets/Images/setting.svg";
import dotted from "./../../assets/Images/dotted.svg";
import earn from "./../../assets/Images/Earnings/earning.svg";
import SidebarItems from "../Reusable/SidebarItems";
import { HashLink as NavLink } from "react-router-hash-link";

const Sidebar = () => {
  const [overviews, setOverviews] = useState(true);
  const [users, setUsers] = useState(false);
  const [campaigns, setCampaigns] = useState(false);
  const [wallets, setWallets] = useState(false);
  const [funds, setFunds] = useState(false);
  const [warning, setWarning] = useState(false);
  const [skill, setSkill] = useState(false);
  const [setting, setSetting] = useState(false);
  const [earning, setEarning] = useState(false);
  const [category, setCategory] = useState(false);

  const handleOverview = () => {
    setOverviews(true);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setEarning(false);
    setCategory(false);
  };
  const handleUser = () => {
    setOverviews(false);
    setUsers(true);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setCategory(false);
    setSetting(false);
    setEarning(false);
  };
  const handleCampaign = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(true);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setCategory(false);
    setEarning(false);
  };
  const handleWallet = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(true);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setCategory(false);
    setEarning(false);
  };
  const handleFund = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(true);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setCategory(false);
    setEarning(false);
  };
  const handleWarning = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(true);
    setSkill(false);
    setSetting(false);
    setCategory(false);
    setEarning(false);
  };
  const handleSkill = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(true);
    setSetting(false);
    setCategory(false);
    setEarning(false);
  };
  const handleSetting = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(true);
    setCategory(false);
    setEarning(false);
  };
  const handleEarning = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setCategory(false);
    setEarning(true);
  };
  const handleCategory = () => {
    setOverviews(false);
    setUsers(false);
    setCampaigns(false);
    setWallets(false);
    setFunds(false);
    setWarning(false);
    setSkill(false);
    setSetting(false);
    setCategory(true);
    setEarning(false);
  };

  return (
    <>
      <div className="sidebarContainer">
        <img src={logo} alt="logo" className="logo imgCenter" />
        <div>
          <a href="" className="removeUnderline" onClick={handleOverview}>
            <SidebarItems
              notification={false}
              icon={overview}
              label="Overview"
              className="sideItem"
              active={overviews}
              route={"/"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleUser}>
            <SidebarItems
              notification={true}
              icon={user}
              label="User"
              className="sideItem"
              number={6}
              active={users}
              route={"/users"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleCampaign}>
            <SidebarItems
              notification={true}
              icon={campaign}
              label="Campaigns"
              className="sideItem"
              number={6}
              active={campaigns}
              route={"/campaigns"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleWallet}>
            <SidebarItems
              notification={true}
              icon={wallet}
              label="Wallet"
              className="sideItem"
              number={4}
              active={wallets}
              route={"/wallet"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleEarning}>
            <SidebarItems
              notification={true}
              icon={earn}
              label="Earnings"
              className="sideItem"
              number={4}
              active={earning}
              route={"/earnings"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleFund}>
            <SidebarItems
              notification={true}
              icon={cash}
              label="Fund Processing"
              className="sideItem"
              number={9}
              active={funds}
              route={"/fund-processing"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleWarning}>
            <SidebarItems
              notification={true}
              icon={warn}
              label="Warnings"
              className="sideItem"
              number={9}
              active={warning}
              route={"/warnings"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleSkill}>
            <SidebarItems
              notification={false}
              icon={skills}
              label="Skills"
              className="sideItem"
              number={9}
              active={skill}
              route={"/skills"}
            />
          </a>
          <a href="" className="removeUnderline" onClick={handleCategory}>
            <SidebarItems
              notification={false}
              icon={skills}
              label="Categories"
              className="sideItem"
              number={9}
              active={category}
              route={"/categories"}
            />
          </a>
          <div className="dottedAlign">
            <img className="dottedImg " src={dotted} alt="" />
          </div>

          <div>
            <a href="" className="removeUnderline" onClick={handleSetting}>
              <SidebarItems
                notification={false}
                icon={settings}
                label="Settings"
                route={"/settings"}
                active={setting}
              />
            </a>
          </div>
          <div className="logoutSideBtn">
            <SidebarItems icon={logout} label="Logout" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
