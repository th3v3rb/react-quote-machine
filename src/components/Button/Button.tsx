import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  color: string;
  text?: string;
  icon?: ReactNode;
  largeButton?: boolean;
  onclick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  icon,
  largeButton,
  onclick,
}) => {
  return (
    <button
      onClick={onclick}
      className="button"
      style={{ backgroundColor: color, width: largeButton ? "25vw" : "5vw" }}
    >
      {icon ? icon : null}
      {text ? text : null}
    </button>
  );
};

export default Button;
