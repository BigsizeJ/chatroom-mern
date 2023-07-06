import { useEffect } from "react";
import Chatroom from "./Pages/Chatroom";
import { useUser } from "./hooks/useUser";
import Username from "./Pages/Username";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SERVER } from "./server";
import { ACTION } from "./context/messageContext";
import { useMessage } from "./hooks/useMessage";

const App = () => {
  const [username] = useUser();
  const { dispatch } = useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const Response = async () => {
      const response = await fetch(`${SERVER}/chatroom`);
      const json = await response.json();

      dispatch({ type: ACTION.GET_MESSAGES, payload: json });
    };
    Response();

    username !== null ? navigate("/chatroom") : navigate("/username");
  }, []);

  return (
    <Wrapper>
      <Routes>
        <Route path="/username" element={<Username />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-position: top;
  background-color: #202020;
`;

export default App;
