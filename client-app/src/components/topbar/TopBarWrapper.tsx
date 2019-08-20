import React from "react";

// Components
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const TopBarWrapper: React.FC = () => {
  return (
    <>
      <div className="block lg:hidden main-background-color">
        <MobileMenu />
      </div>
      <div className="hidden lg:block main-background-color">
        <DesktopMenu />
      </div>
    </>
  );
};

export default TopBarWrapper;
