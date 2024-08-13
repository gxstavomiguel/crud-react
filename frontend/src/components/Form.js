import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff; /* Correção do erro de digitação */
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc; /* Ajuste na sombra */
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; /* Adiciona espaçamento entre campos */
`;

const Input = styled.input`
  width: 200px; /* Aumenta o tamanho para melhor usabilidade */
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: green; /* Correção do erro de digitação */
  color: white; /* Altera a cor do texto para branco para contraste */
  height: 42px;
  z-index: 9999;
`;

const Label = styled.label``;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios 
        .put("https:/localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.values
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data}) => toast.error(data))
    } else {
      await axios 
        .post("https:/localhost:8800/", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.values
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data}) => toast.error(data))
    }

    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";
    user.data_nascimento.value = "";

    setOnEdit(null);
    getUsers()
  };

  return (
    <FormContainer ref={ref} onSudmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" />
      </InputArea>

      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>

      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>

      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};


export default Form;
