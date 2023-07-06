import styled from "styled-components";

const MessageBox = ({ children }) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  word-break: break-all;
  width: 100%;
`;

const Box = styled.div`
  padding: 10px 2px 10px 2px;
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
`;

export default MessageBox;
