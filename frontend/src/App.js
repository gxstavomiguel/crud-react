import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getUsers } from "../../api/controllers/users.js";

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
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUser = async () => {
    try {
      console.log("Iniciando a requisição");
      const res = await axios.get("http://localhost:8800"); // Verifique se a URL está correta
      console.log("Dados recebidos:", res.data);
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      toast.error("Erro ao buscar dados: " + error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []); // Dependências vazias para rodar apenas uma vez

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users}  setUsers={setUsers} setOnEdit={setOnEdit}/>
        <ToastContainer autoClose={3000} position="bottom-left" />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
