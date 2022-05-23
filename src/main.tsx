import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/Components/App";
import ModalProvider from "@/Components/Modal/ModalProvider";
import ModalRenderer from "@/Components/Modal/ModalRenderer";
import "@/Style/index.css";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <ModalRenderer />
    </ModalProvider>
  </React.StrictMode>,
);
