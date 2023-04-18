import React from "react";
import { MovieTDMA } from "../../../../../../../types/Movies-TDMA";

import * as S from "./styles";

const MovieCard: React.FC<{ movie: MovieTDMA }> = ({ movie }) => {

  const average = movie.vote_average / 10 * 100;
  const backgroundColor = `hsl(${average}, 50%, 50%)`;

  return (
    <S.Card>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <S.NoteDisplay color={backgroundColor}>
        {movie.vote_average}
      </S.NoteDisplay>
      
    </S.Card>
  );
};

export default MovieCard;
