import React, { useEffect } from "react";
import * as S from "./styles";

import {
  InputFormCommon,
  InputFormPassword,
} from "../../../../../common/Input";
import { ButtonPrimary, ButtonSecondary } from "../../../../../common/Buttons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInUserSchema } from "../../../../../../validations/users.validation";

import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../../../providers/Users";

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const redirectToRegister = () => navigate("/auth?action=register");

    const { logIn } = useUsers()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInUserSchema),
  });

  const submit = async (data: any) => {
    await logIn(data);
  }


  return (
    <S.Form onSubmit={handleSubmit(submit)}>
      <S.Title>Login</S.Title>
      <S.ContainerInputs>
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
        <S.Span>Não possui uma conta?</S.Span>
        <ButtonSecondary className="register-button" type="button" onClick={redirectToRegister}>Cadastrar-se</ButtonSecondary>
      </S.BottomContainer>
    </S.Form>
  );
};

export default SignIn;
