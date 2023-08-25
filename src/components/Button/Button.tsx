import "./Button.css";

interface ButtonProps {
  color: string;
  text?: string;
  largeButton?: boolean;
  onclick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ color, text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="button"
      style={{ backgroundColor: color }}
    >
      {text ? text : null}
    </button>
  );
};

export default Button;
