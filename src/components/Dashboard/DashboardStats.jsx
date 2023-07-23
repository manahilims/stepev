import React from "react";
import "./DashboardStats.css";
import Heading from "./../Reusable/Heading";
import campaign from "./../../assets/Images/Dashboard/campaign.svg";
import active from "./../../assets/Images/Dashboard/active.svg";
import suspend from "./../../assets/Images/Dashboard/suspend.svg";
import wait from "./../../assets/Images/Dashboard/wait.svg";
import cash from "./../../assets/Images/Dashboard/cash.svg";
import unapproved from "./../../assets/Images/Dashboard/unaproved.svg";
import people from "./../../assets/Images/Dashboard/people.svg";
import warn from "./../../assets/Images/Dashboard/warning.svg";
import Stats from "./../Reusable/Stats";

const DashboardStats = () => {
  return (
    <>
      <div className="alignBoxes">
        <Heading title="Campaigns Stats" />
        <div className="statsBox">
          <Stats
            icon={campaign}
            number={50}
            heading="Total campaigns"
            className="statsBoxAlign"
          />
          <Stats
            icon={active}
            number={5}
            heading="Active campaigns"
            className="statsBoxAlign"
          />
          <Stats
            icon={suspend}
            number={10}
            heading="Suspended"
            className="statsBoxAlign"
          />
          <Stats
            icon={wait}
            number={2}
            heading="To be approved"
            className="statsBoxAlign"
          />
        </div>
      </div>
      <div className="alignBoxes">
        <Heading title="Freelancer Stats" />
        <div className="statsBox">
          <Stats
            icon={people}
            number={500}
            heading="Total Freelancers"
            className="statsBoxAlign"
          />
          <Stats
            icon={active}
            number={400}
            heading="Active Freelancers"
            className="statsBoxAlign"
          />
          <Stats
            icon={suspend}
            number={5}
            heading="Suspended"
            className="statsBoxAlign"
          />
          <Stats
            icon={unapproved}
            number={5}
            heading="Unapproved"
            className="statsBoxAlign"
          />
        </div>
      </div>
      <div className="alignBoxes">
        <Heading title="Others" />
        <div className="statsBox">
          <Stats
            icon={warn}
            number={20}
            heading="Warnings"
            className="statsBoxAlign"
          />
          <Stats
            icon={cash}
            number={5}
            heading="New Clearance"
            className="statsBoxAlign"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
