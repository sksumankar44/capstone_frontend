// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/reset.css"; // Use the Ant Design CSS reset
import "./index.css"; // Add your custom styles if needed
import { ConfigProvider, App as AntdApp } from "antd"; // Import AntdApp
import enUS from "antd/es/locale/en_US";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <AntdApp>
        {" "}
        {/* Wrap with AntdApp */}
        <App />
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
);
