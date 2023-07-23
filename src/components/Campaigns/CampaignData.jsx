import React from "react";
import "./CampaignData.css";
const CampaignData = ({ title, info, type }) => {
  return (
    <>
      <div className="campaignInfo">
        <p className="campaignInfoTitle">{title}</p>

        {type === 1 ? (
          <p className="campaignBold">{info}</p>
        ) : (
          <p className="campaignInfoData">{info}</p>
        )}
      </div>
    </>
  );
};

export default CampaignData;
