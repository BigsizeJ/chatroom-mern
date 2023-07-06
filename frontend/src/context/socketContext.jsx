import io from "socket.io-client";
import { createContext } from "react";
import { SERVER } from "../server";

export const socketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io.connect(SERVER);
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};
