import styled from "styled-components";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../server";

const Form = () => {
  const [username, setUsername] = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length <= 0) {
      alert("Please enter your name");
      return;
    }
    const user = { username: username };
    const request = await fetch(`${SERVER}/username`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    request.ok ? navigate("/chatroom") : navigate("/username");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label>Enter username to enter on chatroom</label>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          minLength="4"
          maxLength="12"
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <input type="submit" value="Enter" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 50px;
  gap: 20px;
  color: white;
  letter-spacing: 2px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  label {
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: 700;
  }
  input[type="text"] {
    font-family: sans-serif;
    padding: 10px 8px;
    font-size: 1.8rem;
    border: none;
    border-radius: 5px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 10px rgba(150, 150, 255, 1);
    }
  }
  div {
    display: grid;
    gap: 10px;
    grid-auto-flow: column;
    input[type="submit"] {
      font-family: sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.3rem;
      background-color: #392f71;
      border: none;
      border-radius: 2px;
      color: white;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 200ms background-color ease-in-out;
      &:hover {
        background-color: #392f7193;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    label {
      font-size: 1.3rem;
    }
    input[type="text"] {
      font-family: sans-serif;
      padding: 10px 8px;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
    }
    div {
      display: flex;
      flex-direction: column;
      input[type="submit"] {
        font-size: 1.1rem;
        padding: 10px;
      }
    }
  }
`;

export default Form;
