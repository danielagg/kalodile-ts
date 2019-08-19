import React from "react";

// Components
import TopBarWrapper from "../topbar/TopBarWrapper";
import CallToActionBanner from "./CallToActionBanner";
import ShortAboutUs from "./ShortAboutUs";
import AdCardContainer from "../ads/AdCardContainer";

const LandingWrapper: React.FC = () => {
  return (
    <>
      <TopBarWrapper />
      <CallToActionBanner />
      <div className="w-4/5 mx-auto lg:py-12">
        <ShortAboutUs />
      </div>

      <div className="bg-gray-200 py-12">
        <h1 className="text-center font-biryani-medium text-2xl lg:text-4xl mt-2 mb-8 text-gray-500">
          Recent Ads
        </h1>
        <AdCardContainer />
      </div>
    </>
  );
};

export default LandingWrapper;
