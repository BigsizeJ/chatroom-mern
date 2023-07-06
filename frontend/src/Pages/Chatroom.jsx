import styled from "styled-components";
import { useEffect, useRef } from "react";
import MessageBox from "../components/MessageBox";
import Message from "../components/Message";
import { useMessage } from "../hooks/useMessage";
import { useUser } from "../hooks/useUser";
import ChatInput from "../components/ChatInput";
import { ACTION } from "../context/messageContext";
import UserMessage from "../components/UserMessage";
import { useSocket } from "../hooks/useSocket";

const Chatroom = () => {
  const { messages, dispatch } = useMessage();
  const [username] = useUser();
  const socket = useSocket();
  const bottom = useRef();

  useEffect(() => {
    setTimeout(() => {
      bottom.current.scrollIntoView({ behaviour: "smooth" });
    }, 100);
    const receivedHandler = (data) => {
      dispatch({ type: ACTION.UPDATE_MESSAGE, payload: data });
      setTimeout(() => {
        bottom.current.scrollIntoView({ behaviour: "smooth" });
      }, 100);
    };
    socket.on("received_message", receivedHandler);

    return () => {
      socket.off("received_message", receivedHandler);
    };
  }, [socket]);

  return (
    <Wrapper>
      <MessageBox>
        {messages &&
          messages.map((message) => {
            if (username === message.user) {
              return <UserMessage key={message._id} data={message} />;
            } else {
              return <Message key={message._id} data={message} />;
            }
          })}
        <div ref={bottom}></div>
      </MessageBox>
      <ChatInput bottomRef={bottom} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.01)
  );
  backdrop-filter: blur(50px);

  border: 1px solid;
`;

export default Chatroom;
