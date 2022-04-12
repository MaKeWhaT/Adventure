import React from "react";
import ReactDOM from "react-dom";
import App from "@/Components/App";
import ModalProvider from "@/Components/Modal/ModalProvider";
import ModalRenderer from "@/Components/Modal/ModalRenderer";
import "@/Style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <ModalRenderer />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
