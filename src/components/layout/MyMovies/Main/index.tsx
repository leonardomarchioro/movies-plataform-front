import React from "react";

import * as S from "./styles";
import MovieCard from "./MovieCard";
import { MovieTDMA } from "../../../../types/Movies-TDMA";
import { useRents } from "../../../../providers/Rent";

const Main: React.FC = () => {
  const { rentMovies } = useRents();
console.log({ rentMovies });
  return (
    <S.Container>
      {rentMovies.length ? (
        rentMovies.map((movie: MovieTDMA) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <S.EmptyContainer>Você não tem nenhum filme alugado</S.EmptyContainer>
      )}
    </S.Container>
  );
};

export default Main;
