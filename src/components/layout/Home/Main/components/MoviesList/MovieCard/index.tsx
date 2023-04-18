import React from 'react';
import * as S from './styles';

import { MovieTDMA } from '../../../../../../../types/Movies-TDMA';
import { ButtonPrimary } from '../../../../../../common/Buttons';


const MovieCard: React.FC<{movie: MovieTDMA}> = ({ movie }) => {

    const average = movie.vote_average / 10 * 100;
    const backgroundColor = `hsl(${average}, 50%, 50%)`;

  return (
  <S.Card>
    <S.LeftContainer>
        <S.Poster 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
        />
        <S.NoteDisplay
            color={backgroundColor}
        >{movie.vote_average.toFixed(1)}</S.NoteDisplay>
    </S.LeftContainer>
    <S.RightContainer>
        <S.Infos>
            <S.Title>{movie.title}</S.Title>
            <S.Overview>{movie.overview}</S.Overview>
        </S.Infos>
            <ButtonPrimary className='rent-button'>Alugar</ButtonPrimary>
    </S.RightContainer>
  </S.Card>
  );
}

export default MovieCard;