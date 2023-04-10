import React , {useEffect} from 'react';
import ForeignNetflix from './ForeignNetflix';
import HappyMovies from './HappyMovies';
import PopularMovies from './PopularMovies';

import { Section } from '../styles/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const sidebarWidth = useSelector((state) => state.sidebar.sidebarWidth);
  const dispatch = useDispatch();
  
  return (
    <Section style={{ paddingLeft: `${window.innerWidth <= 564 ? 80 : sidebarWidth}px` }}>
      <PopularMovies url="/movie/popular" />
      <ForeignNetflix url="/discover/tv?with_networks=213" />
      <HappyMovies url="/discover/movie?with_genres=35&sort_by=popularity.desc&language=ko-KR&page=1&region=KR" />
    </Section>
  );
};

export default Home;
