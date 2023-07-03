import { SearchManufacturer } from "@/components";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "submit" | "button" | "reset";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
