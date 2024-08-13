import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  backgroud-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 05px #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name"></Input>
      </InputArea>

      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email"></Input>
      </InputArea>

      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone"></Input>
      </InputArea>

      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date"></Input>
      </InputArea>
    </FormContainer>
  );
};

export default Form;
