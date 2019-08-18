import React from "react";

// Components
import AdCard from "./AdCard";

type AdCardContainerProps = {
  minWidth: string;
};

const AdCardContainer: React.FC<AdCardContainerProps> = ({
  minWidth
}: AdCardContainerProps) => {
  return (
    <div className="">
      <p>{name}</p>
    </div>
  );
};

export default AdCardContainer;
