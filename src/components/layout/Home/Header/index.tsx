import React from "react";
import * as S from "./styles";

import Logo from "../../../common/Logo";
import { ButtonPrimary, ButtonSecondary } from "../../../common/Buttons";

import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../providers/Users";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { profile, token, logOut } = useUsers();

  const signIn = () => {
    navigate("/auth?action=sign-in");
  };

  const register = () => {
    navigate("/auth?action=register");
  };

  const myMovies = () => {
    navigate("/myMovies");
  };

  return (
    <S.Header>
      <Logo />
      {!token ? (
        <S.Container>
          <ButtonPrimary onClick={signIn}>Login</ButtonPrimary>
          <ButtonSecondary onClick={register}>Cadastrar-se</ButtonSecondary>
        </S.Container>
      ) : (
        <S.Container>
          <S.Text>Olá {profile.name}</S.Text>
          <ButtonSecondary className="user-buttons" onClick={myMovies}>Meus Filmes</ButtonSecondary>
          <ButtonSecondary className="user-buttons" onClick={logOut}>Desconectar</ButtonSecondary>
        </S.Container>
      )}
    </S.Header>
  );
};

export default Header;
