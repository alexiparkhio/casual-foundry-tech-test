import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeoLocationProvider } from "./components/ctx/GeoLocationProvider";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GeoLocationProvider>
      <App />
    </GeoLocationProvider>
  </React.StrictMode>
);
