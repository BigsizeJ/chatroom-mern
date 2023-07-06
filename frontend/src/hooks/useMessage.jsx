import { useContext } from "react";
import { messageContext } from "../context/messageContext";

export const useMessage = () => {
  return useContext(messageContext);
};
