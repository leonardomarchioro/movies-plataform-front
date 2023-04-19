import React from "react";

import Header from "../components/layout/Login/Header";
import Main from "../components/layout/Login/Main";

import styled from "styled-components";

const Auth: React.FC = () => {
  return (
    <Root>
      <Header />
      <Main />
    </Root>
  );
};

export default Auth;

const Root = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
