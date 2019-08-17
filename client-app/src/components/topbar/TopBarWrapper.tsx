import React from "react";

// Components
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const TopBarWrapper: React.FC = () => {
  return (
    <>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
    </>
  );
};

export default TopBarWrapper;
