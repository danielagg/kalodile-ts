import React from "react";

type PrimaryButtonProps = {
  caption: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  caption
}: PrimaryButtonProps) => {
  return (
    <div
      className="primary-button
        inline-block
        px-6 lg:px-12 py-2 lg:py-4
        font-medium lg:text-lg text-black
        bg-gray-100
        cursor-pointer shadow-md
        hover:text-gray-700"
    >
      <p>{caption}</p>
    </div>
  );
};

export default PrimaryButton;
