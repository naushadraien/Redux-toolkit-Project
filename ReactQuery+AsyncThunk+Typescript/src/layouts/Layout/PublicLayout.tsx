import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import { BodyStyled, MainLayoutStyled, MainWrapperStyled } from "./styles";
import { ILayoutProps } from "./type";

export type ILandingPageLayoutProps = ILayoutProps;

const LandingPageLayout: React.FunctionComponent<ILandingPageLayoutProps> = ({
  children,
}) => {
  return (
    <MainLayoutStyled>
      <Header />
      <BodyStyled>
        <MainWrapperStyled $isPublic>
          {children || <Outlet />}
        </MainWrapperStyled>
      </BodyStyled>
    </MainLayoutStyled>
  );
};

export default LandingPageLayout;
