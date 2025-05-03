// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "uikit/dist/css/uikit.min.css";
// import UIkit from "uikit";
// import Icons from "uikit/dist/js/uikit-icons";
import "./index.scss";
// UIkit.use(Icons);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
