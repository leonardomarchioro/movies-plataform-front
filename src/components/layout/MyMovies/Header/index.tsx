import React from "react";

import * as S from "./styles";
import Logo from "../../../common/Logo";
import { ButtonSecondary } from "../../../common/Buttons";
import { useUsers } from "../../../../providers/Users";

const Header: React.FC = () => {
  const { logOut } = useUsers();

  return (
    <S.Header>
      <Logo />
      <S.Container>
        <ButtonSecondary onClick={logOut}>Desconectar</ButtonSecondary>
      </S.Container>
    </S.Header>
  );
};

export default Header;
