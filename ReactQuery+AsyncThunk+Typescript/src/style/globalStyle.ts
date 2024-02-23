import { createGlobalStyle } from "styled-components";

import CSSReset from "./CSSReset";
import { scrollCss } from "./reusableStyle";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${CSSReset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background: #fcfcfc;
    /* font-family: 'Libre Franklin', Open-Sans, Helvetica, Sans-Serif; */
    font-family: "Roboto", Open-Sans, Helvetica, Sans-Serif;
    color: ${({ theme }) => theme.colors.normalText};
    font-size: ${({ theme }) => theme?.sizes.sm};
    font-weight: ${({ theme }) => theme?.fontWeights.medium};

    ${scrollCss}
  }
`;

export default GlobalStyle;
