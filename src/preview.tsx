import React from "react";
import ReactDOM from "react-dom/client";
import CustomMessage from "./CustomMessage";
import mock from "./mock.json";
import LayoutCanvas from "./core/components/LayoutCanvas";
import ConfigProvider from "./core/components/ConfigProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 120,
        }}
      >
        <iframe
          src={`/demo${location.search}`}
          frameBorder='0'
          style={{
            width: 414,
            height: 750,
            boxShadow: "0 0 12px rgba(0, 0, 0, 0.12)",
          }}
        ></iframe>
      </div>
    ),
  },
  {
    path: "/demo",
    element: (
      <ConfigProvider>
        <LayoutCanvas>
          <CustomMessage content={mock} />
        </LayoutCanvas>
      </ConfigProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
