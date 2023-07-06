import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./stylesheets/index.css";
import "./stylesheets/normalize.css";
import { UserProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
import { MessageProvider } from "./context/messageContext";
import { SocketProvider } from "./context/socketContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <UserProvider>
      <MessageProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </MessageProvider>
    </UserProvider>
  </BrowserRouter>
);
