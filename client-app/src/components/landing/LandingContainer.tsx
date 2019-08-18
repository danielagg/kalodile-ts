import React from "react";

// Components
import PrimaryButton from "../buttons/PrimaryButton";

const LandingContainer: React.FC = () => {
  return (
    <div className="landing-container p-6 text-center">
      <div className="text-white lg:py-12">
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
        <div className="mt-4 lg:mt-8">
          <PrimaryButton caption={"View ads"} />
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
