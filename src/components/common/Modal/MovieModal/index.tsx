import React, { useCallback, useEffect, useState } from 'react';
import Modal from '..';
import { useTMDA } from '../../../../providers/Movies';
import { MovieTDMA } from '../../../../types/Movies-TDMA';

import * as S from './styles';
import { ButtonPrimary } from '../../Buttons';

import { validateImg } from '../../../../helpers/validateImg';
import { formatData } from "../../../../helpers/formatData"

const MovieModal: React.FC = () => {

    const { setMovieModal, movieModal } = useTMDA()

    const close = () => setMovieModal({ active: false})

  return (
  <Modal
    close={close}
    show={movieModal.active}
  >
    <ModalContent {...movieModal.movie}/>
  </Modal>
  );
}

export default MovieModal;

const ModalContent: React.FC<MovieTDMA> = ({ 
  title, 
  backdrop_path, 
  overview,
  release_date 
}) => {

  const [imgPath, setImgPath] = useState<string>()

    const validate = useCallback(async () => {
        const path = await validateImg(`https://image.tmdb.org/t/p/w500${backdrop_path}`, false)
        setImgPath(path);

    }, [])

    useEffect(() => {
        validate()
    }, [])

    return (
        <S.Root>
            <S.Header>
              <S.Title>{title}</S.Title>
                <S.Backdrop src={imgPath} alt={title}/>
            </S.Header>
            <S.Conetent img={imgPath}>
              <S.Text>{overview}</S.Text>
              <S.Span>Lançamento: {formatData(String(release_date))}</S.Span>
            </S.Conetent>
            <S.Footer>
                <ButtonPrimary>Alugar</ButtonPrimary>
            </S.Footer>
        </S.Root>
    )
}