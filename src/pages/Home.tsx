import React from 'react';
import Header from '../components/layout/Home/Header';
import Main from '../components/layout/Home/Main';
import { useTMDA } from '../providers/Movies';
import MovieModal from '../components/common/Modal/MovieModal';

const Home: React.FC = () => {

  return <>
    <MovieModal />
    <Header />
    <Main />
  </>;
}

export default Home;