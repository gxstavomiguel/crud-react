import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto; /* Centraliza horizontalmente com margens automáticas */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  text-align: center; /* Centraliza o texto do título */
`;

function App() {
  return (
    <>
      <Title>USUÁRIOS</Title>
      <Form />
      <Container>
        {/* Outros componentes ou conteúdo podem ir aqui */}
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
