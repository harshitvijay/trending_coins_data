import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CryptoContext from "./Context/CryptoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CryptoContext>
        <App />
      </CryptoContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
