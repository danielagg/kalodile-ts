import React from "react";
import { AdItem } from "./state/types";

type AdCardProps = {
  ad: AdItem;
};

const AdCard: React.FC<AdCardProps> = ({ ad }: AdCardProps) => {
  const { name, pricePerDay, type, shortDesc, pictureUrl } = ad;

  return (
    <div className="bg-white shadow relative" style={{ maxWidth: "350px" }}>
      <div
        style={{
          backgroundImage: `url("${pictureUrl}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "350px",
          height: "325px"
        }}
      />

      <div className="p-4">
        <h1 className="mt-2 font-biryani-medium text-2xl">{name}</h1>
        <p>{type}</p>
        <p className="mt-2 text-gray-600">{shortDesc}</p>

        {/* 16 margin bottom to guarantee space for absolute position buttons below */}
        <p className="mt-2 text-xl font-bold mb-6 lg:mb-16">
          ${pricePerDay}/day
        </p>

        <div className="lg:absolute lg:bottom-0 lg:inset-x-0 lg:m-2 lg:flex lg:justify-between">
          <div className="bg-green-400 shadow w-full lg:w-1/2 text-center py-4 lg:mr-1 cursor-pointer">
            <p>Reserve</p>
          </div>
          <div className="bg-gray-400 shadow w-full lg:w-1/2 text-center py-4 lg:ml-1 mt-2 lg:mt-0 cursor-pointer">
            <p>Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
