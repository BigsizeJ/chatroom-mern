import { socketContext } from "../context/socketContext";
import { useContext } from "react";

export const useSocket = () => {
  return useContext(socketContext);
};
