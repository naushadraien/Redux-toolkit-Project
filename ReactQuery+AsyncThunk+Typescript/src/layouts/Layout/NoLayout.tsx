import React from "react";
import { Outlet } from "react-router-dom";

import { ILayoutProps } from "./type";

export type INoLayoutProps = ILayoutProps;

const NoLayout: React.FunctionComponent<INoLayoutProps> = ({ children }) => {
  return (
    <div>
      {" "}
      {children} || <Outlet />
    </div>
  );
};

export default NoLayout;
