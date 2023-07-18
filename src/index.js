import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/store";

import "./index.scss";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disabledVendorPrefixes={false}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
