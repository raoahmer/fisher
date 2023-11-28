import React from "react";
import '../../src/App.css';

const CustomButton = ({ buttonText, width, height, fontsize }) => {
  const buttonStyles = `w-[${width}] h-[${height}] bg-[#FFEB37] rounded-[220px] text-[${fontsize}] text-[#A4B8FF] font-extrabold`;

  return (
    <button className={buttonStyles}>
      {buttonText}
    </button>
  );
};

export default CustomButton;