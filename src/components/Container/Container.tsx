import "./Container.css";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  backgroundColor: string;
}

const Container: React.FC<ContainerProps> = ({ children, backgroundColor }) => {
  return (
    <div className="container" style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default Container;
