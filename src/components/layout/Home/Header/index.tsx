import React from "react";
import * as S from "./styles";

import Logo from "../../../common/Logo";
import { ButtonPrimary, ButtonSecondary } from "../../../common/Buttons"

const Header: React.FC = () => {
  return (
    <S.Header>
      <Logo />
      <S.ButtonsContainer>
        <ButtonPrimary>Login</ButtonPrimary>
        <ButtonSecondary>Cadastrar-se</ButtonSecondary>
      </S.ButtonsContainer>
    </S.Header>
  );
};

export default Header;
