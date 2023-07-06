import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  return (
    <userContext.Provider value={[username, setUsername]}>
      {children}
    </userContext.Provider>
  );
};
