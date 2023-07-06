import { createContext, useReducer } from "react";

export const messageContext = createContext();

export const ACTION = {
  GET_MESSAGES: "get_message",
  CREATE_MESSAGE: "post_message",
  UPDATE_MESSAGE: "update_message",
};

export const messageReducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_MESSAGES:
      return { messages: action.payload };
    case ACTION.CREATE_MESSAGE:
      return { messages: [...state.messages, action.payload] };
    case ACTION.UPDATE_MESSAGE:
      return { messages: [...state.messages, action.payload] };
  }
};

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, {
    messages: null,
  });
  return (
    <messageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </messageContext.Provider>
  );
};
