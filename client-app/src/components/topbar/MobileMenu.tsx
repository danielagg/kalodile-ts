import React from "react";

// Components
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const MobileMenu: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between py-4 px-4">
        <p className="text-2xl font-biryani-bold uppercase">Kalodile</p>
        <i className="fas fa-bars text-xl text-black" />
      </div>
      <div className="flex justify-between border-t border-b bg-gray-100 py-2 px-4">
        <ul>
          <li className="mr-4 inline-block">HU</li>
          <li className="inline-block">
            <ThemeSwitcher />
          </li>
        </ul>
        <ul>
          <li className="mr-4 inline-block">
            <i className="fas fa-search" />
          </li>
          <li className="mr-4 inline-block">
            <i className="fas fa-user" />
          </li>
          <li className="inline-block">
            <i className="fas fa-shopping-cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
