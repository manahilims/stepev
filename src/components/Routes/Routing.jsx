import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./../Users/Users";
import UserProfile from "../Users/UserProfile";
import Campaigns from "../Campaigns/Campaigns";
import Wallet from "../Wallet/Wallet";
import FundProcessing from "../Funds Processing/FundProcessing";
import Warnings from "./../Warnings/Warning";
import TeamRemoval from "../Warnings/TeamRemoval";
import Skill from "../Skills/Skill";
import Setting from "../Setting/Setting";
import AdminNotification from "./../Notifications/AdminNotification";
import CampaignInfo from "./../Campaigns/CampaignInfo";
import Login from "../Login/Login";
import DashboardStats from "./../Dashboard/DashboardStats";
import Dashboard from "../Dashboard/Dashboard";
import Earnings from "../Earnings/Earnings";
import Category from "../Categories/Category";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<DashboardStats />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/user-profile" element={<UserProfile />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/campaign" element={<CampaignInfo />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/fund-processing" element={<FundProcessing />} />
        <Route path="/warnings" element={<Warnings />} />
        <Route path="/team-removal" element={<TeamRemoval />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/notifications" element={<AdminNotification />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </>
  );
};

export default Routing;
