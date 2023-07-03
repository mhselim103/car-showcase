import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "submit" | "button" | "reset";
}
