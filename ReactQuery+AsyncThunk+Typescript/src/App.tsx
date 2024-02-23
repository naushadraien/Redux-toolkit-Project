import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import RootProvider from "./context/RootProvider";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <RootProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Outlet />
        </ThemeProvider>
      </Provider>
    </RootProvider>
  );
}

export default App;
