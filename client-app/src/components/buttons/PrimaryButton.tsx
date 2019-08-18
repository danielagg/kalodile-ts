import React from "react";

type PrimaryButtonProps = {
  caption: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  caption
}: PrimaryButtonProps) => {
  return (
    <div className="inline-block px-6 lg:px-12 py-2 lg:py-4 font-medium lg:text-lg text-black bg-gray-100 cursor-pointer hover:text-blue-800">
      <p>{caption}</p>
    </div>
  );
};

export default PrimaryButton;
