import React, { useCallback, useEffect, useState } from 'react';
import { MovieTDMA } from '../../../../../types/Movies-TDMA';
import { useTMDA } from '../../../../../providers/Movies';
import MovieCard from './MovieCard';

import * as S from './styles';

const MoviesList: React.FC = () => {

    const { movies } = useTMDA()

  return <S.Container>
    {movies.length ? movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    )) : 
    (
      <S.EmptyContainer>Nenhum filme encontrado</S.EmptyContainer>
    )}
  </S.Container>;
}

export default MoviesList;

