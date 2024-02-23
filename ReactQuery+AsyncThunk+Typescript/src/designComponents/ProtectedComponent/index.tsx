import React from "react";
import { Outlet } from "react-router-dom";

export interface IProtectedComponentProps {
  children: React.ReactNode;
  allowed?: string[];
}

const ProtectedComponent: React.FC<IProtectedComponentProps> = ({
  children,
  //   allowed = [],
}) => {
  return (
    <div>
      {children} || <Outlet />
    </div>
  );
};

export default ProtectedComponent;
