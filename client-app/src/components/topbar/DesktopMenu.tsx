import React from "react";

// Components
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const DesktopMenu: React.FC = () => {
  const sharedStyleForItems =
    "inline-block main-foreground-color ml-6 px-2 pt-4 pb-2 cursor-pointer";

  return (
    <div className="flex w-4/5 pb-4 mx-auto justify-between">
      <p className="main-foreground-color text-2xl font-biryani-bold mt-4 uppercase cursor-pointer">
        Kalodile
      </p>
      <ul>
        <li className={`${sharedStyleForItems}`}>HU</li>
        <li className={`${sharedStyleForItems}`}>
          <ThemeSwitcher />
        </li>
        <li
          className={`${sharedStyleForItems} font-medium border-t-4`}
          style={{ borderColor: "var(--main-text-color)" }}
        >
          Home
        </li>
        <li className={`${sharedStyleForItems} font-medium`}>View Ads</li>
        <li className={`${sharedStyleForItems} font-medium`}>Create Ad</li>
        <li className={sharedStyleForItems}>
          <i className="fas fa-user" />
        </li>
        <li className={sharedStyleForItems}>
          <i className="fas fa-shopping-cart" />
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
