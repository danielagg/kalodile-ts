import React from "react";

export enum PrimaryButtonStyle {
  White,
  Red
}

type PrimaryButtonProps = {
  caption: string;
  customCss?: string;
  style: PrimaryButtonStyle;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  caption,
  customCss,
  style
}: PrimaryButtonProps) => {
  const getBackgroundStyle = () => {
    const defaultStyle = "bg-gray-100 hover:text-gray-700";

    switch (style) {
      case PrimaryButtonStyle.White:
        return defaultStyle;
      case PrimaryButtonStyle.Red:
        return "red-gradient hover:text-white text-black";
      default:
        return defaultStyle;
    }
  };

  return (
    <div
      className={`${customCss} ${getBackgroundStyle()} primary-button
    rounded-full
    px-6 lg:px-12 py-2 lg:py-4
    font-medium lg:text-lg text-black
    cursor-pointer shadow-md
    `}
    >
      <p>{caption}</p>
    </div>
  );
};

export default PrimaryButton;
