import React, { useCallback, useEffect, useState } from 'react';
import { MovieTDMA } from '../../../../../types/Movies-TDMA';
import { useTMDA } from '../../../../../providers/Movies';
import MovieCard from './MovieCard';

import * as S from './styles';

const MoviesList: React.FC = () => {

    const { movies } = useTMDA()
  return <S.Container>
    {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
    ))}
  </S.Container>;
}

export default MoviesList;