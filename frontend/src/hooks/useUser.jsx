import { userContext } from "../context/userContext";
import { useContext } from "react";

export const useUser = () => {
  return useContext(userContext);
};
