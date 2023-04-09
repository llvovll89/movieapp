import React from 'react';
import ForeignNetflix from './ForeignNetflix';
import HappyMovies from './HappyMovies';
import PopularMovies from './PopularMovies';

import { Section } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';

const Home = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  // const dark = useSelector((state) => state.darkMode.darkOn);
  // console.log(dark);
  
  return (
    <Section style={{ paddingLeft: `${sidebarWidth}px` }}>
      <PopularMovies url="/movie/popular" />
      <ForeignNetflix url="/discover/tv?with_networks=213" />
      <HappyMovies url="/discover/movie?with_genres=35&sort_by=popularity.desc&language=ko-KR&page=1&region=KR" />
    </Section>
  );
};

export default Home;
