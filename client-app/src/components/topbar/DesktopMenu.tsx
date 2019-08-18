import React from "react";

const DesktopMenu: React.FC = () => {
  return (
    <div className="flex w-4/5 py-4 mx-auto justify-between">
      <p className="text-2xl font-biryani-bold uppercase">Kalodile</p>
      <ul>
        <li className="inline-block">HU</li>
        <li className="inline-block ml-4">
          <i className="fas fa-moon" />
        </li>
        <li className="inline-block ml-12 font-medium">Home</li>
        <li className="inline-block ml-6 font-medium">View Ads</li>
        <li className="inline-block ml-6 font-medium">Create Ad</li>
        <li className="inline-block ml-12">
          <i className="fas fa-user" />
        </li>
        <li className="inline-block ml-4">
          <i className="fas fa-shopping-cart" />
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
