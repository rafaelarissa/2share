import styled from "styled-components";

const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 800px;
  margin: 0 auto;
`;

const TitleScreen = styled.div`
  display: flex;
  margin: 50px;
`;

const Input = styled.input`
  width: 80%;
  height: 5%;
  padding: 12px;

  border-radius: 10px;
  border: 1px;
  background-color: rgba(255, 255, 255, 0.16);

  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export { Container, TitleScreen, Input };
