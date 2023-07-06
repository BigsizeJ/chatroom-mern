import styled from "styled-components";
import Form from "../components/Form";

const Username = () => {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Username;
