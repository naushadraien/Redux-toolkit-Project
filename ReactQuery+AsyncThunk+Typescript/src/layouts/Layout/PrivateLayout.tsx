import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
// import Sidebar from '../Sidebar';
import { BodyStyled, MainLayoutStyled, MainWrapperStyled } from "./styles";
import { ILayoutProps } from "./type";

export type ILandingPageLayoutProps = ILayoutProps;

const PrivateLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children,
}) => {
  return (
    <MainLayoutStyled>
      <Header />
      <BodyStyled>
        {/* <Sidebar /> */}
        <MainWrapperStyled>{children || <Outlet />}</MainWrapperStyled>
      </BodyStyled>
    </MainLayoutStyled>
  );
};

export default PrivateLayout;
