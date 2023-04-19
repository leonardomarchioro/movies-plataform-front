import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';

import { MovieTDMA } from '../../../../../../types/Movies-TDMA';
import { ButtonPrimary } from '../../../../../common/Buttons';
import { useTMDA } from '../../../../../../providers/Movies';
import { validateImg } from '../../../../../../helpers/validateImg';

const MovieCard: React.FC<{movie: MovieTDMA}> = ({ movie }) => {

    const [imgPath, setImgPath] = useState<string>()

    const { setMovieModal } = useTMDA()

    const openModal = () => {
        setMovieModal({
            active: true,
            movie
        })
    }

    const validate = useCallback(async () => {
        const path = await validateImg(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
        setImgPath(path);

    }, [])

    useEffect(() => {
        validate()
    }, [])

  return (
  <S.Card>
    <S.LeftContainer>
        <S.Poster 
            src={imgPath}
            alt={String(movie.title)}
        />
        <S.NoteDisplay
            color={`hsl(${Number(movie.vote_average) / 10 * 100}, 50%, 50%)`}
        >{Number(movie.vote_average).toFixed(1)}</S.NoteDisplay>
    </S.LeftContainer>
    <S.RightContainer>
        <S.Infos>
            <S.Title>{movie.title}</S.Title>
            <S.Overview>{movie.overview}</S.Overview>
        </S.Infos>
            <ButtonPrimary onClick={openModal} className='rent-button'>Alugar</ButtonPrimary>
    </S.RightContainer>
  </S.Card>
  );
}

export default MovieCard;