import React, { useCallback, useEffect, useState } from 'react';
import Modal from '..';
import { useTMDA } from '../../../../providers/Movies';
import { MovieTDMA } from '../../../../types/Movies-TDMA';

import * as S from './styles';
import { ButtonPrimary } from '../../Buttons';

import { validateImg } from '../../../../helpers/validateImg';
import { formatData } from "../../../../helpers/formatData"
import { useRents } from '../../../../providers/Rent';

const MovieModal: React.FC = () => {

    const { setMovieModal, movieModal } = useTMDA()

    const close = () => setMovieModal({ active: false})

  return (
  <Modal
    close={close}
    show={movieModal.active}
  >
    <ModalContent {...movieModal.movie} close={close}/>
  </Modal>
  );
}

export default MovieModal;

interface Props extends MovieTDMA {
  close: () => void
}

const ModalContent: React.FC<Props> = ({ 
  id,
  title, 
  backdrop_path, 
  overview,
  release_date,
  close 
}) => {

  const [imgPath, setImgPath] = useState<string>()

    const validate = useCallback(async () => {
        const path = await validateImg(`https://image.tmdb.org/t/p/w500${backdrop_path}`, false)
        setImgPath(path);

    }, [])

    useEffect(() => {
        validate()
    }, [])

    const { rentNewMovie } = useRents()

    const rentMovie = useCallback(async () => {
      await rentNewMovie(Number(id))
      close();
    }, [rentNewMovie])

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
                <ButtonPrimary onClick={rentMovie}>Alugar</ButtonPrimary>
            </S.Footer>
        </S.Root>
    )
}