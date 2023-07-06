import styled from "styled-components";

const Message = ({ data }) => {
  return (
    <Wrapper>
      <p className="user">{data.user}</p>
      <p className="message">{data.message}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 5px;
  width: fit-content;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  .user {
    color: whitesmoke;
    padding: 2px 5px;
    font-size: 1.1rem;
  }
  .message {
    color: black;
    text-shadow: 0px 0px 1px black;
    font-size: 1.3rem;
    padding: 10px;
    border-radius: 1.2rem;
    border-top-left-radius: 1px;
    background-color: whitesmoke;
  }
`;

export default Message;
