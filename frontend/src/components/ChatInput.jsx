import styled from "styled-components";
import send from "../assets/send.svg";
import { useState, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { SERVER } from "../server";
import { useMessage } from "../hooks/useMessage";
import { ACTION } from "../context/messageContext";
import { useSocket } from "../hooks/useSocket";

const ChatInput = ({ bottomRef }) => {
  const [username] = useUser();
  const { dispatch } = useMessage();
  const [message, setMessage] = useState("");
  const socket = useSocket();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messages = { username: username, message: message.trim() };
    const input = document.querySelector("#message");

    if (input.value.trim().length <= 0) {
      setMessage("");
      input.value = "";
      input.focus;
      return;
    }
    const request = await fetch(`${SERVER}/chatroom`, {
      method: "post",
      body: JSON.stringify(messages),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await request.json();

    if (request.ok) {
      setMessage("");
      input.value = "";
      input.focus;
      dispatch({ type: ACTION.CREATE_MESSAGE, payload: json });
      socket.emit("send_message", json);
      setTimeout(() => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type message here"
          id="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">
          <img src={send} />
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 5px 0px;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  form {
    padding: 5px 6px;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
  }
  input[type="text"] {
    outline: none;
    color: black;
    background-color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: sans-serif;
    padding: 10px;
  }
  button {
    width: max-content;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    img {
      width: 40px;
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(73deg)
        brightness(103%) contrast(103%);
    }
  }
`;

export default ChatInput;
