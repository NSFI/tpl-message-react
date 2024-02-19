import React from "react";
import ReactDOM from "react-dom/client";
import CustomMessage from "./CustomMessage";
import mock from "./mock.json";
import LayoutCanvas from "./components/LayoutCanvas";
import ConfigProvider from "./components/ConfigProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <LayoutCanvas>
        <CustomMessage content={mock} />
      </LayoutCanvas>
    </ConfigProvider>
  </React.StrictMode>
);
