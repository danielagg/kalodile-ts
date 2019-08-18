import React from "react";

type AdCardProps = {
  name: string;
};

const AdCard: React.FC<AdCardProps> = ({ name }: AdCardProps) => {
  return (
    <div className="bg-blue-200 p-4">
      <p>{name}</p>
    </div>
  );
};

export default AdCard;
