import React from 'react';
import ForeignNetflix from './ForeignNetflix';
import HappyMovies from './HappyMovies';
import PopularMovies from './PopularMovies';
import LatestTrailer from './LatestTrailer';
import { useSelector } from 'react-redux';
import { Section } from '../styles/GlobalStyle';

const Home = () => {
  const dark = useSelector((state) => state.darkMode.dark);

  return (
    <Section className={dark ? '' : 'dark'}>
      <PopularMovies url="/movie/popular" />
      <LatestTrailer url="/movie/popular?" />
      <ForeignNetflix url="/discover/tv?with_networks=213" />
      <HappyMovies url="/discover/movie?with_genres=35&sort_by=popularity.desc&language=ko-KR&page=1&region=KR" />
    </Section>
  );
};

export default Home;
