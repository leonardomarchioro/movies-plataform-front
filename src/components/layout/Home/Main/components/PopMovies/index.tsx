import React, { useCallback, useEffect, useState } from 'react';
import { getPopularMovies } from '../../../../../../services/moviesDatabase';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { MovieTDMA } from '../../../../../../types/Movies-TDMA';
import MovieCard from './MoviesCard';

import * as S from './styles';

const PopMovies: React.FC = () => {
    const [movies, setMovies] = useState<MovieTDMA[]>([]);

    const findPopularMovies = useCallback( async () =>{
        const data = await getPopularMovies()
        setMovies(data.results)
    
    }, [])
    useEffect(() => {
        findPopularMovies()
    }, [])

  return <S.Container>
    <S.Text>Filmes Populares</S.Text>
    <Carousel
        interval={5000}
        infiniteLoop
        autoPlay
        showThumbs={false}
        showIndicators={false}
        centerMode={true} 
        centerSlidePercentage={20}
        showStatus={false}
    >
        {movies.map((movie, i) => (
            <MovieCard movie={movie} key={i} />
        ))}
    </Carousel>
  </S.Container>;
}

export default PopMovies;