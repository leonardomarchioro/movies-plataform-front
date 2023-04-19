import React from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {

  const navigate = useNavigate()
  const goHome = () => {
    navigate("/");
  };

  return <S.Logo onClick={goHome}>
    Movies
  </S.Logo>;
}

export default Logo;