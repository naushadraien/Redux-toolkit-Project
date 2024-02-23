import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import React from "react";
const ErrorBoundaryStyled = styled.div`
  background: ${({ theme }) => theme?.colors.red.faded};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorBoundary = () => {
  const error = useRouteError() as { message: string };

  return (
    <ErrorBoundaryStyled>
      <h4>Error Occured :</h4>
      <caption>{error?.message}</caption>
    </ErrorBoundaryStyled>
  );
};

export default ErrorBoundary;
