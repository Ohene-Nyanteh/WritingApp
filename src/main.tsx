import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
postMessage({ payload: "removeLoading" }, "*");
import App from "./App";
import "./index.css";
import FontContextProvider from "./Utils/FontChange";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FontContextProvider>
      <Router>
        <App />
      </Router>
    </FontContextProvider>
  </React.StrictMode>
);


