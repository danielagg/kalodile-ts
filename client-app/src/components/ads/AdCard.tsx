import React from "react";
import { AdItem } from "./state/types";

type AdCardProps = {
  ad: AdItem;
};

const AdCard: React.FC<AdCardProps> = ({ ad }: AdCardProps) => {
  const {
    id,
    name,
    pricePerDay,
    pricePerMonth,
    pricePerWeek,
    type,
    shortDesc,
    pictureUrl
  } = ad;

  return (
    <div className="bg-white shadow" style={{ maxWidth: "350px" }}>
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
        <p>{name}</p>
        <p>{pricePerDay}</p>
        <p>{type}</p>
        <p>{shortDesc}</p>
      </div>
    </div>
  );
};

export default AdCard;
