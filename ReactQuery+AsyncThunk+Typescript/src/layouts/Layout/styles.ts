import { styled } from "styled-components";

export const MainLayoutStyled = styled.div``;

export const NoLayoutStyled = styled.div``;

export const BodyStyled = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 60px);
  position: relative;
  background-color: #f8f8f9;
`;

export const MainWrapperStyled = styled.main<{
  $isPublic?: boolean;
  $noPadding?: boolean;
}>`
  width: 100%;
  padding: ${({ $noPadding }) =>
    $noPadding ? "0px 0px 0px 0px" : "12px 30px 12px 150px"};
  flex: 1;
  padding-left: "50px";
`;
