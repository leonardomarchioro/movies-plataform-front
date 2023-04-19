import React, { useEffect } from "react";
import * as S from "./styles";

import {
  InputFormCommon,
  InputFormPassword,
} from "../../../../../common/Input";
import { ButtonPrimary, ButtonSecondary } from "../../../../../common/Buttons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateUserSchema } from "../../../../../../validations/users.validation";

import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../../../providers/Users";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const redirectToLogin = () => navigate("/auth?action=sign-in");

  const { registerUser } = useUsers()

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(CreateUserSchema),
});

const submit = async (data: any) => {
  await registerUser(data);
  redirectToLogin()
}


return (
  <S.Form onSubmit={handleSubmit(submit)}>
    <S.Title>Cadastro</S.Title>
    <S.ContainerInputs>
    <InputFormCommon
        label="Nome"
        register={register}
        name={"name"}
        error={errors.name?.message}
        placeholder="Seu nome..."
        className="input"
      />
      <InputFormCommon
        label="Email"
        register={register}
        name={"email"}
        error={errors.email?.message}
        placeholder="Seu email..."
        className="input"
      />
      <InputFormPassword
        label="Senha"
        register={register}
        name={"password"}
        error={errors.password?.message}
        placeholder="Uma senha forte..."
        className="input"
      />
      <ButtonPrimary className="send-button" type="submit">Entrar</ButtonPrimary>
    </S.ContainerInputs>
    <S.Spacer />
    <S.BottomContainer>
      <S.Span>Já possui uma conta?</S.Span>
      <ButtonSecondary className="register-button" type="button" onClick={redirectToLogin}>Cadastrar-se</ButtonSecondary>
    </S.BottomContainer>
  </S.Form>
);}

export default Register;