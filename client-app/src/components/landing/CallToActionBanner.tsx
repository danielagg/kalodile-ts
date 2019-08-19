import React from "react";

// Components
import PrimaryButton, { PrimaryButtonStyle } from "../buttons/PrimaryButton";

const CallToActionBanner: React.FC = () => {
  return (
    <>
      <div className="landing-container p-6 text-center">
        <div className="text-white py-2 lg:py-24">
          <h1 className="mt-4 text-2xl lg:text-6xl font-medium">
            Got a gig but no gear?
          </h1>
          <h1 className="text-xl lg:text-4xl font-medium">
            Wanna try it before buying it?
          </h1>
          <p className="mt-4 lg:text-xl">
            With Kalodile, you can rent any equipment, or offer your own. You
            specify when and for how much.
          </p>
          <div className="mt-4 lg:mt-8 lg:flex lg:justify-center">
            <PrimaryButton
              caption={"View ads"}
              customCss={"lg:mr-2"}
              style={PrimaryButtonStyle.White}
            />
            <PrimaryButton
              caption={"Post ad"}
              customCss={"lg:ml-2 mt-4 lg:mt-0"}
              style={PrimaryButtonStyle.Red}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionBanner;
