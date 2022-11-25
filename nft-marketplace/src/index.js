import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>
);
