import React from "react";

import * as S from "./styles";
import useQuery from "../../../../hooks/useQuery";
import SignIn from "./Forms/SignIn";
import Register from "./Forms/Register";

const Main: React.FC = () => {

    const query = useQuery();
    const action = query.get('action');

  return (
    <S.Container>
        {action === "sign-in" ? <SignIn/> : <Register />}
    </S.Container>
  );
};

export default Main;
