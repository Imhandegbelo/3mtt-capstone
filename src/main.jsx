import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from "react-head";
import "./index.css";
import NiceModal from "@ebay/nice-modal-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeadProvider>
        {/* <NiceModal.Provider> */}
        <App />
        <ToastContainer />
        {/* </NiceModal.Provider> */}
      </HeadProvider>
    </BrowserRouter>
  </React.StrictMode>
);
