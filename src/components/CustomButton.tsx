"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  className,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  console.log(className);

  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
