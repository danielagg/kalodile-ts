import React from "react";
import { AdItem } from "./state/types";

type AdCardProps = {
  ad: AdItem;
};

const AdCard: React.FC<AdCardProps> = ({ ad }: AdCardProps) => {
  const { name, pricePerDay, type, shortDesc, pictureUrl } = ad;

  const linkStyles =
    "-mx-6 -mb-2 px-6 py-2 cursor-pointer inline font-medium text-indigo-600 hover:text-indigo-800 hover:bg-gray-200 uppercase";

  return (
    <div
      className="bg-white shadow relative self-start"
      style={{ maxWidth: "350px" }}
    >
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

      <div className="py-4 px-6">
        <h1 className="mt-2 font-biryani-medium text-2xl">{name}</h1>
        <p>{type}</p>
        <p className="mt-2 text-gray-600">{shortDesc}</p>

        {/* 12 margin bottom to guarantee space for absolute position buttons below */}
        <p className="mt-4 text-xl font-bold mb-2 lg:mb-12 border-b pb-4">
          ${pricePerDay}/day
        </p>

        <div className="lg:absolute lg:bottom-0 lg:inset-x-0 lg:mx-6 lg:mb-6 flex justify-between">
          <p className={`${linkStyles}`}>Reserve</p>
          <p className={`${linkStyles} text-right`}>Details</p>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
