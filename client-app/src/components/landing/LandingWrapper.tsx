import React from "react";

// Components
import TopBarWrapper from "../topbar/TopBarWrapper";
import CallToActionBanner from "./CallToActionBanner";
import AdCardContainer from "../ads/AdCardContainer";

const LandingWrapper: React.FC = () => {
  return (
    <>
      <TopBarWrapper />
      <CallToActionBanner />
      <div className="bg-gray-200 py-12">
        <AdCardContainer minWidth={200} />
      </div>
    </>
  );
};

export default LandingWrapper;
