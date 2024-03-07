import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ConfigProvider from "../components/ConfigProvider/index.tsx";
import LayoutCanvas from "../components/LayoutCanvas/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <LayoutCanvas>
        <App />
      </LayoutCanvas>
    </ConfigProvider>
  </React.StrictMode>
);
